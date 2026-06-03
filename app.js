// ============================================================
// SUPABASE
// ============================================================
const SUPABASE_URL = "https://fbcyuboctnbkjhcwdpli.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_dIJktlVfSqsPZEGNNU9BQA_i880dn2e";
const supabaseClient = window.supabase
  ? window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY)
  : null;

// ============================================================
// LANGUAGE
// ============================================================
let lang = localStorage.getItem("survey_language") || "zh";
const I18N = {
  zh: {
    appTitle:"机器人社交接触可接受性问卷",
    appSub:"机器人主动身体接触中的身体区域可接受性标注",
    consentTitle:"知情同意",
    consentDesc:"请在开始问卷前阅读以下说明。",
    consentP1:"本问卷旨在了解：当机器人主动通过身体接触传达不同社交意图时，人们对不同身体区域被触碰的接受程度。",
    consentP2:"你的回答仅用于学术研究。本问卷不会收集你的姓名或直接联系方式，你可以在提交前随时退出。",
    consentP3:"问卷涉及身体部位与社交接触判断。如果你对此感到不适，可以随时停止填写。",
    consentCheck:"我已阅读以上说明，并同意参与本研究。",
    continueBtn:"继续 →",
    backBtn:"← 返回",
    infoTitle:"基本信息",
    infoDesc:"以下信息用于理解不同参与者背景下的回答差异。",
    ageLabel:"年龄",
    genderLabel:"性别",
    nationalityLabel:"国籍",
    selectOne:"请选择",
    genderFemale:"女性",
    genderMale:"男性",
    genderNonBinary:"非二元",
    preferNot:"不愿透露",
    selfDescribe:"自我描述",
    countryChina:"中国",
    countryUK:"英国",
    countryGermany:"德国",
    countryFrance:"法国",
    countryItaly:"意大利",
    countrySpain:"西班牙",
    countryNetherlands:"荷兰",
    countrySweden:"瑞典",
    countryDenmark:"丹麦",
    countryNorway:"挪威",
    countryFinland:"芬兰",
    countryPoland:"波兰",
    countryPortugal:"葡萄牙",
    countryGreece:"希腊",
    countryOther:"其他",
    infoError:"请完整填写有效年龄、性别和国籍后继续。",
    intentTitle:"社交意图选择",
    intentDesc:"以下列出 10 类社交意图。请选择你认为机器人可以通过身体接触向人传达的意图。",
    selectAll:"全选",
    clearAll:"清空",
    mapTitle:"身体地图标注",
    mapDesc:"请为当前社交意图标注你是否愿意被机器人触碰各身体区域。",
    colorToolTitle:"颜色",
    acceptable:"愿意被触碰",
    unacceptable:"不愿意被触碰",
    neutral:"未标记",
    colorHint:"同色再次点击可取消；切换另一种颜色可覆盖。",
    currentAcceptable:"当前：愿意被触碰",
    currentUnacceptable:"当前：不愿意被触碰",
    backToIntentSelection:"返回意图选择",
    resetCurrent:"↺ 重置当前地图",
    prevIntent:"← 上一个意图",
    nextIntent:"下一个意图 →",
    reviewSubmit:"检查与提交 →",
    reviewTitle:"检查与提交",
    reviewDesc:"请检查你的回答，然后提交至研究数据库。",
    backToMaps:"← 返回地图",
    submitResponse:"提交问卷",
    backToReview:"返回检查",
    progressConsent:"知情同意",
    progressInfo:"基本信息",
    progressIntents:"选择社交意图",
    progressMap:"身体地图",
    progressReview:"检查与提交",
    progressStatus:"提交状态",
    acceptCount:"愿意",
    rejectCount:"不愿意",
    neutralCount:"中立",
    resultSubmitted:"已提交",
    resultError:"提交错误",
    submitLoading:"提交中...",
    submitDone:"已提交",
    submitFailTitle:"提交失败",
    submitFailLib:"提交组件未能加载。请检查网络后重试。",
    submitFailNetwork:"请检查网络后重试。如果问题持续出现，请联系研究团队。",
    consentRequiredTitle:"需要知情同意",
    consentRequiredMsg:"请返回开始页面并勾选知情同意后再提交。",
    thankTitle:"感谢参与",
    thankMsg:"你的回答已成功提交。"
  },
  en: {
    appTitle:"Robot Social Touch Acceptability Survey",
    appSub:"Body-region acceptability mapping for robot-initiated physical contact",
    consentTitle:"Consent",
    consentDesc:"Please read the following information before starting the survey.",
    consentP1:"This survey investigates how acceptable people find being touched on different body regions when a robot initiates physical contact to convey social intents.",
    consentP2:"Your responses will be used for academic research only. The survey does not ask for your name or direct contact information. You may stop at any time before submitting your response.",
    consentP3:"The survey involves judgments about body regions and social touch. You may stop at any time if you feel uncomfortable.",
    consentCheck:"I have read the information above and agree to participate in this study.",
    continueBtn:"Continue →",
    backBtn:"← Back",
    infoTitle:"Basic Information",
    infoDesc:"These questions help us understand participant background differences.",
    ageLabel:"Age",
    genderLabel:"Gender",
    nationalityLabel:"Nationality",
    selectOne:"Select one",
    genderFemale:"Female",
    genderMale:"Male",
    genderNonBinary:"Non-binary",
    preferNot:"Prefer not to say",
    selfDescribe:"Self-describe",
    countryChina:"China",
    countryUK:"United Kingdom",
    countryGermany:"Germany",
    countryFrance:"France",
    countryItaly:"Italy",
    countrySpain:"Spain",
    countryNetherlands:"Netherlands",
    countrySweden:"Sweden",
    countryDenmark:"Denmark",
    countryNorway:"Norway",
    countryFinland:"Finland",
    countryPoland:"Poland",
    countryPortugal:"Portugal",
    countryGreece:"Greece",
    countryOther:"Other",
    infoError:"Please complete a valid age, gender, and nationality before continuing.",
    intentTitle:"Social Intents",
    intentDesc:"Select all social intents that you believe a robot should be allowed to convey through physical touch.",
    selectAll:"Select all",
    clearAll:"Clear all",
    mapTitle:"Body Map",
    mapDesc:"For the current social intent, mark whether you are willing to be touched by the robot on each body region.",
    colorToolTitle:"Color",
    acceptable:"Acceptable",
    unacceptable:"Unacceptable",
    neutral:"Unmarked",
    colorHint:"Click the same color again to clear a region; switching color overwrites the previous mark.",
    currentAcceptable:"Current: Acceptable",
    currentUnacceptable:"Current: Unacceptable",
    backToIntentSelection:"Back to intent selection",
    resetCurrent:"↺ Reset current map",
    prevIntent:"← Previous intent",
    nextIntent:"Next intent →",
    reviewSubmit:"Review & Submit →",
    reviewTitle:"Review & Submit",
    reviewDesc:"Check your responses, then submit them to the research database.",
    backToMaps:"← Back to maps",
    submitResponse:"Submit response",
    backToReview:"Back to review",
    progressConsent:"Consent",
    progressInfo:"Basic information",
    progressIntents:"Select social intents",
    progressMap:"Body map",
    progressReview:"Review & Submit",
    progressStatus:"Submission status",
    acceptCount:"Accept",
    rejectCount:"Reject",
    neutralCount:"Neutral",
    resultSubmitted:"Response submitted",
    resultError:"Submission error",
    submitLoading:"Submitting...",
    submitDone:"Submitted",
    submitFailTitle:"Your response was not submitted.",
    submitFailLib:"The submission library did not load. Please check your connection and try again.",
    submitFailNetwork:"Please check your connection and try again. If the problem continues, contact the research team.",
    consentRequiredTitle:"Consent is required.",
    consentRequiredMsg:"Please go back to the start page and confirm consent before submitting.",
    thankTitle:"Thank you for taking part.",
    thankMsg:"Your response has been successfully submitted."
  }
};
function t(key) { return I18N[lang][key] || I18N.zh[key] || key; }
function setLang(nextLang) {
  lang = nextLang;
  localStorage.setItem("survey_language", lang);
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.getElementById("langZh").classList.toggle("active", lang === "zh");
  document.getElementById("langEn").classList.toggle("active", lang === "en");
  document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.getElementById("btnToMapsText").textContent = t("continueBtn");
  r1();
  syncIntentSelectionUI();
  setPaint(paint);
  if (document.getElementById("s2").classList.contains("active")) load();
  if (document.getElementById("s3").classList.contains("active")) r3();
  prog();
}

