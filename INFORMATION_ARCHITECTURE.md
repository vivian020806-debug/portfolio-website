# 个人作品集网站 - 信息架构 & 页面结构

## 一、信息架构 (Information Architecture)

```
Portfolio Website
│
├─ 01 HOME (首页)
│  ├─ Header / Navigation
│  ├─ Hero Section
│  │  ├─ 职业标题 (Brand Visual Designer × AI Creative Designer)
│  │  ├─ 简短介绍
│  │  └─ 视觉作品展示 (3-4 项精选)
│  ├─ Featured Projects (精选项目卡片)
│  ├─ About Preview (关于我预览 + 了解更多链接)
│  ├─ AI Lab Preview (AI创意预览)
│  └─ CTA Section (联系我入口)
│
├─ 02 ABOUT (关于我)
│  ├─ Header / Navigation
│  ├─ Personal Introduction (个人介绍)
│  ├─ Background (背景信息)
│  │  ├─ 教育背景
│  │  ├─ 工作背景
│  │  └─ 技能体系
│  ├─ Experience Timeline (工作经历时间线)
│  │  ├─ 品牌视觉设计经验
│  │  ├─ 电商运营经验
│  │  ├─ 内容运营经验
│  │  └─ AI创意方向
│  ├─ Skills Section (技能展示)
│  │  ├─ 品牌视觉设计
│  │  ├─ 视觉与艺术
│  │  ├─ 内容与运营
│  │  └─ 工具与技术
│  ├─ Design Philosophy (设计理念)
│  └─ CTA (查看项目 / 联系我)
│
├─ 03 PROJECTS (项目案例)
│  ├─ Header / Navigation
│  ├─ Projects Grid / List View
│  │  ├─ Project Card 1
│  │  ├─ Project Card 2
│  │  ├─ Project Card 3
│  │  └─ ...More Projects
│  │
│  └─ Project Detail Page (每个项目独立页面)
│     ├─ Project Header
│     │  ├─ 项目名称
│     │  ├─ 项目分类
│     │  └─ 完成时间
│     ├─ Hero Image (项目核心视觉)
│     ├─ 01 Project Overview (项目概述)
│     ├─ 02 Background (项目背景)
│     ├─ 03 Challenge (项目需求/问题)
│     ├─ 04 Strategy (品牌或视觉策略)
│     ├─ 05 Creative Direction (创意方向)
│     ├─ 06 Design Process (设计过程)
│     ├─ 07 Visual Identity (视觉识别系统)
│     ├─ 08 Applications (实际应用)
│     ├─ 09 Final Outcome (最终成果)
│     ├─ Related Projects (相关项目推荐)
│     └─ Navigation (上一个/下一个项目)
│
├─ 04 AI LAB (AI创意工作流)
│  ├─ Header / Navigation
│  ├─ Section Intro (AI Lab 介绍)
│  ├─ Workflow Visualization (工作流可视化)
│  │  ├─ Brief
│  │  ├─ Research
│  │  ├─ Concept
│  │  ├─ AI Exploration
│  │  ├─ Design Refinement
│  │  └─ Final Visual
│  ├─ AI Projects Grid
│  │  ├─ AI Visual Exploration
│  │  ├─ AI Poster Design
│  │  ├─ AI Brand Concept
│  │  ├─ AI IP Creation
│  │  ├─ AI-Assisted Creative
│  │  └─ AI Visual Experiment
│  ├─ Process Case Study (流程演示项目)
│  │  ├─ Before & After Comparison
│  │  ├─ Process Screenshots
│  │  └─ Thought Process Explanation
│  └─ CTA (探索更多 / 联系我)
│
├─ 05 CONTACT (联系我)
│  ├─ Header / Navigation
│  ├─ Contact Intro
│  ├─ Contact Methods
│  │  ├─ Email
│  │  ├─ WeChat
│  │  ├─ 其他社交平台 (LinkedIn, Instagram 等)
│  │  └─ 其他专业平台
│  ├─ Response Time Info (回复时间说明)
│  └─ Social Links
│
└─ FOOTER
   ├─ Quick Links
   ├─ Social Media
   ├─ Copyright
   └─ Back to Top
```

