export type WorkProjectAsset = {
  src: string;
  width: number;
  height: number;
};

export type WorkProjectSection = {
  number: string;
  title: string;
  chineseTitle: string;
  description: string;
  layout: "feature" | "pair" | "identity" | "application";
  imageIndexes: number[];
};

export type WorkProject = {
  id: string;
  index: string;
  title: string;
  englishTitle: string;
  category: "落地项目" | "平面作品" | "品牌概念项目" | "品牌视觉 / Brand Visual";
  year?: string;
  discipline?: string;
  status?: string;
  description?: string;
  cover: string;
  coverMode: "crop" | "contain";
  coverTone?: "treated";
  color: string;
  rotate: number;
  surface: "dark" | "paper";
  assetLayout?: "native" | "balanced" | "longform" | "case-study";
  sections?: WorkProjectSection[];
  images: WorkProjectAsset[];
};

export const workProjects: WorkProject[] = [
  {
    id: "xuchuan-night",
    index: "01",
    title: "绪川的夜",
    englishTitle: "XUCHUAN NIGHT",
    category: "落地项目",
    year: "2025–2026",
    discipline: "Brand Visual / VI / Offline Application",
    status: "已落地",
    description: "“绪川的夜”是围绕品牌夜间消费场景建立的视觉项目。从核心视觉、色彩系统到菜单、杯垫及线下物料，通过统一的红黑视觉语言强化夜间氛围与品牌识别，并最终应用于实际品牌场景。",
    cover: "/images/work/xuchuan-night-visual-identity.jpg",
    coverMode: "crop",
    coverTone: "treated",
    color: "#bd1c20",
    rotate: -5,
    surface: "dark",
    images: [
      { src: "/images/work/xuchuan-night-visual-identity.jpg", width: 4290, height: 26588 },
    ],
  },
  {
    id: "yan-tu",
    index: "02",
    title: "沿途",
    englishTitle: "YAN TU",
    category: "落地项目",
    year: "2026",
    cover: "/projects/yan-tu/1.png",
    coverMode: "contain",
    color: "#777b55",
    rotate: 5,
    surface: "paper",
    images: [
      { src: "/projects/yan-tu/1.png", width: 1135, height: 639 },
      { src: "/projects/yan-tu/2.png", width: 1134, height: 639 },
      { src: "/projects/yan-tu/3.png", width: 1130, height: 639 },
      { src: "/projects/yan-tu/4.png", width: 1131, height: 635 },
      { src: "/projects/yan-tu/5.png", width: 1131, height: 636 },
      { src: "/projects/yan-tu/6.png", width: 1133, height: 636 },
      { src: "/projects/yan-tu/7.png", width: 1133, height: 631 },
      { src: "/projects/yan-tu/8.png", width: 1130, height: 632 },
      { src: "/projects/yan-tu/9.png", width: 1135, height: 634 },
      { src: "/projects/yan-tu/10.png", width: 1130, height: 627 },
      { src: "/projects/yan-tu/11.png", width: 1128, height: 630 },
      { src: "/projects/yan-tu/12.png", width: 1123, height: 625 },
      { src: "/projects/yan-tu/13.png", width: 1133, height: 627 },
      { src: "/projects/yan-tu/14.png", width: 1126, height: 631 },
    ],
  },
  {
    id: "graphic-design",
    index: "03",
    title: "平面设计",
    englishTitle: "GRAPHIC DESIGN",
    category: "平面作品",
    description: "Visual experiments, posters and graphic works.",
    cover: "/projects/graphic-design/pdf-pages/page-01.png",
    coverMode: "contain",
    color: "#252527",
    rotate: -3,
    surface: "paper",
    assetLayout: "balanced",
    images: Array.from({ length: 21 }, (_, index) => ({
      src: `/projects/graphic-design/pdf-pages/page-${String(index + 1).padStart(2, "0")}.png`,
      width: 1684,
      height: 1191,
    })),
  },
  {
    id: "one-room",
    index: "04",
    title: "ONE ROOM",
    englishTitle: "ONE ROOM",
    category: "品牌概念项目",
    year: "2026",
    description: "A lifestyle brand exploring private space, pause and everyday objects.",
    cover: "/projects/one-room/11.jpg",
    coverMode: "crop",
    color: "#806b59",
    rotate: 3,
    surface: "paper",
    assetLayout: "longform",
    images: [
      { src: "/projects/one-room/11.jpg", width: 1279, height: 10457 },
    ],
  },
  {
    id: "chuxu",
    index: "05",
    title: "初绪",
    englishTitle: "CHUXU VIS",
    category: "品牌视觉 / Brand Visual",
    year: "2025",
    description: "本项目围绕品牌视觉系统展开，从核心视觉、色彩、图形语言到多种应用场景，建立一套统一且具有识别度的视觉表达。",
    cover: "/projects/chuxu/1jpg.jpg",
    coverMode: "contain",
    color: "#cb634b",
    rotate: -2,
    surface: "paper",
    assetLayout: "case-study",
    images: [
      { src: "/projects/chuxu/1jpg.jpg", width: 5405, height: 3318 },
      { src: "/projects/chuxu/2.jpg", width: 5428, height: 3345 },
      { src: "/projects/chuxu/3.jpg", width: 5417, height: 3333 },
      { src: "/projects/chuxu/4.jpg", width: 5433, height: 3381 },
      { src: "/projects/chuxu/8.jpg", width: 5438, height: 3367 },
      { src: "/projects/chuxu/9.jpg", width: 5436, height: 3333 },
      { src: "/projects/chuxu/10.jpg", width: 5438, height: 3333 },
      { src: "/projects/chuxu/11.jpg", width: 5408, height: 3333 },
      { src: "/projects/chuxu/12.jpg", width: 5415, height: 3556 },
      { src: "/projects/chuxu/14.jpg", width: 5446, height: 3379 },
      { src: "/projects/chuxu/15.jpg", width: 5467, height: 3383 },
      { src: "/projects/chuxu/20.jpg", width: 5467, height: 3383 },
      { src: "/projects/chuxu/23.jpg", width: 5467, height: 3383 },
      { src: "/projects/chuxu/24.jpg", width: 5468, height: 3383 },
      { src: "/projects/chuxu/25.jpg", width: 5467, height: 3383 },
      { src: "/projects/chuxu/27.jpg", width: 5470, height: 3388 },
    ],
    sections: [
      { number: "01", title: "PROJECT OVERVIEW", chineseTitle: "项目概述", description: "本项目围绕品牌视觉系统展开，从核心视觉、色彩、图形语言到多种应用场景，建立一套统一且具有识别度的视觉表达。", layout: "feature", imageIndexes: [0] },
      { number: "02", title: "CONCEPT", chineseTitle: "视觉概念", description: "设计过程从品牌调性、视觉关键词和基础图形语言出发，逐步建立色彩、版式与辅助图形系统，并通过不同媒介的应用验证视觉系统的一致性。", layout: "pair", imageIndexes: [1, 2] },
      { number: "03", title: "GRAPHIC SYSTEM", chineseTitle: "图形系统", description: "核心视觉、色彩与辅助图形共同构成可延展的基础视觉语言。", layout: "pair", imageIndexes: [3, 4] },
      { number: "04", title: "VISUAL IDENTITY", chineseTitle: "视觉识别", description: "视觉系统包含核心视觉、色彩、辅助图形与版式规范。", layout: "identity", imageIndexes: [5, 6, 7, 8, 9] },
      { number: "05", title: "APPLICATION", chineseTitle: "应用延展", description: "最终将视觉语言延展至不同媒介与场景，形成完整的品牌应用体系。", layout: "application", imageIndexes: [10, 11, 12, 13, 14, 15] },
    ],
  },
];
