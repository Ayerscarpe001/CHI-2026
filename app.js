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
    nationalityLabel:"国家或地区",
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
    intentDesc:"以下列出 16 类可能通过触碰表达的社交意图。请根据你的直觉，选择你认为“社交机器人可以通过主动触碰人的身体来表达”的意图。这里不需要考虑具体触碰哪个身体部位，下一步会继续询问。",
    selectAll:"全选",
    clearAll:"清空",
    contextTitle:"关系亲近度与互动语境",
    contextDesc:"请针对当前意图回答下面两道题。这里的“关系亲近度”指你与机器人之间的熟悉、信任和私人化互动程度；“互动语境”指这种触碰意图最可能出现的高层互动场景。",
    relationshipQuestion:"如果机器人要通过触碰向你表达这一意图，你认为它通常至少需要与你达到怎样的关系亲近程度？",
    contextQuestion:"你认为机器人通过触碰表达这一意图，最可能出现在以下哪一类互动语境中？",
    contextError:"请先完成当前意图的关系亲近度和互动语境选择。",
    closeness1:"完全陌生",
    closeness2:"初步接触",
    closeness3:"轻度熟悉",
    closeness4:"一般熟悉",
    closeness5:"较为熟悉",
    closeness6:"亲近",
    closeness7:"非常亲近",
    ctxPublicService:"公共服务",
    ctxPublicServiceDesc:"公共或半公共场所中的短时服务互动。",
    ctxCompanionship:"日常陪伴",
    ctxCompanionshipDesc:"家庭、私人空间、长期陪伴、日常共处或休闲陪伴。",
    ctxCare:"健康照护",
    ctxCareDesc:"医疗、护理、康复、心理支持、老人照护或脆弱状态下的支持。",
    ctxLearning:"学习训练",
    ctxLearningDesc:"学习、教育、技能训练、康复训练或指导。",
    ctxTask:"任务协作",
    ctxTaskDesc:"工作、导航、操作、家务或共同完成任务。",
    ctxIntimate:"私人亲密",
    ctxIntimateDesc:"高度私人化、浪漫、伴侣或明确亲密互动设定。",
    mapTitle:"身体地图标注",
    colorToolTitle:"颜色",
    acceptable:"愿意被触碰",
    unacceptable:"不愿意被触碰",
    neutral:"无意向",
    colorHint:"同色再次点击可取消；切换另一种颜色可覆盖。",
    currentAcceptable:"当前：愿意被触碰",
    currentUnacceptable:"当前：不愿意被触碰",
    bodyMapLoading:"正在加载身体地图...",
    bodyMapLoadError:"身体地图加载失败，请刷新页面后重试。",
    backToIntentPrefix:"返回",
    intentSelectionNoun:"意图选择",
    backToIntentSelection:"← 返回意图选择",
    backToContextPrefix:"返回",
    contextQuestionsNoun:"关系/场景",
    prevContext:"← 上一个意图",
    nextContext:"下一个意图 →",
    contextToMaps:"进入身体地图 →",
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
    progressContext:"关系亲近度与互动语境",
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
    nationalityLabel:"Country or Region",
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
    intentDesc:"The following list contains 16 social intents that may be expressed through touch. Based on your intuition, select the intents that you think a social robot could express by actively touching a person's body. You do not need to consider the specific body region yet; that will be asked later.",
    selectAll:"Select all",
    clearAll:"Clear all",
    contextTitle:"Relationship Closeness and Interaction Context",
    contextDesc:"Please answer the two questions below for the current intent. Relationship closeness refers to your familiarity, trust, and personalized interaction with the robot; interaction context refers to the broad setting where this touch intent would most likely occur.",
    relationshipQuestion:"If a robot were to express this intent to you through touch, what minimum level of relationship closeness would usually be needed?",
    contextQuestion:"In which interaction context would a robot most likely express this intent through touch?",
    contextError:"Please complete both relationship closeness and interaction context for the current intent.",
    closeness1:"Complete stranger",
    closeness2:"Initial contact",
    closeness3:"Slightly familiar",
    closeness4:"Moderately familiar",
    closeness5:"Fairly familiar",
    closeness6:"Close",
    closeness7:"Very close",
    ctxPublicService:"Public service",
    ctxPublicServiceDesc:"Brief service interactions in public or semi-public places.",
    ctxCompanionship:"Everyday companionship",
    ctxCompanionshipDesc:"Home, private-space, long-term companionship, everyday co-presence, or leisure companionship.",
    ctxCare:"Care / health support",
    ctxCareDesc:"Medical care, nursing, rehabilitation, psychological support, eldercare, or support in vulnerable states.",
    ctxLearning:"Learning / training",
    ctxLearningDesc:"Learning, education, skill training, rehabilitation training, or guidance.",
    ctxTask:"Task collaboration",
    ctxTaskDesc:"Work, navigation, operation, household tasks, or joint task completion.",
    ctxIntimate:"Private / intimate interaction",
    ctxIntimateDesc:"Highly private, romantic, partner-like, or explicitly intimate interaction settings.",
    mapTitle:"Body Map",
    colorToolTitle:"Color",
    acceptable:"Acceptable",
    unacceptable:"Unacceptable",
    neutral:"Neutral",
    colorHint:"Click the same color again to clear a region; switching color overwrites the previous mark.",
    currentAcceptable:"Current: Acceptable",
    currentUnacceptable:"Current: Unacceptable",
    bodyMapLoading:"Loading body map...",
    bodyMapLoadError:"Body map failed to load. Please refresh and try again.",
    backToIntentPrefix:"Back to",
    intentSelectionNoun:"intent selection",
    backToIntentSelection:"← Back to intent selection",
    backToContextPrefix:"Back to",
    contextQuestionsNoun:"relationship/context",
    prevContext:"← Previous intent",
    nextContext:"Next intent →",
    contextToMaps:"Go to body map →",
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
    progressContext:"Relationship and context",
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
  if (document.getElementById("sContext").classList.contains("active")) renderContextQuestion();
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