// ============================================================
// INTENTS
// ============================================================
const INTENTS = [
  { id:"affection", zh:"亲昵/喜爱", en:"Affection", desc:{ zh:"表达温暖、喜爱或亲近感。", en:"Expressing warmth, fondness, or closeness." } },
  { id:"comfort", zh:"安慰/安抚", en:"Comfort", desc:{ zh:"在压力、悲伤或不安时提供情感支持与安抚。", en:"Providing emotional support and reassurance during distress." } },
  { id:"salutation", zh:"问候/致意", en:"Salutation", desc:{ zh:"在相遇、离开或建立互动时表达礼貌性社交连接。", en:"Marking greeting, departure, or polite social connection." } },
  { id:"appreciation", zh:"欣赏/赞扬", en:"Appreciation", desc:{ zh:"表达认可、赞赏或对他人表现的积极评价。", en:"Expressing recognition, praise, or positive evaluation." } },
  { id:"encouragement", zh:"鼓励/激励", en:"Encouragement", desc:{ zh:"帮助对方建立信心、继续行动或面对挑战。", en:"Supporting confidence, persistence, or coping with challenges." } },
  { id:"inclusion", zh:"归属/团结", en:"Inclusion", desc:{ zh:"表达共同体感、团结感或“你属于这里”的信号。", en:"Signaling togetherness, belonging, or group inclusion." } },
  { id:"emphasis", zh:"强调/获取注意", en:"Emphasis", desc:{ zh:"突出正在发生的交流内容，或引导对方注意。", en:"Highlighting communication or directing attention." } },
  { id:"gratitude", zh:"感谢/感激", en:"Gratitude", desc:{ zh:"表达感谢、感激或对他人帮助的正向回应。", en:"Expressing thanks, gratitude, or positive response to help." } },
  { id:"playful", zh:"嬉戏/玩闹", en:"Playful", desc:{ zh:"表达轻松、幽默、亲切的玩笑式互动氛围。", en:"Expressing lighthearted, humorous, or playful interaction." } },
  { id:"dominance", zh:"支配/权力展示", en:"Dominance", desc:{ zh:"表达权威、控制、地位差异或使对方服从的意图。", en:"Expressing authority, control, status difference, or compliance pressure." } },
];

