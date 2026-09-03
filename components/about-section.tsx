"use client";

import { useState } from "react";

const experience = [
  {
    number: "01",
    period: "2025.09–2026.06",
    company: "杭州绪川品牌管理有限公司",
    role: "品牌设计师",
    capabilities: [
      {
        title: "品牌 VI 搭建与 AIGC 工作流应用",
        description: "独立负责品牌整体视觉识别系统（VI）搭建，引入 Midjourney 辅助前期概念 Moodboard 生成与视觉元素合成，提升设计提案效率与视觉完成度。",
      },
      {
        title: "全案视觉落地与物料管控",
        description: "完成品牌标识、海报系列、座位图、包装设计及线下宣传物料，并参与印刷工艺、材质选择及成品落地，把控品牌从线上视觉到线下应用的一致性。",
      },
      {
        title: "Live Music 视觉与品牌合作",
        description: "独立完成 2 场中小型 Live Music 演唱会整体视觉设计，包括主视觉海报、展板、易拉宝及现场 VJ 视频制作；参与岚图汽车、李渡酒业等合作品牌的视觉需求与落地。",
      },
    ],
  },
  {
    number: "02",
    period: "2025.01–2025.06",
    company: "抚州玖奈服装有限公司",
    role: "品牌设计师",
    capabilities: [
      {
        title: "品牌日常视觉维护",
        description: "负责节日海报、活动宣传图、社交媒体视觉内容及公众号图文排版，维护不同传播渠道中的品牌视觉一致性。",
      },
      {
        title: "时尚视觉与图案探索",
        description: "结合服装品牌特性进行季度视觉、印花概念与图案方向探索，并使用 AI 辅助快速测试不同视觉风格，提高前期概念迭代效率。",
      },
    ],
  },
  {
    number: "03",
    period: "2024.06–2024.09",
    company: "深圳市卡多特电子科技有限公司（实习）",
    role: "平面设计师",
    capabilities: [
      {
        title: "海外电商视觉设计",
        description: "负责海外电商平台产品主图、详情页及宣传 Banner 等视觉设计，并维护不同 SKU 产品之间的视觉统一。",
      },
      {
        title: "设计交付与跨部门协作",
        description: "独立完成从设计到交付的工作流程，根据运营团队推广及上线需求快速响应修改，配合多个项目按计划完成视觉交付。",
      },
    ],
  },
];

const strengths = [
  {
    title: "品牌视觉",
    description: "主攻时尚 / 设计师品牌视觉搭建，具备从 0 到 1 的品牌视觉全案能力。",
  },
  {
    title: "AIGC WORKFLOW",
    description: "结合 Midjourney / Stable Diffusion 进行概念探索、主视觉生成与物料延展。",
  },
  {
    title: "VISUAL LANDING",
    description: "具备印刷工艺控制、物料制作与多渠道视觉落地经验。",
  },
];

const tools = [
  { id: "midjourney", label: "Midjourney", short: "MJ" },
  { id: "stable-diffusion", label: "Stable Diffusion", short: "SD" },
  { id: "photoshop", label: "Photoshop", short: "Ps" },
  { id: "illustrator", label: "Illustrator", short: "Ai" },
  { id: "figma", label: "Figma", short: "Fg" },
];

const capabilities = [
  "AIGC 图像生成与重绘",
  "Prompt 编写",
  "概念视觉探索",
  "手绘",
  "品牌 VI 系统搭建",
  "印刷工艺与物料制作流程",
];

function ToolMark({ id, label, short }: { id: string; label: string; short: string }) {
  return (
    <li className={`about-tool about-tool-${id}`} title={label} aria-label={label}>
      {id === "figma" ? (
        <span className="figma-mark" aria-hidden="true">
          <i /><i /><i /><i /><i />
        </span>
      ) : id === "midjourney" ? (
        <svg viewBox="0 0 36 36" aria-hidden="true">
          <path d="M5 26h26M9 23l9-15 9 15M18 8v15M10 23c2.4 3.4 5 5 8 5s5.6-1.6 8-5" />
        </svg>
      ) : id === "stable-diffusion" ? (
        <svg viewBox="0 0 36 36" aria-hidden="true">
          <path d="M18 6a12 12 0 1 1-8.5 3.5M18 11a7 7 0 1 1-4.9 2M18 16a2 2 0 1 1-1.4.6" />
        </svg>
      ) : (
        <span className="tool-monogram" aria-hidden="true">{short}</span>
      )}
      <span className="tool-name">{label}</span>
    </li>
  );
}

