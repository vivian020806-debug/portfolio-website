# 🚀 快速启动指南

## 欢迎！这是你的专业作品集网站

恭喜您！您现在拥有一个专业、现代、易于维护的个人作品集网站。这份指南将帮助您快速上手。

---

## ⏱️ 5分钟快速开始

### 第一步：打开网站 (1分钟)

1. 打开文件夹：`portfolio-website`
2. 右键点击 `index.html`
3. 选择 "用浏览器打开" 或 "Open with Live Server"
4. 你的网站已在浏览器中加载！

### 第二步：浏览网站 (2分钟)

点击导航栏查看不同页面：
- **Home** - 首页（你在这里）
- **About** - 关于你的信息
- **Projects** - 项目案例
- **AI Lab** - AI 创意工作流
- **Contact** - 联系方式

### 第三步：修改基本信息 (2分钟)

编辑 `src/data/content.json`，修改：
```json
{
  "config": {
    "author": "改为你的名字",
    "email": "改为你的邮箱",
    "wechat": "改为你的微信号"
  }
}
```

🎉 完成！网站已经可以使用了。

---

## 📝 第一周：基本自定义

### Day 1: 修改个人信息
- [ ] 编辑 `pages/about.html` 中的个人介绍
- [ ] 更新工作经历
- [ ] 修改教育背景
- [ ] 添加个人照片

### Day 2: 更新联系方式
- [ ] 编辑 `pages/contact.html`
- [ ] 更新邮箱地址
- [ ] 添加微信二维码或 ID
- [ ] 添加社交媒体链接

### Day 3: 自定义色彩
- [ ] 打开 `src/styles/variables.css`
- [ ] 修改 `--color-accent-blue` (主色)
- [ ] 修改 `--color-accent-gold` (次色)
- [ ] 刷新浏览器查看效果

### Day 4: 第一个项目
- [ ] 准备项目图片
- [ ] 编写项目描述
- [ ] 在 `src/data/content.json` 中添加项目
- [ ] 验证项目在网站上显示正确

### Day 5: About 页面完善
- [ ] 完成个人背景介绍
- [ ] 添加所有工作经历
- [ ] 列出所有技能
- [ ] 编写设计理念部分

### Day 6: 首页优化
- [ ] 选择 2-3 个项目作为精选展示
- [ ] 更新首页的 About Preview
- [ ] 完善 AI Lab 预览部分
- [ ] 检查所有链接

### Day 7: 最终检查
- [ ] 在不同浏览器测试
- [ ] 在手机上测试响应式
- [ ] 检查所有链接是否可用
- [ ] 验证图片加载正确

---

## 📚 重要文件说明

### 📄 文档文件
| 文件 | 用途 | 何时阅读 |
|------|------|---------|
| README.md | 项目概述和基础说明 | 现在 |
| DESIGN_SYSTEM.md | 设计系统详细文档 | 修改样式时 |
| INFORMATION_ARCHITECTURE.md | 网站结构和页面说明 | 添加新页面时 |
| MAINTENANCE_GUIDE.md | 长期维护指南 | 定期维护时 |

### 🌐 网页文件
| 文件 | 页面 | 编辑建议 |
|------|------|--------|
| index.html | 首页 | 修改英雄标题、项目精选 |
| pages/about.html | 关于我 | 更新个人信息、经历、技能 |
| pages/projects.html | 项目列表 | 添加项目分类、过滤 |
| pages/ai-lab.html | AI实验室 | 展示 AI 工作流程 |
| pages/contact.html | 联系我 | 更新联系方式 |

### 🎨 样式文件
| 文件 | 用途 | 修改频率 |
|------|------|--------|
| src/styles/variables.css | 色彩、字体、间距 | 根据需要 |
| src/styles/global.css | 全局样式 | 很少修改 |
| src/styles/layouts.css | 布局和组件 | 很少修改 |

### 📦 数据文件
| 文件 | 用途 | 修改频率 |
|------|------|--------|
| src/data/content.json | 所有文本内容 | 定期更新 |