// ============================================================
// SVG BODY MAP — COORDINATE SYSTEM 220 × 540
// ============================================================
// CRITICAL: large regions (face, torso) come FIRST, small overlays
// (eyes, nose, mouth, ears) come AFTER so they render on top.
// Bilateral regions: clicking either side rates both sides.

// --- FRONT regions (order matters: base → overlays) ---

// Layer 1: Base regions
const F_BASE = [
  { id:"f_scalp",       label:"头顶 / Scalp",             poly:[[85,10],[137,10],[146,34],[80,34]] },
  { id:"f_face",        label:"面部 / Face",               poly:[[76,36],[148,36],[150,72],[140,88],[82,88],[72,72]] },
  { id:"f_neck",        label:"颈部 / Neck",              poly:[[84,88],[138,88],[138,104],[84,104]] },
  { id:"f_shoulders",   label:"肩部 / Shoulders",         poly:[[46,108],[88,108],[88,124],[58,134],[44,130]],
                                                          polyR:[[134,108],[176,108],[178,130],[164,134],[134,124]] },
  { id:"f_upper_arms",  label:"上臂 / Upper Arms",        poly:[[22,130],[60,130],[58,186],[40,200],[18,189]],
                                                          polyR:[[162,130],[200,130],[204,189],[182,200],[162,186]] },
  { id:"f_forearms",    label:"前臂 / Forearms",          poly:[[20,192],[58,192],[56,244],[38,256],[14,246]],
                                                          polyR:[[164,192],[202,192],[208,246],[184,256],[164,244]] },
  { id:"f_palms",       label:"手掌 / Palms",             poly:[[18,248],[56,248],[54,272],[40,280],[12,272]],
                                                          polyR:[[166,248],[204,248],[210,272],[182,280],[166,272]] },
  { id:"f_fingers",     label:"手指 / Fingers",           poly:[[22,278],[48,278],[46,294],[34,300],[18,294]],
                                                          polyR:[[174,278],[200,278],[204,294],[188,300],[174,294]] },
  { id:"f_chest",       label:"胸部 / Chest",              poly:[[60,132],[162,132],[162,204],[132,218],[90,218],[60,204]] },
  { id:"f_stomach",     label:"腹部 / Abdomen",            poly:[[64,208],[158,208],[158,286],[120,302],[102,302],[64,286]] },
  { id:"f_private",     label:"私密区域 / Private Area",   poly:[[72,292],[150,292],[150,322],[112,330],[72,322]] },
  { id:"f_thighs",      label:"大腿 / Thighs",             poly:[[54,326],[102,326],[102,420],[72,430],[46,424],[46,332]],
                                                          polyR:[[120,326],[168,326],[176,424],[150,430],[120,420]] },
  { id:"f_knees",       label:"膝盖 / Knees",             poly:[[50,426],[78,426],[76,446],[58,450],[44,446]],
                                                          polyR:[[144,426],[172,426],[178,446],[164,450],[148,446]] },
  { id:"f_calves",      label:"小腿 / Calves",             poly:[[44,450],[84,450],[84,490],[66,498],[38,492],[38,456]],
                                                          polyR:[[148,450],[178,450],[184,490],[156,498],[138,492],[138,456]] },
  { id:"f_feet",        label:"足部 / Feet",               poly:[[40,494],[74,494],[76,530],[58,538],[34,532],[36,500]],
                                                          polyR:[[148,494],[182,494],[188,532],[164,538],[148,530]] },
];

