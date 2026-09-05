"use client";

import { useEffect, useRef, useState } from "react";
import { AboutSection } from "@/components/about-section";
import { AiCreativeSection } from "@/components/ai-creative-section";
import { ArchiveNavigation, type PortfolioSection } from "@/components/archive-navigation";
import { ContactSection } from "@/components/contact-section";
import { ImageTrail } from "@/components/image-trail";
import { LifePillars } from "@/components/life-pillars";
import { WorkSection } from "@/components/work-section";

type HeroProps = {
  fragmentImages: string[];
};

const collageIndexes = [10, 16, 7, 14];

export function Hero({ fragmentImages }: HeroProps) {
  const [activeSection, setActiveSection] = useState<PortfolioSection>("about");
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sectionIds = ["about", "work", "ai", "life", "contact"] as const;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          setActiveSection(visible.target.id as PortfolioSection);
        }
      },
      { rootMargin: "-22% 0px -58% 0px", threshold: [0, 0.15, 0.35, 0.6] },
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const targetId = window.location.hash.slice(1);
    if (!targetId || targetId === "home") return;
    window.requestAnimationFrame(() => {
      document.getElementById(targetId)?.scrollIntoView({ block: "start" });
    });
  }, []);

  const collageImages = collageIndexes
    .map((index) => fragmentImages[index])
    .filter((image): image is string => Boolean(image));

  const openPortfolio = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="portfolio-site">
      <section className="home-cover" id="home" aria-labelledby="cover-title">
        <div className="home-grain" aria-hidden="true" />
        <ImageTrail images={fragmentImages} enabled />

        <div className="cover-register">
          <span>01&nbsp; 首页 <small>HOME</small></span>
          <span>FRAGMENTS OF ME</span>
        </div>

        <CoverCollage images={collageImages.slice(0, 2)} side="left" />
        <CoverCollage images={collageImages.slice(2, 4)} side="right" />

        <div className="cover-title-lockup">
          <p className="cover-kicker">BRAND DESIGN · VISUAL · AIGC</p>
          <h1 id="cover-title" className="fragments-title">FRAGMENTS</h1>
          <span className="fragments-script" aria-hidden="true">of Me</span>
        </div>

        <p className="cover-statement">在 AI 时代，<br />用<span>作品</span>表达自己。</p>

        <button className="archive-open" type="button" onClick={openPortfolio}>
          <span>SCROLL TO OPEN</span>
          <i aria-hidden="true">↓</i>
        </button>
        <span className="cover-folio" aria-hidden="true">01 / 06</span>
      </section>

      <div className="portfolio-pages" ref={aboutRef}>
        <div className="navigation-dock">
          <ArchiveNavigation active={activeSection} />
        </div>
        <AboutSection />
        <WorkSection images={fragmentImages} />
        <AiCreativeSection images={fragmentImages} />
        <LifePillars images={fragmentImages} />
        <ContactSection />
      </div>
    </main>
  );
}

function CoverCollage({ images, side }: { images: string[]; side: "left" | "right" }) {
  return (
    <div className={`cover-collage cover-collage-${side}`} aria-hidden="true">
      {images.map((image, index) => (
        <figure className={`cover-scrap cover-scrap-${index + 1}`} key={image}>
          <span className="cover-tape" />
          <img src={image} alt="" draggable={false} />
        </figure>
      ))}
      <span className="collage-pencil-mark" />
    </div>
  );
}
