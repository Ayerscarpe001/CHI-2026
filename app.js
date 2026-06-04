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
    agePlaceholder:"请填写阿拉伯数字",
    genderLabel:"性别",
    nationalityLabel:"国籍",
    selectOne:"请选择",
    genderFemale:"女性",
    genderMale:"男性",
    genderOther:"其他",
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
    intentDesc:"以下列出 16 类社交意图。请选择你认为机器人可以通过身体接触向人传达的意图。",
    selectAll:"全选",
    clearAll:"清空",
    mapTitle:"身体地图标注",
    colorToolTitle:"颜色",
    acceptable:"愿意被触碰",
    unacceptable:"不愿意被触碰",
    neutral:"无意向",
    colorHint:"同色再次点击可取消；切换另一种颜色可覆盖。",
    currentAcceptable:"当前：愿意被触碰",
    currentUnacceptable:"当前：不愿意被触碰",
    backToIntentPrefix:"返回",
    intentSelectionNoun:"意图选择",
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
    neutralCount:"无意向",
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
    agePlaceholder:"Enter numerals only",
    genderLabel:"Gender",
    nationalityLabel:"Nationality",
    selectOne:"Select one",
    genderFemale:"Female",
    genderMale:"Male",
    genderOther:"Other",
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
    intentDesc:"The following list contains 16 social intents. Select all intents that you believe a robot should be allowed to convey through physical touch.",
    selectAll:"Select all",
    clearAll:"Clear all",
    mapTitle:"Body Map",
    colorToolTitle:"Color",
    acceptable:"Acceptable",
    unacceptable:"Unacceptable",
    neutral:"Neutral",
    colorHint:"Click the same color again to clear a region; switching color overwrites the previous mark.",
    currentAcceptable:"Current: Acceptable",
    currentUnacceptable:"Current: Unacceptable",
    backToIntentPrefix:"Back to",
    intentSelectionNoun:"intent selection",
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
const COUNTRY_CODES = [
  "AF","AX","AL","DZ","AS","AD","AO","AI","AQ","AG","AR","AM","AW","AU","AT","AZ",
  "BS","BH","BD","BB","BY","BE","BZ","BJ","BM","BT","BO","BQ","BA","BW","BV","BR",
  "IO","BN","BG","BF","BI","CV","KH","CM","CA","KY","CF","TD","CL","CN","CX","CC",
  "CO","KM","CG","CD","CK","CR","CI","HR","CU","CW","CY","CZ","DK","DJ","DM","DO",
  "EC","EG","SV","GQ","ER","EE","SZ","ET","FK","FO","FJ","FI","FR","GF","PF","TF",
  "GA","GM","GE","DE","GH","GI","GR","GL","GD","GP","GU","GT","GG","GN","GW","GY",
  "HT","HM","VA","HN","HK","HU","IS","IN","ID","IR","IQ","IE","IM","IL","IT","JM",
  "JP","JE","JO","KZ","KE","KI","KP","KR","KW","KG","LA","LV","LB","LS","LR","LY",
  "LI","LT","LU","MO","MG","MW","MY","MV","ML","MT","MH","MQ","MR","MU","YT","MX",
  "FM","MD","MC","MN","ME","MS","MA","MZ","MM","NA","NR","NP","NL","NC","NZ","NI",
  "NE","NG","NU","NF","MK","MP","NO","OM","PK","PW","PS","PA","PG","PY","PE","PH",
  "PN","PL","PT","PR","QA","RE","RO","RU","RW","BL","SH","KN","LC","MF","PM","VC",
  "WS","SM","ST","SA","SN","RS","SC","SL","SG","SX","SK","SI","SB","SO","ZA","GS",
  "SS","ES","LK","SD","SR","SJ","SE","CH","SY","TW","TJ","TZ","TH","TL","TG","TK",
  "TO","TT","TN","TR","TM","TC","TV","UG","UA","AE","GB","US","UM","UY","UZ","VU",
  "VE","VN","VG","VI","WF","EH","YE","ZM","ZW"
];