---

## 二、页面流程图 (Navigation Flow)

```
首页 (Home)
  ├─→ 点击项目卡片 → 项目详情页 (Project Detail)
  │                    ├─→ 上一个/下一个项目 ↔ 项目详情页
  │                    ├─→ 相关项目推荐 → 项目详情页
  │                    └─→ 返回项目列表 → Projects 页面
  │
  ├─→ 了解更多 → About 页面
  │
  ├─→ 查看AI创意 → AI Lab 页面
  │
  ├─→ 联系我 → Contact 页面
  │
  └─→ 导航栏切换 → 任意页面

Projects 页面 (Projects Grid)
  ├─→ 点击项目卡片 → 项目详情页
  ├─→ 分类筛选 → 同类项目
  └─→ 导航栏切换 → 任意页面

AI Lab 页面
  ├─→ 点击AI项目 → AI项目详情 或 大图查看
  ├─→ 了解流程 → Process Case Study
  └─→ 导航栏切换 → 任意页面

Contact 页面
  └─→ 点击联系方式 → 打开邮箱/微信/社交
```

---

## 三、页面设计规范

### 1. 首页 (Home)

#### 结构层级
```
[Header - Navigation]
│
├─ [Hero Section]
│  ├─ 职业标题 (40-56px)
│  ├─ 简短介绍 (16-18px)
│  └─ 视觉作品 (大尺寸图片)
│
├─ [Featured Projects Section]
│  ├─ 标题: "Featured Projects" 或 "精选项目"
│  ├─ 项目卡片 Grid (1-3 列)
│  │  ├─ 项目封面
│  │  ├─ 项目名
│  │  ├─ 项目描述 (2-3 行)
│  │  └─ 标签/分类
│  └─ CTA: "View All Projects"
│
├─ [About Preview Section]
│  ├─ 左侧: 文字介绍 (200-300 字)
│  ├─ 右侧: 个人照片 或 视觉元素
│  └─ CTA: "Learn More" 按钮
│
├─ [AI Lab Preview Section]
│  ├─ 标题: "AI Lab" 或 "AI创意工作流"
│  ├─ 简短介绍: "How I Integrate AI into Design Process"
│  ├─ 工作流流程图 (图片或简化可视化)
│  ├─ 2-3 个精选 AI 作品展示
│  └─ CTA: "Explore AI Lab"
│
├─ [Contact CTA Section]
│  ├─ 大标题: "Let's Work Together" 或 "让我们合作"
│  ├─ 简短文案
│  └─ CTA 按钮: "Get in Touch" 或 "联系我"
│
└─ [Footer]
   └─ 页脚信息
```

#### 设计要点
- Hero Section 占屏幕 60-80%，留白充足
- 项目卡片 Hover 效果: 升起 + 阴影加深
- 配色: 白色背景 + 灰色文字 + 蓝色 CTA 按钮
- 留白: Section 之间 80px 间距

---

### 2. About 页面

