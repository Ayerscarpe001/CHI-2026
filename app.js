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
    appTitle:"社交机器人主动触碰研究问卷",
    appSub:"机器人通过主动触碰人类身体以表达社交意图的可接受度调查",
    introTitle:"研究场景介绍",
    introDesc:"本问卷旨在了解人们对社交机器人主动触碰身体的接受程度。请依次阅读下面三页简短说明，明确本研究中的社交机器人、社交触碰等概念及作答流程。",
    introSlide1Kicker:"01 · 机器人形态",
    introSlide1Title:"具有手臂与手的社交机器人",
    introSlide2Kicker:"02 · 社交触碰",
    introSlide2Title:"机器人主动发起的身体触碰",
    introSlide3Kicker:"03 · 答题流程",
    introSlide3Title:"问卷填写流程",
    introP1:"请将问卷中的“社交机器人”想象为一个具有人形上半身结构的机器人，它具有类似人体结构的双臂和双手，整体身高略矮于成年人水平。它能够遵循恰当的行为规范，与人进行社交互动。",
    introP2:"问卷中的“社交触碰”指机器人在预先提示并征得许可后，对你身体发起的直接、短暂、柔和、非疼痛、非强制性的身体触碰。这种触碰旨在传达具有某种社交含义的意图，例如表达关心、引起注意等。",
    introP3:"填写过程中，问卷会先询问“你能接受社交机器人通过主动触碰表达哪些意图”，随后，将会围绕你选择的每种意图，循环询问一组相关问题。",
    introRobotAlt:"抽象简笔画社交机器人，具有头部、上身、机械手臂和手部。",
    introFlowAlt:"先选择可接受的表达内容，再围绕每个选择逐项作答的问卷流程示意图。",
    introPrev:"← 上一页",
    introNext:"下一页 →",
    introEnter:"进入知情同意 →",
    introPageOf:"第 {current} 页，共 {total} 页",
    consentTitle:"知情同意",
    consentDesc:"请在开始问卷前阅读以下说明。",
    consentP2:"你的回答仅用于学术研究。本问卷不会收集你的姓名或直接联系方式，你可以在提交前随时退出。",
    consentP3:"问卷涉及身体部位与社交触碰判断。如果你对此感到不适，可以随时停止填写。",
    consentP4:"请确认你已年满 18 岁后再继续填写本问卷。",
    consentCheck:"我已认真阅读以上说明，并同意参与本研究。",
    continueBtn:"继续 →",
    backBtn:"← 返回",
    infoTitle:"基本信息",
    infoDesc:"请根据您的真实情况填写：",
    ageLabel:"年龄",
    age100Plus:"100 岁及以上",
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
    infoError:"请完整填写有效年龄、性别和所属国家或地区后继续。",
    intentTitle:"社交意图选择",
    intentDesc:"当机器人需要通过主动触碰你来表达某种社交含义时，你能接受它表达哪些意图？请选择你能接受的所有选项。",
    selectAll:"全选",
    clearAll:"清空",
    noIntentTitle:"以上意图均不适合",
    noIntentDesc:"如果你认为这些社交意图都不适合由机器人通过主动触碰表达，可以选择此项并直接进入检查页。",
    contextTitle:"关系、语境与表达方式",
    contextDesc:"请围绕当前意图回答下面三题：",
    relationshipQuestion:"1、机器人通过触碰表达这一意图时，通常至少需要与你有多熟悉？",
    contextQuestion:"2、这种触碰表达可能出现在哪些互动语境中？（可多选）",
    conventionReferenceTitle:"人际触碰示例",
    conventionQuestion:"3、机器人表达这一意图时，应在多大程度上参考人际互动中常见的触碰方式？",
    convention1:"完全不参考",
    convention2:"稍加参考",
    convention3:"部分参考",
    convention4:"较多参考",
    convention5:"完全参考",
    contextError:"请完成当前意图的三道题：选择关系亲近度、至少一种互动语境和人际表达参照程度；如选择“其他”，请填写具体语境。",
    closeness1:"完全陌生",
    closeness2:"初步接触",
    closeness3:"轻度熟悉",
    closeness4:"一般熟悉",
    closeness5:"较为熟悉",
    closeness6:"亲近",
    closeness7:"非常亲近",
    ctxPublicService:"公共服务",
    ctxPublicServiceDesc:"在公共或半公共场所中，机器人向人们提供接待、问询、导览、提醒或基础服务。",
    ctxCompanionship:"日常陪伴",
    ctxCompanionshipDesc:"在家庭或日常生活环境中，机器人与人们持续共处，参与陪伴、闲聊、日常协助或生活互动。",
    ctxCare:"健康照护",
    ctxCareDesc:"在医疗、护理、康复、心理支持或老人照护等情境中，机器人围绕人们的健康、照护或恢复需求进行互动。",
    ctxLearning:"学习训练",
    ctxLearningDesc:"在教学、辅导、技能练习、行为训练或表现反馈等情境中，机器人围绕人们的学习或训练目标进行互动。",
    ctxTask:"任务协作",
    ctxTaskDesc:"在工作、导航、操作、家务或其他具体任务中，机器人与人们共同完成明确的外部目标。",
    ctxLeisure:"休闲娱乐",
    ctxLeisureDesc:"在游戏、运动、娱乐、玩笑或轻松社交活动中，机器人与人们一起参与放松、趣味或互动体验。",
    ctxOther:"其他（请补充）",
    ctxOtherDesc:"以上选项未能涵盖的其他互动语境。",
    ctxOtherPlaceholder:"请简要补充具体的互动语境",
    currentIntentLabel:"当前意图",
    mapTitle:"身体地图标注",
    mapDesc:"4、请针对当前意图，选择不同颜色，在身体地图上标注出你明确愿意或不愿意被机器人触碰的部位，未点选填色区域将视为无明确意向。",
    emptyMapConfirm:"我已查看当前意图的身体地图，但没有任何明确愿意或不愿意标注的身体区域。",
    mapError:"当前身体地图尚未标注。如你确实没有明确意向，请先勾选上方确认项。",
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
    contextQuestionsNoun:"关系/场景/表达",
    backToContextFull:"← 返回关系/场景",
    prevPage:"← 上一页",
    nextPage:"下一页 →",
    intentProgressDone:"已完成",
    intentProgressCurrent:"当前",
    intentProgressPending:"待填写",
    prevContext:"← 上一个意图",
    nextContext:"下一个意图 →",
    contextToMaps:"进入身体地图 →",
    resetCurrent:"重置",
    prevIntent:"← 上一个意图",
    nextIntent:"下一个意图 →",
    reviewSubmit:"检查与提交 →",
    reviewTitle:"检查与提交",
    reviewDesc:"请检查你的回答，然后提交至研究数据库。",
    noIntentReview:"你选择了“以上意图均不适合由机器人通过主动触碰表达”。本次回答将不会包含身体地图标注。",
    backToMaps:"← 返回地图",
    submitResponse:"提交问卷",
    backToReview:"返回检查",
    progressIntro:"研究场景介绍",
    progressConsent:"知情同意",
    progressInfo:"基本信息",
    progressIntents:"选择社交意图",
    progressContext:"关系、语境与表达方式",
    progressMap:"身体地图",
    progressIntentSummary:"第 {current} 个意图 / 共选 {total} 个",
    progressReview:"检查与提交",
    progressStatus:"提交状态",
    acceptCount:"愿意",
    rejectCount:"不愿意",
    neutralCount:"无意向",
    emptyMapConfirmedBadge:"已确认无明确标注",
    conventionReferenceLabel:"人际表达参照",
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
    thankMsg:"你的回答已成功提交。",
    followupTitle:"后续研究联系（选填）",
    followupDesc:"如果你有意愿参与后续研究中的访谈或实验，请在此留下你的联系邮箱或手机号。",
    followupPlaceholder:"邮箱或手机号",
    followupSubmit:"提交联系方式",
    followupSubmitting:"提交中...",
    followupSubmitted:"联系方式已提交，感谢。",
    followupEmpty:"请先填写联系方式，或直接关闭页面。",
    followupError:"联系方式提交失败，请稍后重试。",
    followupConfigError:"联系方式收集暂未完成数据库配置，请稍后联系研究团队。"
  },
  en: {
    appTitle:"Social Robot-Initiated Touch Research Survey",
    appSub:"A survey on the acceptability of robots actively touching the human body to express social intents.",
    introTitle:"Study Scenario",
    introDesc:"This survey examines people's acceptance of social robots actively touching the human body. Please read the following three short pages to understand how this study defines the social robot, social touch, and the response process.",
    introSlide1Kicker:"01 · Robot form",
    introSlide1Title:"Social Robot with Arms and Hands",
    introSlide2Kicker:"02 · Social touch",
    introSlide2Title:"Physical contact initiated by the robot",
    introSlide3Kicker:"03 · Survey process",
    introSlide3Title:"Answer each selected item in sequence",
    introP1:"Please imagine the “social robot” in this survey as a robot with a humanoid upper-body structure. It has two arms and two hands with a human-like structure and is slightly shorter than an adult. It can follow appropriate behavioral norms and socially interact with people.",
    introP2:"In this survey, “social touch” refers to direct, brief, gentle, non-painful, and non-coercive bodily contact initiated by a robot after prior notice and permission. This touch is intended to convey a socially meaningful intent, such as showing care or getting attention.",
    introP3:"During the survey, you will first choose which intents you would accept a social robot expressing through active touch. Then, for each selected intent, you will answer a repeated set of related questions.",
    introRobotAlt:"A simple abstract social robot with a head, upper body, mechanical arms, and hands.",
    introFlowAlt:"A survey flow diagram showing selection first, followed by repeated questions for each selected item.",
    introPrev:"← Previous",
    introNext:"Next →",
    introEnter:"Continue to consent →",
    introPageOf:"Page {current} of {total}",
    consentTitle:"Consent",
    consentDesc:"Please read the following information before starting the survey.",
    consentP2:"Your responses will be used for academic research only. The survey does not ask for your name or direct contact information. You may stop at any time before submitting your response.",
    consentP3:"The survey involves judgments about body regions and social touch. You may stop at any time if you feel uncomfortable.",
    consentP4:"Please confirm that you are at least 18 years old before continuing this survey.",
    consentCheck:"I have carefully read the information above and agree to participate in this study.",
    continueBtn:"Continue →",
    backBtn:"← Back",
    infoTitle:"Basic Information",
    infoDesc:"These questions help us understand participant background differences.",
    ageLabel:"Age",
    age100Plus:"100 years or older",
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
    infoError:"Please complete a valid age, gender, and country or region before continuing.",
    intentTitle:"Social Intents",
    intentDesc:"When the robot needs to actively touch you to express a socially meaningful intent, which intents would you accept it expressing? Select all acceptable options.",
    selectAll:"Select all",
    clearAll:"Clear all",
    noIntentTitle:"None of these intents are suitable",
    noIntentDesc:"If you think none of these social intents are suitable for a robot to express through active touch, select this option and continue directly to review.",
    contextTitle:"Relationship, Context, and Expression",
    contextDesc:"For the current intent, answer the three questions below:",
    relationshipQuestion:"1. How familiar would the robot usually need to be with you to express this intent through touch?",
    contextQuestion:"2. In which interaction contexts might this touch expression appear? (Select all that apply.)",
    conventionReferenceTitle:"Interpersonal touch examples",
    conventionQuestion:"3. To what extent should the robot refer to touch expressions commonly used between people for this intent?",
    convention1:"Not at all",
    convention2:"Slightly",
    convention3:"Partly",
    convention4:"Mostly",
    convention5:"Fully",
    contextError:"Please answer all three questions for the current intent. If you select “Other,” describe the interaction context.",
    closeness1:"Complete stranger",
    closeness2:"Initial contact",
    closeness3:"Slightly familiar",
    closeness4:"Moderately familiar",
    closeness5:"Fairly familiar",
    closeness6:"Close",
    closeness7:"Very close",
    ctxPublicService:"Public service",
    ctxPublicServiceDesc:"In public or semi-public places, the robot provides reception, inquiry, guidance, reminders, or basic services to people.",
    ctxCompanionship:"Everyday companionship",
    ctxCompanionshipDesc:"In home or everyday-life settings, the robot stays with people over time and participates in companionship, casual conversation, daily assistance, or everyday interaction.",
    ctxCare:"Care / Health support",
    ctxCareDesc:"In medical, nursing, rehabilitation, psychological support, or eldercare contexts, the robot interacts around people's needs for health, care, or recovery.",
    ctxLearning:"Learning / Training",
    ctxLearningDesc:"In teaching, tutoring, skill practice, behavioral training, or performance feedback contexts, the robot interacts around people's learning or training goals.",
    ctxTask:"Task collaboration",
    ctxTaskDesc:"In work, navigation, operation, household, or other concrete tasks, the robot and people work together to complete a clear external goal.",
    ctxLeisure:"Leisure / Entertainment",
    ctxLeisureDesc:"In games, exercise, entertainment, joking, or light social activities, the robot and people participate together in relaxing, playful, or interactive experiences.",
    ctxOther:"Other (Please specify)",
    ctxOtherDesc:"Another interaction context not covered by the options above.",
    ctxOtherPlaceholder:"Briefly describe the interaction context",
    currentIntentLabel:"Current intent",
    mapTitle:"Body Map",
    mapDesc:"4. For the current intent, choose different colors on the body map to mark the regions where you clearly would or would not want to be touched by the robot. Regions left uncolored will be treated as no clear preference.",
    emptyMapConfirm:"I have reviewed the body map for the current intent, but I have no clear acceptable or unacceptable body regions to mark.",
    mapError:"No body region has been marked for the current intent. If you truly have no clear preference, please check the confirmation above first.",
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
    contextQuestionsNoun:"relationship/context/expression",
    backToContextFull:"← Back to relationship/context",
    prevPage:"← Previous page",
    nextPage:"Next page →",
    intentProgressDone:"Completed",
    intentProgressCurrent:"Current",
    intentProgressPending:"Pending",
    prevContext:"← Previous intent",
    nextContext:"Next intent →",
    contextToMaps:"Go to body map →",
    resetCurrent:"Reset",
    prevIntent:"← Previous intent",
    nextIntent:"Next intent →",
    reviewSubmit:"Review & Submit →",
    reviewTitle:"Review & Submit",
    reviewDesc:"Check your responses, then submit them to the research database.",
    noIntentReview:"You selected “None of these intents are suitable for a robot to express through active touch.” This response will not include body-map markings.",
    backToMaps:"← Back to maps",
    submitResponse:"Submit response",
    backToReview:"Back to review",
    progressIntro:"Study scenario",
    progressConsent:"Consent",
    progressInfo:"Basic information",
    progressIntents:"Select social intents",
    progressContext:"Relationship, context, and expression",
    progressMap:"Body map",
    progressIntentSummary:"Intent {current} / {total} selected",
    progressReview:"Review & Submit",
    progressStatus:"Submission status",
    acceptCount:"Accept",
    rejectCount:"Reject",
    neutralCount:"Neutral",
    emptyMapConfirmedBadge:"Confirmed no clear markings",
    conventionReferenceLabel:"Interpersonal reference",
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
    thankMsg:"Your response has been successfully submitted.",
    followupTitle:"Follow-up contact (optional)",
    followupDesc:"If you are willing to take part in a follow-up interview or experiment, you may leave your email address or phone number here.",
    followupPlaceholder:"Email address or phone number",
    followupSubmit:"Submit contact",
    followupSubmitting:"Submitting...",
    followupSubmitted:"Contact submitted. Thank you.",
    followupEmpty:"Please enter contact information first, or simply close this page.",
    followupError:"Contact submission failed. Please try again later.",
    followupConfigError:"Follow-up contact collection is not yet configured in the database. Please contact the research team later."
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
const CUSTOM_REGION_CODES = ["HK_MO_TW"];

function t(key) { return I18N[lang][key] || I18N.zh[key] || key; }
function countryName(code) {
  if (code === "HK_MO_TW") return lang === "zh" ? "港澳台地区" : "Hong Kong, Macao, and Taiwan";
  if (code === "CN" && lang === "zh") return "中国大陆";
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
  const allCodes = lang === "zh"
    ? ["CN", ...CUSTOM_REGION_CODES, ...COUNTRY_CODES.filter(code => code !== "CN")]
    : COUNTRY_CODES;
  const options = allCodes
    .map(code => ({ code, label: countryName(code) }))
    .sort((a, b) => {
      if (lang === "zh") {
        const aPinnedIndex = ["CN", ...CUSTOM_REGION_CODES].indexOf(a.code);
        const bPinnedIndex = ["CN", ...CUSTOM_REGION_CODES].indexOf(b.code);
        if (aPinnedIndex >= 0 || bPinnedIndex >= 0) {
          if (aPinnedIndex < 0) return 1;
          if (bPinnedIndex < 0) return -1;
          return aPinnedIndex - bPinnedIndex;
        }
      }
      return a.label.localeCompare(b.label, lang === "zh" ? "zh-CN" : "en");
    })
    .map(({ code, label }) => `<option value="${code}">${label}</option>`)
    .join("");
  select.innerHTML = `<option value="">${t("selectOne")}</option>${options}`;
  if (current) select.value = current;
}
function renderAgeOptions() {
  const select = document.getElementById("age");
  if (!select) return;
  const current = select.value;
  const ages = Array.from({ length: 82 }, (_, index) => index + 18)
    .map(age => `<option value="${age}">${age}</option>`)
    .join("");
  select.innerHTML = `<option value="">${t("selectOne")}</option>${ages}<option value="100_plus">${t("age100Plus")}</option>`;
  if (current) select.value = current;
}

let introSlideIndex = 0;
let introVideoHasPlayed = false;

function renderIntroCarousel() {
  const slides = Array.from(document.querySelectorAll("[data-intro-slide]"));
  const dots = Array.from(document.querySelectorAll(".intro-dot"));
  if (!slides.length) return;

  slides.forEach((slide, index) => {
    const active = index === introSlideIndex;
    slide.hidden = !active;
    slide.classList.toggle("active", active);
  });
  dots.forEach((dot, index) => {
    const active = index === introSlideIndex;
    dot.classList.toggle("active", active);
    dot.setAttribute("aria-current", String(active));
    dot.setAttribute("aria-label", t("introPageOf")
      .replace("{current}", index + 1)
      .replace("{total}", slides.length));
  });

  document.querySelectorAll("[data-intro-alt]").forEach(image => {
    image.alt = t(image.dataset.introAlt);
    const localizedSource = lang === "zh" ? image.dataset.introSrcZh : image.dataset.introSrcEn;
    if (localizedSource && image.getAttribute("src") !== localizedSource) {
      image.setAttribute("src", localizedSource);
    }
  });
  const status = document.getElementById("introPageStatus");
  if (status) {
    status.textContent = t("introPageOf")
      .replace("{current}", introSlideIndex + 1)
      .replace("{total}", slides.length);
  }
  const prev = document.getElementById("introPrev");
  const next = document.getElementById("introNext");
  if (prev) {
    prev.disabled = introSlideIndex === 0;
    prev.textContent = t("introPrev");
  }
  if (next) {
    next.textContent = introSlideIndex === slides.length - 1 ? t("introEnter") : t("introNext");
  }

  const video = document.getElementById("introTouchVideo");
  if (!video) return;
  if (introSlideIndex !== 1) {
    video.pause();
  } else if (!introVideoHasPlayed && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    introVideoHasPlayed = true;
    video.play().catch(() => {});
  }
}

function setIntroSlide(index) {
  const total = document.querySelectorAll("[data-intro-slide]").length;
  introSlideIndex = Math.max(0, Math.min(index, total - 1));
  renderIntroCarousel();
  scheduleDraftSave();
}

function changeIntroSlide(delta) {
  const total = document.querySelectorAll("[data-intro-slide]").length;
  if (delta > 0 && introSlideIndex === total - 1) {
    showStep("s0");
    return;
  }
  setIntroSlide(introSlideIndex + delta);
}

function setLang(nextLang) {
  lang = nextLang;
  localStorage.setItem("survey_language", lang);
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.getElementById("langZh").classList.toggle("active", lang === "zh");
  document.getElementById("langEn").classList.toggle("active", lang === "en");
  document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => { el.placeholder = t(el.dataset.i18nPlaceholder); });
  renderAgeOptions();
  renderCountryOptions();
  document.getElementById("btnToMapsText").textContent = t("continueBtn");
  renderIntroCarousel();
  r1();
  syncIntentSelectionUI();
  if (document.getElementById("sContext").classList.contains("active")) renderContextQuestion();
  setPaint(paint);
  if (document.getElementById("s2").classList.contains("active")) load();
  if (document.getElementById("s3").classList.contains("active")) r3();
  if (document.getElementById("s4").classList.contains("active")) renderSubmissionResult();
  prog();
  scheduleDraftSave();
}