function t(key) { return I18N[lang][key] || I18N.zh[key] || key; }
function countryName(code) {
  try {
    return new Intl.DisplayNames([lang === "zh" ? "zh-CN" : "en"], { type: "region" }).of(code) || code;
  } catch {
    return code;
  }
}
function renderCountryOptions() {
  const select = document.getElementById("nationality");
  if (!select) return;
  const current = select.value;
  const options = COUNTRY_CODES
    .map(code => ({ code, label: countryName(code) }))
    .sort((a, b) => a.label.localeCompare(b.label, lang === "zh" ? "zh-CN" : "en"))
    .map(({ code, label }) => `<option value="${code}">${label}</option>`)
    .join("");
  select.innerHTML = `<option value="">${t("selectOne")}</option>${options}`;
  if (current) select.value = current;
}
function setLang(nextLang) {
  lang = nextLang;
  localStorage.setItem("survey_language", lang);
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.getElementById("langZh").classList.toggle("active", lang === "zh");
  document.getElementById("langEn").classList.toggle("active", lang === "en");
  document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.getElementById("age").placeholder = t("agePlaceholder");
  renderCountryOptions();
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
  { id:"comfort", zh:"安慰", en:"Comfort", desc:{ zh:"在接收者悲伤、压力、焦虑或脆弱时，通过触碰传达关心、安抚和情感支持，使其感到被理解和被支持。", en:"Touch intended to convey care, soothing, and emotional support when the recipient is sad, stressed, anxious, or vulnerable, helping them feel understood and supported." } },
  { id:"calming", zh:"冷静", en:"Calming", desc:{ zh:"在接收者紧张、激动、害怕或高唤醒时，通过触碰帮助其平复情绪、降低紧张并恢复稳定。", en:"Touch intended to help the recipient settle down, reduce tension, and regain emotional stability when they are tense, agitated, afraid, or highly aroused." } },
  { id:"affection", zh:"亲近", en:"Affection", desc:{ zh:"通过触碰表达喜爱、亲近、温柔、依赖、信任或情感上的亲密感。", en:"Touch intended to express fondness, closeness, tenderness, attachment, trust, or emotional affection." } },
  { id:"salutation", zh:"问候", en:"Salutation", desc:{ zh:"在互动开始或结束时，通过触碰表达欢迎、问候、告别或礼貌性确认。", en:"Touch intended to mark the beginning or ending of an interaction by conveying greeting, farewell, welcome, or polite acknowledgment." } },
  { id:"appreciation", zh:"赞赏", en:"Appreciation", desc:{ zh:"在接收者表现出值得肯定的行为、能力或成果后，通过触碰表达认可、肯定和赞许。", en:"Touch intended to express recognition, approval, or praise after the recipient has shown a valued action, ability, or achievement." } },
  { id:"gratitude", zh:"感谢", en:"Gratitude", desc:{ zh:"在接收者帮助了发起者或做出有益行为后，通过触碰表达谢意。", en:"Touch intended to express thanks after the recipient has helped the initiator or done something beneficial." } },
  { id:"encouragement", zh:"鼓励", en:"Encouragement", desc:{ zh:"在接收者面临压力、挑战、不确定或缺乏信心时，通过触碰传达支持和信心，鼓励其继续行动。", en:"Touch intended to convey support and confidence when the recipient faces pressure, challenge, uncertainty, or self-doubt, encouraging them to continue." } },
  { id:"inclusion", zh:"同在", en:"Inclusion", desc:{ zh:"在接收者感到孤单、疏离或需要陪伴时，通过触碰表达“我在这里”，传达共同存在感或被纳入同一群体中的归属感。", en:"Touch intended to convey “We are together,” shared presence, belonging, or being included in the same group or relationship, especially when the recipient feels alone, distant, or in need of acceptance." } },
  { id:"playful", zh:"嬉戏", en:"Playful", desc:{ zh:"在接收者处于轻松或可玩笑的状态时，通过触碰表达玩笑、调皮、逗趣或轻松互动。", en:"Touch intended to express joking, teasing, playfulness, or lighthearted interaction when the recipient is in a relaxed or playful state." } },
  { id:"attention_getting", zh:"引起注意", en:"Attention-getting", desc:{ zh:"在接收者分心、忽略、忙于他事而未注意，或需要更加关注某事时，通过触碰改变其注意焦点或强调信息的重要性。", en:"Touch intended to redirect or heighten the recipient’s attention when they are distracted, have overlooked something, are occupied with something else, or need to pay closer attention." } },
  { id:"guidance", zh:"引导", en:"Guidance", desc:{ zh:"在接收者需要协助或调整动作、方向和行为时，通过触碰提供帮助与指引。", en:"Touch intended to guide the recipient’s action, direction, or movement when help or adjustment is needed." } },
  { id:"request", zh:"请求", en:"Request", desc:{ zh:"在发起者需要接收者回应、确认、允许、帮助或采取某种行动时，通过触碰表达询问、请示或祈求。", en:"Touch intended to express inquiry, ask for permission, seek help, or request the recipient’s response, confirmation, or action when the initiator needs it." } },
  { id:"apology", zh:"致歉", en:"Apology", desc:{ zh:"在发起者造成误解、冒犯、失误或让接收者不适后，通过触碰表达歉意、修复关系并请求谅解。", en:"Touch intended to express apology, repair the interaction, and seek forgiveness after the initiator has caused misunderstanding, offense, error, or discomfort." } },
  { id:"refusal", zh:"拒绝", en:"Refusal", desc:{ zh:"在接收者靠近、请求或试图继续互动时，通过触碰表达不同意、保持距离或不愿继续当前互动。", en:"Touch intended to express disagreement, distance, or unwillingness to continue the current interaction when the recipient approaches, requests, or attempts to continue." } },
  { id:"dominance", zh:"支配", en:"Dominance", desc:{ zh:"在接收者处于被动、抗拒或被控制的位置时，通过触碰展示权力、控制或要求服从。", en:"Touch intended to assert power, control, or demand compliance when the recipient is passive, resistant, or positioned as being controlled." } },
  { id:"sexual_intent", zh:"性意图", en:"Sexual Intent", desc:{ zh:"通过触碰表达浪漫吸引、性兴趣或性意图。", en:"Touch intended to express romantic attraction, sexual interest, or sexual intent." } },
];

