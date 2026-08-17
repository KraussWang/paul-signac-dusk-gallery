"use client";

import { createContext, useContext, useEffect, useState } from "react";

const pageTranslations: Record<string, string> = {
  "Colour is not decoration. It is light, divided and set in motion.": "色彩并非装饰；它是被分割、被唤醒的光。",
  "An architecture of colour.": "一座由色彩构成的建筑。",
  "A self-taught Parisian painter, Paul Signac helped turn the fleeting light of Impressionism into a deliberate architecture of colour. His ports, rivers and Mediterranean skies shimmer through separated strokes that mix in the viewer’s eye.": "保罗·西涅克是一位自学成才的巴黎画家，他将印象派稍纵即逝的光，转化为精心构筑的色彩结构。他笔下的港口、河流与地中海天空，借由在观者眼中融合的分离笔触而闪烁。",
  "From the Seine to the Mediterranean.": "从塞纳河到地中海。",
  "Light assembled, touch by touch.": "光，在一笔一触间汇聚。",
  "A reusable enquiry space for curators, publishers and creative collaborators.": "为策展人、出版者与创意合作者准备的可复用咨询空间。",
  "Pure colours are placed side by side rather than mixed on the palette, preserving their intensity.": "纯色并置于画面，而非在调色板上混合，以保持自身的强度。",
  "Complementary hues—blue and orange, violet and yellow—activate one another across the surface.": "蓝与橙、紫与黄等互补色，在画面上相互激发。",
  "Dots become dashes and mosaic-like blocks, giving water and sky a measured visual tempo.": "点化作短笔触和马赛克般的色块，赋予水与天空有节制的视觉节奏。",
  "Signac’s story moves through friendships, independent exhibitions and a lifelong passage between the river and the sea.": "西涅克的故事穿行于友谊、独立展览和一生往返河流与大海的航程。",
  "Step back and the separated marks dissolve into atmosphere. Move closer and the scene returns to colour, touch and rhythm.": "退后观看，分离的笔触便溶入氛围；走近时，景象又还原为色彩、触感与节奏。",
  "This reusable demonstration page provides clear routes for curatorial, publishing and educational enquiries.": "此可复用的示范页面，为策展、出版和教育咨询提供清晰渠道。",
  "Paul Signac died in 1935. These example addresses illustrate how a living artist, studio or estate could organise enquiries; they do not contact a real archive.": "保罗·西涅克于1935年去世。这些示例地址展示了在世艺术家、工作室或遗产管理方可如何组织咨询；它们并不会联系真实档案馆。",
  "A painter begins": "一位画家的起点", "Art without a jury": "没有评审的艺术", "The divided touch": "分离的笔触", "Mediterranean revelation": "地中海的启示", "After Seurat": "修拉之后", "The harbour at Saint-Tropez": "圣特罗佩港", "A theory of luminous colour": "明亮色彩的理论", "A president for independents": "独立艺术家的主席", "A life in colour": "色彩的一生",
  "After encountering Monet’s work, Signac leaves architectural study and begins painting the riverbanks and suburbs of Paris.": "在邂逅莫奈的作品后，西涅克放弃建筑学习，开始描绘巴黎的河岸与郊区。",
  "He co-founds the Société des Artistes Indépendants and meets Georges Seurat, beginning a decisive artistic friendship.": "他共同创办独立艺术家协会，并结识乔治·修拉，展开一段决定性的艺术友谊。",
  "Signac adopts separated colour, placing complementary hues side by side so that light is completed in the viewer’s eye.": "西涅克采用分色法，将互补色并置，让光在观者眼中完成。",
  "At Cassis, white cliffs, orange rocks and blue water become a measured symphony of complementary colour.": "在卡西斯，白色峭壁、橙色岩石和蓝色海水成为一首精确的互补色交响曲。",
  "Following Seurat’s early death, Signac becomes Neo-Impressionism’s most visible organiser, writer and defender.": "修拉英年早逝后，西涅克成为新印象派最重要的组织者、作家与辩护者。",
  "He sails into the small Mediterranean port and soon makes it his southern home, studio and enduring motif.": "他驶入这座地中海小港，很快将其变为南方的居所、工作室和恒久主题。",
  "From Eugène Delacroix to Neo-Impressionism is published, setting out a lineage for divided colour and modern painting.": "《从欧仁·德拉克洛瓦到新印象派》出版，为分色与现代绘画建立了谱系。",
  "Signac becomes president of the Société des Artistes Indépendants, supporting experimental artists across generations.": "西涅克出任独立艺术家协会主席，支持跨世代的实验艺术家。",
  "Signac dies in Paris, leaving paintings, watercolours and writings that carried Neo-Impressionism into modern art.": "西涅克在巴黎逝世，留下将新印象派带入现代艺术的绘画、水彩与文字。",
  "The golden age has not passed;": "黄金时代并未过去；", "it is still to come.": "它仍将到来。",
};