// ============================================================
// INTENTS
// ============================================================
const INTENTS = [
  { id:"comfort", zh:"安慰", en:"Comfort", desc:{ zh:"在人们悲伤、压力、焦虑或脆弱时，机器人通过触碰传达关心、抚慰和情感支持，使其感到被理解和支持。", en:"When people are sad, stressed, anxious, or vulnerable, the robot uses touch to convey care, soothing, and emotional support, helping them feel understood and supported." } },
  { id:"calming", zh:"冷静", en:"Calming", desc:{ zh:"在人们紧张、激动、害怕或高唤醒时，机器人通过触碰帮助其平复情绪、降低紧张并恢复稳定。", en:"When people are tense, agitated, afraid, or highly aroused, the robot uses touch to help them settle down, reduce tension, and regain emotional stability." } },
  { id:"affection", zh:"亲近", en:"Affection", desc:{ zh:"机器人通过触碰表达喜爱、亲近、温柔、依恋、信任或情感上的亲密感。", en:"The robot uses touch to express fondness, closeness, tenderness, attachment, trust, or emotional affection." } },
  { id:"salutation", zh:"问候", en:"Salutation", desc:{ zh:"在与人们的互动开始或结束时，机器人通过触碰表达欢迎、问候、告别或礼貌性确认。", en:"At the beginning or end of an interaction with people, the robot uses touch to express a greeting, farewell, welcome, or polite acknowledgment." } },
  { id:"appreciation", zh:"赞赏", en:"Appreciation", desc:{ zh:"在人们表现出值得肯定的行为、能力或成果后，机器人通过触碰表达认可、肯定或赞许。", en:"After people have demonstrated a valued action, ability, or achievement, the robot uses touch to express recognition, approval, or praise." } },
  { id:"gratitude", zh:"感谢", en:"Gratitude", desc:{ zh:"在人们帮助了机器人或做出有益行为后，机器人通过触碰表达谢意。", en:"After people have helped the robot or done something beneficial, the robot uses touch to express thanks." } },
  { id:"encouragement", zh:"鼓励", en:"Encouragement", desc:{ zh:"在人们面临压力、挑战、不确定或缺乏信心时，机器人通过触碰传达支持和信心，鼓励其继续行动。", en:"When people face pressure, challenge, uncertainty, or self-doubt, the robot uses touch to convey support and confidence, encouraging them to continue." } },
  { id:"presence", zh:"同在", en:"Presence", desc:{ zh:"在人们感到孤单、疏离或需要陪伴时，机器人通过触碰表达“我在这里”，传达共同存在或陪伴感。", en:"When people feel alone, distant, or in need of company, the robot uses touch to convey “I am here with you,” shared presence, or companionship." } },
  { id:"playful", zh:"嬉戏", en:"Playfulness", desc:{ zh:"在人们处于轻松或可玩笑的状态时，机器人通过触碰表达玩笑、调皮、逗趣或轻松互动。", en:"When people are in a relaxed or playful state, the robot uses touch to express joking, teasing, playfulness, or lighthearted interaction." } },
  { id:"attention_getting", zh:"引起注意", en:"Attention-getting", desc:{ zh:"在人们分心、忽略、忙于他事而未注意，或需要更加关注某事时，机器人通过触碰改变其注意焦点或强调信息的重要性。", en:"When people are distracted, have overlooked something, are occupied with something else, or need to pay closer attention, the robot uses touch to redirect or heighten their attention." } },
  { id:"guidance", zh:"引导", en:"Guidance", desc:{ zh:"在人们需要协助或调整动作、方向或行为时，机器人通过触碰提供帮助与指引。", en:"When people need help or adjustment, the robot uses touch to guide their action, direction, or movement." } },
  { id:"request", zh:"请求", en:"Request", desc:{ zh:"在机器人需要人们的回应、确认、允许、帮助时，其通过触碰表达询问、祈使或请求。", en:"When the robot needs a response, confirmation, permission, or help from people, it uses touch to express an inquiry, directive, or request." } },
  { id:"apology", zh:"致歉", en:"Apology", desc:{ zh:"在机器人造成误解、冒犯、失误或让人们不适后，其通过触碰表达歉意、尝试修复互动并请求谅解。", en:"After the robot has caused a misunderstanding, offense, or error, or made people uncomfortable, it uses touch to express an apology, attempt to repair the interaction, and seek forgiveness." } },
  { id:"refusal", zh:"拒绝", en:"Refusal", desc:{ zh:"在人们靠近、提出请求或试图继续互动时，机器人通过触碰表达不同意、保持边界或无法继续当前互动。", en:"When people approach, make a request, or attempt to continue an interaction, the robot uses touch to express disagreement, maintain a boundary, or indicate that it cannot continue the current interaction." } },
];

