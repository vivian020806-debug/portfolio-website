# 作品集网站 - 维护指南

## 📋 概述

本指南帮助您理解如何维护和更新这个专业的个人作品集网站。网站设计采用**数据驱动**的方式，使您能够轻松添加、编辑或删除内容，而无需修改 HTML 结构。

---

## 🔄 日常维护任务

### 每月任务清单

- [ ] 检查所有链接是否正常
- [ ] 验证图片是否完整显示
- [ ] 更新最新项目
- [ ] 检查邮件是否有联系
- [ ] 备份网站文件

### 每季度任务清单

- [ ] 审核设计是否仍符合专业要求
- [ ] 更新技能和工作经验部分
- [ ] 检查浏览器兼容性
- [ ] 优化图片和性能
- [ ] 更新 About 页面信息

---

## 🎯 项目管理工作流

### 添加新项目的标准流程

#### 第一步：准备项目资料
```
√ 项目标题 (简洁有力)
√ 项目类别 (选择现有类别或新建)
√ 项目描述 (2-3 句简述)
√ 完成日期
√ 所有项目图片
  - 缩略图 (16:10 比例)
  - Hero 图 (21:9 或 16:9)
  - 过程图片
  - 应用展示图
```

#### 第二步：编辑 content.json

1. 打开 `src/data/content.json`
2. 在 `projects` 数组中添加新项目
3. 填写完整的项目信息

**项目数据结构示例**：
```json
{
  "id": "brand-redesign-2024",
  "title": "Brand Identity Redesign",
  "slug": "brand-redesign-2024",
  "category": "Brand Visual Design",
  "date": "2024-08-15",
  "thumbnail": "/src/images/projects/brand-redesign-thumb.jpg",
  "description": "Complete brand visual identity redesign for an e-commerce startup.",
  "heroImage": "/src/images/projects/brand-redesign-hero.jpg",
  "sections": [
    {
      "type": "overview",
      "title": "Project Overview",
      "content": "Brief overview of the project...",
      "images": []
    }
  ],
  "tags": ["Logo", "Brand Identity", "VI Design"],
  "year": 2024,
  "featured": true
}
```

#### 第三步：上传项目图片

1. 创建项目文件夹（如需要）：`/src/images/projects/brand-redesign-2024/`
2. 上传所有项目图片
3. 使用清晰的命名约定：
   - `brand-redesign-thumb.jpg` (缩略图)
   - `brand-redesign-hero.jpg` (主图)
   - `brand-redesign-process-01.jpg` (过程图)
   - `brand-redesign-process-02.jpg`
   - `brand-redesign-final.jpg` (最终效果)

#### 第四步：完成首页展示（可选）

在 `index.html` 的 Featured Projects 部分，项目会自动显示（如果 `featured: true`）。

#### 第五步：测试和验证

1. 在浏览器中打开网站
2. 检查项目缩略图是否显示
3. 验证所有文本内容
4. 测试响应式设计
5. 检查链接是否正常

---

## 📝 内容编辑指南

### 编辑关于页面

**文件位置**: `pages/about.html`

需要编辑的部分：

1. **Who I Am** 部分
   - 位置：`<h2>Who I Am</h2>` 下方
   - 内容：个人介绍 300-500 字

2. **Background** 部分
   - 位置：Background 卡片组件
   - 包括：教育背景、艺术基础、综合经验

3. **Professional Experience** 部分
   - 时间轴格式
   - 每项包括：年份范围、职位、公司、描述

4. **Skills** 部分
   - 使用 badge 标签展示技能
   - 分类：品牌设计、视觉艺术、内容运营、工具

5. **Design Philosophy** 部分
   - 核心观点
   - 品牌与商业的理解
   - AI 在设计中的角色

### 编辑 AI Lab 页面

**文件位置**: `pages/ai-lab.html`

关键部分：

1. **Workflow Section** - 工作流程可视化
   - 修改步骤标题和描述
   - 调整流程图的呈现

2. **Featured Process Case Study**
   - Step 1: Brief（项目简述）
   - Step 2-5: 完整的过程展示
   - 添加对应的图片和描述

3. **Tools Section**
   - 更新使用的 AI 工具
   - 添加工具说明

### 编辑联系页面

**文件位置**: `pages/contact.html`

需要更新的部分：