const RELATIONSHIP_LEVELS = [
  { value: 1, labelKey: "closeness1" },
  { value: 2, labelKey: "closeness2" },
  { value: 3, labelKey: "closeness3" },
  { value: 4, labelKey: "closeness4" },
  { value: 5, labelKey: "closeness5" },
  { value: 6, labelKey: "closeness6" },
  { value: 7, labelKey: "closeness7" },
];

const INTERACTION_CONTEXTS = [
  { id: "public_service", labelKey: "ctxPublicService", descKey: "ctxPublicServiceDesc" },
  { id: "companionship", labelKey: "ctxCompanionship", descKey: "ctxCompanionshipDesc" },
  { id: "care_health", labelKey: "ctxCare", descKey: "ctxCareDesc" },
  { id: "learning_training", labelKey: "ctxLearning", descKey: "ctxLearningDesc" },
  { id: "task_collaboration", labelKey: "ctxTask", descKey: "ctxTaskDesc" },
  { id: "private_intimate", labelKey: "ctxIntimate", descKey: "ctxIntimateDesc" },
];

// ============================================================
// 3D BODY MAP REGIONS
// ============================================================
// These ids must match the mesh object names inside assets/male_body_regions.glb.
const BODY_MODEL_URL = "assets/male_body_regions.glb";
const BODY_MODEL_ID = "male_body_regions_3d_v1";
const ALL_REGIONS = [
  { id:"scalp", zh:"头顶部", en:"Top of head / scalp", side:"top" },
  { id:"face", zh:"面部", en:"Face", side:"front" },
  { id:"back_of_head", zh:"后脑勺", en:"Back of head", side:"back" },
  { id:"front_of_neck", zh:"颈前部", en:"Front of neck", side:"front" },
  { id:"back_of_neck", zh:"颈后部", en:"Back of neck", side:"back" },
  { id:"front_of_shoulders", zh:"肩部前侧", en:"Front of shoulders", side:"front" },
  { id:"back_of_shoulders", zh:"肩部后侧", en:"Back of shoulders", side:"back" },
  { id:"chest", zh:"胸部", en:"Chest", side:"front" },
  { id:"abdomen", zh:"腹部", en:"Abdomen", side:"front" },
  { id:"genital_area", zh:"生殖区域", en:"Genital area", side:"front" },
  { id:"back", zh:"背部", en:"Back", side:"back" },
  { id:"buttocks", zh:"臀部", en:"Buttocks", side:"back" },
  { id:"upper_arms", zh:"大臂", en:"Upper arms", side:"bilateral" },
  { id:"forearms", zh:"小臂", en:"Forearms", side:"bilateral" },
  { id:"palms", zh:"手掌", en:"Palms", side:"front" },
  { id:"back_of_hands", zh:"手背", en:"Back of hands", side:"back" },
  { id:"fingers", zh:"手指", en:"Fingers", side:"bilateral" },
  { id:"front_of_thighs", zh:"大腿前侧", en:"Front of thighs", side:"front" },
  { id:"back_of_thighs", zh:"大腿后侧", en:"Back of thighs", side:"back" },
  { id:"knees", zh:"膝盖", en:"Knees", side:"front" },
  { id:"front_of_lower_legs", zh:"小腿前侧（胫部）", en:"Front of lower legs (shins)", side:"front" },
  { id:"back_of_lower_legs", zh:"小腿后侧（小腿肚）", en:"Back of lower legs (calves)", side:"back" },
  { id:"feet", zh:"足部", en:"Feet", side:"bilateral" },
];
const REGION_BY_ID = new Map(ALL_REGIONS.map(region => [region.id, region]));

