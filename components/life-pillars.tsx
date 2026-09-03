"use client";

import { motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";

type LifePillarsProps = { images: string[] };
type ArchiveWork = { id: string; image: string };
type GalleryKind = "photography" | "art";
type Pillar = {
  id: string;
  number: string;
  english: string;
  chinese: string;
  description: string;
  works: ArchiveWork[];
  accent: "number" | "underline" | "explore" | "gallery";
};

const photographyWorks: ArchiveWork[] = [
  { id: "01", image: "/images/photography/01-sport.jpg" },
  { id: "02", image: "/images/photography/02-lolita.jpg" },
  { id: "03", image: "/images/photography/03-qipao-blue.jpg" },
  { id: "04", image: "/images/photography/04-qipao-red.jpg" },
  { id: "05", image: "/images/photography/05-wedding.jpg" },
];

const artWorks: ArchiveWork[] = [
  { id: "01", image: "/images/pillars/art/1 (1).jpg" },
  { id: "02", image: "/images/pillars/art/1 (2).jpg" },
  { id: "03", image: "/images/pillars/art/1 (3).jpg" },
  { id: "04", image: "/images/pillars/art/1 (4).jpg" },
  { id: "05", image: "/images/pillars/art/1 (5).jpg" },
  { id: "06", image: "/images/pillars/art/1 (6).jpg" },
];

const contentMetrics = [
  { value: "81K+", label: "TOP IMPRESSIONS", detail: "单篇最高曝光" },
  { value: "5.8K+", label: "TOP VIEWS", detail: "单篇最高观看量" },
  { value: "16%+", label: "TOP CTR", detail: "最高封面点击率" },
];

const selectedNotes = [
  { type: "DESIGN", title: "点线面的极简海报 / Day15", description: "用最少的视觉元素，建立画面的节奏、秩序与张力。", impressions: "81,112", views: "4,556", tone: "day15", cover: "/images/content/day15-cover.png" },
  { type: "AI / CODEX", title: "想用 ChatGPT 的 Codex？我终于把坑踩完了", description: "把复杂的配置和使用过程，整理成新手也能快速理解的上手路径。", impressions: "39,074", views: "5,878", ctr: "12.8%", tone: "codex", cover: "/images/content/codex-cover.png" },
  { type: "CREATIVE NOTE", title: "十二秒的事情，其实只需要两千六百个字", description: "用两千六百个字，记录一段关于十二秒的思考。", impressions: "26,684", views: "4,518", ctr: "16.5%", tone: "twelve-seconds", cover: "/images/content/twelve-seconds-cover.png" },
];

const pillars: Pillar[] = [
  { id: "photography", number: "02", english: "PHOTOGRAPHY", chinese: "摄影", description: "我享受从造型、人物到镜头语言的共同创造。", works: photographyWorks, accent: "gallery" },
  { id: "literature", number: "02", english: "LITERATURE", chinese: "文学", description: "文字让我理解那些无法被画面完全表达的部分。", works: [], accent: "number" },
  { id: "art", number: "03", english: "ART", chinese: "艺术", description: "艺术让我持续保有审美感受力，也让我不断回到表达本身。", works: artWorks, accent: "underline" },
  { id: "content-creation", number: "04", english: "CONTENT CREATION", chinese: "内容创作", description: "我用创作整理自己的想法，也让表达连接更多可能。", works: [], accent: "explore" },
];

const stackPositions = [
  { left: "1%", top: "18%", rotate: "-7deg", hoverX: "-1.1rem", hoverY: ".8rem", hoverRotate: "-9deg" },
  { left: "18%", top: "7%", rotate: "-3deg", hoverX: "-.65rem", hoverY: "-.4rem", hoverRotate: "-4deg" },
  { left: "36%", top: "14%", rotate: "2deg", hoverX: "0", hoverY: ".15rem", hoverRotate: "1deg" },
  { left: "53%", top: "4%", rotate: "4deg", hoverX: ".65rem", hoverY: "-.55rem", hoverRotate: "5deg" },
  { left: "69%", top: "17%", rotate: "8deg", hoverX: "1.1rem", hoverY: ".65rem", hoverRotate: "10deg" },
];

export function LifePillars({ images: _images }: LifePillarsProps) {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [activeGallery, setActiveGallery] = useState<GalleryKind | null>(null);
  const [galleryClosing, setGalleryClosing] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [lightboxClosing, setLightboxClosing] = useState(false);
  const galleryCloseTimer = useRef<number | null>(null);
  const lightboxCloseTimer = useRef<number | null>(null);
  const selectedIndexRef = useRef<number | null>(null);
  const photography = pillars[0];
  const art = pillars[2];
  const galleryWorks = activeGallery === "art" ? artWorks : photographyWorks;
  const selectedWork = selectedIndex === null ? null : galleryWorks[selectedIndex];

  const openGallery = useCallback((gallery: GalleryKind) => {
    if (galleryCloseTimer.current !== null) window.clearTimeout(galleryCloseTimer.current);
    galleryCloseTimer.current = null;
    selectedIndexRef.current = null;
    setSelectedIndex(null);
    setLightboxClosing(false);
    setGalleryClosing(false);
    setActiveGallery(gallery);
    setGalleryOpen(true);
  }, []);
  const closeGallery = useCallback(() => {
    if (galleryCloseTimer.current !== null) return;
    selectedIndexRef.current = null;
    setSelectedIndex(null);
    setLightboxClosing(false);
    setGalleryClosing(true);
    galleryCloseTimer.current = window.setTimeout(() => {
      setGalleryOpen(false);
      setActiveGallery(null);
      setGalleryClosing(false);
      galleryCloseTimer.current = null;
    }, 520);
  }, []);
  const closeLightbox = useCallback(() => {
    if (lightboxCloseTimer.current !== null) return;
    setLightboxClosing(true);
    lightboxCloseTimer.current = window.setTimeout(() => {
      selectedIndexRef.current = null;
      setSelectedIndex(null);
      setLightboxClosing(false);
      lightboxCloseTimer.current = null;
    }, 320);
  }, []);
  const showPrevious = useCallback(() => {
    setSelectedIndex((current) => {
      const next = current === null ? 0 : (current - 1 + galleryWorks.length) % galleryWorks.length;
      selectedIndexRef.current = next;
      return next;
    });
  }, [galleryWorks.length]);
  const showNext = useCallback(() => {
    setSelectedIndex((current) => {
      const next = current === null ? 0 : (current + 1) % galleryWorks.length;
      selectedIndexRef.current = next;
      return next;
    });
  }, [galleryWorks.length]);

  useEffect(() => {
    if (!galleryOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, [galleryOpen]);

  useEffect(() => () => {
    if (galleryCloseTimer.current !== null) window.clearTimeout(galleryCloseTimer.current);
    if (lightboxCloseTimer.current !== null) window.clearTimeout(lightboxCloseTimer.current);
  }, []);

  useEffect(() => {
    if (!galleryOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (selectedIndexRef.current !== null) closeLightbox();
        else closeGallery();
      }
      if (selectedIndexRef.current !== null && event.key === "ArrowLeft") showPrevious();
      if (selectedIndexRef.current !== null && event.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [closeGallery, closeLightbox, galleryOpen, showNext, showPrevious]);

  return (
    <section className="content-section life-section" id="life" aria-labelledby="life-title">
      <div className="section-index"><span>—</span><strong>我的人生支点</strong><small>MY LIFE PILLARS</small></div>

      <div className="life-archive">
        <header className="life-heading">
          <span>MY PILLARS</span>
          <h2 id="life-title">我的人生支点</h2>
          <p>Things that keep me curious,<br />sensitive and creating.</p>
        </header>

        <div className="life-map">
          <article className="pillar-entry pillar-content-creation">
            <header className="content-creation-heading">
              <span>01 / CREATOR PROFILE</span>
              <h3>CONTENT CREATION</h3>
              <strong>内容创作</strong>
              <p>「我用创作整理自己的想法，也让表达连接更多可能。」</p>
              <a href="https://www.xiaohongshu.com/user/profile/663ce17e00000000070069fa" target="_blank" rel="noopener noreferrer">搞设计的阿鱼｜AI版 <i>↗</i></a>
            </header>
            <div className="content-creation-summary">
              <div className="content-creator-visual has-profile-image" aria-label="搞设计的阿鱼｜AI版账号视觉"><img src="/images/content/ayu-profile.png" alt="搞设计的阿鱼｜AI版小红书账号介绍" /></div>
              <dl className="content-metrics">{contentMetrics.map((metric) => <div key={metric.label}><dt>{metric.value}</dt><dd>{metric.label}</dd><small>{metric.detail}</small></div>)}</dl>
            </div>
            <div className="content-creation-actions">
              <a href="https://www.xiaohongshu.com/user/profile/663ce17e00000000070069fa" target="_blank" rel="noopener noreferrer">VIEW XIAOHONGSHU <b>→</b></a>
              <a href="#selected-notes">VIEW SELECTED NOTES <b>↓</b></a>
            </div>
            <section className="selected-notes is-static" id="selected-notes" aria-label="代表内容">
              <header><span>SELECTED CONTENT</span><p>代表内容 / 03 NOTES</p></header>
              <div className="selected-notes-grid">
                {selectedNotes.map((note, index) => (
                  <article className={`selected-note selected-note-${index + 1}`} key={note.title}>
                    <div className={`selected-note-cover is-${note.tone}${note.cover ? " has-image" : ""}`}>{note.cover && <img src={note.cover} alt={`${note.title}封面`} />}<span>{note.type}</span><b>{String(index + 1).padStart(2, "0")}</b><strong>{note.title}</strong><small>VIEW NOTE →</small></div>
                    {note.description && <p className="selected-note-description">{note.description}</p>}
                    <div className="selected-note-data"><span>{note.impressions}<small>曝光</small></span><span>{note.views}<small>观看量</small></span>{note.ctr && <span>{note.ctr}<small>封面点击率</small></span>}</div>
                  </article>
                ))}
              </div>
            </section>
          </article>

          <aside className="pillar-side-column" aria-label="摄影、艺术与文学">
          <article className="pillar-entry pillar-photography">
            <button className="pillar-photography-copy" type="button" onClick={() => openGallery("photography")} aria-label="打开摄影作品集">
              <span>{photography.number} / VISUAL ARCHIVE</span>
              <h3>{photography.english}</h3>
              <strong>{photography.chinese}</strong>
              <p>「{photography.description}」</p>
              <small>OPEN ARCHIVE ↗</small>
            </button>
            <div className="photography-stack" aria-label="摄影作品预览">
              {!galleryOpen && photographyWorks.map((work, index) => {
                const position = stackPositions[index];
                return <motion.button className="photo-stack-card" type="button" key={work.id} onClick={() => openGallery("photography")} aria-label={`打开摄影作品集，从作品 ${work.id} 开始浏览`} style={{ "--photo-left": position.left, "--photo-top": position.top, "--photo-rotate": position.rotate, "--photo-hover-x": position.hoverX, "--photo-hover-y": position.hoverY, "--photo-hover-rotate": position.hoverRotate, "--photo-index": index } as React.CSSProperties}><img src={work.image} alt={`摄影作品合集 ${work.id}`} draggable={false} /><span aria-hidden="true">{work.id}</span></motion.button>;
              })}
            </div>
          </article>

          <article className="pillar-entry pillar-art">
            <button className="pillar-art-copy" type="button" onClick={() => openGallery("art")} aria-label="打开艺术作品集"><span className="pillar-number">{art.number}</span><div><h3>{art.english}</h3><strong>{art.chinese}</strong><p>「{art.description}」</p><small>OPEN GALLERY ↗</small></div></button>
            <div className="art-stack" aria-label="艺术作品预览">{artWorks.slice(2, 3).map((work, index) => <button className="art-stack-card" type="button" key={work.id} onClick={() => openGallery("art")} aria-label={`打开艺术作品集，从作品 ${work.id} 开始浏览`} style={{ "--art-index": index } as React.CSSProperties}><img src={work.image} alt={`艺术作品 ${work.id}`} draggable={false} /></button>)}</div>
          </article>

          <article className="pillar-entry pillar-text-node pillar-literature"><span className="pillar-number">04</span><div><h3>LITERATURE</h3><strong>文学</strong><p>「文字让我理解那些无法被画面完全表达的部分。」</p></div></article>
          </aside>
        </div>
      </div>

      {galleryOpen && (
          <div
            className={`photography-gallery-shell ${galleryClosing ? "is-closing" : "is-open"}`}
            onTransitionEnd={(event) => {
              if (!galleryClosing || event.target !== event.currentTarget || event.propertyName !== "opacity") return;
              if (galleryCloseTimer.current !== null) window.clearTimeout(galleryCloseTimer.current);
              galleryCloseTimer.current = null;
              setGalleryOpen(false);
              setActiveGallery(null);
              setGalleryClosing(false);
            }}
          >
            <button className="photography-gallery-backdrop" type="button" onClick={closeGallery} aria-label="关闭作品集" />
            <section
              className="photography-gallery"
              role="dialog"
              aria-modal="true"
              aria-labelledby="photography-gallery-title"
            >
              <header className="photography-gallery-header">
                <div><span>{activeGallery === "art" ? "03 / PERSONAL ART ARCHIVE" : "02 / PERSONAL VISUAL ARCHIVE"}</span><h3 id="photography-gallery-title">{activeGallery === "art" ? "ART" : "PHOTOGRAPHY"}</h3></div>
                <p>{String(galleryWorks.length).padStart(2, "0")} WORKS · ORIGINAL RATIO</p>
                <button type="button" onClick={closeGallery}>CLOSE <b aria-hidden="true">×</b></button>
              </header>

              <div className="photography-gallery-grid">
                {galleryWorks.map((work, index) => (
                  <motion.button
                    className={`photography-gallery-item photography-gallery-item-${index + 1}`}
                    type="button"
                    key={work.id}
                    onClick={() => { selectedIndexRef.current = index; setLightboxClosing(false); setSelectedIndex(index); }}
                    initial={{ opacity: 1, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: .5, delay: .08 + index * .045, ease: [0.22, 0.7, 0.2, 1] }}
                  >
                    <img src={work.image} alt={`${activeGallery === "art" ? "艺术作品" : "摄影作品合集"} ${work.id}`} draggable={false} />
                    <span><b>{work.id}</b><small>VIEW →</small></span>
                  </motion.button>
                ))}
              </div>
            </section>

            {selectedWork && selectedIndex !== null && (
                <div
                  className={`photography-lightbox ${lightboxClosing ? "is-closing" : "is-open"}`}
                  role="dialog"
                  aria-modal="true"
                  aria-label={`${activeGallery === "art" ? "艺术作品" : "摄影作品"} ${selectedWork.id}`}
                  onTransitionEnd={(event) => {
                    if (!lightboxClosing || event.target !== event.currentTarget || event.propertyName !== "opacity") return;
                    if (lightboxCloseTimer.current !== null) window.clearTimeout(lightboxCloseTimer.current);
                    lightboxCloseTimer.current = null;
                    selectedIndexRef.current = null;
                    setSelectedIndex(null);
                    setLightboxClosing(false);
                  }}
                >
                  <button className="photography-lightbox-backdrop" type="button" onClick={closeLightbox} aria-label="返回作品集" />
                  <div className="photography-lightbox-toolbar">
                    <span>{selectedWork.id} / {String(galleryWorks.length).padStart(2, "0")}</span>
                    <button type="button" onClick={closeLightbox}>CLOSE <b aria-hidden="true">×</b></button>
                  </div>
                  <button className="photography-lightbox-arrow is-previous" type="button" onClick={showPrevious} aria-label="上一张作品">←</button>
                  <motion.figure key={selectedWork.id} initial={{ opacity: 0, y: 14, scale: .985 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: .36, ease: [0.22, 0.7, 0.2, 1] }}>
                    <img src={selectedWork.image} alt={`${activeGallery === "art" ? "艺术作品" : "摄影作品合集"} ${selectedWork.id}`} />
                    <figcaption>{activeGallery === "art" ? "ART" : "PHOTOGRAPHY"} / {selectedWork.id}</figcaption>
                  </motion.figure>
                  <button className="photography-lightbox-arrow is-next" type="button" onClick={showNext} aria-label="下一张作品">→</button>
                </div>
              )}
          </div>
        )}
    </section>
  );
}