#### 结构层级
```
[Header - Navigation]
│
├─ [Hero Section]
│  ├─ 标题: "About Me" 或 "关于我"
│  └─ 简短介绍 (2-3 句)
│
├─ [Introduction Section]
│  ├─ 左侧: 个人照片或视觉元素
│  ├─ 右侧: 
│  │   ├─ "Who I Am"
│  │   └─ 自我介绍 (300-500 字)
│  └─ 可选: 个人标签/身份词
│
├─ [Background Section]
│  ├─ 教育背景
│  │  ├─ 学位
│  │  └─ 学校
│  ├─ 专业背景
│  │  ├─ 油画学习
│  │  └─ 手绘能力
│  └─ 综合背景说明
│
├─ [Experience Section - Timeline]
│  ├─ 品牌视觉设计 (Logo, VI, Poster 等)
│  ├─ 女装品牌运营与设计
│  ├─ 跨境电商运营
│  ├─ TikTok 海外账号运营
│  ├─ 店铺视觉与陈列
│  ├─ 视频剪辑
│  └─ AI 辅助创意
│
├─ [Skills Section]
│  ├─ 品牌视觉设计
│  │  └─ Logo, VI, Poster, Brand Extension 等
│  ├─ 视觉与艺术
│  │  └─ Graphic Design, Hand Drawing, Oil Painting 等
│  ├─ 内容与运营
│  │  └─ E-Commerce, TikTok, Content Strategy 等
│  └─ 工具与软件
│     └─ Adobe Suite, Video Tools, AI Tools 等
│
├─ [Design Philosophy Section]
│  ├─ 标题: "My Design Philosophy" 或 "我的设计理念"
│  ├─ 核心观点 (可用引用块展示)
│  ├─ 品牌思维的重要性
│  ├─ AI 在设计中的角色
│  └─ 对商业设计的理解
│
└─ [CTA Section]
   ├─ "Let's Collaborate" 或 "让我们合作"
   ├─ "View My Work" 按钮 → Projects
   └─ "Get in Touch" 按钮 → Contact
```

#### 设计要点
- 使用时间线展示工作经历
- 技能可用 Tag 或图标表示
- 左右两栏布局 (Desktop) / 上下单列 (Mobile)
- 配色: 白 + 灰 + 蓝
- 可使用微妙的背景图案或纹理

---

### 3. Projects 页面

#### 结构层级
```
[Header - Navigation]
│
├─ [Hero / Intro Section]
│  ├─ 标题: "Projects" 或 "项目案例"
│  ├─ 简短介绍: "Featured Projects" / "Showcase of My Work"
│  └─ 可选: 总项目数
│
├─ [Filter / Category Section]
│  ├─ "All" (所有项目)
│  ├─ "Brand Visual Design" (品牌视觉)
│  ├─ "E-Commerce Visual" (电商视觉)
│  ├─ "Content & Social" (内容运营)
│  └─ "AI Creative" (AI创意)
│
├─ [Projects Grid]
│  ├─ 响应式网格 (Desktop: 3列 / Tablet: 2列 / Mobile: 1列)
│  ├─ Project Card × N
│  │  ├─ 项目封面图 (Aspect Ratio: 16:10)
│  │  ├─ 项目名称
│  │  ├─ 项目描述 (2-3 行)
│  │  ├─ 项目分类标签
│  │  ├─ 完成年份 / 日期
│  │  └─ Hover 效果: 升起 + 图片缩放 (1.05x)
│  │
│  └─ Pagination / Load More
│     ├─ 分页按钮 (如项目很多)
│     └─ 或 "Load More" 按钮
│
└─ [CTA Section]
   ├─ "Interested?" 或 "感兴趣?"
   ├─ "Let's Work Together"
   └─ "Contact Me" CTA 按钮
```

#### 每个项目详情页 (Project Detail Page)

