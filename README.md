# 📝 My Blog（持续迭代中）

> 🚀 现代化个人技术博客系统，基于 React 18 + TypeScript + Vite 构建，支持平滑滚动、GSAP 动效、Markdown 文章渲染与 CI/CD 自动部署，持续优化中。

---

## ✨ 项目亮点

- 🎨 **页面动效丰富**：使用 GSAP 实现组件进场动画、过渡动效，结合 Lenis 实现丝滑滚动体验
- ⚡ **性能优化**：基于 Vite 搭建，结合 React Router 的 `lazy + Suspense` 实现路由级代码分割，首屏加载速度提升约 40%
- 📄 **支持 Markdown 渲染**：搭建分类清晰的文章系统，支持技术文章以 `.md` 编写并渲染为页面
- 🔄 **CI/CD 自动部署**：借助 GitHub Actions 实现自动构建与部署至 GitHub Pages
- 🔧 **自定义 Vite 插件**：构建阶段自动将 `index.html` 复制为 `404.html`，解决 GitHub Pages 刷新 404 问题
- 🌓 **主题切换 & 响应式适配**：支持深浅主题切换，使用 SCSS + rem/vh + media query 实现完整响应式布局

---

## 🛠️ 技术栈

| 模块       | 技术                                      |
| ---------- | ----------------------------------------- |
| 前端框架   | React 18 + TypeScript                     |
| 构建工具   | Vite                                      |
| 路由管理   | React Router v6 + lazy + Suspense         |
| 动画       | GSAP + Lenis + CSS3                       |
| 样式方案   | SCSS / rem / 媒体查询                     |
| Markdown   | remark / rehype 插件体系                  |
| 部署方式   | GitHub Actions + GitHub Pages             |
| 工程实践   | 模块拆分、类型约束、组件封装、代码规范    |

---

## 📂 项目结构

```text
my-blog/
├── public/
│   └── assets/           # 公共静态资源
├── src/
│   ├── pages/            # 页面模块
│   │   ├── welcome/      # 欢迎页
│   │   ├── index/        # 首页
│   │   ├── articles/     # 技术文章各分类页面
│   │   ├── scene/        # 场景案例页
│   │   └── algorithm/    # 算法专栏
│   ├── components/       # 通用组件（Loading、Tabs 等）
│   ├── styles/           # 全局样式 / SCSS 变量
│   ├── App.tsx           # 路由入口
│   └── main.tsx          # 渲染入口
├── .github/workflows/    # CI/CD 配置
│   └── deploy.yml
├── vite.config.ts        # Vite 配置，包含构建后 404 页面复制逻辑
└── README.md
```

---

## 🚀 本地启动

```bash
# 克隆仓库
git clone https://github.com/jiangfan01/my-blog.git
cd my-blog

# 安装依赖
pnpm install  # 或 yarn / npm install

# 启动开发环境
pnpm dev

# 构建生产包
pnpm build

# 构建后自动复制 index.html → 404.html
```

---

## 🔄 自动化部署（CI/CD）

每次 git push 到 main 分支时，会自动触发 GitHub Actions 执行以下流程：

1. 安装依赖
2. 构建项目
3. 构建完成后自动复制 index.html → 404.html
4. 推送到 gh-pages 分支
5. GitHub Pages 发布最新构建结果

---

## 🌈 功能预览

- 🎨 页面支持主题切换（暗黑模式 / 明亮模式）
- 🧩 技术文章分类支持：CSS、JS、Vue、React、Node、Git、浏览器、RN、工程化等
- 📚 Markdown 渲染文章，支持标题锚点、代码高亮、emoji
- 📦 支持组件化封装与动态路由结构管理
- 🖼️ 页面动画统一使用 GSAP Timeline 控制，增强视觉体验

---

## 🔗 在线访问

项目地址：[https://jiangfan01.github.io/my-blog/](https://jiangfan01.github.io/my-blog/)

---

## ⏳ 后续规划

- ✅ 技术文章持续更新中
- ✅ 支持文章搜索与筛选
- ⏳ 评论系统接入（如 gitalk / utterances）
- ⏳ 动态阅读量与访问统计
- ⏳ SSG 方向探索（如 Astro / Next.js）

---