const TOUCH_REFERENCES = {
  comfort: {
    zh:"在人际社交中，与安慰有关的意图可能通过握住或扶住对方、轻拍肩背、缓慢抚摸或拥抱等触碰方式表达。",
    en:"In interpersonal interaction, intentions related to comfort may be expressed through holding or supporting the other person, patting the shoulder or back, slow stroking, or hugging."
  },
  calming: {
    zh:"在人际社交中，与帮助他人冷静有关的意图可能通过稳定扶持、拥抱、缓慢抚摸或轻拍等触碰方式表达。",
    en:"In interpersonal interaction, intentions related to calming another person may be expressed through steady support, hugging, slow stroking, or gentle patting."
  },
  affection: {
    zh:"在人际社交中，与亲近有关的意图可能通过牵手、挽臂、拥抱、抚摸手臂或触碰脸颊等触碰方式表达。",
    en:"In interpersonal interaction, intentions related to affection may be expressed through holding hands, linking arms, hugging, stroking the arm, or touching the cheek."
  },
  salutation: {
    zh:"在人际社交中，与问候或告别有关的意图可能通过握手、握掌、短暂拥抱或轻拍肩臂等触碰方式表达。",
    en:"In interpersonal interaction, intentions related to greetings or farewells may be expressed through handshakes, handclasps, brief hugs, or light pats on the shoulder or arm."
  },
  appreciation: {
    zh:"在人际社交中，与赞赏他人表现或成果有关的意图可能通过握手、击掌、拍肩背或庆祝性拥抱等触碰方式表达。",
    en:"In interpersonal interaction, intentions related to appreciating another person's performance or achievement may be expressed through handshakes, high-fives, pats on the shoulder or back, or celebratory hugs."
  },
  gratitude: {
    zh:"在人际社交中，与感谢有关的意图可能通过握手、短暂握住对方的手或手臂、轻拍肩背等触碰方式表达。",
    en:"In interpersonal interaction, intentions related to gratitude may be expressed through handshakes, briefly holding the other person's hand or arm, or lightly patting the shoulder or back."
  },
  encouragement: {
    zh:"在人际社交中，与鼓励有关的意图可能通过拍肩或拍背、坚定握掌、节奏性轻拍手臂或轻推向前等触碰方式表达。",
    en:"In interpersonal interaction, intentions related to encouragement may be expressed through pats on the shoulder or back, firm handclasps, rhythmic arm pats, or a light forward push."
  },
  presence: {
    zh:"在人际社交中，与传达“我在这里”或共同存在感有关的意图可能通过牵手、挽臂、搭肩、侧抱或身体靠触等触碰方式表达。",
    en:"In interpersonal interaction, intentions related to shared presence or “I am here with you” may be expressed through holding hands, linking arms, placing an arm around the shoulder, side hugs, or bodily leaning."
  },
  playful: {
    zh:"在人际社交中，与嬉戏有关的意图可能通过轻戳、捏、挠痒、轻推、抓握、拉脸颊或假装打闹等触碰方式表达。",
    en:"In interpersonal interaction, intentions related to playfulness may be expressed through light pokes, pinches, tickling, gentle pushes, grabbing, cheek pulling, or mock rough-and-tumble actions."
  },
  attention_getting: {
    zh:"在人际社交中，与引起注意有关的意图可能通过短暂点触或轻拍对方的肩、手臂或上背等触碰方式表达。",
    en:"In interpersonal interaction, intentions related to getting another person's attention may be expressed through a brief touch or light pat on the shoulder, arm, or upper back."
  },
  guidance: {
    zh:"在人际社交中，与引导有关的意图可能通过扶住肩部或手臂、牵引手部、轻推背部或调整身体方向等触碰方式表达。",
    en:"In interpersonal interaction, intentions related to guidance may be expressed through holding the shoulder or arm, leading by the hand, lightly pushing the back, or adjusting bodily direction."
  },
  request: {
    zh:"在人际社交中，与请求回应、允许或帮助有关的意图可能通过短暂触碰、轻拍或握住对方的手、手臂或肩部等触碰方式表达。",
    en:"In interpersonal interaction, intentions related to requesting a response, permission, or help may be expressed through briefly touching, patting, or holding the other person's hand, arm, or shoulder."
  },
  apology: {
    zh:"在人际社交中，与致歉或和解有关的意图可能通过握持、轻拍、抚背或拥抱等触碰方式表达。",
    en:"In interpersonal interaction, intentions related to apology or reconciliation may be expressed through holding, patting, back stroking, or hugging."
  },
  refusal: {
    zh:"在人际社交中，与拒绝有关的意图可能通过推开、移开对方肢体或解除正在发生的接触等触碰方式表达。",
    en:"In interpersonal interaction, intentions related to refusal may be expressed through pushing away, moving the other person's limb, or ending ongoing contact."
  }
};

