import * as THREE from "three";
import { GLTFLoader } from "https://cdn.jsdelivr.net/npm/three@0.165.0/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "https://cdn.jsdelivr.net/npm/three@0.165.0/examples/jsm/controls/OrbitControls.js";

const COLORS = {
  neutral: new THREE.Color("#767676"),
  acceptable: new THREE.Color("#23984d"),
  unacceptable: new THREE.Color("#c23535"),
  acceptablePreview: new THREE.Color("#45d878"),
  unacceptablePreview: new THREE.Color("#f15b5b"),
  edge: new THREE.Color("#202020"),
  edgeAcceptable: new THREE.Color("#d7ffe2"),
  edgeUnacceptable: new THREE.Color("#ffe0e0"),
};
const HOVER_PREVIEW_MIX = 0.22;
const HOVER_EMISSIVE_INTENSITY = 0.06;
const BLACK = new THREE.Color("#000000");

function colorForState(state) {
  if (state === 1) return COLORS.acceptable;
  if (state === -1) return COLORS.unacceptable;
  return COLORS.neutral;
}

export class BodyMap3D {
  constructor({
    container,
    modelUrl,
    regions,
    onRegionClick,
    onRegionHover,
    onRegionLeave,
  }) {
    this.container = container;
    this.modelUrl = modelUrl;
    this.regions = new Map(regions.map(region => [region.id, region]));
    this.onRegionClick = onRegionClick;
    this.onRegionHover = onRegionHover;
    this.onRegionLeave = onRegionLeave;
    this.regionMeshes = new Map();
    this.regionStates = {};
    this.paintPreview = 1;
    this.hovered = null;
    this.pointerDown = null;
    this.raycaster = new THREE.Raycaster();
    this.pointer = new THREE.Vector2();
  }

  async init() {
    this.scene = new THREE.Scene();
    this.scene.background = null;

    this.camera = new THREE.PerspectiveCamera(42, 1, 0.01, 100);
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.container.appendChild(this.renderer.domElement);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enablePan = false;
    this.controls.enableDamping = false;
    this.controls.rotateSpeed = 0.85;
    this.controls.zoomSpeed = 0.7;
    this.controls.addEventListener("change", () => this.render());

    this.scene.add(new THREE.HemisphereLight("#ffffff", "#242424", 2.9));
    const frontLight = new THREE.DirectionalLight("#ffffff", 2.7);
    frontLight.position.set(2.5, 4, 5);
    this.scene.add(frontLight);
    const backLight = new THREE.DirectionalLight("#d9e8ff", 1.1);
    backLight.position.set(-3, 2, -4);
    this.scene.add(backLight);

    await this.loadModel();
    this.bindEvents();
    this.resizeObserver = new ResizeObserver(() => this.resize());
    this.resizeObserver.observe(this.container);
    this.resize();
    this.render();
  }

  async loadModel() {
    const loader = new GLTFLoader();
    const gltf = await loader.loadAsync(this.modelUrl);
    this.model = gltf.scene;
    this.scene.add(this.model);

    this.model.traverse(child => {
      if (!child.isMesh) return;
      const regionId = child.name;
      if (!this.regions.has(regionId)) return;

      child.userData.regionId = regionId;
      child.material = new THREE.MeshStandardMaterial({
        color: COLORS.neutral,
        roughness: 0.84,
        metalness: 0,
        emissive: "#000000",
        emissiveIntensity: 0,
      });
      child.castShadow = false;
      child.receiveShadow = false;

      const edgeMaterial = new THREE.LineBasicMaterial({
        color: COLORS.edge,
        transparent: true,
        opacity: 0.58,
        depthTest: true,
      });
      const edges = new THREE.LineSegments(
        new THREE.EdgesGeometry(child.geometry, 24),
        edgeMaterial
      );
      edges.userData.regionId = regionId;
      child.add(edges);

      this.regionMeshes.set(regionId, { mesh: child, edges, edgeMaterial });
    });

    this.fitModelToView();
  }

