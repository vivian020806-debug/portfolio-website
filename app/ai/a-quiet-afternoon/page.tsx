import Link from "next/link";

const promptModules = [
  ["01", "VISUAL DIRECTION", "视觉基调", "自然光 / 阳光树影 / 低饱和暖色 / 真实手机摄影 / 轻微颗粒 / 轻微手持 / 偶尔失焦 / 非摆拍", "通过自然光、树影、低饱和暖色与轻微胶片颗粒，让整体画面更接近日常记录，而不是过度精致的 AI 广告画面。"],
  ["02", "CHARACTER CONTROL", "人物控制", "不一直看镜头 / 不刻意营业 / 不摆拍 / 观察周围环境 / 动作自然 / 偶尔发现镜头后轻微微笑", "人物控制不仅关注“长什么样”，也关注“如何出现在镜头里”，通过限制表演感，让角色更像真实生活中的普通人。"],
  ["03", "ENVIRONMENT SYSTEM", "场景系统", "旧城区 / 法国梧桐 / 旧书店 / 唱片店 / 陶器店 / 照相馆 / 街角汽水摊 / 旧玻璃 / 木门 / 树影", "通过统一的旧城区空间语言，让多个镜头即使发生在不同地点，也保持同一世界观和视觉氛围。"],
  ["04", "CAMERA LANGUAGE", "镜头语言", "手机自拍 / 手持镜头 / 近景 / 前景遮挡 / 书架缝隙 / 玻璃反射 / 轻微失焦 / 重新对焦", "通过模拟真实手机拍摄状态，增加轻微晃动、遮挡和失焦，让影像更接近朋友随手记录的生活片段。"],
  ["05", "ACTION & MICRO REACTION", "动作与微反应", "翻书 → 闻书页 → 低头笑 / 听音乐 → 身体轻晃 → 发现镜头 / 拿冰汽水 → 缩肩 → 换手", "通过细小的动作和反应建立人物真实感，减少 AI 人物常见的机械表演感。"],
  ["06", "SOUND & RHYTHM", "声音与节奏", "树叶 / 脚步 / 自行车铃 / 铜铃 / 纸张翻动 / 陶器碰撞 / 冰块 / 汽水气泡 / 鸟鸣 / Lo-fi / City Pop", "声音作为不同场景之间的连接，让快切镜头仍然保持统一、轻松的城市漫游感。"],
] as const;

const storyboardShots = [
  ["01", "SELFIE OPENING", "边走边拍，低头调整手机，抬头发现已经开始录制，轻轻一笑。"],
  ["02", "BOOKSTORE ENTRY", "推开旧书店木门，门铃响起，人物下意识回头后进入店内。"],
  ["03", "BOOK DETAIL", "抽出旧艺术书、翻页、靠近书本，随后低头轻笑。"],
  ["04", "RECORD LISTENING", "戴上耳机试听黑胶，身体轻微跟随音乐晃动。"],
  ["05", "CERAMIC OBJECT", "拿起形状特别的小杯子观察，与自己做简单比较。"],
  ["06", "SODA MOMENT", "从冰桶拿出汽水，被冰水刺激后快速换手。"],
  ["07", "BENCH", "坐在树荫下喝汽水，以轻松状态完成情绪收尾。"],
] as const;

const workflow = ["CONCEPT", "CHARACTER DESIGN", "SCENE DESIGN", "PROMPT DESIGN", "STORYBOARD", "AI GENERATION", "SELECTION", "EDITING", "FINAL FILM"];

