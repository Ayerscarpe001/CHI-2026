const COLORS = {
  neutral: "#d8d8d8",
  acceptable: "#23984d",
  unacceptable: "#c23535",
  acceptablePreview: "#45d878",
  unacceptablePreview: "#f15b5b",
  stroke: "#202020",
  hoverStrokeAcceptable: "#1fc764",
  hoverStrokeUnacceptable: "#dc3d3d",
};

const SELECTED_OPACITY = "0.9";
const NEUTRAL_OPACITY = "0.78";
const PREVIEW_OPACITY = "0.38";
const ARTBOARD_OPACITY = "0.94";

const REGION_ALIASES = new Map([
  ["back_of_thighs_2", "back_of_thighs"],
  ["back_of_lower_left_legs", "back_of_lower_legs"],
  ["back_of_lower_right_legs", "back_of_lower_legs"],
]);

function colorForState(state) {
  if (state === 1) return COLORS.acceptable;
  if (state === -1) return COLORS.unacceptable;
  return COLORS.neutral;
}

function opacityForState(state) {
  return state === 1 || state === -1 ? SELECTED_OPACITY : NEUTRAL_OPACITY;
}

function normalizeId(id) {
  return REGION_ALIASES.get(id) || id;
}

export class BodyMapSVG {
  constructor({
    container,
    svgUrl,
    regions,
    onRegionClick,
    onRegionHover,
    onRegionLeave,
  }) {
    this.container = container;
    this.svgUrl = svgUrl;
    this.regions = new Map(regions.map(region => [region.id, region]));
    this.onRegionClick = onRegionClick;
    this.onRegionHover = onRegionHover;
    this.onRegionLeave = onRegionLeave;
    this.regionElements = new Map();
    this.elementRegionIds = new WeakMap();
    this.regionStates = {};
    this.paintPreview = 1;
    this.hovered = null;
  }

  async init() {
    const response = await fetch(this.svgUrl);
    if (!response.ok) throw new Error(`Failed to load SVG body map: ${response.status}`);

    const source = await response.text();
    const doc = new DOMParser().parseFromString(source, "image/svg+xml");
    const parseError = doc.querySelector("parsererror");
    if (parseError) throw new Error("Invalid SVG body map");

    this.svg = doc.documentElement;
    this.svg.removeAttribute("width");
    this.svg.removeAttribute("height");
    this.svg.setAttribute("role", "img");
    this.svg.setAttribute("aria-label", "Body map");
    this.svg.classList.add("body-map-svg-artwork");
    this.prepareArtworkSurface();

    this.container.replaceChildren(this.svg);
    this.prepareRegions();
    this.bindEvents();
    this.setStates(this.regionStates);
  }

  prepareRegions() {
    const bodyShape = this.svg.querySelector("#body_shape");
    if (bodyShape) {
      bodyShape.style.pointerEvents = "none";
    }

    const selectable = this.svg.querySelectorAll("path, polygon, polyline, circle, ellipse, rect");
    selectable.forEach(element => {
      if (bodyShape?.contains(element)) return;

      const regionId = this.regionIdForElement(element);
      if (!regionId) return;

      element.dataset.regionId = regionId;
      element.style.pointerEvents = "visiblePainted";
      element.style.cursor = "pointer";
      element.style.transition = "fill 0.12s ease, fill-opacity 0.12s ease, stroke 0.12s ease, stroke-width 0.12s ease";
      this.elementRegionIds.set(element, regionId);

      if (!this.regionElements.has(regionId)) this.regionElements.set(regionId, []);
      this.regionElements.get(regionId).push(element);
    });
  }

  prepareArtworkSurface() {
    const background = Array.from(this.svg.children).find(child => child.tagName.toLowerCase() === "rect");
    if (!background) return;
    background.setAttribute("fill", "#eeeeee");
    background.setAttribute("fill-opacity", ARTBOARD_OPACITY);
    background.style.pointerEvents = "none";
  }

  regionIdForElement(element) {
    let current = element;
    while (current && current !== this.svg) {
      const id = normalizeId(current.id);
      if (this.regions.has(id)) return id;
      current = current.parentElement;
    }
    return null;
  }

  bindEvents() {
    this.svg.addEventListener("click", event => {
      const regionId = this.regionIdFromEvent(event);
      if (!regionId) return;
      this.setHovered(null);
      this.onRegionClick?.(regionId, event);
    });

    this.svg.addEventListener("mousemove", event => {
      const regionId = this.regionIdFromEvent(event);
      this.setHovered(regionId, event);
    });

    this.svg.addEventListener("mouseleave", () => {
      this.setHovered(null);
    });
  }

  regionIdFromEvent(event) {
    let current = event.target;
    while (current && current !== this.svg) {
      const regionId = this.elementRegionIds.get(current);
      if (regionId) return regionId;
      current = current.parentElement;
    }
    return null;
  }

  setHovered(regionId, event) {
    if (this.hovered === regionId) {
      if (regionId && event) this.onRegionHover?.(regionId, event);
      return;
    }

    const previous = this.hovered;
    this.hovered = regionId;
    if (previous) this.applyRegionStyle(previous);
    if (regionId) {
      this.applyRegionStyle(regionId, true);
      if (event) this.onRegionHover?.(regionId, event);
    } else {
      this.onRegionLeave?.();
    }
  }

  setStates(nextStates) {
    this.regionStates = { ...nextStates };
    this.regionElements.forEach((_, regionId) => {
      this.applyRegionStyle(regionId, this.hovered === regionId);
    });
  }

  setPaintPreview(nextPaint) {
    this.paintPreview = nextPaint === -1 ? -1 : 1;
    if (this.hovered) this.applyRegionStyle(this.hovered, true);
  }

  applyRegionStyle(regionId, hovered = false) {
    const elements = this.regionElements.get(regionId);
    if (!elements) return;

    const state = this.regionStates[regionId] || 0;
    const clearsCurrentState = hovered && state === this.paintPreview;
    const previewColor = this.paintPreview === -1
      ? COLORS.unacceptablePreview
      : COLORS.acceptablePreview;
    const previewStroke = this.paintPreview === -1
      ? COLORS.hoverStrokeUnacceptable
      : COLORS.hoverStrokeAcceptable;
    const fill = hovered && !clearsCurrentState ? previewColor : colorForState(state);
    const fillOpacity = hovered && !clearsCurrentState ? PREVIEW_OPACITY : opacityForState(state);
    const stroke = hovered && !clearsCurrentState ? previewStroke : COLORS.stroke;
    const strokeWidth = hovered && !clearsCurrentState ? "2.8" : null;

    elements.forEach(element => {
      element.style.fill = fill;
      element.style.fillOpacity = fillOpacity;
      element.style.stroke = stroke;
      if (strokeWidth) {
        if (element.dataset.previousStrokeWidth === undefined) {
          element.dataset.previousStrokeWidth = element.style.strokeWidth || element.getAttribute("stroke-width") || "";
        }
        element.style.strokeWidth = strokeWidth;
      } else if (element.dataset.previousStrokeWidth !== undefined) {
        element.style.strokeWidth = element.dataset.previousStrokeWidth;
        delete element.dataset.previousStrokeWidth;
      }
    });
  }
}