const RELATIONSHIP_LEVELS = [
  { value: 1, labelKey: "closeness1" },
  { value: 2, labelKey: "closeness2" },
  { value: 3, labelKey: "closeness3" },
  { value: 4, labelKey: "closeness4" },
  { value: 5, labelKey: "closeness5" },
  { value: 6, labelKey: "closeness6" },
  { value: 7, labelKey: "closeness7" },
];

const CONVENTION_LEVELS = [
  { value: 1, labelKey: "convention1" },
  { value: 2, labelKey: "convention2" },
  { value: 3, labelKey: "convention3" },
  { value: 4, labelKey: "convention4" },
  { value: 5, labelKey: "convention5" },
];

const INTERACTION_CONTEXTS = [
  { id: "public_service", labelKey: "ctxPublicService", descKey: "ctxPublicServiceDesc" },
  { id: "companionship", labelKey: "ctxCompanionship", descKey: "ctxCompanionshipDesc" },
  { id: "care_health", labelKey: "ctxCare", descKey: "ctxCareDesc" },
  { id: "learning_training", labelKey: "ctxLearning", descKey: "ctxLearningDesc" },
  { id: "task_collaboration", labelKey: "ctxTask", descKey: "ctxTaskDesc" },
  { id: "leisure_entertainment", labelKey: "ctxLeisure", descKey: "ctxLeisureDesc" },
  { id: "other", labelKey: "ctxOther", descKey: "ctxOtherDesc" },
];

// ============================================================
// SVG BODY MAP REGIONS
// ============================================================
// Region ids must match in both SVG assets so answers share one data schema.
const BODY_MAP_PROFILES = {
  female: {
    id: "female_bodymap_2d_svg_v2",
    url: "assets/female_bodymap.svg?v=2",
  },
  male: {
    id: "male_bodymap_2d_svg_v4",
    url: "assets/male_bodymap.svg?v=4",
  },
};
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
  return lang === "zh" ? region.zh : region.en;
}

function intentDisplayName(id) {
  const intent = INTENTS.find(i => i.id === id);
  if (!intent) return id;
  return lang === "zh" ? intent.zh : intent.en;
}

function isMapComplete(intentId) {
  const onCurrentMap = document.getElementById("s2")?.classList.contains("active") && order[idx] === intentId;
  const d = onCurrentMap ? cur : (data[intentId] || {});
  const hasMarks = Object.values(d).some(value => value === 1 || value === -1);
  return hasMarks || !!intentMeta[intentId]?.empty_map_confirmed;
}

function isIntentComplete(intentId) {
  const meta = intentMeta[intentId] || {};
  return !!(
    meta.relationship_closeness &&
    hasValidInteractionContext(meta) &&
    meta.interpersonal_reference &&
    isMapComplete(intentId)
  );
}

