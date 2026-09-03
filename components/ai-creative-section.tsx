"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";

type AiCreativeSectionProps = { images: string[] };

type AiItem = {
  id: string;
  title: string;
  image: string;
  imageIndex: number;
  y: number;
  rotate: number;
};

type SelectedAiItem = AiItem & { instanceId: string };

const orbitBlueprint = [
  { imageIndex: 2, y: 58, rotate: -8 },
  { imageIndex: 6, y: 30, rotate: -5 },
  { imageIndex: 9, y: 10, rotate: -2 },
  { imageIndex: 11, y: 0, rotate: 0 },
  { imageIndex: 15, y: 10, rotate: 2 },
  { imageIndex: 18, y: 30, rotate: 5 },
  { imageIndex: 19, y: 58, rotate: 8 },
];

const processSteps = [
  "CONCEPT",
  "PROMPT / PROCESS",
  "GENERATION",
  "REFINEMENT",
  "FINAL VISUAL",
];

export function AiCreativeSection({ images }: AiCreativeSectionProps) {
  const [selected, setSelected] = useState<SelectedAiItem | null>(null);
  const aiItems = useMemo(
    () => orbitBlueprint
      .map((item, index) => ({
        ...item,
        id: `ai-${index + 1}`,
        title: `AI EXPERIMENT ${String(index + 1).padStart(2, "0")}`,
        image: images[item.imageIndex],
      }))
      .filter((item): item is AiItem => Boolean(item.image)),
    [images],
  );

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
                    className="ai-orbit-card"
                    type="button"
                    key={instanceId}
                    layoutId={instanceId}
                    onClick={() => setSelected({ ...item, instanceId })}
                    style={{
                      "--orbit-y": `${item.y}px`,
                      "--orbit-rotate": `${item.rotate}deg`,
                      "--orbit-index": index,
                    } as React.CSSProperties}
                    tabIndex={copy === 1 ? -1 : 0}
                  >
                    <img src={item.image} alt={copy === 0 ? item.title : ""} draggable={false} />
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
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