```
[Header - Navigation]
│
├─ [Project Hero Section]
│  ├─ 项目标题 (H1, 40-56px)
│  ├─ 项目分类标签
│  ├─ 项目完成日期
│  ├─ 项目简述 (1-2 句)
│  └─ 大尺寸 Hero 图片 (100% 宽, 60-80vh 高)
│
├─ [Content Sections - 根据项目内容灵活组合]
│
│  ├─ [01 PROJECT OVERVIEW]
│  │  └─ 项目概述 (3-5 句话)
│  │     + 可选图片
│  │
│  ├─ [02 BACKGROUND]
│  │  ├─ "Client / Project" 
│  │  ├─ "Challenge"
│  │  └─ "Objective"
│  │
│  ├─ [03 CHALLENGE & REQUIREMENTS]
│  │  ├─ 问题描述
│  │  ├─ 项目需求
│  │  └─ 可选: 列表形式
│  │
│  ├─ [04 STRATEGY]
│  │  ├─ 品牌策略 / 视觉策略
│  │  ├─ 核心思路
│  │  └─ 关键决策
│  │
│  ├─ [05 CREATIVE DIRECTION]
│  │  ├─ 创意方向说明
│  │  ├─ 配色方案
│  │  ├─ 字体选择
│  │  ├─ 视觉元素
│  │  └─ 配合图片展示
│  │
│  ├─ [06 DESIGN PROCESS]
│  │  ├─ 草图 / 初稿
│  │  ├─ 迭代过程
│  │  ├─ 最终版本
│  │  └─ 过程说明
│  │
│  ├─ [07 VISUAL IDENTITY]
│  │  ├─ Logo
│  │  ├─ 色彩系统
│  │  ├─ 字体系统
│  │  ├─ 图案/图标
│  │  └─ VI 完整展示
│  │
│  ├─ [08 APPLICATIONS]
│  │  ├─ 应用场景展示
│  │  ├─ 包装设计
│  │  ├─ 海报
│  │  ├─ 店铺视觉
│  │  ├─ 社交媒体
│  │  └─ 其他物料应用
│  │
│  └─ [09 FINAL OUTCOME / RESULT]
│     ├─ 最终成果展示
│     ├─ 关键成就 (可选)
│     ├─ 客户反馈 (可选)
│     └─ 项目影响 (可选)
│
├─ [Related Projects Section]
│  ├─ 标题: "Related Projects" 或 "更多项目"
│  ├─ 显示 3 个相关项目卡片
│  └─ 每个卡片可点击进入
│
├─ [Project Navigation]
│  ├─ ← Previous Project
│  ├─ All Projects
│  └─ Next Project →
│
└─ [Footer]
```

#### 设计要点
- 项目卡片 Hover 效果明显
- 详情页采用内容优先的排版
- 图片 > 文字，充分展示视觉作品
- 段落最大宽度 700px
- 图片和文字的交替布局
- 段落间距: 24px, Section 间距: 64-80px

---

### 4. AI Lab 页面

#### 结构层级
```
[Header - Navigation]
│
├─ [Hero Section]
│  ├─ 标题: "AI Lab" 或 "AI创意工作流"
│  ├─ Tagline: "Exploring AI in Design Process"
│  ├─ 简短介绍: 我如何在真实工作流中融合 AI
│  └─ 可选: 背景视觉元素 (实验性但不过度)
│
├─ [Intro Section]
│  ├─ 核心观点说明
│  └─ AI 在我设计工作中的角色
│
├─ [Workflow Visualization Section]
│  ├─ 流程标题: "My AI Design Workflow"
│  ├─ 可视化流程图:
│  │   Brief → Research → Concept → AI Exploration 
│  │           → Design Refinement → Final Visual
│  ├─ 每个阶段可点击查看详情 (可选)
│  └─ 或展示流程关键图片
│
├─ [AI Projects Grid]
│  ├─ 分类选项卡:
│  │  ├─ All
│  │  ├─ AI Visual Exploration
│  │  ├─ AI Poster Design
│  │  ├─ AI Brand Concept
│  │  ├─ AI IP Creation
│  │  ├─ AI-Assisted Creative
│  │  └─ AI Experiment
│  │
│  └─ 项目卡片 Grid (3列/2列/1列响应式)
│     ├─ 项目缩略图
│     ├─ 项目名
│     ├─ 项目描述
│     ├─ 工具标签 (Midjourney, DALL-E 等)
│     └─ Hover 效果: 显示详情 或 预览
│
├─ [Featured Process Case Study]
│  ├─ 标题: "From Brief to Final Design"
│  ├─ 子标题: 一个项目的完整过程展示
│  │
│  ├─ 流程步骤展示:
│  │  ├─ STEP 1: Brief (文案展示)
│  │  ├─ STEP 2: Research (参考图展示)
│  │  ├─ STEP 3: Concept (概念草图)
│  │  ├─ STEP 4: AI Exploration (AI 生成结果 - 3-4个)
│  │  ├─ STEP 5: Design Refinement (精化过程)
│  │  └─ STEP 6: Final Visual (最终成品)
│  │
│  ├─ 旁白: 在每一步添加设计思考说明
│  └─ 可选: Before & After 对比
│
├─ [Technology & Tools Section]
│  ├─ 使用的 AI 工具
│  │  ├─ Midjourney (图像生成)
│  │  ├─ DALL-E (图像生成)
│  │  ├─ ChatGPT (创意协助)
│  │  └─ Other Tools
│  │
│  └─ 对每个工具的理解与应用
│
└─ [CTA Section]
   ├─ "Interested in Collaborating?"
   ├─ "Explore More Projects" → Projects 页面
   └─ "Get in Touch" → Contact 页面
```