  fitModelToView() {
    const initialBox = new THREE.Box3().setFromObject(this.model);
    const initialSize = initialBox.getSize(new THREE.Vector3());
    const scale = initialSize.y > 0 ? 3.4 / initialSize.y : 1;
    this.model.scale.setScalar(scale);

    const scaledBox = new THREE.Box3().setFromObject(this.model);
    const center = scaledBox.getCenter(new THREE.Vector3());
    this.model.position.sub(center);

    const box = new THREE.Box3().setFromObject(this.model);
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    const fov = this.camera.fov * (Math.PI / 180);
    const distance = Math.abs(maxDim / (2 * Math.tan(fov / 2))) * 1.12;

    this.camera.position.set(0, size.y * 0.02, distance);
    this.camera.lookAt(0, 0, 0);
    this.controls.target.set(0, 0, 0);
    this.controls.minDistance = distance * 0.55;
    this.controls.maxDistance = distance * 2.2;
    this.controls.update();
  }

  bindEvents() {
    const canvas = this.renderer.domElement;
    canvas.addEventListener("pointerdown", event => {
      this.pointerDown = { x: event.clientX, y: event.clientY };
      this.container.classList.add("grabbing");
    });
    canvas.addEventListener("pointerup", event => {
      this.container.classList.remove("grabbing");
      if (!this.pointerDown) return;
      const dx = event.clientX - this.pointerDown.x;
      const dy = event.clientY - this.pointerDown.y;
      this.pointerDown = null;
      if (Math.hypot(dx, dy) > 5) return;
      const hit = this.pick(event);
      if (hit) {
        this.setHovered(null);
        this.onRegionClick?.(hit, event);
      }
    });
    canvas.addEventListener("pointermove", event => {
      if (this.pointerDown) return;
      const hit = this.pick(event);
      this.setHovered(hit, event);
    });
    canvas.addEventListener("pointerleave", () => {
      this.container.classList.remove("grabbing");
      this.pointerDown = null;
      this.setHovered(null);
    });
  }

  pick(event) {
    const rect = this.renderer.domElement.getBoundingClientRect();
    this.pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    this.pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    this.raycaster.setFromCamera(this.pointer, this.camera);
    const meshes = Array.from(this.regionMeshes.values()).map(entry => entry.mesh);
    const intersections = this.raycaster.intersectObjects(meshes, false);
    return intersections[0]?.object?.userData?.regionId || null;
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
    this.render();
  }

  setStates(nextStates) {
    this.regionStates = { ...nextStates };
    this.regionMeshes.forEach((_, regionId) => {
      this.applyRegionStyle(regionId, this.hovered === regionId);
    });
    this.render();
  }

  setPaintPreview(nextPaint) {
    this.paintPreview = nextPaint === -1 ? -1 : 1;
    if (this.hovered) {
      this.applyRegionStyle(this.hovered, true);
      this.render();
    }
  }

  applyRegionStyle(regionId, hovered = false) {
    const entry = this.regionMeshes.get(regionId);
    if (!entry) return;
    const state = this.regionStates[regionId] || 0;
    const previewColor = this.paintPreview === -1
      ? COLORS.unacceptablePreview
      : COLORS.acceptablePreview;
    const previewEdge = this.paintPreview === -1
      ? COLORS.edgeUnacceptable
      : COLORS.edgeAcceptable;
    const clearsCurrentState = state === this.paintPreview;
    const baseColor = colorForState(state);
    const hoverColor = clearsCurrentState
      ? baseColor
      : new THREE.Color().copy(COLORS.neutral).lerp(previewColor, HOVER_PREVIEW_MIX);

    entry.mesh.material.color.copy(hovered ? hoverColor : baseColor);
    entry.mesh.material.emissive.copy(hovered && !clearsCurrentState ? previewColor : BLACK);
    entry.mesh.material.emissiveIntensity = hovered && !clearsCurrentState ? HOVER_EMISSIVE_INTENSITY : 0;
    entry.edgeMaterial.color.copy(hovered && !clearsCurrentState ? previewEdge : COLORS.edge);
    entry.edgeMaterial.opacity = hovered && !clearsCurrentState ? 0.78 : 0.58;
  }

  resize() {
    const width = this.container.clientWidth;
    const height = this.container.clientHeight;
    if (!width || !height) return;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height, false);
    this.render();
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }
}
