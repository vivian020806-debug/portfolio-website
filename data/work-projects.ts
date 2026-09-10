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
    cover: "/images/web/work-covers/xuchuan-night.webp",
    coverMode: "crop",
    coverTone: "treated",
    color: "#bd1c20",
    rotate: -5,
    surface: "dark",
    images: [
      { src: "/images/web/work/xuchuan-night-detail.webp", width: 1200, height: 7424 },
    ],
  },
  {
    id: "one-room",
    index: "04",
    title: "ONE ROOM",
    englishTitle: "ONE ROOM",
    category: "品牌概念项目",
    year: "2026",
    description: "A lifestyle brand exploring private space, pause and everyday objects.",
    cover: "/images/web/work-covers/one-room.webp",
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
    id: "xuchuan-yakitori-vis",
    index: "05",
    title: "绪川音乐烧鸟屋",
    englishTitle: "XUCHUAN MUSIC YAKITORI",
    category: "落地项目",
    year: "2025",
    discipline: "Brand Visual / VI System / Application",
    description: "绪川音乐烧鸟屋的完整视觉识别与应用手册，涵盖标志、色彩、图形系统，以及餐饮与现场场景的品牌延展。",
    cover: "/images/web/work-covers/xuchuan-yakitori-vis.webp",
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
    index: "03",
    title: "绪川品牌手册",
    englishTitle: "XUCHUAN BRAND MANUAL",
    category: "品牌视觉 / Brand Visual",
    year: "2025.08",
    discipline: "Brand Strategy / Experience / Visual Direction",
    description: "围绕音乐、空间与社群体验展开的绪川未来品牌手册，梳理品牌价值、场景规划与未来视觉方向。",
    cover: "/images/web/work-covers/xuchuan-future-brand.webp",
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
    index: "02",
    title: "演唱会系列视觉设计",
    englishTitle: "LIVE MUSIC VISUAL",
    category: "落地项目",
    year: "2025",
    discipline: "Visual Design / Video Production",
    description: "以现场音乐演出为核心展开系列视觉设计，完成主视觉、宣传海报、动态影像及真实现场物料的视觉延展。",
    cover: "/images/web/work-covers/live-music-visual.webp",
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