function PageTranslator({ language }: { language: Language }) {
  useEffect(() => {
    const reverse = Object.fromEntries(Object.entries(pageTranslations).map(([english, chinese]) => [chinese, english]));
    const dictionary = language === "zh" ? pageTranslations : reverse;
    const translate = () => {
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      const nodes: Text[] = []; let node: Node | null;
      while ((node = walker.nextNode())) nodes.push(node as Text);
      nodes.forEach((textNode) => { const value = textNode.nodeValue ?? ""; const trimmed = value.trim(); if (dictionary[trimmed]) textNode.nodeValue = value.replace(trimmed, dictionary[trimmed]); });
      document.querySelectorAll<HTMLElement>("[alt],[aria-label],[title]").forEach((element) => ["alt", "aria-label", "title"].forEach((attribute) => { const value = element.getAttribute(attribute); if (value && dictionary[value]) element.setAttribute(attribute, dictionary[value]); }));
    };
    translate();
    const observer = new MutationObserver(translate); observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [language]);
  return null;
}

export type Language = "en" | "zh";

type Dictionary = Record<string, string>;

const translations: Record<Language, Dictionary> = {
  en: {
    home: "Home", about: "About", journey: "Journey", works: "Works", contact: "Contact",
    menu: "Menu", openNavigation: "Open navigation", homeLabel: "Paul Signac home",
    skip: "Skip to content", language: "中文", languageLabel: "切换至中文",
    footerTitle: "Light, divided.", footerNote: "An independent educational portrait built from museum research and supplied public-domain artwork files.",
    painter: "Painter · Sailor · Theorist", discover: "Discover", readStory: "Read his story →", exploreJourney: "Explore the full journey →", viewWorks: "View all works →", selectedWorks: "Selected works", lifeWater: "A life along the water", conversations: "Continue the conversation.", contactArchive: "Contact the archive",
    aboutEyebrow: "About the artist", aboutTitle: "A modern life built in colour.", aboutCopy: "Self-taught, independent and endlessly curious, Signac joined scientific colour theory to the freedom of the open water.",
    method: "The method", methodTitle: "Separate the colour. Complete the light.", division: "Division", contrast: "Contrast", rhythm: "Rhythm", next: "Next chapter", followJourney: "Follow the journey",
    journeyEyebrow: "Journey · 1863—1935", journeyTitle: "A compass set toward light.", journeyCopy: "Signac’s story moves through friendships, independent exhibitions and a lifelong passage between the river and the sea.", chapter: "Chapter", enterGallery: "Enter the gallery",
    worksEyebrow: "Selected works · 1889—1909", worksTitle: "The eye completes the painting.", worksCopy: "Five works trace the movement from disciplined Divisionist points to broad, mosaic-like strokes of Mediterranean colour.", noteLooking: "A note on looking",
    contactEyebrow: "Contact the archive", contactTitle: "Ideas travel, too.", contactCopy: "This reusable demonstration page provides clear routes for curatorial, publishing and educational enquiries.", demo: "Demonstration template",
    allWorks: "All works", close: "Close ×", museumRecord: "Museum record ↗", medium: "Medium", dimensions: "Dimensions", collection: "Collection", filter: "Filter artworks", artworkDetails: "View details for",
  },
  zh: {
    home: "首页", about: "关于", journey: "艺术旅程", works: "作品", contact: "联系", menu: "菜单", openNavigation: "打开导航", homeLabel: "保罗·西涅克首页", skip: "跳至正文", language: "EN", languageLabel: "Switch to English",
    footerTitle: "光，被分割。", footerNote: "一份基于博物馆研究与所提供公版艺术图像制作的独立教育性艺术家档案。",
    painter: "画家 · 航海者 · 新印象派理论家", discover: "探索", readStory: "阅读他的故事 →", exploreJourney: "探索完整旅程 →", viewWorks: "浏览全部作品 →", selectedWorks: "精选作品", lifeWater: "沿水而行的一生", conversations: "继续这场对话。", contactArchive: "联系档案",
    aboutEyebrow: "关于艺术家", aboutTitle: "以色彩构筑的现代人生。", aboutCopy: "自学成才、独立而充满好奇的西涅克，将科学色彩理论与开放水域的自由融为一体。",
    method: "创作方法", methodTitle: "分隔色彩，完成光线。", division: "分色", contrast: "对比", rhythm: "节奏", next: "下一章节", followJourney: "追随旅程",
    journeyEyebrow: "艺术旅程 · 1863—1935", journeyTitle: "一只指向光的罗盘。", journeyCopy: "西涅克的故事由友谊、独立展览以及一生往返于河流与大海的旅程构成。", chapter: "章节", enterGallery: "进入画廊",
    worksEyebrow: "精选作品 · 1889—1909", worksTitle: "由眼睛完成的绘画。", worksCopy: "五幅作品串联起从严谨的分色点彩，到地中海色彩中宽阔、如马赛克般笔触的发展历程。", noteLooking: "观看札记",
    contactEyebrow: "联系档案", contactTitle: "思想也在旅行。", contactCopy: "这个可复用的示范页面，为策展、出版和教育咨询提供清晰的联系渠道。", demo: "示范模板",
    allWorks: "全部作品", close: "关闭 ×", museumRecord: "博物馆馆藏记录 ↗", medium: "媒介", dimensions: "尺寸", collection: "馆藏", filter: "筛选作品", artworkDetails: "查看作品详情：",
  },
};

const LanguageContext = createContext<{ language: Language; t: (key: string) => string; toggle: () => void }>({ language: "en", t: (key) => key, toggle: () => undefined });

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");
  useEffect(() => {
    const saved = window.localStorage.getItem("gallery-language") as Language | null;
    const initial = saved ?? (navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en");
    setLanguage(initial);
  }, []);
  useEffect(() => { document.documentElement.lang = language === "zh" ? "zh-CN" : "en"; }, [language]);
  const toggle = () => setLanguage((current) => { const next = current === "en" ? "zh" : "en"; window.localStorage.setItem("gallery-language", next); return next; });
  return <LanguageContext.Provider value={{ language, t: (key) => translations[language][key] ?? key, toggle }}><PageTranslator language={language} />{children}</LanguageContext.Provider>;
}

export function useLanguage() { return useContext(LanguageContext); }
