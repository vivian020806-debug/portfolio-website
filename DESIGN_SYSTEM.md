# 个人作品集网站 - 设计系统

## 核心概念
**Branding × Visual Design × AI Creativity**

一个展示品牌视觉设计师和AI创意设计师专业能力的高级作品集网站。

---

## 1. 色彩系统 (Color System)

### 主色调
- **深灰 (Primary Dark)**: `#1a1a1a` - 文字、背景
- **浅灰 (Primary Light)**: `#f5f5f5` - 背景、卡片
- **白色 (White)**: `#ffffff` - 纯白
- **黑色 (Black)**: `#000000` - 最深黑

### 强调色
- **品牌金 (Accent Gold)**: `#d4af37` - 用于强调、链接悬停
- **品牌蓝 (Accent Blue)**: `#2563eb` - 用于强调、交互

### 中性色系
- **文字深**: `#333333`
- **文字中**: `#666666`
- **文字浅**: `#999999`
- **边框**: `#e5e5e5`
- **背景浅**: `#fafafa`

### 色彩应用规则
- **大背景**: 纯白 `#ffffff`
- **卡片背景**: 浅灰 `#f5f5f5`
- **主文本**: 深灰 `#1a1a1a`
- **辅助文本**: `#666666`
- **链接/交互**: 品牌蓝 `#2563eb`
- **品牌强调**: 品牌金 `#d4af37`（谨慎使用）

---

## 2. 字体系统 (Typography)

### 字体选择
- **英文字体**: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`
- **中文字体**: `'Microsoft YaHei', 'Noto Sans SC', sans-serif`
- **备选堆栈**: 
  ```
  font-family: 'Segoe UI', 'Microsoft YaHei', 'Noto Sans SC', sans-serif;
  ```

### 字体大小 (Font Size)

#### 标题层级
| 级别 | 大小 | 行高 | 字重 | 用途 |
|------|------|------|------|------|
| H1 | 56px | 1.2 | 700 | 页面主标题、Hero标题 |
| H2 | 42px | 1.3 | 700 | 章节标题 |
| H3 | 32px | 1.4 | 700 | 小章节标题 |
| H4 | 24px | 1.4 | 600 | 卡片标题、项目标题 |
| H5 | 20px | 1.5 | 600 | 小标题 |
| H6 | 16px | 1.5 | 600 | 标签标题 |

#### 正文层级
| 级别 | 大小 | 行高 | 字重 | 用途 |
|------|------|------|------|------|
| Body L | 18px | 1.6 | 400 | 大段落文字 |
| Body M | 16px | 1.6 | 400 | 标准段落（最常用） |
| Body S | 14px | 1.6 | 400 | 小段落 |
| Caption | 12px | 1.5 | 400 | 说明文字、日期 |

#### 特殊用途
- **Brand Tagline**: 24px, 400 weight, 行高 1.5
- **CTA Button**: 16px, 600 weight, 行高 1.5
- **Navigation**: 14px, 500 weight, 行高 1.5

---

## 3. 间距系统 (Spacing Scale)

基于 8px 的倍数系统：

```
4px   = spacing-0.5
8px   = spacing-1    (基础单位)
16px  = spacing-2    (最常用)
24px  = spacing-3
32px  = spacing-4
40px  = spacing-5
48px  = spacing-6
56px  = spacing-7
64px  = spacing-8    (大间距)
80px  = spacing-10   (特大间距)
96px  = spacing-12   (超大间距)
```

### 应用规则
- **内间距 (Padding)**:
  - 按钮: 12px 24px (高) / 8px 16px (低)
  - 卡片: 24px / 32px
  - 组件: 16px / 24px
  
- **外间距 (Margin)**:
  - 段落间距: 24px
  - 章节间距: 64px / 80px
  - 页面顶部/底部: 80px / 96px

- **留白区域**:
  - 页面两侧边距 (Desktop): 64px
  - 页面两侧边距 (Tablet): 32px
  - 页面两侧边距 (Mobile): 20px

---

## 4. 网格系统 (Grid System)

### Desktop (≥1200px)
- 12 列网格
- 列宽: 64px
- 间距: 24px
- 外边距: 64px

### Tablet (768px - 1199px)
- 8 列网格
- 列宽: 64px
- 间距: 16px
- 外边距: 32px

### Mobile (< 768px)
- 4 列网格
- 列宽: 自动
- 间距: 12px
- 外边距: 20px

---

## 5. 排版与排版规则 (Typography Rules)

### 标题排版
- H1/H2: 留白充足，行高 1.2-1.3
- 使用大字号创造视觉层级
- 避免超过一行（特殊情况除外）

### 正文排版
- 标准行高: 1.6（便于阅读）
- 段落最大宽度: 700px（便于阅读）
- 段落间距: 24px
- 使用不同的灰度表现信息层级

### 列表排版
- 项目间距: 12px
- 使用 bullet 或自定义符号
- 可使用数字或字母标记

---

## 6. 阴影系统 (Shadow System)

```css
/* Light Shadow - 卡片/元素 */
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);