// ============================================================
// UTIL
// ============================================================
function regionLabel(region) {
  return `${region.zh} / ${region.en}`;
}

// ============================================================
// STATE
// ============================================================
let sel = new Set();
let order = [];
let idx = 0;
let contextIdx = 0;
let data = {};
let intentMeta = {};
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
  if (bodyMap3d) bodyMap3d.setPaintPreview(paint);
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
// STEP 2: RELATIONSHIP CLOSENESS AND INTERACTION CONTEXT
// ============================================================
function initIntentMeta() {
  const selected = new Set(order);
  Object.keys(intentMeta).forEach(id => {
    if (!selected.has(id)) delete intentMeta[id];
  });
  order.forEach(id => {
    if (!intentMeta[id]) {
      intentMeta[id] = {
        relationship_closeness: null,
        interaction_context: null,
      };
    }
  });
}

function contextLabel(contextId) {
  const context = INTERACTION_CONTEXTS.find(item => item.id === contextId);
  return context ? t(context.labelKey) : "";
}

function relationshipLabel(value) {
  const level = RELATIONSHIP_LEVELS.find(item => item.value === Number(value));
  return level ? t(level.labelKey) : "";
}

function iosDiagram(level) {
  const humanLabel = lang === "zh" ? "人" : "H";
  const robotLabel = lang === "zh" ? "机" : "R";
  return `
    <span class="ios-diagram ios-level-${level}" aria-hidden="true">
      <span class="ios-circle ios-human">${humanLabel}</span>
      <span class="ios-circle ios-robot">${robotLabel}</span>
    </span>`;
}

function renderContextQuestion() {
  const list = document.getElementById("contextList");
  if (!list) return;
  initIntentMeta();
  if (contextIdx >= order.length) contextIdx = Math.max(0, order.length - 1);
  const id = order[contextIdx];
  const it = INTENTS.find(intent => intent.id === id);
  const meta = intentMeta[id] || {};
  const intentName = lang === "zh" ? it.zh : it.en;
  document.getElementById("contextIntentName").textContent = intentName;
  document.getElementById("contextIntentDesc").textContent = it.desc[lang];
  const relationshipOptions = RELATIONSHIP_LEVELS.map(level => `
    <button type="button"
      class="scale-option ${meta.relationship_closeness === level.value ? "selected" : ""}"
      onclick="setRelationship('${id}', ${level.value})">
      <span class="scale-number">${level.value}</span>
      ${iosDiagram(level.value)}
      <span class="scale-label">${t(level.labelKey)}</span>
    </button>`).join("");
  const contextOptions = INTERACTION_CONTEXTS.map(context => `
    <button type="button"
      class="context-option ${meta.interaction_context === context.id ? "selected" : ""}"
      onclick="setInteractionContext('${id}', '${context.id}')">
      <span class="context-name">${t(context.labelKey)}</span>
      <span class="context-desc">${t(context.descKey)}</span>
    </button>`).join("");
  list.innerHTML = `
    <section class="context-card" id="context-card-${id}">
      <div class="context-block">
        <div class="context-question">${t("relationshipQuestion")}</div>
        <div class="scale-row" role="radiogroup" aria-label="${t("relationshipQuestion")}">
          ${relationshipOptions}
        </div>
      </div>
      <div class="context-block">
        <div class="context-question">${t("contextQuestion")}</div>
        <div class="context-options" role="radiogroup" aria-label="${t("contextQuestion")}">
          ${contextOptions}
        </div>
      </div>
    </section>`;
  document.getElementById("contextCounter").textContent = `${contextIdx+1} / ${order.length}`;
  document.getElementById("btnPrevContext").textContent = t("prevContext");
  document.getElementById("btnPrevContext").disabled = contextIdx === 0;
  document.getElementById("btnNextContext").textContent = t("nextContext");
  document.getElementById("btnContextDone").textContent = t("contextToMaps");
  document.getElementById("btnNextContext").style.display = contextIdx < order.length-1 ? "" : "none";
  document.getElementById("btnContextDone").style.display = contextIdx === order.length-1 ? "" : "none";
}

function setRelationship(intentId, value) {
  if (!intentMeta[intentId]) intentMeta[intentId] = {};
  intentMeta[intentId].relationship_closeness = value;
  document.getElementById("contextError").classList.remove("show");
  renderContextQuestion();
}