function renderIntentProgress(targetId, currentId) {
  const target = document.getElementById(targetId);
  if (!target) return;
  target.innerHTML = order.map(id => {
    const status = id === currentId
      ? "current"
      : (isIntentComplete(id) ? "done" : "pending");
    const labelKey = status === "current"
      ? "intentProgressCurrent"
      : (status === "done" ? "intentProgressDone" : "intentProgressPending");
    return `
      <button type="button" class="intent-progress-chip ${status}" onclick="jumpToWorkflowIntent('${id}')">
        <span>${intentDisplayName(id)}</span>
        <span class="status">${t(labelKey)}</span>
      </button>`;
  }).join("");
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
let noIntentSelected = false;
let lastWorkflowStep = "sContext";
let draftRestoreInProgress = false;
let draftReady = false;
let draftSaveTimer = null;
const total = ALL_REGIONS.length;
const SURVEY_DRAFT_KEY = "touch_with_robots_survey_draft_v1";
const surveyStartedAt = new Date();
let currentStepId = "sIntro";
let currentStepEnteredAt = Date.now();
let submissionResultState = null;
const qualityLog = {
  stepDurationsMs: {},
  stepVisits: { sIntro: 1 },
  mapInteractions: {},
  mapResets: {},
  mapEmptyConfirmations: {},
};

function recordStepTime() {
  const now = Date.now();
  const elapsed = Math.max(0, now - currentStepEnteredAt);
  qualityLog.stepDurationsMs[currentStepId] = (qualityLog.stepDurationsMs[currentStepId] || 0) + elapsed;
  currentStepEnteredAt = now;
}

function recordStepTransition(nextStepId) {
  if (nextStepId !== currentStepId) {
    recordStepTime();
    currentStepId = nextStepId;
    qualityLog.stepVisits[nextStepId] = (qualityLog.stepVisits[nextStepId] || 0) + 1;
  }
}

function ensureMeta(intentId) {
  if (!intentMeta[intentId]) {
    intentMeta[intentId] = {
      relationship_closeness: null,
      interaction_contexts: [],
      interaction_context_other: "",
      interpersonal_reference: null,
      empty_map_confirmed: false,
    };
  }
  return intentMeta[intentId];
}

function currentActiveStepId() {
  return document.querySelector(".step.active")?.id || currentStepId || "sIntro";
}

function clearSurveyDraft() {
  localStorage.removeItem(SURVEY_DRAFT_KEY);
}

function collectDraftPayload() {
  const activeStep = currentActiveStepId();
  return {
    saved_at: new Date().toISOString(),
    study_version: "3.29",
    lang,
    active_step: activeStep === "s4" ? "s3" : activeStep,
    introSlideIndex,
    consent_checked: !!document.getElementById("consentBox")?.checked,
    demographics: {
      age: document.getElementById("age")?.value || demographics.age || "",
      gender: document.getElementById("gender")?.value || demographics.gender || "",
      nationality: document.getElementById("nationality")?.value || demographics.nationality || "",
    },
    sel: Array.from(sel),
    order,
    idx,
    contextIdx,
    data,
    intentMeta,
    cur,
    paint,
    noIntentSelected,
    lastWorkflowStep,
  };
}

function saveSurveyDraftNow() {
  if (!draftReady || draftRestoreInProgress) return;
  try {
    localStorage.setItem(SURVEY_DRAFT_KEY, JSON.stringify(collectDraftPayload()));
  } catch (error) {
    console.warn("Unable to save survey draft", error);
  }
}

function scheduleDraftSave() {
  if (!draftReady || draftRestoreInProgress) return;
  clearTimeout(draftSaveTimer);
  draftSaveTimer = setTimeout(saveSurveyDraftNow, 180);
}

function restoreSurveyDraft() {
  const raw = localStorage.getItem(SURVEY_DRAFT_KEY);
  if (!raw) {
    resetConsentState();
    return false;
  }
  let draft;
  try {
    draft = JSON.parse(raw);
  } catch {
    clearSurveyDraft();
    resetConsentState();
    return false;
  }
  if (draft.study_version && draft.study_version !== "3.29") {
    clearSurveyDraft();
    resetConsentState();
    return false;
  }

  draftRestoreInProgress = true;
  try {
    if (draft.lang === "zh" || draft.lang === "en") {
      setLang(draft.lang);
    }
    introSlideIndex = Number.isInteger(draft.introSlideIndex) ? draft.introSlideIndex : 0;

    const age = document.getElementById("age");
    const gender = document.getElementById("gender");
    const nationality = document.getElementById("nationality");
    if (age && draft.demographics?.age) age.value = draft.demographics.age;
    if (gender && draft.demographics?.gender) gender.value = draft.demographics.gender;
    if (nationality && draft.demographics?.nationality) nationality.value = draft.demographics.nationality;
    demographics = {
      age: age?.value || draft.demographics?.age || "",
      gender: gender?.value || draft.demographics?.gender || "",
      nationality: nationality?.value || draft.demographics?.nationality || "",
    };

    const validIntentIds = new Set(INTENTS.map(intent => intent.id));
    sel = new Set((Array.isArray(draft.sel) ? draft.sel : []).filter(id => validIntentIds.has(id)));
    order = (Array.isArray(draft.order) ? draft.order : Array.from(sel)).filter(id => validIntentIds.has(id) && sel.has(id));
    if (!order.length && sel.size) order = Array.from(sel);
    idx = Math.max(0, Math.min(Number.isInteger(draft.idx) ? draft.idx : 0, Math.max(order.length - 1, 0)));
    contextIdx = Math.max(0, Math.min(Number.isInteger(draft.contextIdx) ? draft.contextIdx : idx, Math.max(order.length - 1, 0)));
    data = draft.data && typeof draft.data === "object" ? draft.data : {};
    intentMeta = draft.intentMeta && typeof draft.intentMeta === "object" ? draft.intentMeta : {};
    cur = draft.cur && typeof draft.cur === "object" ? draft.cur : {};
    paint = draft.paint === -1 ? -1 : 1;
    noIntentSelected = !!draft.noIntentSelected && sel.size === 0;
    lastWorkflowStep = draft.lastWorkflowStep === "s2" ? "s2" : "sContext";
    initIntentMeta();

    const consentBox = document.getElementById("consentBox");
    if (consentBox) {
      consentBox.checked = !!draft.consent_checked;
      consentBox.defaultChecked = false;
      updConsent();
    }

    renderIntroCarousel();
    r1();
    syncIntentSelectionUI();
    setPaint(paint);

    let step = ["sIntro", "s0", "sInfo", "s1", "sContext", "s2", "s3"].includes(draft.active_step)
      ? draft.active_step
      : "sIntro";
    if ((step === "sContext" || step === "s2") && !order.length) {
      step = noIntentSelected ? "s3" : "s1";
    }
    showStep(step);
    if (step === "sContext" && order.length) renderContextQuestion();
    if (step === "s2" && order.length) {
      load();
      ensureBodyMap()
        .then(updCol)
        .catch(() => {});
    }
    if (step === "s3") r3();
    prog();
    return true;
  } finally {
    draftRestoreInProgress = false;
    scheduleDraftSave();
  }
}

function recordMapInteraction(intentId) {
  qualityLog.mapInteractions[intentId] = (qualityLog.mapInteractions[intentId] || 0) + 1;
}

function recordMapReset(intentId) {
  qualityLog.mapResets[intentId] = (qualityLog.mapResets[intentId] || 0) + 1;
}

function showStep(id) {
  const activeElement = document.activeElement;
  if (activeElement instanceof HTMLElement &&
      activeElement.matches("input, textarea, select")) {
    activeElement.blur();
  }
  recordStepTransition(id);
  document.querySelectorAll(".step").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  prog();
  window.scrollTo({ top: 0, behavior: "auto" });
  requestAnimationFrame(updateStickyIntentState);
  scheduleDraftSave();
}

function updConsent() {
  document.getElementById("btnConsent").disabled = !document.getElementById("consentBox").checked;
  scheduleDraftSave();
}
function resetConsentState() {
  const consentBox = document.getElementById("consentBox");
  if (!consentBox) return;
  consentBox.checked = false;
  consentBox.defaultChecked = false;
  updConsent();
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
  const validAge = age === "100_plus" || (Number(age) >= 18 && Number(age) <= 99);
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
  if (bodyMap) bodyMap.setPaintPreview(paint);
  scheduleDraftSave();
}

// ============================================================
// STEP 1
// ============================================================
function intentIconMarkup(id) {
  const icon = window.INTENT_ICONS?.[id];
  if (!icon) return "";
  return `<svg class="intent-icon" viewBox="${icon.viewBox}" aria-hidden="true">${icon.content}</svg>`;
}

function replayIntentAnimation(card) {
  if (!card || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  card.classList.remove("is-animating");
  void card.offsetWidth;
  card.classList.add("is-animating");
  window.setTimeout(() => card.classList.remove("is-animating"), 650);
}

function r1() {
  document.getElementById("intentGrid").innerHTML = INTENTS.map(i => `
    <div class="intent-card" id="c-${i.id}" onclick="tog('${i.id}')" role="checkbox" tabindex="0"
         aria-checked="${sel.has(i.id)}" onkeydown="intentCardKey(event, '${i.id}')">
      <div class="dot"></div>
      <div class="intent-icon-wrap">${intentIconMarkup(i.id)}</div>
      <div class="intent-copy">
        <div class="name">${lang === "zh" ? i.zh : i.en}</div>
        <div class="desc">${i.desc[lang]}</div>
      </div>
    </div>`).join("");
}
function intentCardKey(event, id) {
  if (event.key !== "Enter" && event.key !== " ") return;
  event.preventDefault();
  tog(id);
}
function syncIntentSelectionUI() {
  INTENTS.forEach(i => {
    const c = document.getElementById("c-"+i.id);
    if (c) {
      c.classList.toggle("sel", sel.has(i.id));
      c.setAttribute("aria-checked", String(sel.has(i.id)));
    }
  });
  const noIntentBox = document.getElementById("noIntentBox");
  const noIntentOption = document.getElementById("noIntentOption");
  if (noIntentBox) noIntentBox.checked = noIntentSelected;
  if (noIntentOption) noIntentOption.classList.toggle("selected", noIntentSelected);
  updBtn();
}
function tog(id) {
  if (noIntentSelected) {
    noIntentSelected = false;
    const noIntentBox = document.getElementById("noIntentBox");
    const noIntentOption = document.getElementById("noIntentOption");
    if (noIntentBox) noIntentBox.checked = false;
    if (noIntentOption) noIntentOption.classList.remove("selected");
  }
  const willSelect = !sel.has(id);
  willSelect ? sel.add(id) : sel.delete(id);
  const card = document.getElementById("c-"+id);
  card.classList.toggle("sel", willSelect);
  card.setAttribute("aria-checked", String(willSelect));
  if (willSelect) replayIntentAnimation(card);
  updBtn();
  scheduleDraftSave();
}
function selAll(v) {
  noIntentSelected = false;
  const noIntentBox = document.getElementById("noIntentBox");
  const noIntentOption = document.getElementById("noIntentOption");
  if (noIntentBox) noIntentBox.checked = false;
  if (noIntentOption) noIntentOption.classList.remove("selected");
  INTENTS.forEach(i => {
    v ? sel.add(i.id) : sel.delete(i.id);
    const c = document.getElementById("c-"+i.id);
    if (c) {
      c.classList.toggle("sel", v);
      c.setAttribute("aria-checked", String(v));
    }
  });
  updBtn();
  scheduleDraftSave();
}
function toggleNoIntent(checked) {
  if (sel.size > 0) {
    const noIntentBox = document.getElementById("noIntentBox");
    if (noIntentBox) noIntentBox.checked = false;
    return;
  }
  noIntentSelected = checked;
  document.getElementById("noIntentOption")?.classList.toggle("selected", checked);
  updBtn();
  scheduleDraftSave();
}
function updateNoIntentOptionUI() {
  const disabled = sel.size > 0;
  const noIntentBox = document.getElementById("noIntentBox");
  const noIntentOption = document.getElementById("noIntentOption");
  if (disabled && noIntentSelected) noIntentSelected = false;
  if (noIntentBox) {
    noIntentBox.disabled = disabled;
    noIntentBox.checked = noIntentSelected;
  }
  if (noIntentOption) {
    noIntentOption.classList.toggle("disabled", disabled);
    noIntentOption.classList.toggle("selected", noIntentSelected);
    noIntentOption.setAttribute("aria-disabled", String(disabled));
  }
}
function updBtn() {
  const b = document.getElementById("btnToMaps");
  b.disabled = sel.size === 0 && !noIntentSelected;
  document.getElementById("selCount").textContent = sel.size;
  document.getElementById("btnToMapsText").textContent = t("continueBtn");
  updateNoIntentOptionUI();
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
    const meta = ensureMeta(id);
    if (!Array.isArray(meta.interaction_contexts)) {
      intentMeta[id].interaction_contexts = intentMeta[id].interaction_context
        ? [intentMeta[id].interaction_context]
        : [];
    }
    if (typeof meta.interaction_context_other !== "string") {
      meta.interaction_context_other = "";
    }
    if (!Number.isInteger(meta.interpersonal_reference)) {
      meta.interpersonal_reference = null;
    }
    if (typeof meta.empty_map_confirmed !== "boolean") {
      meta.empty_map_confirmed = false;
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

function contextLabels(contextIds) {
  return (Array.isArray(contextIds) ? contextIds : [])
    .map(contextLabel)
    .filter(Boolean);
}

function hasValidInteractionContext(meta) {
  const contexts = Array.isArray(meta?.interaction_contexts) ? meta.interaction_contexts : [];
  if (!contexts.length) return false;
  return !contexts.includes("other") || !!meta.interaction_context_other?.trim();
}

function contextDisplayLabels(meta) {
  return (Array.isArray(meta?.interaction_contexts) ? meta.interaction_contexts : [])
    .map(contextId => {
      if (contextId !== "other") return contextLabel(contextId);
      const detail = meta.interaction_context_other?.trim();
      return detail ? `${t("ctxOther")}: ${detail}` : t("ctxOther");
    })
    .filter(Boolean);
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function conventionLabel(value) {
  const level = CONVENTION_LEVELS.find(item => item.value === Number(value));
  return level ? `${t(level.labelKey)}（${t(level.descKey)}）` : "";
}

function conventionShortLabel(value) {
  const level = CONVENTION_LEVELS.find(item => item.value === Number(value));
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
  renderIntentProgress("contextIntentProgress", id);
  const relationshipOptions = RELATIONSHIP_LEVELS.map(level => `
    <button type="button"
      class="scale-option ${meta.relationship_closeness === level.value ? "selected" : ""}"
      onclick="setRelationship('${id}', ${level.value})">
      <span class="scale-number">${level.value}</span>
      ${iosDiagram(level.value)}
      <span class="scale-label">${t(level.labelKey)}</span>
    </button>`).join("");
  const contextOptions = INTERACTION_CONTEXTS.map(context => {
    const selected = meta.interaction_contexts?.includes(context.id);
    if (context.id === "other") {
      const otherContextInput = selected ? `
        <label class="other-context-field" for="other-context-${id}">
          <input id="other-context-${id}" type="text" maxlength="160"
            value="${escapeHtml(meta.interaction_context_other || "")}"
            placeholder="${escapeHtml(t("ctxOtherPlaceholder"))}"
            oninput="setOtherContextText('${id}', this.value)">
        </label>` : "";
      return `
        <div class="context-option-combo ${selected ? "selected" : ""}">
          <button type="button"
            class="context-option ${selected ? "selected" : ""}"
            onclick="setInteractionContext('${id}', '${context.id}')">
            <span class="context-name">${t(context.labelKey)}</span>
            <span class="context-desc">${t(context.descKey)}</span>
          </button>
          ${otherContextInput}
        </div>`;
    }
    return `
      <button type="button"
        class="context-option ${selected ? "selected" : ""}"
        onclick="setInteractionContext('${id}', '${context.id}')">
        <span class="context-name">${t(context.labelKey)}</span>
        <span class="context-desc">${t(context.descKey)}</span>
      </button>`;
  }).join("");
  const conventionOptions = CONVENTION_LEVELS.map(level => `
    <button type="button"
      class="convention-option ${meta.interpersonal_reference === level.value ? "selected" : ""}"
      onclick="setInterpersonalReference('${id}', ${level.value})">
      <span class="convention-number">${level.value}</span>
      <span class="convention-label">${t(level.labelKey)}</span>
    </button>`).join("");
  const touchReference = TOUCH_REFERENCES[id]?.[lang] || "";
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
        <div class="context-options" role="group" aria-label="${t("contextQuestion")}">
          ${contextOptions}
        </div>
      </div>
      <div class="context-block convention-block">
        <div class="context-question">${t("conventionQuestion")}</div>
        <div class="touch-reference">
          <span class="touch-reference-title">${t("conventionReferenceTitle")}</span>
          <span class="touch-reference-text">${touchReference}</span>
        </div>
        <div class="convention-scale" role="radiogroup" aria-label="${t("conventionQuestion")}">
          ${conventionOptions}
        </div>
      </div>
    </section>`;
  document.getElementById("contextCounter").textContent = `${contextIdx * 2 + 1} / ${order.length * 2}`;
  document.getElementById("btnPrevContext").textContent = t("prevPage");
  document.getElementById("btnPrevContext").disabled = false;
  document.getElementById("btnNextContext").textContent = t("nextPage");
  document.getElementById("btnNextContext").style.display = "";
}

function setRelationship(intentId, value) {
  ensureMeta(intentId).relationship_closeness = value;
  document.getElementById("contextError").classList.remove("show");
  renderContextQuestion();
  scheduleDraftSave();
}

function setInteractionContext(intentId, contextId) {
  const meta = ensureMeta(intentId);
  if (!Array.isArray(meta.interaction_contexts)) meta.interaction_contexts = [];
  const contexts = meta.interaction_contexts;
  const existingIndex = contexts.indexOf(contextId);
  if (existingIndex >= 0) {
    contexts.splice(existingIndex, 1);
    if (contextId === "other") meta.interaction_context_other = "";
  } else {
    contexts.push(contextId);
  }
  meta.interaction_context = contexts[0] || null;
  document.getElementById("contextError").classList.remove("show");
  renderContextQuestion();
  if (contextId === "other" && contexts.includes("other")) {
    document.getElementById(`other-context-${intentId}`)?.focus();
  }
  scheduleDraftSave();
}

function setOtherContextText(intentId, value) {
  ensureMeta(intentId).interaction_context_other = value.slice(0, 160);
  document.getElementById("contextError").classList.remove("show");
  scheduleDraftSave();
}

function setInterpersonalReference(intentId, value) {
  ensureMeta(intentId).interpersonal_reference = value;
  document.getElementById("contextError").classList.remove("show");
  renderContextQuestion();
  scheduleDraftSave();
}

function currentContextAnswered() {
  const id = order[contextIdx];
  return !!(
    intentMeta[id]?.relationship_closeness &&
    hasValidInteractionContext(intentMeta[id]) &&
    intentMeta[id]?.interpersonal_reference
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
    hasValidInteractionContext(intentMeta[id]) &&
    intentMeta[id]?.interpersonal_reference
  );
  document.getElementById("contextError").classList.toggle("show", !ok);
  return ok;
}

// ============================================================
// BODY MAP
// ============================================================
let bodyMap = null;
let bodyMapReady = null;
let bodyMapProfileId = null;
let bodyMapReadyProfileId = null;

function currentBodyMapConfig() {
  const gender = demographics.gender || document.getElementById("gender")?.value;
  return gender === "female" ? BODY_MAP_PROFILES.female : BODY_MAP_PROFILES.male;
}

function currentBodyProfile() {
  return currentBodyMapConfig().id;
}

function currentBodyMapAsset() {
  return currentBodyMapConfig().url;
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

async function ensureBodyMap() {
  const profile = currentBodyMapConfig();
  if (bodyMap && bodyMapProfileId === profile.id) return bodyMap;

  if (bodyMapProfileId && bodyMapProfileId !== profile.id) {
    bodyMap = null;
    bodyMapReady = null;
    bodyMapProfileId = null;
    bodyMapReadyProfileId = null;
    document.getElementById("bodyMap")?.replaceChildren();
  }

  if (!bodyMapReady || bodyMapReadyProfileId !== profile.id) {
    setBodyMapStatus("bodyMapLoading");
    bodyMapReadyProfileId = profile.id;
    bodyMapReady = import("./body-map-svg.js?v=2")
      .then(async module => {
        const map = new module.BodyMapSVG({
          container: document.getElementById("bodyMap"),
          svgUrl: profile.url,
          regions: bodyMapRegionsForRenderer(),
          onRegionClick: (regionId, event) => {
            const intentId = order[idx];
            cur[regionId] = (cur[regionId] === paint) ? 0 : paint;
            recordMapInteraction(intentId);
            if (hasCurrentMapMarks()) {
              ensureMeta(intentId).empty_map_confirmed = false;
            }
            updCol();
            updateEmptyMapConfirmUI();
            renderIntentProgress("mapIntentProgress", intentId);
            if (isTouchLikeInput(event)) showTT(regionLabel(REGION_BY_ID.get(regionId)), event, true);
            scheduleDraftSave();
          },
          onRegionHover: (regionId, event) => {
            const region = REGION_BY_ID.get(regionId);
            if (region) showTT(regionLabel(region), event);
          },
          onRegionLeave: hideTT,
        });
        await map.init();
        bodyMap = map;
        bodyMapProfileId = profile.id;
        bodyMap.setPaintPreview(paint);
        setBodyMapStatus("", false);
        return map;
      })
      .catch(error => {
        console.error(error);
        bodyMapReady = null;
        bodyMapReadyProfileId = null;
        setBodyMapStatus("bodyMapLoadError");
        throw error;
      });
  }
  return bodyMapReady;
}

function updCol() {
  if (bodyMap) {
    bodyMap.setPaintPreview(paint);
    bodyMap.setStates(cur);
  }
}

function hasCurrentMapMarks() {
  return Object.values(cur).some(value => value === 1 || value === -1);
}

function setEmptyMapConfirmation(checked) {
  const id = order[idx];
  if (!id) return;
  ensureMeta(id).empty_map_confirmed = checked;
  qualityLog.mapEmptyConfirmations[id] = checked;
  document.getElementById("mapError")?.classList.remove("show");
  renderIntentProgress("mapIntentProgress", id);
  scheduleDraftSave();
}

function updateEmptyMapConfirmUI() {
  const id = order[idx];
  const checkbox = document.getElementById("emptyMapConfirm");
  if (!checkbox || !id) return;
  const hasMarks = hasCurrentMapMarks();
  const confirmed = !!ensureMeta(id).empty_map_confirmed;
  checkbox.checked = !hasMarks && confirmed;
  checkbox.disabled = hasMarks;
  document.querySelector(".empty-map-confirm")?.classList.toggle("disabled", hasMarks);
  document.getElementById("mapError")?.classList.remove("show");
}

function validateCurrentMap() {
  const id = order[idx];
  if (!id || hasCurrentMapMarks() || ensureMeta(id).empty_map_confirmed) return true;
  document.getElementById("mapError")?.classList.add("show");
  document.getElementById("emptyMapConfirm")?.focus();
  return false;
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
  tt.classList.add("show");

  const margin = 8;
  const gap = 14;
  const viewportWidth = window.visualViewport?.width || document.documentElement.clientWidth;
  const viewportHeight = window.visualViewport?.height || document.documentElement.clientHeight;
  const tooltipWidth = tt.offsetWidth;
  const tooltipHeight = tt.offsetHeight;

  let left = e.clientX + gap;
  if (left + tooltipWidth > viewportWidth - margin) {
    left = e.clientX - tooltipWidth - gap;
  }
  left = Math.max(margin, Math.min(left, viewportWidth - tooltipWidth - margin));

  let top = e.clientY - tooltipHeight - 12;
  if (top < margin) {
    top = e.clientY + 12;
  }
  top = Math.max(margin, Math.min(top, viewportHeight - tooltipHeight - margin));

  tt.style.left = `${left}px`;
  tt.style.top = `${top}px`;
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
let stickyIntentFrame = null;
function updateStickyIntentState() {
  if (stickyIntentFrame) return;
  stickyIntentFrame = requestAnimationFrame(() => {
    stickyIntentFrame = null;
    document.querySelectorAll("[data-sticky-intent]").forEach(header => {
      const active = header.closest(".step")?.classList.contains("active");
      const stickyTop = Number.parseFloat(getComputedStyle(header).top) || 0;
      const stuck = active && window.scrollY > 0 &&
        header.getBoundingClientRect().top <= stickyTop + 1;
      header.classList.toggle("is-stuck", stuck);
    });
  });
}
window.addEventListener("scroll", () => {
  hideTT();
  updateStickyIntentState();
}, { passive: true });
window.addEventListener("resize", updateStickyIntentState, { passive: true });

// ============================================================
// NAVIGATION
// ============================================================
function goContext() {
  const previousOrder = order;
  const previousContextIdx = contextIdx;
  const previousMapIdx = idx;
  const previousWorkflowStep = lastWorkflowStep;
  order = [...sel];
  if (order.length === 0) {
    if (!noIntentSelected) return;
    data = {};
    intentMeta = {};
    idx = 0;
    contextIdx = 0;
    lastWorkflowStep = "sContext";
    showStep("s3");
    r3();
    return;
  }
  noIntentSelected = false;
  order.forEach(id => { if (!(id in data)) data[id] = {}; });
  initIntentMeta();
  const sameOrder = previousOrder.length === order.length &&
    previousOrder.every((id, i) => id === order[i]);
  if (sameOrder) {
    contextIdx = Math.min(previousContextIdx, order.length - 1);
    idx = Math.min(previousMapIdx, order.length - 1);
  } else {
    contextIdx = Math.min(contextIdx, order.length - 1);
    idx = Math.min(idx, order.length - 1);
  }
  if (previousWorkflowStep === "s2") {
    showStep("s2");
    load();
    ensureBodyMap()
      .then(updCol)
      .catch(() => {});
  } else {
    showStep("sContext");
    renderContextQuestion();
    prog();
  }
  window.scrollTo({ top: 0, behavior: "auto" });
}

function backToIntentSelectionFromContext() {
  showStep("s1");
  prog();
}

function backToIntentSelectionFromWorkflow() {
  if (document.getElementById("s2")?.classList.contains("active")) {
    lastWorkflowStep = "s2";
    save();
  } else if (document.getElementById("sContext")?.classList.contains("active")) {
    lastWorkflowStep = "sContext";
  }
  showStep("s1");
  prog();
  window.scrollTo({ top: 0, behavior: "auto" });
}

function jumpToWorkflowIntent(intentId) {
  const targetIndex = order.indexOf(intentId);
  if (targetIndex < 0) return;
  if (document.getElementById("s2")?.classList.contains("active")) {
    save();
    idx = targetIndex;
    lastWorkflowStep = "s2";
    load();
    ensureBodyMap()
      .then(updCol)
      .catch(() => {});
    window.scrollTo({ top: 0, behavior: "auto" });
    return;
  }
  contextIdx = targetIndex;
  lastWorkflowStep = "sContext";
  document.getElementById("contextError")?.classList.remove("show");
  renderContextQuestion();
  prog();
  window.scrollTo({ top: 0, behavior: "auto" });
}

function prevPageFromContext() {
  if (contextIdx === 0) {
    showStep("s1");
    return;
  }
  idx = contextIdx - 1;
  showStep("s2");
  load();
  ensureBodyMap()
    .then(updCol)
    .catch(() => {});
}

function nextContext() {
  if (!validateCurrentContextQuestion()) return;
  idx = contextIdx;
  lastWorkflowStep = "s2";
  showStep("s2");
  load();
  ensureBodyMap()
    .then(updCol)
    .catch(() => {
      // The visible status message is set in ensureBodyMap.
    });
  window.scrollTo({ top: 0, behavior: "auto" });
}

function goPreviousIntentFromContext() {
  if (contextIdx > 0) {
    idx = contextIdx - 1;
    showStep("s2");
    load();
    ensureBodyMap()
      .then(updCol)
      .catch(() => {});
  }
}

function prevContext() {
  goPreviousIntentFromContext();
}

async function goMaps() {
  nextContext();
}
function load() {
  const id = order[idx];
  const it = INTENTS.find(i => i.id === id);
  ensureMeta(id);
  setPaint(1);
  document.getElementById("mapIntentName").textContent = lang === "zh" ? it.zh : it.en;
  document.getElementById("mapIntentDesc").textContent = it.desc[lang];
  document.getElementById("counter").textContent = `${idx * 2 + 2} / ${order.length * 2}`;
  cur = { ...(data[id] || {}) };
  updCol();
  updateEmptyMapConfirmUI();
  renderIntentProgress("mapIntentProgress", id);
  document.getElementById("btnPrevMap").textContent = t("prevPage");
  document.getElementById("btnPrevMap").disabled = false;
  document.getElementById("btnNext").textContent = idx < order.length-1 ? t("nextPage") : t("reviewSubmit");
  document.getElementById("btnNext").style.display = "";
  prog();
  lastWorkflowStep = "s2";
  scheduleDraftSave();
}
function save() {
  const id = order[idx];
  if (id) data[id] = { ...cur };
  scheduleDraftSave();
}
function next() {
  if (!validateCurrentMap()) return;
  save();
  if (idx < order.length-1) {
    idx++;
    contextIdx = idx;
    lastWorkflowStep = "sContext";
    document.getElementById("contextError").classList.remove("show");
    showStep("sContext");
    renderContextQuestion();
  } else {
    done();
  }
}
function prev() { save(); if (idx > 0) { idx--; load(); } }
function prevPageFromMap() {
  save();
  contextIdx = idx;
  lastWorkflowStep = "sContext";
  showStep("sContext");
  renderContextQuestion();
  prog();
}
function backToIntentSelection() { save(); showStep("s1"); }
function backToContextQuestions() {
  save();
  contextIdx = idx;
  lastWorkflowStep = "sContext";
  showStep("sContext");
  renderContextQuestion();
  prog();
}
function resetCur() {
  const id = order[idx];
  if (id) {
    recordMapReset(id);
    ensureMeta(id).empty_map_confirmed = false;
    qualityLog.mapEmptyConfirmations[id] = false;
  }
  cur = {};
  updCol();
  updateEmptyMapConfirmUI();
  renderIntentProgress("mapIntentProgress", id);
  scheduleDraftSave();
}
function done() {
  if (!validateCurrentMap()) return;
  save();
  showStep("s3");
  r3();
  scheduleDraftSave();
}
function back() {
  if (order.length === 0 && noIntentSelected) {
    showStep("s1");
    return;
  }
  showStep("s2");
  load();
}
function prog() {
  const f = document.getElementById("pFill");
  const labelEl = document.getElementById("pTextLabel");
  const intentEl = document.getElementById("pTextIntent");
  const setProgressText = (label, currentIntent = null) => {
    document.getElementById("pText").classList.toggle("workflow", currentIntent !== null);
    labelEl.textContent = label;
    intentEl.textContent = currentIntent === null ? "" : t("progressIntentSummary")
      .replace("{current}", currentIntent)
      .replace("{total}", Math.max(order.length, 1));
  };
  if (document.getElementById("sIntro").classList.contains("active")) { f.style.width="6%"; setProgressText(t("progressIntro")); }
  else if (document.getElementById("s0").classList.contains("active")) { f.style.width="12%"; setProgressText(t("progressConsent")); }
  else if (document.getElementById("sInfo").classList.contains("active")) { f.style.width="22%"; setProgressText(t("progressInfo")); }
  else if (document.getElementById("s1").classList.contains("active")) { f.style.width="35%"; setProgressText(t("progressIntents")); }
  else if (document.getElementById("sContext").classList.contains("active")) {
    const pct = 35 + Math.round((contextIdx * 2 + 1)/Math.max(order.length * 2, 1) * 55);
    f.style.width=pct+"%"; setProgressText(t("progressContext"), contextIdx + 1);
  }
  else if (document.getElementById("s2").classList.contains("active")) {
    const pct = 35 + Math.round((idx * 2 + 2)/Math.max(order.length * 2, 1) * 55);
    f.style.width=pct+"%"; setProgressText(t("progressMap"), idx + 1);
  }
  else if (document.getElementById("s3").classList.contains("active")) { f.style.width="95%"; setProgressText(t("progressReview")); }
  else { f.style.width="100%"; setProgressText(t("progressStatus")); }
}

// ============================================================
// STEP 3
// ============================================================
function r3() {
  const reviewBackButton = document.querySelector("#s3 .nav .btn-s");
  if (order.length === 0 && noIntentSelected) {
    if (reviewBackButton) reviewBackButton.textContent = t("backToIntentSelection");
    document.getElementById("revGrid").innerHTML = `
      <div class="rev-card no-intent-review">
        <div class="r-name">${t("noIntentTitle")}</div>
        <div class="r-stats">${t("noIntentReview")}</div>
      </div>`;
    return;
  }
  if (reviewBackButton) reviewBackButton.textContent = t("backToMaps");
  document.getElementById("revGrid").innerHTML = order.map(id => {
    const it = INTENTS.find(i => i.id === id);
    const meta = intentMeta[id] || {};
    const d = data[id] || {};
    const entries = Object.entries(d);
    const accept = entries.filter(([,v]) => v === 1).length;
    const reject = entries.filter(([,v]) => v === -1).length;
    const neutral = total - accept - reject;
    const emptyConfirmed = accept + reject === 0 && meta.empty_map_confirmed;
    const summary = [
      relationshipLabel(meta.relationship_closeness),
      contextDisplayLabels(meta).join(" / "),
      conventionShortLabel(meta.interpersonal_reference)
    ].filter(Boolean).join(" · ");
    return `<div class="rev-card">
      <div class="r-name">${lang === "zh" ? it.zh : it.en}</div>
      <div class="r-meta">${escapeHtml(summary)}</div>
      <div class="r-stats">
        ${t("acceptCount")}: ${accept} &nbsp;|&nbsp; ${t("rejectCount")}: ${reject} &nbsp;|&nbsp; ${t("neutralCount")}: ${neutral}
      </div>
      ${emptyConfirmed ? `<div class="r-note">${t("emptyMapConfirmedBadge")}</div>` : ""}
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
      interaction_contexts: Array.isArray(meta.interaction_contexts) ? meta.interaction_contexts : [],
      interaction_context_labels: contextDisplayLabels(meta),
      interaction_context: Array.isArray(meta.interaction_contexts) ? meta.interaction_contexts.join(",") : null,
      interaction_context_label: contextDisplayLabels(meta).join(" / "),
      interaction_context_other: meta.interaction_context_other?.trim() || null,
      interpersonal_reference: meta.interpersonal_reference ?? null,
      interpersonal_reference_label: conventionLabel(meta.interpersonal_reference),
      interpersonal_touch_reference_zh: TOUCH_REFERENCES[id]?.zh || null,
      interpersonal_touch_reference_en: TOUCH_REFERENCES[id]?.en || null,
      empty_map_confirmed: !!meta.empty_map_confirmed
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
      interaction_contexts: Array.isArray(meta.interaction_contexts) ? meta.interaction_contexts : [],
      interaction_context_labels: contextDisplayLabels(meta),
      interaction_context: Array.isArray(meta.interaction_contexts) ? meta.interaction_contexts.join(",") : null,
      interaction_context_label: contextDisplayLabels(meta).join(" / "),
      interaction_context_other: meta.interaction_context_other?.trim() || null,
      interpersonal_reference: meta.interpersonal_reference ?? null,
      interpersonal_reference_label: conventionLabel(meta.interpersonal_reference),
      interpersonal_touch_reference_zh: TOUCH_REFERENCES[id]?.zh || null,
      interpersonal_touch_reference_en: TOUCH_REFERENCES[id]?.en || null,
      empty_map_confirmed: !!meta.empty_map_confirmed,
      map_interactions: qualityLog.mapInteractions[id] || 0,
      map_resets: qualityLog.mapResets[id] || 0
    };
  });
  return out;
}

function mapCompletionPayload() {
  const out = {};
  order.forEach(id => {
    const d = data[id] || {};
    const values = Object.values(d);
    const accept = values.filter(value => value === 1).length;
    const reject = values.filter(value => value === -1).length;
    out[id] = {
      marked_regions: accept + reject,
      acceptable_regions: accept,
      unacceptable_regions: reject,
      unmarked_regions: total - accept - reject,
      empty_map_confirmed: !!intentMeta[id]?.empty_map_confirmed,
      map_interactions: qualityLog.mapInteractions[id] || 0,
      map_resets: qualityLog.mapResets[id] || 0
    };
  });
  return out;
}

function qualityMetadataPayload() {
  recordStepTime();
  const completedAt = new Date();
  return {
    survey_started_at: surveyStartedAt.toISOString(),
    survey_completed_at: completedAt.toISOString(),
    total_duration_ms: completedAt.getTime() - surveyStartedAt.getTime(),
    step_durations_ms: qualityLog.stepDurationsMs,
    step_visits: qualityLog.stepVisits,
    map_interactions: qualityLog.mapInteractions,
    map_resets: qualityLog.mapResets,
    map_empty_confirmations: qualityLog.mapEmptyConfirmations,
    map_completion: mapCompletionPayload(),
    no_intent_selected: noIntentSelected,
    selected_intent_count: order.length,
    user_agent: navigator.userAgent,
    pointer: {
      coarse: !!window.matchMedia?.("(pointer: coarse)").matches,
      hover_none: !!window.matchMedia?.("(hover: none)").matches
    }
  };
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
  const qualityMetadata = qualityMetadataPayload();
  return {
    participant_id: getParticipantId(),
    timestamp: new Date().toISOString(),
    study_version: "3.29",
    consent_version: "2026-06-01",
    consent_given: document.getElementById("consentBox")?.checked || false,
    language: lang,
    age_group: fieldVal("age"),
    country: nationalityCode,
    gender: fieldVal("gender"),
    scaleDescription: "1=Acceptable / willing to be touched, 0=Unmarked / no clear preference, -1=Unacceptable / unwilling to be touched. Empty maps require explicit confirmation and are recorded in metadata.",
    selected_intents: selectedIntentPayload(),
    body_data: normalizedBodyData(),
    regions: regionsPayload(),
    metadata: {
      demographics,
      ageLabel: fieldVal("age") === "100_plus" ? t("age100Plus") : fieldVal("age"),
      noIntentSelected,
      ageRequirement: "Participants are instructed to continue only if they are at least 18 years old.",
      intentPoolVersion: "意图池.xlsx / 2026-06-22 / 14 intents",
      intentIdVersion: "presence replaces legacy inclusion id",
      intentCount: INTENTS.length,
      selectedIntentCount: order.length,
      intentMeta: intentMetaPayload(),
      relationshipScale: relationshipScalePayload(),
      interactionContexts: interactionContextsPayload(),
      nationalityName: nationalityCode ? countryName(nationalityCode) : null,
      bodyMapProfile: currentBodyProfile(),
      bodyMapSchema: "canonical_23_regions_v1",
      bodyMapModel: currentBodyMapAsset(),
      bodyMapAsset: currentBodyMapAsset(),
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || null,
      viewport: { width: window.innerWidth, height: window.innerHeight },
      quality: qualityMetadata,
      source: "bodymap_questionnaire_v36_context_definition_text_revision"
    }
  };
}

function renderSubmissionResult() {
  if (!submissionResultState) return;
  const { ok, titleKey, messageKey } = submissionResultState;
  const panel = document.getElementById("resultPanel");
  panel.className = `result-panel ${ok ? "ok" : "err"}`;
  document.getElementById("resultKicker").textContent = ok ? t("resultSubmitted") : t("resultError");
  document.getElementById("resultTitle").textContent = t(titleKey);
  document.getElementById("resultMessage").textContent = t(messageKey);
  document.getElementById("btnRetry").style.display = ok ? "none" : "";
  const followupPanel = document.getElementById("followupPanel");
  if (followupPanel) followupPanel.style.display = ok ? "" : "none";
}

function showSubmissionResult(ok, titleKey, messageKey) {
  submissionResultState = { ok, titleKey, messageKey };
  renderSubmissionResult();
  showStep("s4");
}

function backToReview() {
  const btn = document.getElementById("btnSubmit");
  btn.disabled = false;
  btn.textContent = t("submitResponse");
  showStep("s3");
}

async function submitFollowupContact() {
  const input = document.getElementById("followupContact");
  const status = document.getElementById("followupStatus");
  const btn = document.getElementById("btnFollowup");
  const contact = input?.value.trim() || "";
  if (!contact) {
    status.textContent = t("followupEmpty");
    status.className = "followup-status warn";
    return;
  }
  if (!supabaseClient) {
    status.textContent = t("followupError");
    status.className = "followup-status err";
    return;
  }
  btn.disabled = true;
  btn.textContent = t("followupSubmitting");
  const { error } = await supabaseClient
    .from("followup_contacts")
    .insert({
      participant_id: getParticipantId(),
      study_version: "3.29",
      language: lang,
      contact,
      metadata: {
        source: "post_submission_followup_contact",
        submitted_at: new Date().toISOString()
      }
    });
  if (error) {
    console.error(error);
    btn.disabled = false;
    btn.textContent = t("followupSubmit");
    status.textContent = error.code === "PGRST205" ? t("followupConfigError") : t("followupError");
    status.className = "followup-status err";
    return;
  }
  input.disabled = true;
  btn.style.display = "none";
  status.textContent = t("followupSubmitted");
  status.className = "followup-status ok";
}

async function submitToSupabase() {
  const btn = document.getElementById("btnSubmit");
  const payload = buildSurveyPayload();

  if (!supabaseClient) {
    showSubmissionResult(
      false,
      "submitFailTitle",
      "submitFailLib"
    );
    return;
  }

  if (!payload.consent_given) {
    showSubmissionResult(
      false,
      "consentRequiredTitle",
      "consentRequiredMsg"
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
      "submitFailTitle",
      "submitFailNetwork"
    );
    return;
  }

  draftReady = false;
  clearSurveyDraft();
  localStorage.setItem("survey_submitted", "1");
  btn.textContent = t("submitDone");
  showSubmissionResult(
    true,
    "thankTitle",
    "thankMsg"
  );
}

// ============================================================
// INIT
// ============================================================
function bindDraftPersistenceEvents() {
  ["age", "gender", "nationality", "consentBox"].forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener("input", scheduleDraftSave);
    el.addEventListener("change", scheduleDraftSave);
  });
  window.addEventListener("beforeunload", saveSurveyDraftNow);
  window.addEventListener("pagehide", saveSurveyDraftNow);
}

r1();
updBtn();
setLang(lang);
const draftRestored = restoreSurveyDraft();
if (!draftRestored) {
  resetConsentState();
  prog();
}
draftReady = true;
scheduleDraftSave();
bindDraftPersistenceEvents();
window.addEventListener("pageshow", () => {
  if (!localStorage.getItem(SURVEY_DRAFT_KEY)) resetConsentState();
});
