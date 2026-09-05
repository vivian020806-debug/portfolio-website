"use client";

import { AnimatePresence, motion } from "motion/react";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

type AiCreativeSectionProps = { images: string[] };

type AiItem = {
  id: string;
  title: string;
  coverLabel: string;
  coverTitle: string;
  image: string;
  imageIndex: number;
  y: number;
  rotate: number;
  featured?: boolean;
  coverContain?: boolean;
  href?: string;
  project?: AiProject;
};

type SelectedAiItem = AiItem & { instanceId: string };

type AiProject = {
  eyebrow: string;
  title: string;
  subtitle: string;
  cover: string;
  images: string[];
  introduction: string;
  chapters: Array<{
    number: string;
    title: string;
    body: string[];
  }>;
};

const orbitBlueprint = [
  { imageIndex: 6, y: 4, rotate: 2 },
  { imageIndex: 18, y: 18, rotate: 5 },
];

const processSteps = [
  "CONCEPT",
  "PROMPT / PROCESS",
  "GENERATION",
  "REFINEMENT",
  "FINAL VISUAL",
];

const watercolorPosterProject: AiProject = {
  eyebrow: "AI CREATIVE / POSTER SERIES",
  title: "纸本水彩风 Skill",
  subtitle: "DAILY PHOTO × WATERCOLOR POSTER SERIES",
  cover: "/images/ai/the-night-stays-lit/01.png",
  images: Array.from(
    { length: 15 },
    (_, index) => `/images/ai/the-night-stays-lit/${String(index + 1).padStart(2, "0")}.png`,
  ),
  introduction:
    "把手机相册里的日落、街边、建筑、宠物与偶然遇见的人和光，重新编辑成一张有收藏感的视觉海报。上半部分保存当时看见的，下半部分回应后来感受到的。",
  chapters: [
    {
      number: "01",
      title: "OBSERVE THE EMOTION",
      body: [
        "先观察照片里最打动我的地方，而不是先决定风格：夜晚建筑边缘的一点金光、湖面和天空之间安静的颜色、一个人的表情，或树影、街道与倒影里不太能说清的氛围。",
      ],
    },
    {
      number: "02",
      title: "KEEP THE PHOTO",
      body: [
        "海报上半部分始终保留原始摄影，只做轻微调色，让光影、颜色和质感更接近杂志摄影，但仍然是当时真实拍下来的画面。",
        "不换脸、不改建筑，也不把风景变成另一个地方。",
      ],
    },
    {
      number: "03",
      title: "WATERCOLOR RESPONSE",
      body: [
        "下半部分不是复制照片，而是把照片再画一遍：保留主体、空间关系和主要颜色，再用米白粗纹纸、水痕、干刷、半透明叠色、断续铅笔线与留白重新回应。",
        "上半部分是“当时看见的”，下半部分是“后来感受到的”。",
      ],
    },
    {
      number: "04",
      title: "ONE-TO-ONE STRUCTURE",
      body: [
        "每张海报都是 3:4 竖版，上下两部分严格各占 50%。照片给出事实，水彩给出感受；人物、宠物、建筑和风景都进入同一套视觉语言。",
      ],
    },
    {
      number: "05",
      title: "WORDS AS AN ENTRY",
      body: [
        "文字不解释“夜景”“猫咪”或“风景”，而是像小型艺术刊物里的标题，为画面留下一个入口：THE NIGHT STAYS LIT、THE HORIZON WAITED、SOME PLACES GLOW BACK、JOY, UNREHEARSED。",
      ],
    },
    {
      number: "06",
      title: "LAYOUT WITH VARIATION",
      body: [
        "标题有时沿边缘垂直出现，有时占据留白，或被细线、圆形、编号与小标签切开；排版根据画面决定，让每一张独立成页，放在一起又成为一个系列。",
      ],
    },
    {
      number: "07",
      title: "QUALITY CHECK",
      body: [
        "最后检查：原始摄影是否仍保留主体与氛围；水彩是否真的回应照片，而不是套上一层滤镜；文字与排版是否增加情绪，而不是盖住画面。",
        "这些判断、构图规则与质量检查也被整理成一个 GitHub Skill，用来保存这套反复使用的创作方法。",
      ],
    },
  ],
};