1. **邮箱地址** - 所有 `mailto:your.email@example.com`
2. **微信 ID** - `[YOUR_WECHAT_ID]`
3. **社交媒体链接** - LinkedIn, Instagram 等
4. **FAQ 部分** - 更新常见问题和回答

### 编辑首页

**文件位置**: `index.html`

关键部分：

1. **Hero Section** - 主标题和副标题
2. **About Preview** - 关于我的预览文本
3. **AI Lab Preview** - AI Lab 介绍
4. **CTA Section** - 号召性用语

---

## 🖼️ 图片管理规范

### 图片格式要求

| 用途 | 推荐格式 | 尺寸 | 大小 |
|------|--------|------|------|
| 项目缩略图 | WebP/JPEG | 800×500 | < 100KB |
| Hero 图 | WebP/JPEG | 1200×800 | < 200KB |
| 过程图 | WebP/JPEG | 1200×1200 | < 150KB |
| 个人照片 | WebP/JPEG | 600×800 | < 100KB |

### 图片优化工具

- **TinyPNG** (tinypng.com) - 在线压缩
- **ImageOptim** (Mac) / **FileOptimizer** (Windows) - 批量优化
- **Adobe Lightroom** - 批量导出优化

### 文件夹组织

```
/src/images/
├── /projects/
│   ├── project-1/
│   │   ├── thumb.jpg
│   │   ├── hero.jpg
│   │   ├── process-01.jpg
│   │   └── process-02.jpg
│   ├── project-2/
│   └── ...
├── /ai-projects/
│   ├── ai-project-1/
│   └── ...
└── /about/
    └── personal.jpg
```

---

## 🎨 自定义与品牌更新

### 更新色彩系统

**文件**: `src/styles/variables.css`

修改颜色变量来改变整个网站的配色：

```css
:root {
  /* 改变这些变量以更新您的品牌色彩 */
  --color-accent-blue: #2563eb;      /* 主要强调色 */
  --color-accent-gold: #d4af37;      /* 次要强调色 */
  --color-text-dark: #333333;        /* 主文字 */
  --color-text-medium: #666666;      /* 次要文字 */
}
```

### 更新字体

**文件**: `src/styles/variables.css`

```css
--font-family-base: 'Your Font', sans-serif;
--font-size-h1: 56px;
--font-size-h2: 42px;
/* ... */
```

### 更新间距和布局

**文件**: `src/styles/variables.css` 和 `src/styles/layouts.css`

调整间距变量来改变布局的紧凑度。

---

## 🔗 链接管理

### 内部链接规范

```html
<!-- ✅ 正确 -->
<a href="/pages/about.html">About</a>
<a href="/pages/projects.html">Projects</a>

<!-- ❌ 错误 -->
<a href="about.html">About</a>
<a href="pages\about.html">About</a>
```

### 外部链接

```html
<!-- ✅ 在新标签页打开 -->
<a href="https://example.com" target="_blank">External Link</a>

<!-- 考虑添加 rel 属性 -->
<a href="https://example.com" target="_blank" rel="noopener">Link</a>
```

### 检查死链的方法