export function AboutSection() {
  const [detailsOpen, setDetailsOpen] = useState(false);

  return (
    <section className="content-section about-section" id="about" aria-labelledby="about-title">
      <div className="section-index"><span>02</span><strong>关于我</strong><small>ABOUT</small></div>

      <article className={`about-sheet ${detailsOpen ? "is-details-open" : ""}`}>
        <aside className="about-identity">
          <span className="editorial-label">PROFILE / 001</span>
          <figure className="about-photo">
            <img src="/images/profile-photo.jpg" alt="吕诗云在湖边，远处可见山景" />
            <figcaption><span>PORTRAIT / 2026</span><span>DESIGN × AIGC</span></figcaption>
          </figure>

          <div className="about-name-lockup">
            <span>LÜ SHIYUN</span>
            <h2 id="about-title">吕诗云</h2>
          </div>
          <p className="about-role">品牌设计师 / AIGC 视觉设计师</p>
          <p className="profile-note">Keep exploring.</p>

          <section className="about-capability-index" aria-labelledby="capability-heading">
            <div className="about-mini-heading">
              <span>03</span>
              <h3 id="capability-heading">TOOLS / CAPABILITIES</h3>
            </div>
            <ul className="about-tools" aria-label="常用设计软件">
              {tools.map((tool) => <ToolMark key={tool.id} {...tool} />)}
            </ul>
            <ul className="about-capabilities">
              {capabilities.map((capability) => <li key={capability}>{capability}</li>)}
            </ul>
          </section>
        </aside>

        <div className="about-information">
          <section className="about-profile-copy" aria-labelledby="profile-heading">
            <div className="about-copy-heading">
              <span>01</span>
              <h3 id="profile-heading">PROFILE / 个人优势</h3>
            </div>

            <div className="profile-introduction">
              <p>景德镇陶瓷大学美术学本科，2 年品牌设计与视觉落地经验。<br />主攻时尚 / 设计师品牌视觉搭建与 AIGC 深度辅助设计工作流。</p>
              <p>擅长结合 Midjourney / Stable Diffusion 等工具进行品牌概念探索、主视觉生成与物料延展，具备从 0 到 1 的视觉全案搭建、印刷工艺控制与多渠道落地能力。</p>
            </div>

            <div className="profile-strengths">
              {strengths.map((strength) => (
                <article className="profile-strength" key={strength.title}>
                  <h4>{strength.title}</h4>
                  <p>{strength.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="about-experience" aria-labelledby="experience-heading">
            <header className="about-experience-heading">
              <div className="about-copy-heading">
                <span>02</span>
                <h3 id="experience-heading">WORK EXPERIENCE / 工作经历</h3>
              </div>
              <button
                className="experience-toggle"
                type="button"
                aria-expanded={detailsOpen}
                aria-controls="work-experience-details"
                onClick={() => setDetailsOpen((open) => !open)}
              >
                <span>{detailsOpen ? "CLOSE DETAILS" : "VIEW DETAILS"}</span>
                <b aria-hidden="true">{detailsOpen ? "−" : "＋"}</b>
              </button>
            </header>

            <div className="experience-list" id="work-experience-details">
              {experience.map((item) => (
                <article className="experience-item" key={`${item.company}-${item.period}`}>
                  <span className="experience-number" aria-hidden="true">{item.number}</span>
                  <div className="experience-entry">
                    <header className="experience-meta">
                      <h4>{item.company}</h4>
                      <p><span>{item.role}</span><time>{item.period}</time></p>
                    </header>
                    <div className="experience-details" aria-hidden={!detailsOpen}>
                      <div className="experience-details-inner">
                        <div className="capability-list">
                          {item.capabilities.map((capability) => (
                            <div className="capability-item" key={capability.title}>
                              <h5>{capability.title}</h5>
                              <p>{capability.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </article>
    </section>
  );
}
