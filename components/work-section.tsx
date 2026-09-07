"use client";

import { motion } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";
import { WorkProjectDetail } from "@/components/work-project-detail";
import { workProjects, type WorkProject } from "@/data/work-projects";

type WorkSectionProps = {
  images: string[];
};

export function WorkSection({ images: _images }: WorkSectionProps) {
  const [selected, setSelected] = useState<WorkProject | null>(null);
  const [showSwipeCue, setShowSwipeCue] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);
  const orderedProjects = useMemo(() => {
    const priority = ["xuchuan-night", "live-music-visual", "graphic-design", "xuchuan-future-brand"];
    return [...workProjects]
      .sort((left, right) => {
        const leftPriority = priority.indexOf(left.id);
        const rightPriority = priority.indexOf(right.id);
        return (leftPriority === -1 ? priority.length : leftPriority) - (rightPriority === -1 ? priority.length : rightPriority);
      })
      .map((project, index) => ({ ...project, index: String(index + 1).padStart(2, "0") }));
  }, []);

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

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setShowSwipeCue(true);
        observer.disconnect();
      },
      { threshold: 0.35 },
    );
    observer.observe(stage);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="content-section work-section" id="work" aria-labelledby="work-title">
      <div className="section-index section-index-light"><span>03</span><strong>作品案例</strong><small>WORK</small></div>
      <header className="work-heading">
        <span>CREATIVE LIBRARY</span>
        <h2 id="work-title">SELECTED WORKS</h2>
        <p>作品案例 / 把每个项目，装订成一本可以被打开的设计书。</p>
      </header>

      <div className="work-stage" ref={stageRef}>
        <div className={`work-library${showSwipeCue ? " is-swipe-cued" : ""}`}>
          {orderedProjects.map((project, index) => (
            <motion.button
              className={`work-book work-book-real work-book-${project.id} is-cover-${project.coverMode}${project.coverTone ? ` is-cover-${project.coverTone}` : ""}`}
              type="button"
              key={project.id}
              onClick={() => setSelected(project)}
              style={{
                "--book-color": project.color,
                "--book-rotate": `${project.rotate}deg`,
                "--book-index": index,
              } as React.CSSProperties}
              aria-label={`打开${project.title}项目详情`}
            >
              <span className="book-spine">PROJECT / {project.index}</span>
              <span className="work-book-media">
                <img src={project.cover} alt={`${project.title}项目封面`} draggable={false} loading="lazy" />
              </span>
              <span className="book-cover-copy">
                <small>{project.discipline ?? project.category}</small>
                <strong>{project.title}</strong>
                {project.englishTitle !== project.title && <em>{project.englishTitle}</em>}
                {(project.year || project.status) && <span>{project.year}{project.status ? `（${project.status}）` : ""}</span>}
              </span>
              <span className="work-book-hover-label"><strong>{project.title}</strong><small>{project.category}</small></span>
            </motion.button>
          ))}
        </div>
        <span className="work-swipe-edge" aria-hidden="true">→</span>
        <p className="work-swipe-hint"><span>DRAG →</span>向右滑动，查看更多项目 →</p>
        <p className="work-instruction">点击任一本项目册，查看详情 ↑</p>
      </div>

      {selected && <WorkProjectDetail project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