export function AiCreativeSection({ images }: AiCreativeSectionProps) {
  const [selected, setSelected] = useState<SelectedAiItem | null>(null);
  const router = useRouter();
  const aiItems = useMemo(
    () => [
      {
        id: "the-night-stays-lit",
        title: watercolorPosterProject.title,
        coverLabel: "FEATURED PROJECT / AI POSTER SERIES",
        coverTitle: "纸本水彩风 Skill",
        image: watercolorPosterProject.cover,
        imageIndex: -1,
        y: 40,
        rotate: -5,
        featured: true,
        project: watercolorPosterProject,
      },
      {
        id: "a-quiet-afternoon",
        title: "AI创意视频制作",
        coverLabel: "AI VIDEO / CITY LIFE",
        coverTitle: "AI创意视频制作",
        image: "/projects/a-quiet-afternoon/character-reference.png",
        imageIndex: -2,
        y: 16,
        rotate: -2,
        coverContain: true,
        href: "/ai/a-quiet-afternoon",
      },
      ...orbitBlueprint
        .map((item, index) => ({
        ...item,
        id: `ai-${index + 1}`,
        title: "敬请期待",
        coverLabel: "AI CREATIVE / COMING SOON",
        coverTitle: "敬请期待",
        image: images[item.imageIndex],
      }))
        .filter((item): item is AiItem => Boolean(item.image)),
    ],
    [images],
  );
  const selectedProject = selected?.project;

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  useEffect(() => {
    if (!selected) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, [selected]);

  return (
    <section className="content-section ai-section" id="ai" aria-labelledby="ai-title">
      <div className="section-index"><span>04</span><strong>AI创意</strong><small>AI CREATIVE</small></div>
      <header className="ai-heading">
        <span>AI VISUAL ORBIT</span>
        <h2 id="ai-title">视觉轨道</h2>
        <p>把生成、选择与再设计，放进一条持续运转的创作路径。</p>
      </header>

      <div className="ai-orbit-window">
        <div className="ai-orbit-track">
          {[0, 1].map((copy) => (
            <div className="ai-orbit-group" key={copy} aria-hidden={copy === 1}>
              {aiItems.map((item, index) => {
                const instanceId = `orbit-${copy}-${item.id}`;
                return (
                  <motion.button
                    className={`ai-orbit-card${item.featured ? " is-featured" : ""}${item.coverContain ? " is-contain-cover" : ""}`}
                    type="button"
                    key={instanceId}
                    layoutId={instanceId}
                    onClick={() => item.href ? router.push(item.href) : setSelected({ ...item, instanceId })}
                    style={{
                      "--orbit-y": `${item.y}px`,
                      "--orbit-rotate": `${item.rotate}deg`,
                      "--orbit-index": index,
                    } as React.CSSProperties}
                    tabIndex={copy === 1 ? -1 : 0}
                  >
                    <div className="ai-orbit-cover">
                      <img src={item.image} alt={copy === 0 ? item.title : ""} draggable={false} />
                      <span>{item.coverLabel}</span>
                      <strong>{item.coverTitle}</strong>
                    </div>
                    <span><strong>{item.title}</strong><small>VIEW PROCESS ↗</small></span>
                  </motion.button>
                );
              })}
            </div>
          ))}
        </div>
      </div>
      <p className="ai-instruction">悬停一张图，让轨道暂停。点击查看设计过程。</p>

      <AnimatePresence>
        {selected && (
          <motion.div className="object-viewer ai-viewer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <button className="viewer-backdrop" type="button" onClick={() => setSelected(null)} aria-label="关闭 AI 项目" />
            {selectedProject ? (
              <motion.article
                className="ai-expanded-visual ai-expanded-project"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                role="dialog"
                aria-modal="true"
                aria-label={selected.title}
              >
                <button className="viewer-close" type="button" onClick={() => setSelected(null)}>CLOSE ×</button>
                <header className="ai-project-header">
                  <span>{selectedProject.eyebrow}</span>
                  <h3>{selectedProject.title}</h3>
                  <p>{selectedProject.subtitle}</p>
                </header>
                <div className="ai-project-hero">
                  <img src={selectedProject.cover} alt={`${selectedProject.title} 项目封面`} />
                </div>
                <section className="ai-project-introduction" aria-label="项目简介">
                  <span>PROJECT NOTE / 2026</span>
                  <p>{selectedProject.introduction}</p>
                </section>
                <section className="ai-project-process" aria-label="创作思路">
                  <header><span>CREATIVE THOUGHT</span><strong>从看见，到值得被留下来的画面。</strong></header>
                  <div>
                    {selectedProject.chapters.map((chapter) => (
                      <article className="ai-project-chapter" key={chapter.number}>
                        <span>{chapter.number}</span>
                        <div>
                          <h4>{chapter.title}</h4>
                          {chapter.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
                <section className="ai-project-gallery" aria-label="海报系列">
                  <header><span>POSTER ARCHIVE</span><p>15 VISUAL NOTES</p></header>
                  <div>
                    {selectedProject.images.map((image, index) => (
                      <figure key={image}>
                        <img src={image} alt={`${selectedProject.title} 海报 ${String(index + 1).padStart(2, "0")}`} loading={index < 2 ? "eager" : "lazy"} />
                        <figcaption>{String(index + 1).padStart(2, "0")} / DAILY NOTE</figcaption>
                      </figure>
                    ))}
                  </div>
                </section>
              </motion.article>
            ) : (
              <motion.article className="ai-expanded-visual" layoutId={selected.instanceId} role="dialog" aria-modal="true" aria-label={selected.title}>
                <button className="viewer-close" type="button" onClick={() => setSelected(null)}>CLOSE ×</button>
                <div className="ai-expanded-image"><img src={selected.image} alt={selected.title} /></div>
                <div className="ai-expanded-copy">
                  <span>AI CREATIVE LAB</span>
                  <h3>{selected.title}</h3>
                  <p>项目概念、提示词迭代与最终视觉资料待补充。</p>
                  <ol>
                    {processSteps.map((step, index) => (
                      <li key={step}><small>{String(index + 1).padStart(2, "0")}</small><strong>{step}</strong></li>
                    ))}
                  </ol>
                </div>
              </motion.article>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