function setInteractionContext(intentId, contextId) {
  if (!intentMeta[intentId]) intentMeta[intentId] = {};
  intentMeta[intentId].interaction_context = contextId;
  document.getElementById("contextError").classList.remove("show");
  renderContextQuestion();
}

function currentContextAnswered() {
  const id = order[contextIdx];
  return !!(
    intentMeta[id]?.relationship_closeness &&
    intentMeta[id]?.interaction_context
  );
}

function validateCurrentContextQuestion() {
  const ok = currentContextAnswered();
  document.getElementById("contextError").classList.toggle("show", !ok);
  return ok;
}

function validateContextQuestions() {
  const ok = order.every(id =>
    intentMeta[id]?.relationship_closeness &&
    intentMeta[id]?.interaction_context
  );
  document.getElementById("contextError").classList.toggle("show", !ok);
  return ok;
}

// ============================================================
// 3D BODY MAP
// ============================================================
let bodyMap3d = null;
let bodyMap3dReady = null;

function currentBodyProfile() {
  return BODY_MODEL_ID;
}

function setBodyMapStatus(key, visible = true) {
  const status = document.getElementById("bodyMapStatus");
  if (!status) return;
  status.textContent = key ? t(key) : "";
  status.classList.toggle("show", visible && !!key);
}

function bodyMapRegionsForRenderer() {
  return ALL_REGIONS.map(region => ({
    id: region.id,
    label: regionLabel(region),
  }));
}

async function ensureBodyMap3D() {
  if (bodyMap3d) return bodyMap3d;
  if (!bodyMap3dReady) {
    setBodyMapStatus("bodyMapLoading");
    bodyMap3dReady = import("./body-map-3d.js")
      .then(async module => {
        const map = new module.BodyMap3D({
          container: document.getElementById("bodyMap3d"),
          modelUrl: BODY_MODEL_URL,
          regions: bodyMapRegionsForRenderer(),
          onRegionClick: (regionId, event) => {
            cur[regionId] = (cur[regionId] === paint) ? 0 : paint;
            updCol();
            if (isTouchLikeInput(event)) showTT(regionLabel(REGION_BY_ID.get(regionId)), event, true);
          },
          onRegionHover: (regionId, event) => {
            const region = REGION_BY_ID.get(regionId);
            if (region) showTT(regionLabel(region), event);
          },
          onRegionLeave: hideTT,
        });
        await map.init();
        bodyMap3d = map;
        bodyMap3d.setPaintPreview(paint);
        setBodyMapStatus("", false);
        return map;
      })
      .catch(error => {
        console.error(error);
        bodyMap3dReady = null;
        setBodyMapStatus("bodyMapLoadError");
        throw error;
      });
  }
  return bodyMap3dReady;
}

function updCol() {
  if (bodyMap3d) {
    bodyMap3d.setPaintPreview(paint);
    bodyMap3d.setStates(cur);
  }
}

// ============================================================
// TOOLTIP
// ============================================================
let tooltipTimer = null;
function isTouchLikeInput(e) {
  return e?.pointerType === "touch" ||
    e?.type?.startsWith("touch") ||
    window.matchMedia?.("(hover: none), (pointer: coarse)").matches;
}
function scheduleTooltipHide(delay = 900) {
  clearTimeout(tooltipTimer);
  tooltipTimer = setTimeout(() => hideTT(false), delay);
}
function showTT(text, e, autoHide = false) {
  if (!text || !e) return;
  clearTimeout(tooltipTimer);
  const tt = document.getElementById("tooltip");
  tt.textContent = text;
  tt.style.left = (e.clientX + 14) + "px";
  tt.style.top = (e.clientY - 30) + "px";
  tt.classList.add("show");
  if (autoHide) scheduleTooltipHide();
}
function hideTT(immediate = true) {
  clearTimeout(tooltipTimer);
  const tt = document.getElementById("tooltip");
  tt.classList.remove("show");
  if (immediate) {
    tt.style.transition = "none";
    requestAnimationFrame(() => {
      tt.style.transition = "";
    });
  }
}
window.addEventListener("scroll", hideTT, { passive: true });