export default function QuietAfternoonPage() {
  return (
    <main className="aq-page">
      <header className="aq-topbar">
        <Link href="/#ai" className="aq-back">← BACK TO AI CREATIVE</Link>
        <nav className="aq-navigation" aria-label="作品集导航">
          <a href="/#home">HOME</a><a href="/#about">ABOUT</a><a href="/#work">WORK</a><a href="/#life">MY PILLARS</a><a href="/#ai" aria-current="page">AI CREATIVE</a><a href="/#contact">CONTACT</a>
        </nav>
      </header>

      <section className="aq-hero aq-container">
        <div className="aq-kicker"><span>AI CREATIVE / PROJECT 02</span><span>2026</span></div>
        <h1>AI 创意<br />视频制作</h1>
        <p className="aq-chinese-title">A QUIET AFTERNOON / 一个安静的下午</p>
        <div className="aq-tags"><span>AI VIDEO EXPERIMENT</span><span>URBAN LIFESTYLE VLOG</span><span>PROMPT DESIGN</span><span>VIDEO EDITING</span></div>
        <div className="aq-hero-layout">
          <div className="aq-hero-note">
            <p>一支围绕城市独处感展开的 AI 生活方式短片。</p>
            <p>通过人物设定、场景设计、提示词控制、分镜组织与后期剪辑，尝试让 AI 影像更接近日常生活中被随手记录下来的瞬间。</p>
            <dl><div><dt>TYPE</dt><dd>AI Video Experiment</dd></div><div><dt>FORMAT</dt><dd>Vertical Short Video</dd></div><div><dt>DURATION</dt><dd>12s</dd></div><div><dt>DIRECTION</dt><dd>Lifestyle / City Walk / Film Look</dd></div></dl>
          </div>
          <VideoFrame poster />
        </div>
      </section>

      <section className="aq-section aq-container aq-concept">
        <SectionTitle number="01" english="CONCEPT" chinese="创作思路" />
        <div className="aq-prose aq-prose-large"><p>我希望做一支没有强剧情、但有完整情绪线索的短片。</p><p>它记录一个女生独自在旧城区散步时发生的一些轻微日常：翻书、听音乐、观察器物、整理头发、拿起汽水、在树荫下短暂停留。</p><p>相比戏剧化叙事，我更希望画面呈现一种安静、松弛、自然的生活状态。视觉上以日系城市散步、轻胶片和生活纪实感为基础，通过自然光、树影、低饱和色彩和轻微手持感，让 AI 视频尽量减少过度精致和广告化的感觉。</p></div>
      </section>

      <section className="aq-section aq-container">
        <SectionTitle number="02" english="CHARACTER DESIGN" chinese="人物设定" />
        <div className="aq-reference-layout"><div className="aq-prose"><p>23 岁左右东亚女生。整体气质自然、安静、松弛，带轻微清冷与文艺感。</p><p>人物造型以低饱和城市穿搭为主：浅灰蓝衬衫、白色内搭、浅色下装、深棕色肩包与耳机。</p><p>不刻意面对镜头、不持续微笑、不摆拍；大部分时间在观察环境与物品，偶尔发现镜头时才产生轻微反应。</p><p className="aq-keywords">QUIET / RELAXED / NATURAL / LIGHT LITERARY / CITY WALK / LOW SATURATION</p></div><figure className="aq-reference-image"><img src="/projects/a-quiet-afternoon/character-reference.png" alt="A Quiet Afternoon 人物角色参考图" /></figure></div>
      </section>

      <section className="aq-section aq-container"><SectionTitle number="03" english="SCENE DESIGN" chinese="场景设定" /><figure className="aq-full-reference"><img src="/projects/a-quiet-afternoon/scene-reference.png" alt="A Quiet Afternoon 场景资产板" /></figure><div className="aq-scene-caption"><p>BOOKSTORE / RECORD SHOP / STREET / CERAMICS / WINDOW / BENCH</p><p>上午自然光、法国梧桐树影、老建筑、木质门框、玻璃橱窗、褪色招牌；低商业化、少游客，但仍有日常生活气息。</p></div></section>

      <section className="aq-section aq-container aq-prompt-section"><SectionTitle number="04" english="PROMPT DESIGN" chinese="提示词设计" /><p className="aq-lead">为了让不同镜头保持统一，我将提示词控制拆分为视觉基调、人物、场景、摄影语言、动作微反应与声音节奏。</p><div className="aq-prompt-list">{promptModules.map(([number, title, chinese, keywords, description]) => <article className="aq-prompt-module" key={number}><span>{number}</span><div><h3>{title}</h3><small>{chinese}</small></div><p className="aq-module-keywords">{keywords}</p><p>{description}</p></article>)}</div></section>

      <section className="aq-section aq-container aq-storyboard-section"><SectionTitle number="05" english="STORYBOARD" chinese="分镜设计" /><figure className="aq-full-reference aq-storyboard"><img src="/projects/a-quiet-afternoon/storyboard.png" alt="A Quiet Afternoon 视频分镜九宫格" /></figure><div className="aq-shot-list">{storyboardShots.map(([number, title, copy]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div></section>

      <section className="aq-section aq-container aq-process-section"><SectionTitle number="06" english="CREATIVE PROCESS" chinese="创作流程" /><p className="aq-lead">从创意方向开始，逐步确定人物、场景和镜头语言，再通过提示词控制生成结果。在生成过程中不断筛选人物状态、动作自然度与光线一致性，最后通过后期剪辑将不同片段组织成完整短片。</p><ol className="aq-workflow">{workflow.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><strong>{step}</strong></li>)}</ol></section>

      <section className="aq-section aq-container aq-generation-section"><SectionTitle number="07" english="GENERATION" chinese="生成与筛选" /><div className="aq-analysis-grid"><p className="aq-lead">生成阶段重点关注人物一致性、动作自然度与视觉统一，减少镜头之间的视觉跳跃。</p><div><article><span>01</span><h3>人物一致性</h3><p>确保不同镜头中的发型、服装、气质与年龄保持接近。</p></article><article><span>02</span><h3>动作自然度</h3><p>优先选择微动作和真实反应，避免过度夸张的表情与肢体动作。</p></article><article><span>03</span><h3>视觉统一</h3><p>筛选自然光方向、色调和生活感相近的片段，让不同地点共享同一氛围。</p></article></div></div></section>

      <section className="aq-section aq-container aq-post-section"><SectionTitle number="08" english="POST-PRODUCTION" chinese="后期处理" /><div className="aq-prose"><p>后期重点处理镜头节奏、声音与整体色调。通过快切与短暂停顿控制 12 秒内的信息密度，让镜头节奏轻快但不拥挤。</p><p>声音使用翻书、门铃、街道、冰块与汽水等环境音增强真实感，并加入轻量 Lo-fi / City Pop 音乐统一氛围。色彩保持低饱和、自然暖色和轻胶片颗粒感，避免过度滤镜化。</p></div></section>

      <section className="aq-final-film aq-container"><SectionTitle number="09" english="FINAL FILM" chinese="最终成片" /><div className="aq-final-video"><VideoFrame /></div><p>A small AI film about city wandering, solitude and everyday moments.</p><a className="aq-original-link" href="https://www.xiaohongshu.com/discovery/item/6a84476b0000000033034c86" target="_blank" rel="noopener noreferrer">VIEW ORIGINAL POST ↗</a></section>
    </main>
  );
}

function VideoFrame({ poster = false }: { poster?: boolean }) {
  return <div className="aq-video-frame"><video controls playsInline preload="metadata" poster={poster ? "/projects/a-quiet-afternoon/storyboard.png" : undefined}><source src="/projects/a-quiet-afternoon/final-video.mp4" type="video/mp4" />你的浏览器不支持视频播放。</video></div>;
}

function SectionTitle({ number, english, chinese }: { number: string; english: string; chinese: string }) {
  return <header className="aq-section-title"><span>{number}</span><h2>{english}</h2><p>{chinese}</p></header>;
}