1. 使用在线工具：[Dead Link Checker](https://www.deadlinkchecker.com/)
2. 使用 Chrome 扩展：Link Checker
3. 手动定期测试所有链接

---

## 📊 性能优化建议

### 页面加载时间优化

1. **图片优化**
   - 压缩所有图片
   - 使用 WebP 格式
   - 使用合适的尺寸

2. **代码优化**
   - 删除未使用的 CSS
   - 最小化 JavaScript
   - 使用 CSS 变量减少重复

3. **缓存策略**
   - 启用浏览器缓存
   - 使用 CDN 加速
   - 版本化静态资源

### 性能测试工具

- **Google PageSpeed Insights** (pagespeed.web.dev)
- **GTmetrix** (gtmetrix.com)
- **WebPageTest** (webpagetest.org)

---

## 🔒 安全维护

### 定期备份

1. **本地备份**
   - 每月备份所有文件
   - 存储到外部硬盘或云服务
   - 保留最新 3 个版本

2. **云端备份**
   - 使用 GitHub 版本控制
   - 定期上传到云服务（Google Drive, Dropbox）

### 安全最佳实践

- [ ] 不在网站中暴露个人信息
- [ ] 定期更新所有链接和信息
- [ ] 使用 HTTPS（如果已部署到服务器）
- [ ] 定期检查网站统计数据
- [ ] 监控邮件账户的垃圾信息

---

## 📈 分析与改进

### 添加分析工具

推荐使用 Google Analytics 追踪访问者：

```html
<!-- 在 </head> 或 </body> 前添加 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_GA_ID');
</script>
```

### 关注的指标

- 页面加载时间
- 跳出率
- 用户交互
- 最受欢迎的项目
- 转化率（点击联系我）

---

## 🚀 部署与发布

### 本地开发

```bash
# 使用 Live Server 进行本地测试
# VS Code: 右键 > Open with Live Server
```

### 部署到服务器

1. **选择服务器**
   - 共享主机（推荐新手）
   - VPS（更多控制）
   - Netlify/Vercel（静态网站托管）

2. **上传文件**
   - 使用 FTP 客户端（FileZilla）
   - 或使用服务器提供的控制面板

3. **配置域名**
   - 购买域名
   - 配置 DNS 指向您的服务器
   - 设置 SSL 证书

### 部署检查清单

- [ ] 所有文件已上传
- [ ] 文件夹结构正确
- [ ] 图片路径正确
- [ ] 链接都可正常访问
- [ ] 响应式设计在手机上工作
- [ ] 表单提交正常
- [ ] SEO 元标签已配置
- [ ] 网站速度可接受

---

## 🐛 故障排除

### 常见问题解决方案

| 问题 | 原因 | 解决方案 |
|------|------|--------|
| 样式不显示 | CSS 路径错误 | 检查 HTML 中的 CSS 链接 |
| 图片破损 | 图片路径错误 | 验证图片文件夹路径 |
| 页面不响应 | JavaScript 错误 | 打开浏览器控制台检查错误 |
| 链接无效 | URL 错误或文件不存在 | 检查文件名和路径 |
| 页面加载慢 | 文件太大或网络问题 | 压缩图片，优化代码 |

### 调试技巧

1. **使用浏览器开发工具**
   - 打开：F12 或 Ctrl+Shift+I
   - 查看 Console 标签找错误
   - 使用 Inspector 检查 HTML/CSS

2. **检查文件编码**
   - 确保所有文件使用 UTF-8 编码
   - 中文字符可能显示不正常

3. **测试不同浏览器**
   - Chrome, Firefox, Safari, Edge
   - 检查兼容性问题

---

## 📅 年度维护计划

### Q1 (一月-三月)
- [ ] 审核去年的项目
- [ ] 更新个人信息
- [ ] 优化设计风格
- [ ] 检查所有链接

### Q2 (四月-六月)
- [ ] 添加新的项目案例
- [ ] 更新 AI Lab 内容
- [ ] 改进 About 页面
- [ ] 性能优化

### Q3 (七月-九月)
- [ ] 添加新项目
- [ ] 更新技能部分
- [ ] 改进用户体验
- [ ] 安全检查

### Q4 (十月-十二月)
- [ ] 整理全年工作
- [ ] 准备来年的展示
- [ ] 备份网站
- [ ] 计划改进方向

---

## 🎓 学习资源

### 前端开发
- MDN Web Docs (developer.mozilla.org)
- CSS Tricks (css-tricks.com)
- Web.dev (web.dev)

### 设计
- Design Systems (designsystems.com)
- A List Apart (alistapart.com)
- Nielsen Norman Group (nngroup.com)

### 工具
- Visual Studio Code (code.visualstudio.com)
- Git & GitHub (github.com)
- VS Code Extensions

---

## 📞 获取帮助

### 在线社区
- Stack Overflow (技术问题)
- GitHub Discussions (项目相关)
- Designer Hangout (设计讨论)

### 参考文档
- 本项目的 DESIGN_SYSTEM.md
- INFORMATION_ARCHITECTURE.md
- README.md

---

## 版本历史

| 版本 | 日期 | 更新内容 |
|------|------|--------|
| 1.0 | 2024-08 | 初始版本发布 |

---

**最后更新**: 2024年  
**维护者**: [Your Name]  
**联系方式**: [Your Email]

---

> 💡 提示：定期查看本指南，保持网站的最佳状态。祝您的作品集网站取得成功！