// ============================================================
// SVG BODY MAP — COORDINATE SYSTEM 220 × 540
// ============================================================
// CRITICAL: large regions come first, smaller overlays come after
// so they render on top when a replacement SVG uses layered regions.
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

function withRegionOverrides(base, overrides) {
  return base.map(region => ({ ...region, ...(overrides[region.id] || {}) }));
}

const F_REGIONS_MALE = F_BASE;
const F_REGIONS_FEMALE = withRegionOverrides(F_BASE, {
  f_shoulders: {
    poly:[[50,110],[88,110],[88,126],[60,134],[48,130]],
    polyR:[[134,110],[172,110],[174,130],[162,134],[134,126]]
  },
  f_chest: { poly:[[62,132],[160,132],[156,204],[132,218],[90,218],[66,204]] },
  f_stomach: { poly:[[70,208],[152,208],[148,286],[122,302],[100,302],[74,286]] },
  f_private: { poly:[[70,292],[152,292],[154,322],[112,330],[68,322]] },
  f_thighs: {
    poly:[[50,326],[102,326],[102,420],[72,430],[44,424],[42,332]],
    polyR:[[120,326],[172,326],[180,424],[150,430],[120,420]]
  }
});

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

const B_REGIONS_MALE = B_BASE;
const B_REGIONS_FEMALE = withRegionOverrides(B_BASE, {
  b_rear_shoulders: { poly:[[54,112],[168,112],[168,180],[54,180]] },
  b_back: { poly:[[60,186],[162,186],[158,290],[64,290]] },
  b_buttocks: { poly:[[50,296],[172,296],[176,346],[134,360],[88,360],[46,346]] },
  b_thighs: {
    poly:[[44,352],[102,352],[102,450],[74,456],[40,450]],
    polyR:[[120,352],[178,352],[182,450],[148,456],[120,450]]
  }
});

