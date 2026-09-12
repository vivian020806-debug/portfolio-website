import Link from "next/link";

const projectMeta = [
  ["TYPE", "AI Product Video"],
  ["ROLE", "Creative Direction / Visual Iteration"],
  ["FORMAT", "Vertical Short Film"],
  ["OUTPUT", "Concept / Storyboard / Final Video"],
] as const;

export default function AiProductVideoPage() {
  return (
    <main className="aq-page apv-page">
      <header className="aq-topbar">
        <Link href="/#ai" className="aq-back">← BACK TO AI CREATIVE</Link>
        <nav className="aq-navigation" aria-label="作品集导航">
          <a href="/#home">HOME</a><a href="/#about">ABOUT</a><a href="/#work">WORK</a><a href="/#ai" aria-current="page">AI CREATIVE</a><a href="/#life">MY PILLARS</a><a href="/#contact">CONTACT</a>
        </nav>
      </header>

      <section className="aq-hero aq-container apv-hero">
        <div className="aq-kicker"><span>AI CREATIVE / PROJECT 03</span><span>2026</span></div>
        <h1>AI 产品<br />创意视频</h1>
        <p className="aq-chinese-title">AI PRODUCT VIDEO /<br />CREATIVE PROCESS</p>
        <div className="aq-tags"><span>AI PRODUCT VIDEO</span><span>CREATIVE PROCESS</span><span>VISUAL ITERATION</span><span>FINAL FILM</span></div>
        <div className="aq-hero-layout">
          <div className="aq-hero-note">
            <p>从创意概念、视觉迭代到分镜与最终成片，<br />完成一支 AI 产品视频实验。</p>
            <p>用产品的荒诞感与角色叙事建立第一层吸引力，<br />再将视觉方向、镜头节奏与生成过程组织成完整短片。</p>
            <dl>{projectMeta.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
          </div>
          <VideoFrame className="apv-hero-video" />
        </div>
      </section>

      <section className="aq-section aq-container apv-film-section">
        <SectionTitle number="01" english="FINAL FILM" chinese="最终成片" />
        <div className="apv-film-intro">
          <p>先看最终成片，再回到概念、迭代与制作过程。</p>
          <span>CLICK PLAY TO WATCH</span>
        </div>
        <VideoFrame />
      </section>

      <section className="aq-section aq-container apv-process-section">
        <SectionTitle number="02" english="CREATIVE PROCESS" chinese="创意过程" />
        <div className="apv-process-note">
          <p>从创意概念出发，经历角色与视觉方案迭代、分镜设计与 AI 工作流制作，最终将画面推进为动态影像。</p>
          <span>CONCEPT → ITERATION → STORYBOARD → FINAL VIDEO</span>
        </div>
        <figure className="apv-process-image">
          <img src="/projects/ai-product-video/creative-process.jpg" alt="AI 产品创意视频的完整创意过程" loading="eager" decoding="async" />
          <figcaption>AI PRODUCT VIDEO / CREATIVE PROCESS</figcaption>
        </figure>
      </section>

      <footer className="aq-final-film aq-container apv-closing">
        <p>FROM IDEA<br />TO MOTION.</p>
        <span>创意、视觉迭代与最终影像，在同一条制作路径中完成。</span>
        <Link className="aq-original-link" href="/#ai">← BACK TO AI CREATIVE</Link>
      </footer>
    </main>
  );
}

function VideoFrame({ className = "" }: { className?: string }) {
  return (
    <div className={`aq-video-frame ${className}`.trim()}>
      <video controls playsInline preload="metadata" poster="/projects/ai-product-video/cover.jpg">
        <source src="/projects/ai-product-video/ai-product-video.mp4" type="video/mp4" />
        你的浏览器不支持视频播放。
      </video>
    </div>
  );
}

function SectionTitle({ number, english, chinese }: { number: string; english: string; chinese: string }) {
  return <header className="aq-section-title"><span>{number}</span><h2>{english}</h2><p>{chinese}</p></header>;
}
