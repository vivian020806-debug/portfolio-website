export type WorkProjectAsset = {
  src: string;
  width: number;
  height: number;
  kind?: "image" | "video";
  label?: string;
};

export type WorkProjectSection = {
  number: string;
  title: string;
  chineseTitle: string;
  description: string;
  layout: "feature" | "pair" | "identity" | "application" | "motion" | "finish";
  imageIndexes: number[];
  heroFirst?: boolean;
  metadata?: Array<{ label: string; value: string }>;
  closing?: {
    label: string;
    title: string;
    body: string;
  };
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
  assetLayout?: "native" | "balanced" | "longform" | "case-study" | "concert";
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
  {
    id: "xuchuan-yakitori-vis",
    index: "06",
    title: "绪川音乐烧鸟屋",
    englishTitle: "XUCHUAN MUSIC YAKITORI",
    category: "落地项目",
    year: "2025",
    discipline: "Brand Visual / VI System / Application",
    description: "绪川音乐烧鸟屋的完整视觉识别与应用手册，涵盖标志、色彩、图形系统，以及餐饮与现场场景的品牌延展。",
    cover: "/projects/xuchuan-yakitori-vis/page-01.jpg",
    coverMode: "contain",
    color: "#342015",
    rotate: 4,
    surface: "paper",
    assetLayout: "balanced",
    images: Array.from({ length: 32 }, (_, index) => ({
      src: `/projects/xuchuan-yakitori-vis/page-${String(index + 1).padStart(2, "0")}.jpg`,
      width: 1600,
      height: 900,
    })),
  },
  {
    id: "xuchuan-future-brand",
    index: "07",
    title: "绪川品牌手册",
    englishTitle: "XUCHUAN BRAND MANUAL",
    category: "品牌视觉 / Brand Visual",
    year: "2025.08",
    discipline: "Brand Strategy / Experience / Visual Direction",
    description: "围绕音乐、空间与社群体验展开的绪川未来品牌手册，梳理品牌价值、场景规划与未来视觉方向。",
    cover: "/projects/xuchuan-future-brand/page-01.jpg",
    coverMode: "contain",
    color: "#171719",
    rotate: -4,
    surface: "dark",
    assetLayout: "balanced",
    images: Array.from({ length: 22 }, (_, index) => ({
      src: `/projects/xuchuan-future-brand/page-${String(index + 1).padStart(2, "0")}.jpg`,
      width: 1600,
      height: 900,
    })),
  },
  {
    id: "live-music-visual",
    index: "08",
    title: "演唱会系列视觉设计",
    englishTitle: "LIVE MUSIC VISUAL",
    category: "落地项目",
    year: "2025",
    discipline: "Visual Design / Video Production",
    description: "以现场音乐演出为核心展开系列视觉设计，完成主视觉、宣传海报、动态影像及真实现场物料的视觉延展。",
    cover: "/projects/live-music-visual/live-music-hero.png",
    coverMode: "contain",
    color: "#17130f",
    rotate: 3,
    surface: "dark",
    assetLayout: "concert",
    images: [
      { src: "/projects/live-music-visual/live-music-hero.png", width: 1414, height: 2000 },
      { src: "/projects/live-music-visual/key-visual.png", width: 1414, height: 2000 },
      { src: "/projects/live-music-visual/visual-series.png", width: 1414, height: 2000 },
      { src: "/projects/live-music-visual/motion-film-01.mp4", width: 886, height: 492, kind: "video", label: "01 / MOTION FILM · Macro Shooting / Editing / Visual" },
      { src: "/projects/live-music-visual/motion-film-02.mp4", width: 886, height: 492, kind: "video", label: "02 / MOTION FILM · Macro Shooting / Editing / Visual" },
      { src: "/projects/live-music-visual/on-site-visual.png", width: 1414, height: 2000 },
    ],
    sections: [
      {
        number: "01",
        title: "PROJECT OVERVIEW",
        chineseTitle: "演唱会系列视觉设计",
        description: "以现场音乐演出为核心展开系列视觉设计，围绕不同演出主题完成主视觉、宣传海报与动态内容，并进一步延展至舞台屏幕、活动展板及线下物料，建立从线上传播到真实演出现场的完整视觉体验。",
        layout: "feature",
        imageIndexes: [0],
        heroFirst: true,
        metadata: [
          { label: "ROLE", value: "Visual Design / Video Production" },
          { label: "SCOPE", value: "Key Visual / Poster / Motion / On-site" },
          { label: "YEAR", value: "2025" },
        ],
      },
      {
        number: "02",
        title: "VISUAL DESIGN",
        chineseTitle: "从演出主题到视觉语言",
        description: "围绕不同场次的音乐气质与演出主题进行视觉探索，通过人物、字体、色彩与图形关系建立各自鲜明的视觉表达，并保持系列演出整体传播中的视觉连续性。",
        layout: "feature",
        imageIndexes: [1, 2],
      },
      {
        number: "03",
        title: "MOTION & VIDEO PRODUCTION",
        chineseTitle: "FROM VISUAL TO MOTION / 从平面视觉到动态影像",
        description: "在平面视觉之外，进一步独立完成演唱会动态影像制作。从前期画面构思、微距素材拍摄，到后期剪辑与节奏设计均由本人完成；通过微距镜头捕捉画面细节，并结合音乐节奏重新组织影像，让静态视觉延展为具有音乐情绪与现场氛围的动态内容。",
        layout: "motion",
        imageIndexes: [3, 4],
        metadata: [
          { label: "MY ROLE", value: "Concept / Macro Shooting / Video Editing / Motion Visual" },
        ],
      },
      {
        number: "04",
        title: "ON-SITE APPLICATION",
        chineseTitle: "FROM SCREEN TO SPACE / 从视觉设计进入真实演出现场",
        description: "视觉系统最终从屏幕进入真实演出空间，延展至舞台大屏、现场展板及活动物料。通过不同媒介中的统一视觉表达，让线上宣传与线下演出形成连续的视觉体验。",
        layout: "feature",
        imageIndexes: [5],
      },
      {
        number: "05",
        title: "PROJECT END",
        chineseTitle: "项目收尾",
        description: "",
        layout: "finish",
        imageIndexes: [],
        closing: {
          label: "FROM VISUAL",
          title: "TO THE LIVE STAGE.",
          body: "从一张海报，到真实发生的音乐现场。",
        },
      },
    ],
  },
];
