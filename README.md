# 个人作品集网站 - 项目说明

## 🎨 项目概述

这是一个专业的个人作品集网站，用于展示品牌视觉设计师和AI创意设计师的工作。网站采用现代、极简的设计风格，强调设计感和品味。

### 核心特点
- **专业设计**: 极简高级的视觉风格
- **响应式设计**: 完美支持桌面、平板、手机
- **易于维护**: 使用 JSON 数据驱动，方便更新内容
- **AI Lab 栏目**: 展示AI如何融入设计工作流
- **完整的案例展示**: 从首页到详情页的完整项目展示系统

---

## 📁 项目结构

```
portfolio-website/
├── index.html                 # 首页
├── pages/                     # 页面文件夹
│   ├── about.html             # 关于我页面
│   ├── projects.html          # 项目列表页面
│   ├── ai-lab.html            # AI创意工作流页面
│   └── contact.html           # 联系我页面
├── src/                       # 源文件夹
│   ├── styles/                # 样式文件
│   │   ├── variables.css      # CSS 变量 (色彩、字体、间距)
│   │   ├── global.css         # 全局样式 & 重置
│   │   └── layouts.css        # 布局和组件样式
│   ├── scripts/               # JavaScript 文件
│   │   ├── main.js            # 核心功能
│   │   └── projects.js        # 项目过滤功能
│   ├── data/                  # 数据文件
│   │   └── content.json       # 所有内容数据
│   └── images/                # 图片文件夹
│       ├── projects/          # 项目图片
│       ├── ai-projects/       # AI项目图片
│       └── ...
├── DESIGN_SYSTEM.md           # 设计系统文档
├── INFORMATION_ARCHITECTURE.md # 信息架构文档
└── README.md                  # 本文件
```

---

## 🚀 快速开始

### 1. 打开网站
直接在浏览器中打开 `index.html` 文件即可运行网站。无需服务器或编译步骤。

### 2. 本地开发
建议使用 VS Code 的 Live Server 扩展：
1. 安装 "Live Server" 扩展
2. 右键点击 `index.html`
3. 选择 "Open with Live Server"

### 3. 部署到服务器
将所有文件上传到您的网络服务器即可。无需任何特殊配置。

---

## 📝 内容管理与更新

### 修改基本信息
编辑 `src/data/content.json`：

```json
{
  "config": {
    "siteName": "Design Portfolio",
    "author": "Your Name",
    "email": "your.email@example.com",
    "wechat": "your_wechat_id"
  }
}
```

### 添加新项目

1. **添加项目数据** - 编辑 `src/data/content.json`：

```json
{
  "id": "project-new",
  "title": "New Project Title",
  "slug": "new-project",
  "category": "Brand Visual Design",
  "date": "2024-01-15",
  "thumbnail": "/src/images/projects/project-new-thumb.jpg",
  "description": "Project description - 2-3 sentences",
  "heroImage": "/src/images/projects/project-new-hero.jpg",
  "sections": [
    {
      "type": "overview",
      "title": "Project Overview",
      "content": "Overview content here...",
      "images": []
    }
    // ... 更多 sections
  ],
  "tags": ["Tag1", "Tag2", "Tag3"],
  "year": 2024,
  "featured": true
}
```

2. **添加项目图片**：
   - 将缩略图放在 `src/images/projects/`
   - 将详情图片放在相同文件夹
   - 使用清晰的命名：`project-name-thumb.jpg`, `project-name-hero.jpg`

3. **在主页显示**：
   - 如果 `featured: true`，项目会自动显示在首页

### 修改关于我信息

编辑 `pages/about.html`，更新以下部分：
- "Who I Am" 部分：个人介绍
- "Background" 部分：教育和背景
- "Professional Experience"：工作经历
- "Design Philosophy"：设计理念

或编辑 `src/data/content.json` 中的 `about` 部分。

### 修改联系信息

1. 编辑 `src/data/content.json` 中的 `contact` 部分
2. 或直接编辑 `pages/contact.html`
3. 更新邮箱、微信、社交媒体链接

### 修改AI Lab内容

编辑 `pages/ai-lab.html` 中的以下部分：
- Workflow 步骤说明
- AI 项目类型描述
- Featured Process Case Study
- Tools & Technologies

---

## 🎨 设计系统与自定义

### 修改色彩
编辑 `src/styles/variables.css`：

```css
:root {
  --color-accent-blue: #2563eb;        /* 主要强调色 */
  --color-accent-gold: #d4af37;        /* 次要强调色 */
  --color-text-dark: #333333;          /* 文字颜色 */
  /* ... 更多颜色 */
}
```

### 修改字体
编辑 `src/styles/variables.css`：

```css
--font-family-base: 'Your Font Name', sans-serif;
--font-size-h1: 56px;  /* 修改标题大小 */
--font-size-h2: 42px;
/* ... 更多字体配置 */
```

### 修改间距
编辑 `src/styles/variables.css` 中的 spacing 部分：