const F_REGIONS = F_BASE;

// --- BACK regions ---
const B_BASE = [
  { id:"b_head",           label:"后脑 / Back of Head",          poly:[[78,8],[144,8],[144,68],[78,68]] },
  { id:"b_neck",           label:"后颈 / Back of Neck",          poly:[[90,72],[132,72],[132,106],[90,106]] },
  { id:"b_rear_shoulders", label:"后肩部 / Rear Shoulders",      poly:[[50,112],[172,112],[172,180],[50,180]] },
  { id:"b_back",           label:"背部 / Back",                  poly:[[54,186],[168,186],[168,290],[54,290]] },
  { id:"b_buttocks",       label:"臀部 / Buttocks",              poly:[[56,296],[166,296],[166,346],[132,358],[90,358],[56,346]] },
  { id:"b_thighs",         label:"大腿后侧 / Back of Thighs",    poly:[[48,352],[102,352],[102,450],[74,456],[44,450]],
                                                                 polyR:[[120,352],[174,352],[178,450],[148,456],[120,450]] },
  { id:"b_lower_legs",     label:"小腿+足部 / Calves & Feet",    poly:[[44,454],[86,454],[84,540],[62,542],[38,540],[40,460]],
                                                                 polyR:[[138,454],[178,454],[184,540],[160,542],[138,540]] },
];

const B_REGIONS = B_BASE;

