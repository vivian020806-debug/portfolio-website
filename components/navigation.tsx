"use client";

import { motion } from "motion/react";
import type { MouseEvent } from "react";

type ActiveSection = "home" | "about";

type NavigationProps = {
  activeSection: ActiveSection;
  onNavigate: (section: ActiveSection) => void;
};

const items = [
  { id: "home", label: "HOME" },
  { id: "about", label: "ABOUT" },
  { id: "work", label: "WORK" },
  { id: "ai", label: "AI CREATIVE" },
  { id: "contact", label: "CONTACT" },
] as const;

export function Navigation({ activeSection, onNavigate }: NavigationProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    if (id === "home" || id === "about") {
      event.preventDefault();
      onNavigate(id);
      return;
    }

    if (!document.getElementById(id)) event.preventDefault();
  };

  return (
    <header className="site-header">
      <a className="wordmark" href="#hero" onClick={(event) => handleClick(event, "home")}>
        诗云
      </a>

      <nav className="nav" aria-label="主导航">
        {items.map((item, index) => {
          const isActive = item.id === activeSection;

          return (
            <a
              className={`nav-link ${isActive ? "is-active" : ""}`}
              href={`#${item.id === "home" ? "hero" : item.id}`}
              key={item.id}
              onClick={(event) => handleClick(event, item.id)}
              aria-current={isActive ? "page" : undefined}
            >
              {isActive && (
                <motion.span
                  className="nav-active-label"
                  layoutId="active-nav-label"
                  transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
                />
              )}
              <span className="nav-index">{String(index + 1).padStart(2, "0")}</span>
              <span className="nav-name">{item.label}</span>
            </a>
          );
        })}
      </nav>

      <div className="availability" aria-label="当前可承接新项目">
        <span className="availability-dot" aria-hidden="true" />
        <span>AVAILABLE FOR WORK</span>
      </div>
    </header>
  );
}