// Combined metadata
const ALL_REGIONS = [
  ...F_REGIONS_MALE.map(r => ({ id:r.id, label:r.label.split(" / ")[0], side:"front" })),
  ...B_REGIONS_MALE.map(r => ({ id:r.id, label:r.label.split(" / ")[0], side:"back" })),
];

// ============================================================
// SVG OUTLINE PATHS
// ============================================================
const OUTLINE_F_MALE = "M90,12 C78,12 70,20 70,38 C70,60 74,74 82,82 L88,86 L88,100 C72,102 48,106 32,118 C22,128 24,154 26,180 C27,200 24,226 24,248 C24,268 26,286 30,312 C32,342 30,366 28,380 L28,380 C50,372 78,364 102,360 L120,360 C144,364 172,372 194,380 L194,380 C192,366 190,342 192,312 C196,286 198,268 198,248 C198,226 195,200 196,180 C198,154 200,128 190,118 C174,106 150,102 134,100 L134,86 L140,82 C148,74 152,60 152,38 C152,22 144,12 132,12 Z";
const OUTLINE_B_MALE = "M90,8 C78,8 70,16 72,34 C74,54 78,70 82,80 L88,84 L88,96 C72,98 48,104 38,116 C32,124 34,156 34,188 C34,228 32,260 34,290 C34,320 36,344 36,360 L36,360 C56,352 80,344 102,340 L120,340 C142,344 166,352 186,360 L186,360 C186,344 188,320 188,290 C190,260 188,228 188,188 C188,156 190,124 184,116 C174,104 150,98 134,96 L134,84 L140,80 C148,72 150,54 150,34 C150,16 142,8 132,8 Z M38,366 L38,366 C56,362 78,358 100,354 L122,354 C144,358 166,362 184,366 L186,404 C188,454 186,494 184,536 C162,530 142,526 122,524 L100,524 C80,526 60,530 38,536 C36,494 34,454 36,404 Z";
const OUTLINE_F_FEMALE = "M92,12 C80,12 72,20 72,38 C72,60 76,74 84,82 L90,86 L90,100 C76,102 54,106 38,118 C28,128 28,154 30,180 C31,200 28,226 28,248 C28,268 26,286 30,312 C34,342 32,366 30,380 L30,380 C50,368 78,360 102,354 L120,354 C144,360 172,368 192,380 L192,380 C190,366 188,342 192,312 C196,286 194,268 194,248 C194,226 191,200 192,180 C194,154 194,128 184,118 C168,106 146,102 132,100 L132,86 L138,82 C146,74 150,60 150,38 C150,20 142,12 130,12 Z";
const OUTLINE_B_FEMALE = "M92,8 C80,8 72,16 74,34 C76,54 80,70 84,80 L90,84 L90,96 C76,98 54,104 42,116 C36,124 38,156 38,188 C38,228 36,260 38,290 C38,320 40,344 38,360 L38,360 C58,350 82,342 102,336 L120,336 C140,342 164,350 184,360 L184,360 C182,344 184,320 184,290 C186,260 184,228 184,188 C184,156 186,124 180,116 C168,104 146,98 132,96 L132,84 L138,80 C146,72 148,54 148,34 C148,16 140,8 128,8 Z M34,366 L34,366 C56,358 80,352 100,348 L122,348 C142,352 166,358 188,366 L188,404 C190,454 188,494 186,536 C164,530 142,526 122,524 L100,524 C80,526 58,530 36,536 C34,494 32,454 34,404 Z";

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
        showTT(r.label, e, isTouchLikeInput(e));
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
        if (isTouchLikeInput(e)) showTT(r.label, e, true);
      });

      svg.appendChild(shape);
    });
  });
}