// Combined metadata
const ALL_REGIONS = [
  ...F_REGIONS.map(r => ({ id:r.id, label:r.label.split(" / ")[0], side:"front" })),
  ...B_REGIONS.map(r => ({ id:r.id, label:r.label.split(" / ")[0], side:"back" })),
];

// ============================================================
// SVG OUTLINE PATHS
// ============================================================
const OUTLINE_F = "M90,12 C78,12 70,20 70,38 C70,60 74,74 82,82 L88,86 L88,100 C72,102 48,106 32,118 C22,128 24,154 26,180 C27,200 24,226 24,248 C24,268 26,286 30,312 C32,342 30,366 28,380 L28,380 C50,372 78,364 102,360 L120,360 C144,364 172,372 194,380 L194,380 C192,366 190,342 192,312 C196,286 198,268 198,248 C198,226 195,200 196,180 C198,154 200,128 190,118 C174,106 150,102 134,100 L134,86 L140,82 C148,74 152,60 152,38 C152,22 144,12 132,12 Z";
const OUTLINE_B = "M90,8 C78,8 70,16 72,34 C74,54 78,70 82,80 L88,84 L88,96 C72,98 48,104 38,116 C32,124 34,156 34,188 C34,228 32,260 34,290 C34,320 36,344 36,360 L36,360 C56,352 80,344 102,340 L120,340 C142,344 166,352 186,360 L186,360 C186,344 188,320 188,290 C190,260 188,228 188,188 C188,156 190,124 184,116 C174,104 150,98 134,96 L134,84 L140,80 C148,72 150,54 150,34 C150,16 142,8 132,8 Z M38,366 L38,366 C56,362 78,358 100,354 L122,354 C144,358 166,362 184,366 L186,404 C188,454 186,494 184,536 C162,530 142,526 122,524 L100,524 C80,526 60,530 38,536 C36,494 34,454 36,404 Z";

// ============================================================
// UTIL
// ============================================================
function polyD(pts) { return "M" + pts.map(p => p.join(",")).join("L") + "Z"; }

// ============================================================
// STATE
// ============================================================
let sel = new Set();
let order = [];
let idx = 0;
let data = {};
let cur = {};
let paint = 1;
let demographics = {};
const total = ALL_REGIONS.length;