/* Hover State */
--shadow-hover: 0 8px 16px rgba(0, 0, 0, 0.12);
```

### 应用规则
- **无阴影**: 大多数情况（现代极简风格）
- **Light Shadow**: 卡片、轻度分离
- **Medium Shadow**: 按钮 Hover、浮窗
- **Large Shadow**: 模态框、特殊强调

---

## 7. 圆角系统 (Border Radius)

```
0px    = sharp (无圆角)
4px    = radius-xs (小圆角)
8px    = radius-sm (标准圆角)
12px   = radius-md (中等圆角)
16px   = radius-lg (大圆角)
999px  = radius-full (完全圆形)
```

### 应用规则
- **整体网站**: 8px (标准)
- **按钮**: 8px / 4px
- **卡片**: 8px / 0px (现代无圆角)
- **输入框**: 8px
- **图片**: 0px (方形) 或 8px (微圆)

---

## 8. 动画与过渡 (Animation & Transition)

### 过渡时间 (Transition Timing)
```
--duration-fast: 150ms
--duration-normal: 250ms
--duration-slow: 350ms
```

### 缓动函数 (Easing)
```
--ease-out: cubic-bezier(0.4, 0, 0.2, 1)     /* 进入 */
--ease-in: cubic-bezier(0.4, 0, 1, 1)        /* 退出 */
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1) /* 来回 */
```

### 动画应用规则
- **Hover**: 250ms ease-out
- **Page Transition**: 350ms ease-in-out
- **Scroll Animation**: 逐个元素淡入 (Fade-in)
- **Image Hover**: 轻微缩放 (1.02x) + 阴影

### 不使用的情况
- ❌ 过度复杂的3D变换
- ❌ 自动播放动画
- ❌ 加载页面时的大量动画
- ❌ 阻碍用户交互的动画

---

## 9. 组件规范 (Component Specs)

### 按钮 (Button)
- **主按钮**: 背景 #2563eb, 文字 white, 16px, 600 weight, 12px 24px padding
- **次按钮**: 背景 transparent, 边框 1px #d4af37, 文字 #1a1a1a, 16px, 600 weight
- **文本按钮**: 背景 transparent, 文字 #2563eb, 16px, 600 weight
- **Hover**: 轻微缩放 (1.05x) + 阴影
- **Focus**: 边框显示, Outline style

### 卡片 (Card)
- **背景**: #f5f5f5 或 white
- **圆角**: 8px / 0px
- **内间距**: 24px / 32px
- **边框**: 1px #e5e5e5 (可选)
- **阴影**: --shadow-light
- **Hover**: 升起效果 + 阴影增加

### 输入框 (Input)
- **背景**: white
- **边框**: 1px #e5e5e5
- **圆角**: 8px
- **内间距**: 12px 16px
- **Focus**: 边框 2px #2563eb, 无阴影或浅阴影

### 导航栏 (Navigation)
- **高度**: 64px (Desktop)
- **背景**: white 或 transparent
- **文字颜色**: #333333
- **Hover**: #2563eb / 底线动画
- **活跃状态**: 加粗 + 底线或背景色

---

## 10. 图片处理规范

### 图片展示
- **边框**: 无（或极细边框 1px #e5e5e5）
- **圆角**: 0px (方形) 或 8px
- **Aspect Ratio**: 
  - 项目封面: 16:10 / 4:3
  - 缩略图: 1:1 / 16:9
  - Hero: 16:9 / 21:9

### 图片优化
- **格式**: WebP (首选) / JPEG (备选) / PNG (必要时)
- **压缩**: 针对Web优化，不超过 500KB
- **尺寸**: 最大不超过 2x 设计稿宽度

### 图片样式
- **背景图片**: 图片填充模式 `background-size: cover`, `background-position: center`
- **内容图片**: `max-width: 100%`, `height: auto`
- **Lazy Loading**: 使用原生 loading="lazy" 属性

---

## 11. 页面布局规范

### 页面宽度
- **最大容器宽度**: 1400px
- **内容区最大宽度**: 1200px
- **侧边界（Desktop）**: 64px
- **侧边界（Tablet）**: 32px
- **侧边界（Mobile）**: 20px

### 页面高度与比例
- **Hero Section**: 100vh (全屏) 或 700px
- **Section 间距**: 80px - 120px
- **最后一个 Section 到 Footer**: 80px

### 页面结构
```
Header (Navigation)
  ↓