#### 设计要点
- 可以比其他页面稍微更实验性 (但保持品牌统一)
- 强调"过程"而不是只展示"结果"
- 使用步骤编号 (STEP 1, STEP 2 等) 增加清晰度
- 流程图可用简化的数字或图形表示
- 支持图片对比滑块 (Before & After)
- 配色可使用稍微更深的背景 (#f0f0f0) 来制造分层

---

### 5. Contact 页面

#### 结构层级
```
[Header - Navigation]
│
├─ [Hero Section]
│  ├─ 标题: "Get in Touch" 或 "联系我"
│  ├─ Tagline: "Let's Create Something Amazing Together"
│  └─ 简短邀请文案 (2-3 句)
│
├─ [Contact Info Section]
│  ├─ 标题: "Contact Methods" 或 "联系方式"
│  │
│  ├─ Contact Card 1: Email
│  │  ├─ Icon
│  │  ├─ 标题: "Email"
│  │  ├─ 邮箱地址 (可点击)
│  │  └─ "Send an email"
│  │
│  ├─ Contact Card 2: WeChat
│  │  ├─ Icon / 二维码
│  │  ├─ 标题: "WeChat"
│  │  ├─ 微信号
│  │  └─ "Add me on WeChat"
│  │
│  ├─ Contact Card 3: 其他社交
│  │  ├─ LinkedIn
│  │  ├─ Instagram
│  │  ├─ 其他平台 (如有)
│  │  └─ 对应链接
│  │
│  └─ (可选) Contact Card 4: 表单
│     ├─ Name 输入框
│     ├─ Email 输入框
│     ├─ Message 文本框
│     └─ Send 按钮
│
├─ [Response Time Info]
│  ├─ "Response Time"
│  ├─ "I usually reply within 24-48 hours"
│  └─ 其他相关说明
│
├─ [Social Links]
│  ├─ 社交媒体图标
│  └─ 链接到各平台
│
└─ [Footer]
```

#### 设计要点
- 极简设计，不过度商业化
- Contact Card 可使用卡片式布局或简单的列表
- 邮箱、微信等信息清晰可访问
- Hover 效果: 链接变色或卡片升起
- 配色: 白 + 灰 + 蓝
- 可选: 添加微妙的背景纹理

---

### 6. Header & Navigation

#### Header 固定布局
```
[Logo/Name] -------- [Navigation Menu] ------ [Icon/Theme]
Left Side            Center                   Right Side
```

#### Navigation 菜单项
- Home
- About
- Projects
- AI Lab
- Contact

#### 设计要点
- 高度: 64px (Desktop)
- 背景: 白色 / 半透明
- 文字: 14-16px
- 活跃状态: 底线 + 字体加粗
- Hover: 颜色变化 (灰 → 蓝)
- Mobile: 汉堡菜单

---

### 7. Footer

#### Footer 结构
```
[Quick Links] [Social] [Copyright]
或
[Quick Links]
[Social Links]
[Copyright & Back to Top]
```

#### 包含内容
- 快速链接: Home, About, Projects, AI Lab, Contact
- 社交媒体: Email, WeChat, LinkedIn, Instagram 等
- 版权信息: © [Year] [Your Name]. All rights reserved.
- Back to Top 按钮

#### 设计要点
- 背景: 白色 / #f5f5f5
- 文字: 12-14px
- 边框: 顶部 1px #e5e5e5
- 内间距: 64px
- Mobile: 单列布局

---

## 四、组件列表 (Component Checklist)

### 页面级组件
- [ ] Header / Navigation
- [ ] Footer
- [ ] Hero Section
- [ ] Content Section (文字 + 图片)
- [ ] Card Component (项目卡片)
- [ ] Grid Layout (网格布局)
- [ ] Timeline (时间线)
- [ ] Tag / Badge (标签)
- [ ] CTA Section (号召性用语)
- [ ] Image Gallery (图片库)
- [ ] Workflow Diagram (流程图)

### 交互组件
- [ ] Button (按钮)
- [ ] Link / Hover State
- [ ] Form Elements (表单)
- [ ] Dropdown / Menu
- [ ] Modal / Dialog
- [ ] Tabs / Tab Switcher
- [ ] Pagination / Load More

### 微交互
- [ ] Smooth Scroll
- [ ] Fade-in on Scroll
- [ ] Hover Scale (1.02x - 1.05x)
- [ ] Shadow Change
- [ ] Color Transition
- [ ] Image Zoom

---

## 五、内容模板与数据结构

### Project Data Structure
```json
{
  "id": "unique-id",
  "title": "Project Title",
  "slug": "project-slug",
  "category": "Brand Visual Design",
  "date": "2024-01-15",
  "thumbnail": "images/project-thumb.jpg",
  "description": "Short description",
  "heroImage": "images/hero.jpg",
  "sections": [
    {
      "type": "overview",
      "title": "Project Overview",
      "content": "...",
      "images": []
    },
    {
      "type": "background",
      "title": "Background",
      "content": "...",
      "images": []
    }
    // ... 更多 sections
  ],
  "tags": ["Logo", "Branding", "Visual Design"],
  "year": 2024
}
```

### AI Project Data Structure
```json
{
  "id": "ai-project-id",
  "title": "AI Project Title",
  "slug": "ai-project-slug",
  "type": "AI Visual Exploration",
  "description": "Description",
  "images": ["image1.jpg", "image2.jpg"],
  "tools": ["Midjourney", "ChatGPT"],
  "process": [
    {
      "step": "Brief",
      "description": "..."
    },
    {
      "step": "AI Exploration",
      "images": ["ai-result-1.jpg", "ai-result-2.jpg"]
    }
    // ... 更多步骤
  ]
}
```

---

## 六、优先级 & 实现阶段

### Phase 1: 基础框架 (当前)
- [ ] HTML 结构
- [ ] CSS 设计系统
- [ ] 基础布局
- [ ] Navigation
- [ ] 响应式网格

### Phase 2: 核心页面
- [ ] Home 页面
- [ ] About 页面
- [ ] Projects Grid
- [ ] Contact 页面

### Phase 3: 内容页面
- [ ] Project Detail 页面
- [ ] AI Lab 页面
- [ ] Workflow 可视化

### Phase 4: 交互与优化
- [ ] 微交互 (Hover, Scroll)
- [ ] 动画效果
- [ ] 性能优化
- [ ] SEO 优化
- [ ] 无障碍优化

### Phase 5: 内容填充
- [ ] 添加真实项目
- [ ] 添加个人信息
- [ ] 优化文案
- [ ] 部署上线

---

**版本**: 1.0 | **最后更新**: 2024年