### 💻 脚本文件
| 文件 | 用途 | 修改频率 |
|------|------|--------|
| src/scripts/main.js | 核心功能 | 很少修改 |
| src/scripts/projects.js | 项目过滤 | 很少修改 |

---

## 🎯 常见任务

### 我想修改网站的颜色

**方法**：编辑 `src/styles/variables.css`

```css
/* 找到这些行并修改 */
--color-accent-blue: #2563eb;    /* 改为你喜欢的颜色 */
--color-accent-gold: #d4af37;
--color-text-dark: #333333;
```

保存文件，刷新浏览器看效果。

### 我想添加一个新项目

**方法**：
1. 准备项目图片（缩略图 + 详情图）
2. 打开 `src/data/content.json`
3. 在 `projects` 数组中添加新对象
4. 保存文件

网站会自动更新显示新项目。

### 我想改变网站的字体

**方法**：编辑 `src/styles/variables.css`

```css
--font-family-base: 'New Font Name', sans-serif;
```

### 我想添加新的导航菜单项

**方法**：编辑所有 HTML 文件（index.html, pages/*.html）中的 `<nav>` 部分

```html
<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/pages/about.html">About</a></li>
    <!-- 在这里添加新菜单项 -->
  </ul>
</nav>
```

### 我想改变项目分类

**方法**：编辑 `pages/projects.html` 中的 filter 按钮

```html
<button class="btn btn-text filter-btn" data-filter="new-category">
  New Category
</button>
```

---

## 📁 文件夹结构一览

```
portfolio-website/
│
├── 📄 HTML 页面
│   ├── index.html              ← 首页
│   └── pages/
│       ├── about.html          ← 关于我
│       ├── projects.html       ← 项目
│       ├── ai-lab.html         ← AI 工作室
│       └── contact.html        ← 联系我
│
├── 📁 src/
│   ├── styles/                 ← CSS 样式
│   │   ├── variables.css       ← 色彩、字体、间距配置
│   │   ├── global.css          ← 全局样式
│   │   └── layouts.css         ← 布局组件
│   │
│   ├── scripts/                ← JavaScript
│   │   ├── main.js             ← 主功能
│   │   └── projects.js         ← 项目过滤
│   │
│   ├── data/                   ← 数据文件
│   │   └── content.json        ← 所有文本内容
│   │
│   └── images/                 ← 图片文件夹
│       ├── projects/           ← 项目图片
│       └── ai-projects/        ← AI 项目图片
│
└── 📄 文档
    ├── README.md               ← 项目说明
    ├── DESIGN_SYSTEM.md        ← 设计系统
    ├── INFORMATION_ARCHITECTURE.md
    ├── MAINTENANCE_GUIDE.md    ← 维护指南
    └── QUICKSTART.md           ← 本文件
```

---

## 💡 10 个小贴士

### 1. 使用 Live Server 开发
```
VS Code 安装 "Live Server" 扩展，右键 > Open with Live Server
```

### 2. 定期备份
```
定期将项目文件夹复制到云端或外部硬盘
```

### 3. 优化图片大小
```
使用 TinyPNG 或 ImageOptim 压缩图片，保持加载速度
```

### 4. 测试响应式
```
按 F12 打开开发工具，点击手机图标切换到移动视图
```

### 5. 检查拼写
```
添加内容时仔细检查英文和中文的拼写和语法
```

### 6. 保持一致性
```
使用统一的字体、颜色和间距，保持设计的专业性
```

### 7. 定期更新
```
每月至少更新一次内容，保持网站新鲜度
```

### 8. 测试所有链接
```
定期点击所有链接，确保没有死链
```

### 9. 查看浏览器兼容性
```
在 Chrome、Firefox、Safari 中测试网站
```

### 10. 保持简洁
```
不要添加过多的动画或效果，专注于内容质量
```

---

## ❓ FAQ (常见问题)

**Q: 我可以直接用 HTML 编辑器编辑 HTML 吗？**  
A: 可以！但我们建议使用 Visual Studio Code 或 Sublime Text，这些编辑器对 HTML/CSS 有更好的支持。

**Q: 网站如何发布到互联网？**  
A: 需要购买域名和虚拟主机，然后通过 FTP 上传文件。或使用免费的服务如 Netlify 或 Vercel。

**Q: 我不懂代码可以修改网站吗？**  
A: 完全可以！大部分修改只需要编辑 HTML 和 JSON 文件，不需要编写代码。

**Q: 如何添加新页面？**  
A: 复制现有页面（如 about.html），修改内容，在导航中添加链接。

**Q: 图片应该保存在哪里？**  
A: 按项目保存在 `src/images/projects/` 文件夹中。

**Q: 我可以使用其他字体吗？**  
A: 可以！在 `src/styles/variables.css` 中修改 `--font-family-base`。

**Q: 网站的加载速度慢吗？**  
A: 取决于图片大小。务必压缩所有图片到 100-200KB。

**Q: 可以添加视频吗？**  
A: 可以使用 HTML5 `<video>` 标签或嵌入 YouTube/Vimeo。

**Q: 需要数据库吗？**  
A: 不需要。这是静态网站，所有数据存储在 JSON 文件中。

**Q: 如何设置联系表单？**  
A: 需要后端服务。可以使用免费服务如 Formspree 或 Netlify Forms。

---

## 🎓 下一步学习

### 如果想深入学习
1. **CSS 基础** - 了解如何自定义样式
2. **HTML 结构** - 理解页面如何组织
3. **JSON 格式** - 学习如何管理数据
4. **Git & GitHub** - 版本控制和备份
5. **网页部署** - 学习如何发布到互联网

### 推荐资源
- **MDN Web Docs**: https://developer.mozilla.org/
- **CSS Tricks**: https://css-tricks.com/
- **Codecademy**: https://www.codecademy.com/
- **Udemy**: 搜索 "Web Design" 课程

---

## 🆘 遇到问题？

### 调试步骤

1. **打开浏览器开发工具** (F12)
2. **查看 Console 标签** 找出错误信息
3. **检查 HTML** - 找到出问题的代码
4. **查看文件路径** - 确保图片和文件位置正确
5. **刷新页面** (Ctrl+R) - 清除缓存

### 常见问题解决

| 问题 | 解决方案 |
|------|--------|
| 图片不显示 | 检查文件路径，确保图片存在 |
| 样式不生效 | 刷新浏览器缓存 (Ctrl+Shift+Delete) |
| 链接无效 | 检查 href 属性的路径是否正确 |
| 字体显示错误 | 检查字体名称是否正确拼写 |

### 需要帮助？
- 查看 README.md 文件
- 阅读 DESIGN_SYSTEM.md
- 参考 MAINTENANCE_GUIDE.md

---

## ✅ 完成清单

### 第一次设置
- [ ] 打开网站，查看它的运行情况
- [ ] 修改你的名字和邮箱
- [ ] 上传个人照片
- [ ] 修改色彩以匹配你的品牌
- [ ] 添加至少一个项目

### 准备上线
- [ ] 完成所有个人信息
- [ ] 至少添加 5 个项目
- [ ] 测试所有页面和链接
- [ ] 在手机上测试
- [ ] 检查拼写和语法
- [ ] 优化所有图片
- [ ] 获取域名
- [ ] 购买虚拟主机或选择部署平台

---

## 🎉 恭喜！

你现在拥有一个：
- ✅ 专业的设计师作品集网站
- ✅ 现代化的用户界面
- ✅ 完整的关于页面和联系表单
- ✅ 项目案例展示系统
- ✅ AI 创意工作流演示
- ✅ 易于维护的代码结构

### 接下来
1. **自定义设计** - 按照你的品牌调整样式
2. **添加内容** - 上传你的项目和信息
3. **部署到网络** - 让全世界看到你的作品
4. **持续更新** - 定期添加新项目

---

**准备好了吗？现在就开始定制你的作品集网站吧！** 🚀

有任何问题，都可以参考项目中的详细文档。祝你成功！

---

**版本**: 1.0  
**最后更新**: 2024年  
**创建日期**: 2024年

> 💡 小提示：将此文档加入书签，以便后续查阅！