Hero / Intro Section
  ↓
Main Content Sections
  ↓
Call-to-Action / Related Section
  ↓
Footer
```

---

## 12. 响应式断点 (Breakpoints)

```css
--xs: 320px    /* 极小屏幕 */
--sm: 480px    /* 小屏幕 */
--md: 768px    /* 平板 */
--lg: 1024px   /* 小桌面 */
--xl: 1200px   /* 标准桌面 */
--2xl: 1400px  /* 大桌面 */
```

### 媒体查询规则
- Mobile First: 先写移动版，再用 `@media (min-width)` 扩展
- 主要断点: 768px (平板) 和 1024px (桌面)

---

## 13. 易用性规范 (Accessibility)

### 颜色对比
- 文字 vs 背景: 最小 4.5:1 的对比度
- 避免只用颜色传达信息

### 键盘导航
- 所有交互元素可通过 Tab 键访问
- Focus state 清晰可见
- 合理的 Tab order

### 文本替代
- 所有图片有 alt 属性
- 图标有说明文字或 aria-label

### 语义化
- 使用正确的 HTML 标签 (h1, h2, nav, main, article, section)
- 合理的页面结构

---

## 14. 品牌语境 (Brand Context)

### 设计理念
- **极简**: 不是空白，而是有意义的留白
- **高级**: 通过精细的细节和一致性表现
- **现代**: 摒弃装饰性元素，强调功能与形式的统一
- **编辑感**: 类似于高级杂志的排版与视觉呈现
- **艺术感**: 体现设计师的审美和品味

### 禁止事项
- ❌ 大量渐变
- ❌ 过多装饰
- ❌ 廉价的科技感（霓虹色、过度强调AI）
- ❌ 模板化设计
- ❌ 过度的3D效果
- ❌ 频繁的自动动画

### 必做事项
- ✅ 清晰的信息层级
- ✅ 充分的留白
- ✅ 优秀的排版
- ✅ 图片质量第一
- ✅ 精细的交互细节
- ✅ 流畅的页面过渡

---

## 15. 数据与维护

### 内容管理策略
- 所有项目数据存放在 `data/projects.json`
- 所有文案存放在 `data/content.json`
- 所有网站配置存放在 `data/config.json`

### 易于更新
- **新增项目**: 在 JSON 中添加对象，无需修改 HTML
- **修改文案**: 直接编辑 JSON 文件
- **修改颜色**: 修改 CSS 变量文件 `styles/variables.css`
- **修改字体**: 修改 `styles/typography.css`
- **修改间距**: 修改 `styles/spacing.css`

---

## 使用此设计系统

1. **CSS 变量** 统一定义在 `styles/variables.css`
2. **组件样式** 存放在 `styles/components.css`
3. **布局样式** 存放在 `styles/layouts.css`
4. **响应式** 统一在 `styles/responsive.css`
5. **数据驱动** 使用 JSON + JavaScript 动态生成内容

---

**版本**: 1.0 | **最后更新**: 2024年