function currentBodyProfile() {
  return demographics.gender === "female" ? "female" : "male";
}

function activeBodyMap() {
  if (currentBodyProfile() === "female") {
    return {
      frontRegions: F_REGIONS_FEMALE,
      backRegions: B_REGIONS_FEMALE,
      frontOutline: OUTLINE_F_FEMALE,
      backOutline: OUTLINE_B_FEMALE
    };
  }
  return {
    frontRegions: F_REGIONS_MALE,
    backRegions: B_REGIONS_MALE,
    frontOutline: OUTLINE_F_MALE,
    backOutline: OUTLINE_B_MALE
  };
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
let tooltipTimer = null;
function isTouchLikeInput(e) {
  return e?.pointerType === "touch" ||
    e?.type?.startsWith("touch") ||
    window.matchMedia?.("(hover: none), (pointer: coarse)").matches;
}
function scheduleTooltipHide(delay = 900) {
  clearTimeout(tooltipTimer);
  tooltipTimer = setTimeout(hideTT, delay);
}
function showTT(text, e, autoHide = false) {
  clearTimeout(tooltipTimer);
  const tt = document.getElementById("tooltip");
  tt.textContent = text;
  tt.style.display = "block";
  tt.style.left = (e.clientX + 14) + "px";
  tt.style.top = (e.clientY - 30) + "px";
  if (autoHide) scheduleTooltipHide();
}
function hideTT() {
  clearTimeout(tooltipTimer);
  document.getElementById("tooltip").style.display = "none";
}
window.addEventListener("scroll", hideTT, { passive: true });

// ============================================================
// NAVIGATION
// ============================================================
function goMaps() {
  order = [...sel];
  if (order.length === 0) return;
  order.forEach(id => { if (!(id in data)) data[id] = {}; });
  idx = 0;
  showStep("s2");
  const map = activeBodyMap();
  drawSVG("svgF", map.frontRegions, map.frontOutline);
  drawSVG("svgB", map.backRegions, map.backOutline);
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
    return {
      id,
      zh: it.zh,
      en: it.en,
      definition_zh: it.desc.zh,
      definition_en: it.desc.en
    };
  });
}

function regionsPayload() {
  return ALL_REGIONS.map(r => ({ id:r.id, label:r.label, side:r.side }));
}

function buildSurveyPayload() {
  save();
  const nationalityCode = fieldVal("nationality");
  return {
    participant_id: getParticipantId(),
    timestamp: new Date().toISOString(),
    study_version: "2.1",
    consent_version: "2026-06-01",
    consent_given: document.getElementById("consentBox")?.checked || false,
    language: lang,
    age_group: fieldVal("age"),
    country: nationalityCode,
    gender: fieldVal("gender"),
    scaleDescription: "1=Acceptable / willing to be touched, 0=Neutral or no intention (default), -1=Unacceptable / unwilling to be touched",
    selected_intents: selectedIntentPayload(),
    body_data: normalizedBodyData(),
    regions: regionsPayload(),
    metadata: {
      demographics,
      intentPoolVersion: "意图池.xlsx / 2026-06-04 / 16 intents",
      intentCount: INTENTS.length,
      nationalityName: nationalityCode ? countryName(nationalityCode) : null,
      bodyMapProfile: currentBodyProfile(),
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || null,
      viewport: { width: window.innerWidth, height: window.innerHeight },
      source: "bodymap_questionnaire_v8_static_html"
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