// ============================================================
// NAVIGATION
// ============================================================
function goContext() {
  order = [...sel];
  if (order.length === 0) return;
  order.forEach(id => { if (!(id in data)) data[id] = {}; });
  initIntentMeta();
  if (contextIdx >= order.length) contextIdx = 0;
  showStep("sContext");
  renderContextQuestion();
  prog();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function backToIntentSelectionFromContext() {
  showStep("s1");
  prog();
}

function nextContext() {
  if (!validateCurrentContextQuestion()) return;
  if (contextIdx < order.length - 1) {
    contextIdx++;
    document.getElementById("contextError").classList.remove("show");
    renderContextQuestion();
    prog();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function prevContext() {
  if (contextIdx > 0) {
    contextIdx--;
    document.getElementById("contextError").classList.remove("show");
    renderContextQuestion();
    prog();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

async function goMaps() {
  if (!validateCurrentContextQuestion()) return;
  if (!validateContextQuestions()) return;
  order.forEach(id => { if (!(id in data)) data[id] = {}; });
  idx = 0;
  showStep("s2");
  load();
  try {
    await ensureBodyMap3D();
    updCol();
  } catch {
    // The visible status message is set in ensureBodyMap3D.
  }
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
function backToContextQuestions() {
  save();
  contextIdx = Math.min(idx, Math.max(0, order.length - 1));
  showStep("sContext");
  renderContextQuestion();
  prog();
}
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
  else if (document.getElementById("sContext").classList.contains("active")) {
    const pct = 35 + Math.round((contextIdx+1)/Math.max(order.length, 1) * 13);
    f.style.width=pct+"%"; textEl.textContent=`${t("progressContext")} ${contextIdx+1}/${Math.max(order.length, 1)}`;
  }
  else if (document.getElementById("s2").classList.contains("active")) {
    const pct = 48 + Math.round((idx+1)/order.length * 37);
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
    const meta = intentMeta[id] || {};
    const d = data[id] || {};
    const entries = Object.entries(d);
    const accept = entries.filter(([,v]) => v === 1).length;
    const reject = entries.filter(([,v]) => v === -1).length;
    const neutral = total - accept - reject;
    return `<div class="rev-card">
      <div class="r-name">${lang === "zh" ? it.zh : it.en}</div>
      <div class="r-stats">
        ${t("acceptCount")}: ${accept} &nbsp;|&nbsp; ${t("rejectCount")}: ${reject} &nbsp;|&nbsp; ${t("neutralCount")}: ${neutral}
      </div>
      <div class="r-meta">
        ${relationshipLabel(meta.relationship_closeness)} · ${contextLabel(meta.interaction_context)}
      </div>
    </div>`;
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
    const meta = intentMeta[id] || {};
    return {
      id,
      zh: it.zh,
      en: it.en,
      definition_zh: it.desc.zh,
      definition_en: it.desc.en,
      relationship_closeness: meta.relationship_closeness ?? null,
      relationship_closeness_label: relationshipLabel(meta.relationship_closeness),
      interaction_context: meta.interaction_context ?? null,
      interaction_context_label: contextLabel(meta.interaction_context)
    };
  });
}

function intentMetaPayload() {
  const out = {};
  order.forEach(id => {
    const meta = intentMeta[id] || {};
    out[id] = {
      relationship_closeness: meta.relationship_closeness ?? null,
      relationship_closeness_label: relationshipLabel(meta.relationship_closeness),
      interaction_context: meta.interaction_context ?? null,
      interaction_context_label: contextLabel(meta.interaction_context)
    };
  });
  return out;
}

function relationshipScalePayload() {
  return RELATIONSHIP_LEVELS.map(level => ({
    value: level.value,
    zh: I18N.zh[level.labelKey],
    en: I18N.en[level.labelKey],
  }));
}

function interactionContextsPayload() {
  return INTERACTION_CONTEXTS.map(context => ({
    id: context.id,
    zh: I18N.zh[context.labelKey],
    en: I18N.en[context.labelKey],
    definition_zh: I18N.zh[context.descKey],
    definition_en: I18N.en[context.descKey],
  }));
}

function regionsPayload() {
  return ALL_REGIONS.map(r => ({
    id: r.id,
    zh: r.zh,
    en: r.en,
    label: regionLabel(r),
    side: r.side
  }));
}

function buildSurveyPayload() {
  save();
  const nationalityCode = fieldVal("nationality");
  return {
    participant_id: getParticipantId(),
    timestamp: new Date().toISOString(),
    study_version: "3.0",
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
      intentMeta: intentMetaPayload(),
      relationshipScale: relationshipScalePayload(),
      interactionContexts: interactionContextsPayload(),
      nationalityName: nationalityCode ? countryName(nationalityCode) : null,
      bodyMapProfile: currentBodyProfile(),
      bodyMapModel: BODY_MODEL_URL,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || null,
      viewport: { width: window.innerWidth, height: window.innerHeight },
      source: "bodymap_questionnaire_v9_3d_static_html"
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