```css
--spacing-1: 8px;      /* 基础单位 */
--spacing-2: 16px;
--spacing-3: 24px;
/* ... */
```

### 修改响应式布局
编辑 `src/styles/layouts.css` 中的媒体查询部分：

```css
@media (max-width: 768px) {
  /* 平板和手机样式 */
}
```

---

## 🔧 常见编辑任务

### 1. 更新首页英文标题

编辑 `index.html`，找到 Hero Section：
```html
<h1 class="hero-title">
  Brand Visual Designer
  <br>
  <span style="color: var(--color-accent-blue);">× AI Creative Designer</span>
</h1>
```

### 2. 修改导航链接

编辑所有 HTML 文件中的 `<nav>` 部分。导航在 header 中，所有页面的结构相同。

### 3. 添加新页面

1. 复制现有页面 HTML 文件
2. 修改标题和内容
3. 在导航中添加链接
4. 更新所有其他页面的导航

### 4. 修改主色调

只需修改 `src/styles/variables.css` 中的 `--color-accent-blue`，整个网站会自动更新。

### 5. 更改项目分类

在 `pages/projects.html` 中编辑 filter 按钮，并在项目卡片中对应更新。

---

## 📱 响应式设计检查点

网站在以下尺寸都有优化：
- **Desktop**: ≥ 1200px
- **Tablet**: 768px - 1199px
- **Mobile**: < 768px

### 测试响应式设计
1. 在 Chrome DevTools 中按 `F12`
2. 点击 "Toggle device toolbar" (Ctrl+Shift+M)
3. 选择不同的设备尺寸进行测试

---

## 💡 最佳实践

### 图片优化
- 使用 WebP 格式以获得最佳性能
- 压缩图片至 500KB 以下
- 使用描述性的文件名

### 文字内容
- 项目描述保持简洁 (2-3 句)
- 使用 Markdown 格式的重点内容
- 定期更新信息保持新鲜

### 链接管理
- 确保所有内部链接都是相对路径 `/pages/`
- 外部链接添加 `target="_blank"`
- 定期检查死链

### 性能优化
- 优化图片大小和格式
- 定期清理未使用的代码
- 使用浏览器缓存

---

## 🐛 常见问题

### 问题：网站看起来样式不对
**解决方案**：
1. 清除浏览器缓存 (Ctrl+Shift+Delete)
2. 确保所有 CSS 文件都正确链接
3. 检查浏览器控制台是否有错误 (F12)

### 问题：图片不显示
**解决方案**：
1. 检查图片路径是否正确
2. 确保图片文件存在于正确的文件夹
3. 在浏览器控制台查看 404 错误

### 问题：导航链接不工作
**解决方案**：
1. 检查 href 属性是否正确
2. 确保文件名拼写完全相同 (区分大小写)
3. 使用相对路径 `/pages/about.html`

### 问题：响应式设计不生效
**解决方案**：
1. 确保 HTML 头部有 viewport meta 标签
2. 清除浏览器缓存
3. 在 DevTools 中测试不同尺寸

---

## 📖 额外资源

### 学习资源
- [CSS 变量学习](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [响应式设计基础](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)
- [HTML 最佳实践](https://developer.mozilla.org/en-US/docs/Learn/HTML)

### 图片优化
- [TinyPNG](https://tinypng.com/) - 图片压缩
- [ImageOptim](https://imageoptim.com/) - 批量优化

### 设计工具
- 使用 Figma 或 Adobe XD 进行设计
- 使用 CSS Gradient 生成器创建渐变
- 使用 Font Pairing 工具选择字体

---

## 📞 支持

遇到问题？
1. 查看浏览器开发者工具中的错误信息
2. 检查文件路径和文件名
3. 参考本文档中的常见问题部分

---

## 📄 文件清单

必需文件：
- ✅ `index.html` - 首页
- ✅ `pages/about.html` - 关于我页面
- ✅ `pages/projects.html` - 项目页面
- ✅ `pages/ai-lab.html` - AI Lab 页面
- ✅ `pages/contact.html` - 联系我页面
- ✅ `src/styles/variables.css` - 设计变量
- ✅ `src/styles/global.css` - 全局样式
- ✅ `src/styles/layouts.css` - 布局样式
- ✅ `src/scripts/main.js` - 主脚本
- ✅ `src/data/content.json` - 内容数据

可选文件：
- `src/scripts/projects.js` - 项目过滤
- `src/images/` - 图片文件夹

---

## 🎯 下一步

1. **添加真实内容**：
   - 上传项目图片
   - 编写项目描述
   - 添加个人信息

2. **自定义设计**：
   - 修改色彩系统
   - 调整字体
   - 优化布局

3. **测试部署**：
   - 在不同设备测试
   - 检查所有链接
   - 优化性能

4. **上线部署**：
   - 选择域名
   - 购买主机
   - 配置 SSL 证书
   - 上传文件到服务器

---

**版本**: 1.0  
**最后更新**: 2024年  
**维护者**: [Your Name]

---

祝您的作品集网站取得成功！🎉
