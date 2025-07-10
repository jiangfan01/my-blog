import React from "react";
import ArticleList from "../../../components/ArticleList/ArticleList.tsx";
import {FaCss3} from "react-icons/fa";

const ArticlesCss: React.FC = () => {
    const cssArticles = [
        {
            question: "CSS 中块级元素与行内元素的区别",
            answer: `
## 📚 CSS 中块级元素（Block）与行内元素（Inline）区别

---

### 1. **定义区别**

- **块级元素（Block）**  
  独占一行，占据父容器的全部宽度（默认宽度 100%）。  
  常见标签：\`<div>\`, \`<p>\`, \`<h1> - <h6>\`, \`<ul>\`, \`<li>\` 等。

- **行内元素（Inline）**  
  只占据自身内容所需的宽度，不会换行。  
  常见标签：\`<span>\`, \`<a>\`, \`<em>\`, \`<strong>\`, \`<img>\` 等。

---

### 2. **布局表现**

| 特性            | 块级元素                      | 行内元素                       |
|-----------------|------------------------------|-------------------------------|
| 是否独占一行    | 是                           | 否                            |
| 宽度和高度      | 可设置宽高                   | 宽高一般无效，受内容限制       |
| 默认宽度        | 100% 父元素宽度               | 内容宽度                       |
| 可嵌套元素类型  | 可包含块级元素和行内元素       | 只能包含文本或其他行内元素     |
| margin/padding  | 上下左右均有效                 | 上下 margin 通常无效，左右有效 |

---

### 3. **转换方式**

- 通过 CSS \`display\` 属性改变元素表现：  
  - \`display: block;\` 转为块级元素  
  - \`display: inline;\` 转为行内元素  
  - 还有 \`inline-block\` 等混合类型，兼具行内元素和块级元素特性

---

### 4. **应用场景**

- **块级元素**：用来构建页面整体结构，布局分区  
- **行内元素**：用来修饰文本或包裹小内容，不影响整体结构

---

### 5. **示例**

\`\`\`html
<div>这是块级元素，会独占一行</div>
<span>这是行内元素，不会独占一行</span>
\`\`\`

---

### ✅ 小结

| 特点           | 块级元素          | 行内元素          |
|----------------|-------------------|-------------------|
| 独占一行       | ✅                | ❌                |
| 宽高支持       | ✅                | ❌                |
| 可包含元素类型 | 块级 + 行内元素   | 仅行内元素         |
| margin 上下有效 | ✅                | ❌                |

理解块级与行内元素的区别，是掌握 CSS 布局的基础之一。
`
        },
        {
            question: "CSS 清除浮动的方法",
            answer: `
## 💡 CSS 清除浮动的方法

---

### 1. 使用“空标签清除法”

在浮动元素后添加一个空的块级元素，并设置清除浮动：

\`\`\`css
.clearfix {
  clear: both;
}
\`\`\`

HTML:

\`\`\`html
<div class="float-left">浮动元素</div>
<div class="clearfix"></div>
\`\`\`

---

### 2. 使用父元素的 \`overflow\` 属性

给父容器设置 \`overflow: hidden;\` 或 \`overflow: auto;\`，让父元素自动包裹浮动子元素：

\`\`\`css
.container {
  overflow: hidden;
}
\`\`\`

---

### 3. 使用伪元素清除浮动（推荐）

通过给父元素添加伪元素，利用 \`clear: both\` 来清除浮动：

\`\`\`css
.clearfix::after {
  content: "";
  display: block;
  clear: both;
  height: 0;
  visibility: hidden;
}
\`\`\`

HTML：

\`\`\`html
<div class="clearfix">
  <div class="float-left">浮动元素</div>
</div>
\`\`\`

---

### 4. 使用 Flexbox 或 Grid 布局替代浮动

现代布局推荐使用 Flexbox 或 CSS Grid，避免使用浮动带来的布局问题。

---

### ✅ 小结

| 方法                 | 优缺点                      | 备注                     |
|----------------------|-----------------------------|--------------------------|
| 空标签清除            | 简单但增加无意义标签         | 不推荐                   |
| overflow 清除         | 简洁，但可能影响子元素溢出   | 常用，易用               |
| 伪元素清除（clearfix） | 不增加额外标签，兼容性好     | 推荐，行业标准           |
| Flexbox/Grid          | 现代布局，根本避免浮动问题   | 需要兼容性支持           |

建议优先使用伪元素清除法或现代布局技术，保持代码整洁和可维护。
`
        },
        {
            question: "CSS 自适应方案",
            answer: `
## 📱 CSS 自适应方案概览

---

### 1. 响应式设计（Responsive Design）

- 通过媒体查询 \`@media\` 根据设备屏幕宽度或特性调整样式  
- 示例：

\`\`\`css
@media (max-width: 768px) {
  .container {
    padding: 10px;
  }
}
\`\`\`

---

### 2. 弹性布局（Flexbox）

- 利用 \`display: flex;\` 实现弹性容器和子元素自动适配空间  
- 灵活排列，支持换行、对齐、伸缩

---

### 3. 栅格布局（CSS Grid）

- 用二维栅格系统管理布局  
- 适合复杂布局，简洁且强大

---

### 4. 百分比宽度和视口单位

- 使用百分比（\`%\`）或视口宽度（\`vw\`）、视口高度（\`vh\`）单位实现元素尺寸相对调整  
- 例如：

\`\`\`css
.container {
  width: 80%;
  height: 50vh;
}
\`\`\`

---

### 5. REM / EM 单位

- 以根字体大小（\`rem\`）或父元素字体大小（\`em\`）作为尺寸单位  
- 方便整体缩放，提升可访问性

---

### 6. 图片和媒体自适应

- 使用 \`max-width: 100%; height: auto;\` 实现图片随容器缩放  
- 利用 \`<picture>\` 标签和 \`srcset\` 属性做响应式图片

---

### 7. 移动端视口设置

- 通过 \`<meta name="viewport">\` 标签设置视口宽度，确保移动端页面适配

\`\`\`html
<meta name="viewport" content="width=device-width, initial-scale=1">
\`\`\`

---

### ✅ 小结

| 方案           | 作用                         | 适用场景                   |
|----------------|------------------------------|----------------------------|
| 媒体查询       | 根据屏幕大小调整样式          | 多屏设备适配               |
| Flexbox/Grid   | 弹性和网格布局                | 页面布局和组件排版         |
| 百分比 / vw/vh | 容器和元素尺寸自适应          | 流式布局                   |
| rem / em       | 字体和尺寸相对缩放            | 字体大小自适应与无障碍     |
| 图片响应式     | 图片大小随容器自动调整        | 图片展示                   |

📌 **建议**：结合多种方案，打造兼容性好且用户体验佳的自适应页面。
`
        },
        {
            question: "常见的 CSS 选择器",
            answer: `
## 🔍 常见的 CSS 选择器分类及用法

---

### 1. 基础选择器

| 选择器     | 作用                         | 示例                    |
|------------|------------------------------|-------------------------|
| 标签选择器 | 选中所有该标签元素           | \`div\`，\`p\`           |
| 类选择器   | 选中所有指定类名的元素       | \`.container\`           |
| ID选择器   | 选中指定ID的唯一元素         | \`#header\`              |
| 通配符选择器 | 选中所有元素                 | \`*\`                    |

---

### 2. 组合选择器

| 选择器       | 作用                                  | 示例                           |
|--------------|---------------------------------------|--------------------------------|
| 后代选择器   | 选中某元素内部的所有指定子孙元素      | \`.nav a\`（\`.nav\` 内所有 \`a\`） |
| 子元素选择器 | 选中某元素内部的直接子元素            | \`ul > li\`                   |
| 相邻兄弟选择器 | 选中紧接在某元素后的兄弟元素          | \`h1 + p\`                    |
| 通用兄弟选择器 | 选中某元素之后所有兄弟元素            | \`h1 ~ p\`                    |

---

### 3. 属性选择器

| 选择器                 | 作用                              | 示例                   |
|------------------------|----------------------------------|------------------------|
| [attr]                 | 选中含有指定属性的元素            | \`input[disabled]\`    |
| [attr=value]           | 选中指定属性等于某值的元素        | \`a[href="example.com"]\` |
| [attr^=value]          | 属性值以指定字符串开头            | \`a[href^="https"]\`   |
| [attr$=value]          | 属性值以指定字符串结尾            | \`img[src$=".png"]\`   |
| [attr*=value]          | 属性值包含指定字符串              | \`a[href*="google"]\`  |

---

### 4. 伪类选择器

| 选择器                 | 作用                              | 示例                   |
|------------------------|----------------------------------|------------------------|
| :hover                 | 鼠标悬停                        | \`a:hover\`            |
| :focus                 | 元素获得焦点                    | \`input:focus\`        |
| :first-child           | 是父元素的第一个子元素          | \`li:first-child\`     |
| :last-child            | 是父元素的最后一个子元素        | \`li:last-child\`      |
| :nth-child(n)          | 是父元素的第 n 个子元素         | \`li:nth-child(2)\`    |
| :not(selector)         | 选中不匹配选择器的元素          | \`input:not([type="submit"])\` |

---

### 5. 伪元素选择器

| 选择器                 | 作用                              | 示例                   |
|------------------------|----------------------------------|------------------------|
| ::before               | 在元素内容前插入内容              | \`p::before\`          |
| ::after                | 在元素内容后插入内容              | \`p::after\`           |
| ::first-letter         | 选中首字母                      | \`p::first-letter\`    |
| ::first-line           | 选中首行                        | \`p::first-line\`      |

---

### ✅ 小结

| 选择器类型 | 用途                    | 备注                         |
|------------|-------------------------|------------------------------|
| 基础选择器 | 选中特定元素            | 使用频率最高                 |
| 组合选择器 | 实现层级和关系选择      | 方便精准控制                |
| 属性选择器 | 根据属性值选中元素      | 灵活，适合表单等控件        |
| 伪类选择器 | 响应用户交互和结构选择  | 增强交互效果和样式          |
| 伪元素选择器 | 添加装饰性内容          | 无需修改 HTML 结构          |

掌握这些选择器能帮助你高效地定位和操作页面元素。
`
        },
        {
            question: "伪元素和伪类的区别",
            answer: `
## 🎯 伪元素（Pseudo-elements） vs 伪类（Pseudo-classes）

---

### 1. 定义区别

- **伪类**  
  用于选中元素的特定状态或位置，例如用户交互状态、结构位置等。  
  作用于已有的元素，描述元素的“状态”。  

- **伪元素**  
  用于创建不存在于 DOM 中的虚拟元素，可以向页面插入内容或对部分文本进行样式设置。  
  实际上生成了新的元素，位于目标元素的内容之前或之后。

---

### 2. 语法区别

- **伪类** 用单冒号：\`:hover\`, \`:first-child\`  
- **伪元素** 用双冒号：\`::before\`, \`::after\`（兼容旧写法也支持单冒号）

---

### 3. 作用示例

| 类型   | 示例选择器        | 作用描述                                |
|--------|-------------------|---------------------------------------|
| 伪类   | \`:hover\`         | 当鼠标悬停时应用样式                   |
| 伪类   | \`:nth-child(2)\`  | 选中父元素的第二个子元素                |
| 伪元素 | \`::before\`       | 在元素内容之前插入虚拟内容               |
| 伪元素 | \`::first-letter\` | 选中元素文本的首字母                     |

---

### 4. 总结对比

| 特性         | 伪类                   | 伪元素                  |
|--------------|------------------------|-------------------------|
| 是否创建新元素 | 否                     | 是                      |
| 作用对象     | 现有元素的特定状态或位置 | 元素的部分内容或前后插入 |
| 语法         | 单冒号（:）            | 双冒号（::），兼容单冒号|
| 主要用途     | 响应用户交互、结构选择  | 插入装饰内容、样式控制  |

---

### ✅ 小结

伪类关注元素的“状态”，伪元素则创建虚拟元素来丰富页面表现。理解区别，有助于写出更语义化和灵活的 CSS。
`
        },
        {
            question: "用 CSS 画三角形",
            answer: `
## 🔺 用 CSS 画三角形的方法

---

### 1. 原理

利用元素宽高为 0，通过设置不同边框的颜色和宽度，形成三角形形状。透明边框配合有色边框实现三角效果。

---

### 2. 示例代码

\`\`\`css
.triangle-up {
  width: 0;
  height: 0;
  border-left: 50px solid transparent;  /* 左边透明 */
  border-right: 50px solid transparent; /* 右边透明 */
  border-bottom: 100px solid red;       /* 下边实色，形成上三角 */
}
\`\`\`

---

### 3. 不同方向三角形

| 类名              | 说明       | CSS 边框设置                          |
|-------------------|------------|-------------------------------------|
| \`.triangle-up\`    | 上三角形   | border-left/right: transparent;<br>border-bottom: 实色;    |
| \`.triangle-down\`  | 下三角形   | border-left/right: transparent;<br>border-top: 实色;       |
| \`.triangle-left\`  | 左三角形   | border-top/bottom: transparent;<br>border-right: 实色;     |
| \`.triangle-right\` | 右三角形   | border-top/bottom: transparent;<br>border-left: 实色;      |

---

### 4. 完整示例（HTML + CSS）

\`\`\`html
<div class="triangle-up"></div>
\`\`\`

\`\`\`css
.triangle-up {
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 100px solid red;
}
\`\`\`

---

### ✅ 小结

- 利用边框宽度控制大小  
- 透明边框与实色边框配合决定方向  
- 纯 CSS 实现，兼容性好，常用于箭头、指示标识等

`
        },
        {
            question: "Flex布局详解",
            answer: `
## ⚡ Flexbox 布局详解

---

### 1. 什么是 Flexbox？

Flexbox（弹性盒子布局）是 CSS3 引入的一种用于在容器中分配空间和排列内容的布局模型，特别适合于一维布局（横向或纵向）。

---

### 2. 容器属性（父元素）

| 属性               | 说明                                                                                   | 示例值                    |
|--------------------|----------------------------------------------------------------------------------------|---------------------------|
| \`display\`          | 定义弹性容器                                                                           | \`flex\`、\`inline-flex\`  |
| \`flex-direction\`   | 主轴方向，决定子元素排列方向                                                           | \`row\`（默认）、\`column\`、\`row-reverse\`、\`column-reverse\` |
| \`flex-wrap\`        | 是否换行                                                                             | \`nowrap\`（默认）、\`wrap\`、\`wrap-reverse\`                |
| \`justify-content\`  | 主轴对齐方式（横轴）                                                                   | \`flex-start\`、\`center\`、\`space-between\`、\`space-around\`、\`space-evenly\` |
| \`align-items\`      | 交叉轴对齐方式（纵轴）                                                                 | \`stretch\`（默认）、\`flex-start\`、\`center\`、\`flex-end\`、\`baseline\` |
| \`align-content\`    | 多行时交叉轴的对齐方式（影响多行排列）                                                | \`stretch\`（默认）、\`flex-start\`、\`center\`、\`flex-end\`、\`space-between\`、\`space-around\` |

---

### 3. 项目属性（子元素）

| 属性         | 说明                                      | 示例值                           |
|--------------|-------------------------------------------|--------------------------------|
| \`order\`     | 定义项目排列顺序，数字越小越靠前，默认0  | 任意整数                        |
| \`flex-grow\` | 放大比例，默认0，不分配多余空间           | 数字（如1表示占据剩余空间）      |
| \`flex-shrink\` | 缩小比例，默认1，空间不足时缩小比例      | 数字                           |
| \`flex-basis\` | 项目在主轴上的初始大小，默认 \`auto\`    | 长度单位或百分比                 |
| \`flex\`      | \`flex-grow\`, \`flex-shrink\`, \`flex-basis\` 的简写 | \`flex: 1 0 auto\`              |
| \`align-self\` | 覆盖父容器的 \`align-items\`，设置单个项目的交叉轴对齐 | \`auto\`（默认）、\`flex-start\`、\`center\`、\`flex-end\`、\`baseline\`、\`stretch\` |

---

### 4. 典型用法示例

\`\`\`css
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
.item {
  flex: 1 1 200px;
  order: 2;
}
.item-special {
  order: 1; /* 提前显示 */
  flex-grow: 2; /* 占更多空间 */
}
\`\`\`

---

### 5. 优点

- 简洁灵活，解决传统布局（浮动、定位）难题  
- 轻松实现水平和垂直居中  
- 自动分配多余空间  
- 易于响应式设计

---

### 6. 注意事项

- Flexbox 是一维布局，适合排列一行或一列  
- 复杂二维布局推荐使用 CSS Grid  
- 老旧浏览器支持需留意（IE10+ 支持，部分特性不完全）

---

### ✅ 小结

Flexbox 是现代前端布局的利器，掌握其属性和用法，能快速实现灵活、响应式的页面结构。
`
        },
        {
            question: "Grid布局详解",
            answer: `
## 🧩 CSS Grid 布局详解

---

### 1. 什么是 Grid？

CSS Grid 是一种二维网格布局系统，可以同时控制行和列，实现复杂的网页布局。它让布局变得直观且灵活。

---

### 2. 容器属性（父元素）

| 属性                   | 说明                                          | 示例值                                   |
|------------------------|-----------------------------------------------|----------------------------------------|
| \`display\`              | 定义为网格容器                                 | \`grid\`、\`inline-grid\`                   |
| \`grid-template-columns\`| 定义列轨道的大小和数量                        | \`100px 1fr 2fr\`                         |
| \`grid-template-rows\`   | 定义行轨道的大小和数量                        | \`auto 200px\`                            |
| \`gap\`（或 \`grid-gap\`） | 网格行列间距                                  | \`10px 20px\`                             |
| \`justify-items\`        | 子项在单元格水平方向对齐                      | \`start\`、\`center\`、\`stretch\`           |
| \`align-items\`          | 子项在单元格垂直方向对齐                      | \`start\`、\`center\`、\`stretch\`           |
| \`justify-content\`      | 整个网格在容器内的水平方向对齐                | \`start\`、\`center\`、\`space-between\`     |
| \`align-content\`        | 整个网格在容器内的垂直方向对齐                | \`start\`、\`center\`、\`space-between\`     |

---

### 3. 子元素属性（项目）

| 属性                   | 说明                                     | 示例值                            |
|------------------------|------------------------------------------|---------------------------------|
| \`grid-column-start\`     | 指定子元素起始列轨道                      | 数字或线名，如 \`1\`、\`span 2\`    |
| \`grid-column-end\`       | 指定子元素结束列轨道                      | 数字或线名                      |
| \`grid-row-start\`        | 指定子元素起始行轨道                      | 数字或线名                      |
| \`grid-row-end\`          | 指定子元素结束行轨道                      | 数字或线名                      |
| \`grid-area\`             | 指定子元素占据的网格区域（简写）          | \`header\` 或 \`1 / 1 / 3 / 3\`      |


---

### 4. 简单示例

\`\`\`css
.container {
  display: grid;
  grid-template-columns: 150px 1fr 1fr;
  grid-template-rows: 100px auto 50px;
  gap: 10px 20px;
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
}

.header {
  grid-area: header;
}

.sidebar {
  grid-area: sidebar;
}

.main {
  grid-area: main;
}

.footer {
  grid-area: footer;
}
\`\`\`

---

### 5. 优点

- 二维布局（同时控制行和列）  
- 语义化强，布局结构清晰  
- 支持区域命名，简化布局管理  
- 灵活分配空间，响应式设计友好

---

### 6. 注意事项

- 与 Flexbox 不同，Grid 更适合二维布局  
- 兼容性较好，IE10+ 支持部分特性，现代浏览器支持完善  
- 复杂布局时，推荐结合媒体查询实现响应式  

---

### ✅ 小结

CSS Grid 是现代前端布局的强大工具，灵活、语义化且功能丰富，适合处理复杂和响应式布局。
`
        },
        {
            question: "CSS动画讲解",
            answer: `
## 🎬 CSS动画详解

---

### 1. CSS动画类型

- **Transition（过渡）**  
  通过设置属性变化时的动画效果，实现状态的平滑过渡。  
  适合简单状态变化动画。

- **Keyframes动画（@keyframes）**  
  通过定义关键帧，控制动画过程中的多个状态，实现复杂动画。  
  适合连续多步骤动画。

---

### 2. Transition基础

| 属性               | 说明                          | 示例                     |
|--------------------|-------------------------------|--------------------------|
| \`transition-property\` | 需要过渡的CSS属性              | \`all\`、\`opacity\`       |
| \`transition-duration\` | 过渡持续时间                   | \`0.3s\`                  |
| \`transition-timing-function\` | 过渡速度曲线               | \`ease\`、\`linear\`        |
| \`transition-delay\`    | 过渡延迟时间                   | \`0s\`                    |

**示例：**

\`\`\`css
.box {
  transition: all 0.3s ease;
}
.box:hover {
  transform: scale(1.2);
}
\`\`\`

---

### 3. Keyframes动画基础

- 通过 \`@keyframes\` 定义动画过程中的多个阶段。
- 使用 \`animation\` 属性应用动画。

**示例：**

\`\`\`css
@keyframes slide {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(100px);
  }
  100% {
    transform: translateX(0);
  }
}

.box {
  animation: slide 2s infinite ease-in-out;
}
\`\`\`

---

### 4. Animation 属性详解

| 属性                | 说明                          | 示例                     |
|---------------------|-------------------------------|--------------------------|
| \`animation-name\`   | 指定动画名称                   | \`slide\`                 |
| \`animation-duration\`| 动画持续时间                   | \`2s\`                    |
| \`animation-timing-function\` | 速度曲线                 | \`ease-in-out\`           |
| \`animation-delay\`  | 延迟时间                      | \`0s\`                    |
| \`animation-iteration-count\` | 动画循环次数              | \`infinite\`              |
| \`animation-direction\` | 动画方向（normal/alternate）  | \`alternate\`             |
| \`animation-fill-mode\` | 动画结束状态保留               | \`forwards\`              |

---

### 5. 动画性能优化建议

- 尽量使用 \`transform\` 和 \`opacity\` 进行动画，避免触发布局重绘  
- 使用 \`will-change\` 提前告知浏览器优化  
- 减少动画元素数量和持续时间  
- 使用 GPU 加速硬件合成

---

### ✅ 小结

CSS动画分为简单过渡和复杂关键帧动画两类，合理选择使用场景，配合性能优化，能提升用户体验和界面交互效果。
`
        }
    ]
    return (
        <div>
            <ArticleList data={cssArticles} centerTitle="CSS" icon={<FaCss3 color="#61dafb"/>}/>
        </div>
    );
};
export default ArticlesCss;