function showStep(id) {
  document.querySelectorAll(".step").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  prog();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function updConsent() {
  document.getElementById("btnConsent").disabled = !document.getElementById("consentBox").checked;
}
function goInfo() { showStep("sInfo"); }
function goIntents() {
  if (!validateInfo()) return;
  demographics = {
    age: document.getElementById("age").value.trim(),
    gender: document.getElementById("gender").value,
    nationality: document.getElementById("nationality").value,
  };
  showStep("s1");
}
function validateInfo() {
  const age = document.getElementById("age").value.trim();
  const gender = document.getElementById("gender").value;
  const nationality = document.getElementById("nationality").value;
  const validAge = age !== "" && Number(age) >= 18 && Number(age) <= 100;
  const checks = [
    ["fieldAge", validAge],
    ["fieldGender", !!gender],
    ["fieldNationality", !!nationality],
  ];
  checks.forEach(([id, ok]) => document.getElementById(id).classList.toggle("invalid", !ok));
  const ok = checks.every(([, passed]) => passed);
  document.getElementById("infoError").classList.toggle("show", !ok);
  return ok;
}
function setPaint(v) {
  paint = v;
  document.getElementById("bucketAccept").classList.toggle("active", v === 1);
  document.getElementById("bucketReject").classList.toggle("active", v === -1);
  document.getElementById("currentTool").textContent =
    v === 1 ? t("currentAcceptable") : t("currentUnacceptable");
}

// ============================================================
// STEP 1
// ============================================================
function r1() {
  document.getElementById("intentGrid").innerHTML = INTENTS.map(i => `
    <div class="intent-card" id="c-${i.id}" onclick="tog('${i.id}')">
      <div class="dot"></div>
      <div class="name">${lang === "zh" ? i.zh : i.en}</div>
      <div class="desc">${i.desc[lang]}</div>
    </div>`).join("");
}
function syncIntentSelectionUI() {
  INTENTS.forEach(i => {
    const c = document.getElementById("c-"+i.id);
    if (c) c.classList.toggle("sel", sel.has(i.id));
  });
  updBtn();
}
function tog(id) {
  sel.has(id) ? sel.delete(id) : sel.add(id);
  document.getElementById("c-"+id).classList.toggle("sel");
  updBtn();
}
function selAll(v) {
  INTENTS.forEach(i => {
    v ? sel.add(i.id) : sel.delete(i.id);
    const c = document.getElementById("c-"+i.id);
    if (c) v ? c.classList.add("sel") : c.classList.remove("sel");
  });
  updBtn();
}
function updBtn() {
  const b = document.getElementById("btnToMaps");
  b.disabled = sel.size === 0;
  document.getElementById("selCount").textContent = sel.size;
  document.getElementById("btnToMapsText").textContent = t("continueBtn");
}

// ============================================================
// DRAW SVG (base regions first, overlays after → overlays on top)
// ============================================================
function drawSVG(svgId, regions, outlinePath) {
  const svg = document.getElementById(svgId);
  svg.innerHTML = "";

  // Outline
  const op = document.createElementNS("http://www.w3.org/2000/svg","path");
  op.setAttribute("d", outlinePath);
  op.setAttribute("class","silhouette");
  svg.appendChild(op);

  // Render regions
  regions.forEach(r => {
    const polys = r.polyR ? [r.poly, r.polyR] : [r.poly];
    polys.forEach(pts => {
      const shape = document.createElementNS("http://www.w3.org/2000/svg","path");
      shape.setAttribute("d", polyD(pts));
      shape.setAttribute("data-rid", r.id);
      shape.setAttribute("data-bilateral", r.polyR ? "1" : "0");
      shape.setAttribute("class", "region s0");

      const t = document.createElementNS("http://www.w3.org/2000/svg","title");
      t.textContent = r.label;
      shape.appendChild(t);

      // Events
      shape.addEventListener("mouseenter", (e) => {
        showTT(r.label, e);
        if (r.polyR) highlightPair(svgId, r.id, true);
      });
      shape.addEventListener("mouseleave", () => {
        hideTT();
        if (r.polyR) highlightPair(svgId, r.id, false);
      });
      shape.addEventListener("mousedown", (e) => {
        e.preventDefault();
      });

      // CLICK → apply current paint bucket.
      // States: 1=acceptable, 0=neutral/no intention, -1=unacceptable.
      shape.addEventListener("click", (e) => {
        e.preventDefault();
        cur[r.id] = (cur[r.id] === paint) ? 0 : paint;
        updCol();
      });

      svg.appendChild(shape);
    });
  });
}

function highlightPair(svgId, rid, on) {
  document.getElementById(svgId).querySelectorAll(`[data-rid="${rid}"]`).forEach(el => {
    el.classList.toggle("hover-pair", on);
  });
}

// ============================================================
// COLOR
// ============================================================
function stateClass(v) {
  // v: 1=acceptable, 0=neutral/no intention, -1=unacceptable
  if (v === 0)  return "s0";
  if (v === 1)  return "sp1";
  if (v === -1) return "sn1";
  return "s0";
}
function updCol() {
  ["svgF","svgB"].forEach(id => {
    document.getElementById(id).querySelectorAll(".region").forEach(el => {
      const rid = el.getAttribute("data-rid");
      el.setAttribute("class", `region ${stateClass(cur[rid] || 0)}`);
    });
  });
}

// ============================================================
// TOOLTIP  (minimal: just the label as-is from region definition)
// ============================================================
function showTT(text, e) {
  const tt = document.getElementById("tooltip");
  tt.textContent = text;
  tt.style.display = "block";
  tt.style.left = (e.clientX + 14) + "px";
  tt.style.top = (e.clientY - 30) + "px";
}
function hideTT() { document.getElementById("tooltip").style.display = "none"; }

// ============================================================
// NAVIGATION
// ============================================================
function goMaps() {
  order = [...sel];
  if (order.length === 0) return;
  order.forEach(id => { if (!(id in data)) data[id] = {}; });
  idx = 0;
  showStep("s2");
  drawSVG("svgF", F_REGIONS, OUTLINE_F);
  drawSVG("svgB", B_REGIONS, OUTLINE_B);
  load();
}
function load() {
  const id = order[idx];
  const it = INTENTS.find(i => i.id === id);
  document.getElementById("mapIntentName").textContent = lang === "zh" ? it.zh : it.en;
  document.getElementById("mapIntentDesc").textContent = it.desc[lang];
  document.getElementById("counter").textContent = `${idx+1} / ${order.length}`;
  cur = { ...(data[id] || {}) };
  updCol();
  document.getElementById("btnPrevMap").textContent = t("prevIntent");
  document.getElementById("btnPrevMap").disabled = idx === 0;
  document.getElementById("btnNext").textContent = t("nextIntent");
  document.getElementById("btnDone").textContent = t("reviewSubmit");
  document.getElementById("btnNext").style.display = idx < order.length-1 ? "" : "none";
  document.getElementById("btnDone").style.display = idx === order.length-1 ? "" : "none";
  prog();
}
function save() { data[order[idx]] = { ...cur }; }
function next() { save(); if (idx < order.length-1) { idx++; load(); } }
function prev() { save(); if (idx > 0) { idx--; load(); } }
function backToIntentSelection() { save(); showStep("s1"); }
function resetCur() { cur = {}; updCol(); }
function done() {
  save();
  showStep("s3");
  r3();
}
function back() {
  showStep("s2");
  load();
}
function prog() {
  const f = document.getElementById("pFill"); const textEl = document.getElementById("pText");
  if (document.getElementById("s0").classList.contains("active")) { f.style.width="8%"; textEl.textContent=t("progressConsent"); }
  else if (document.getElementById("sInfo").classList.contains("active")) { f.style.width="20%"; textEl.textContent=t("progressInfo"); }
  else if (document.getElementById("s1").classList.contains("active")) { f.style.width="35%"; textEl.textContent=t("progressIntents"); }
  else if (document.getElementById("s2").classList.contains("active")) {
    const pct = 35 + Math.round((idx+1)/order.length * 50);
    f.style.width=pct+"%"; textEl.textContent=`${t("progressMap")} ${idx+1}/${order.length}`;
  }
  else if (document.getElementById("s3").classList.contains("active")) { f.style.width="95%"; textEl.textContent=t("progressReview"); }
  else { f.style.width="100%"; textEl.textContent=t("progressStatus"); }
}

// ============================================================
// STEP 3
// ============================================================
function r3() {
  document.getElementById("revGrid").innerHTML = order.map(id => {
    const it = INTENTS.find(i => i.id === id);
    const d = data[id] || {};
    const entries = Object.entries(d);
    const accept = entries.filter(([,v]) => v === 1).length;
    const reject = entries.filter(([,v]) => v === -1).length;
    const neutral = total - accept - reject;
    return `<div class="rev-card">
      <div class="r-name">${lang === "zh" ? it.zh : it.en}</div>
      <div class="r-stats">
        ${t("acceptCount")}: ${accept} &nbsp;|&nbsp; ${t("rejectCount")}: ${reject} &nbsp;|&nbsp; ${t("neutralCount")}: ${neutral}
      </div></div>`;
  }).join("");
}
function getParticipantId() {
  let id = localStorage.getItem("participant_id");
  if (!id) {
    id = crypto.randomUUID ? crypto.randomUUID() : fallbackUuid();
    localStorage.setItem("participant_id", id);
  }
  return id;
}

function fallbackUuid() {
  const h = n => Array.from({ length: n }, () => Math.floor(Math.random() * 16).toString(16)).join("");
  return `${h(8)}-${h(4)}-4${h(3)}-${(8 + Math.floor(Math.random() * 4)).toString(16)}${h(3)}-${h(12)}`;
}

function fieldVal(id) {
  const el = document.getElementById(id);
  return el && el.value ? el.value.trim() : null;
}

function normalizedBodyData() {
  const out = {};
  order.forEach(intentId => {
    out[intentId] = {};
    ALL_REGIONS.forEach(region => {
      out[intentId][region.id] = data[intentId]?.[region.id] ?? 0;
    });
  });
  return out;
}

function selectedIntentPayload() {
  return order.map(id => {
    const it = INTENTS.find(i => i.id === id);
    return { id, zh:it.zh, en:it.en };
  });
}

function regionsPayload() {
  return ALL_REGIONS.map(r => ({ id:r.id, label:r.label, side:r.side }));
}

function buildSurveyPayload() {
  save();
  return {
    participant_id: getParticipantId(),
    timestamp: new Date().toISOString(),
    study_version: "2.0",
    consent_version: "2026-06-01",
    consent_given: document.getElementById("consentBox")?.checked || false,
    language: lang,
    age_group: fieldVal("age"),
    country: fieldVal("nationality"),
    gender: fieldVal("gender"),
    scaleDescription: "1=Acceptable / willing to be touched, 0=Neutral or no intention (default), -1=Unacceptable / unwilling to be touched",
    selected_intents: selectedIntentPayload(),
    body_data: normalizedBodyData(),
    regions: regionsPayload(),
    metadata: {
      demographics,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || null,
      viewport: { width: window.innerWidth, height: window.innerHeight },
      source: "bodymap_questionnaire_v3_static_html"
    }
  };
}

function showSubmissionResult(ok, title, message) {
  const panel = document.getElementById("resultPanel");
  panel.className = `result-panel ${ok ? "ok" : "err"}`;
  document.getElementById("resultKicker").textContent = ok ? t("resultSubmitted") : t("resultError");
  document.getElementById("resultTitle").textContent = title;
  document.getElementById("resultMessage").textContent = message;
  document.getElementById("btnRetry").style.display = ok ? "none" : "";
  showStep("s4");
}

function backToReview() {
  const btn = document.getElementById("btnSubmit");
  btn.disabled = false;
  btn.textContent = t("submitResponse");
  showStep("s3");
}

async function submitToSupabase() {
  const btn = document.getElementById("btnSubmit");
  const payload = buildSurveyPayload();

  if (!supabaseClient) {
    showSubmissionResult(
      false,
      t("submitFailTitle"),
      t("submitFailLib")
    );
    return;
  }

  if (!payload.consent_given) {
    showSubmissionResult(
      false,
      t("consentRequiredTitle"),
      t("consentRequiredMsg")
    );
    return;
  }

  btn.disabled = true;
  btn.textContent = t("submitLoading");

  const { error } = await supabaseClient
    .from("survey_responses")
    .insert({
      participant_id: payload.participant_id,
      study_version: payload.study_version,
      consent_version: payload.consent_version,
      consent_given: payload.consent_given,
      language: payload.language,
      age_group: payload.age_group,
      country: payload.country,
      gender: payload.gender,
      selected_intents: payload.selected_intents,
      body_data: payload.body_data,
      regions: payload.regions,
      metadata: payload.metadata
    });

  if (error) {
    console.error(error);
    btn.disabled = false;
    btn.textContent = t("submitResponse");
    showSubmissionResult(
      false,
      t("submitFailTitle"),
      t("submitFailNetwork")
    );
    return;
  }

  localStorage.setItem("survey_submitted", "1");
  btn.textContent = t("submitDone");
  showSubmissionResult(
    true,
    t("thankTitle"),
    t("thankMsg")
  );
}

// ============================================================
// INIT
// ============================================================
r1(); updBtn(); setLang(lang); prog();
