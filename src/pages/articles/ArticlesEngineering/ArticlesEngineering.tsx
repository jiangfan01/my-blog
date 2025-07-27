import React from "react";
import ArticleList from "../../../components/ArticleList/ArticleList.tsx";
import {FaTools} from "react-icons/fa";

const ArticlesEngineering: React.FC = () => {
    const engineeringArticle = [
        {
            question: "打包工具：Webpack / Vite ",
            answer: `
## ⚙️ 打包工具：Webpack / Vite 详解

---

### 1. 什么是打包工具？

前端项目通常由大量模块和资源组成，需要将它们编译、打包成浏览器可识别的文件。打包工具就是完成这项工作的核心工具。

---

### 2. Webpack 简介

- **Webpack** 是目前最流行的前端打包工具，功能强大且灵活。
- 它以模块化为核心，支持 JS、CSS、图片等各种资源的加载和处理。
- 通过配置 \`entry\`（入口）、\`output\`（输出）、\`loader\`（转换器）、\`plugin\`（插件）等，实现复杂的构建需求。

**Webpack 工作流程简述：**  
1. 从入口文件开始，递归解析依赖模块  
2. 根据 loader 转换不同类型文件  
3. 根据插件完成额外功能（压缩、分割、注入环境变量等）  
4. 输出最终静态资源文件

---

### 3. Vite 简介

- **Vite** 是新一代的前端构建工具，由 Vue 作者尤雨溪开发。
- 利用现代浏览器原生支持的 ES Module（ESM），实现极速冷启动。
- 开发模式下不打包，直接通过 ESM 方式加载源码，启动速度秒开。
- 生产模式下，内部依然使用 Rollup 打包，输出高效代码。

---

### 4. Webpack 与 Vite 的对比

| 特性               | Webpack                    | Vite                             |
|--------------------|----------------------------|---------------------------------|
| 启动速度           | 较慢，构建整个项目          | 极快，利用 ESM 即时加载          |
| 配置复杂度         | 灵活但配置较繁琐            | 配置简单，开箱即用               |
| 构建机制           | 打包所有文件               | 开发时不打包，生产时用 Rollup    |
| 社区生态           | 超大，插件丰富             | 迅速增长，支持多种框架            |
| 热模块替换（HMR）  | 支持                      | 快速且高效                      |

---

### 5. 简单配置示例

#### Webpack 配置示例

\`\`\`js
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist'
  },
  module: {
    rules: [
      { test: /\\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\\.(png|jpg)$/, type: 'asset/resource' }
    ]
  },
  plugins: [
    // 插件配置
  ]
};
\`\`\`

#### Vite 配置示例（vite.config.js）

\`\`\`js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  }
});
\`\`\`

---

### 6. 适用场景总结

- **Webpack** 适合大型复杂项目，特别是需要细粒度控制构建流程时。
- **Vite** 适合中小型项目，或注重开发体验和启动速度的项目。

---

### ✅ 小结

Webpack 和 Vite 是当前主流的前端构建工具，各有优势。理解它们的原理和特点，能够帮助你选择合适的工具，提高开发和构建效率。
`
        },
        {
            question: "资源优化和性能提升",
            answer: `
## 🚀 资源优化与性能提升详解

---

### 1. 资源压缩

- 使用 **Terser** 压缩 JavaScript，使用 **cssnano** 压缩 CSS，移除无用字符。
- 图片可使用 TinyPNG、ImageOptim 等压缩工具，推荐格式：WebP、AVIF。

\`\`\`js
// Webpack 中开启代码压缩
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()]
  }
};
\`\`\`

---

### 2. Tree Shaking

利用 ES Module 静态分析特性，打包时剔除未使用的代码。

\`\`\`js
// ✅ 推荐：只引入需要的函数
import { debounce } from "lodash-es";

// ❌ 不推荐：全量引入
import _ from "lodash";
\`\`\`

Webpack、Vite 等打包工具需启用 Tree Shaking，需使用 ES Module（import/export）。

---

### 3. 代码分割（Code Splitting）

将页面拆分为多个独立模块，仅在需要时加载，减少首屏体积。

\`\`\`tsx
// React 懒加载组件
import React, { lazy, Suspense } from "react";

const About = lazy(() => import("./About"));

export default () => (
  <Suspense fallback={<div>加载中...</div>}>
    <About />
  </Suspense>
);
\`\`\`

---

### 4. 缓存与文件哈希

为文件名添加 contenthash，使资源可长效缓存，更新自动失效。

\`\`\`js
output: {
  filename: "[name].[contenthash].js",
  path: path.resolve(__dirname, "dist")
}
\`\`\`

避免缓存冲突，提升加载速度。

---

### 5. 按需加载与预加载

- 按需加载：只加载当前页面所需资源。
- 预加载：提前加载未来可能用到的资源。

\`\`\`html
<!-- HTML 中使用 preload -->
<link rel="preload" href="/main.js" as="script" />
\`\`\`

\`\`\`js
// 动态加载模块
import("./module.js").then((m) => {
  m.init();
});
\`\`\`

---

### 6. HTTP/2 与 CDN

- 启用 HTTP/2，多路复用减少连接数。
- 使用 CDN 缓存静态资源，降低延迟。

\`\`\`ts
// Vite 项目配置静态资源使用 CDN
export default defineConfig({
  base: "https://cdn.example.com/assets/"
});
\`\`\`

---

### ✅ 小结

通过压缩、Tree Shaking、代码分割、缓存等手段，可以极大优化加载性能，提升用户体验与页面流畅度。
`
        },

        {
            question: "持续集成与自动化构建",
            answer: `
## 🤖 持续集成与自动化构建详解

---

### 1. 什么是持续集成（CI）？

持续集成是一种软件开发实践，开发者频繁（通常是每天多次）将代码合并到主分支，通过自动化工具立即进行构建和测试，确保代码质量和功能稳定。

---

### 2. 为什么要自动化构建？

- 自动完成代码编译、打包，减少人工操作错误  
- 自动运行测试，提高代码可靠性  
- 快速反馈问题，加快开发节奏  
- 保证发布版本的质量一致性  

---

### 3. 常见的 CI/CD 工具

- **GitHub Actions**：GitHub 官方集成，配置简单，功能丰富  
- **Travis CI**：云端 CI 服务，易用  
- **Jenkins**：功能强大且高度可定制，适合复杂项目  
- **GitLab CI**：内置于 GitLab，便捷集成  

---

### 4. 简单的 GitHub Actions 自动化构建示例

新建文件 \`.github/workflows/ci.yml\`：

\`\`\`yaml
name: CI  # 工作流的名字

on:  # 触发条件
  push:
    branches: [main]  # 推送到 main 分支时触发
  pull_request:
    branches: [main]  # 提交 PR 到 main 分支时触发

jobs:
  build-and-test:  # 定义一个任务
    runs-on: ubuntu-latest  # 使用 Ubuntu 最新环境

    steps:  # 执行步骤
      - name: Checkout code  # 第一步：拉取代码
        uses: actions/checkout@v3

      - name: Setup Node.js  # 设置 Node.js 运行环境
        uses: actions/setup-node@v3
        with:
          node-version: 18  # 指定 Node 版本为 18

      - name: Install dependencies  # 安装依赖
        run: npm install

      - name: Run tests  # 执行测试脚本
        run: npm test -- --watchAll=false

      - name: Build project  # 构建项目
        run: npm run build
\`\`\`

---

### 5. 本地自动化构建脚本示例（package.json）

\`\`\`json
{
  "scripts": {
    "build": "webpack --mode production",      // 打包生产环境代码
    "test": "jest",                             // 执行测试（Jest 框架）
    "lint": "eslint src --fix"                  // 自动修复代码风格问题
  }
}
\`\`\`

运行命令：

\`\`\`bash
npm run lint    # 自动修复代码格式问题
npm run test    # 执行单元测试
npm run build   # 构建生产包
\`\`\`

你也可以用工具如 [husky](https://typicode.github.io/husky/) 把这些命令绑定到 Git 提交钩子，实现提交前自动检查。

---

### 6. 进阶：复杂 GitHub Actions 流水线示例

- 多环境部署（开发、测试、生产）  
- 缓存依赖加速构建  
- 上传测试覆盖率报告  

\`\`\`yaml
name: CI/CD Pipeline  # 工作流名称

on:
  push:
    branches: [main, develop]  # 推送到 main 或 develop 分支时触发
  pull_request:

jobs:
  build-test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [16, 18]  # 同时测试多个 Node 版本

    steps:
      - name: Checkout repo
        uses: actions/checkout@v3  # 拉取代码

      - name: Use Node.js \${{ matrix.node-version }}
        uses: actions/setup-node@v3
        with:
          node-version: \${{ matrix.node-version }}  # 使用不同版本的 Node

      - name: Cache node modules
        uses: actions/cache@v3  # 缓存依赖，加速后续构建
        with:
          path: ~/.npm
          key: \${{ runner.os }}-node-\${{ matrix.node-version }}-\${{ hashFiles('package-lock.json') }}
          restore-keys: |
            \${{ runner.os }}-node-\${{ matrix.node-version }}-

      - name: Install dependencies
        run: npm ci  # 更快更干净地安装依赖

      - name: Run tests
        run: npm test -- --coverage  # 执行测试并生成覆盖率报告

      - name: Upload coverage to Coveralls
        uses: coverallsapp/github-action@v2  # 上传测试覆盖率
        with:
          github-token: \${{ secrets.GITHUB_TOKEN }}

      - name: Build project
        run: npm run build  # 打包项目

  deploy:
    needs: build-test  # 等待 build-test 完成后执行
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'  # 仅在 main 分支部署

    steps:
      - name: Checkout repo
        uses: actions/checkout@v3

      - name: Deploy to production server
        run: |
          scp -r ./dist user@yourserver:/var/www/yourapp  # 上传构建产物
          ssh user@yourserver "systemctl restart yourapp"  # 重启服务
\`\`\`

---

### ✅ 小结

持续集成和自动化构建是现代开发的基石。它能自动完成代码测试、打包和部署，提升开发效率与产品质量。GitHub Actions 提供灵活的工作流配置，适合从小型项目到复杂流水线的各种需求。
      `
        },
        {
            question: "代码规范与质量保证",
            answer: `
## 🧹 代码规范与质量保证详解

---

### 1. 为什么要注重代码规范和质量？

- 提高团队协作效率，代码风格统一  
- 降低 bug 概率，减少线上事故  
- 容易阅读和维护  
- 配合自动化工具，提升开发体验  

---

### 2. 常见工具组合

| 工具       | 功能说明                     |
|------------|------------------------------|
| **ESLint** | JavaScript / TS 语法规则校验 |
| **Prettier** | 代码格式自动化统一        |
| **Stylelint** | CSS / SCSS 校验工具       |
| **Husky** | Git 钩子，提交前执行检查     |
| **lint-staged** | 提交时只检查变更文件     |

---

### 3. 配置 ESLint 示例（React + TS 项目）

新建或修改 .eslintrc.js：

\`\`\`js
module.exports = {
  parser: "@typescript-eslint/parser", // 支持 TS
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "react/react-in-jsx-scope": "off", // React 17+ 无需引入
    "semi": ["error", "always"],
    "quotes": ["error", "double"]
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
\`\`\`

---

### 4. 配置 Prettier 示例（.prettierrc）

\`\`\`json
{
  "semi": true,
  "singleQuote": false,
  "tabWidth": 2,
  "trailingComma": "none",
  "printWidth": 100
}
\`\`\`

---

### 5. 提交前自动校验（Husky + lint-staged）

安装依赖：

\`\`\`bash
npm install husky lint-staged -D
npx husky install
npx husky add .husky/pre-commit "npx lint-staged"
\`\`\`

在 package.json 中添加配置：

\`\`\`json
{
  "lint-staged": {
    "src/**/*.{ts,tsx,js,jsx}": [
      "eslint --fix",
      "prettier --write"
    ]
  }
}
\`\`\`

> ✅ 提交前会自动运行 ESLint 和 Prettier 修复变更代码，避免脏代码进入主分支。

---

### 6. 示例效果演示

假设有如下代码：

\`\`\`tsx
const   a=1
const helloWorld  =()=>{console.log("Hi")}
\`\`\`

执行提交时：

- **ESLint** 会提示：变量未使用、不规范空格
- **Prettier** 会格式化为：

\`\`\`tsx
const a = 1;

const helloWorld = () => {
  console.log("Hi");
};
\`\`\`

---

### ✅ 小结

高质量代码离不开规范和工具的配合。通过 ESLint、Prettier、Husky 等工具自动化检查和修复问题，可以减少 bug、提高协作效率，是现代前端项目必备流程。
`
        },
        {
            question: "前端安全：XSS 与 CSRF 攻击防护",
            answer: `
## 🔐 前端安全：XSS 与 CSRF 攻击防护

---

### 1. 前端安全

- 防止敏感信息泄露（如 Cookie、Token）
- 防止恶意操作（如伪造请求、数据篡改）
- 提升系统抗攻击能力，保护用户体验
- 是 Web 应用上线的 **合规要求**

---

### 2. 常见前端攻击类型

| 攻击类型 | 简介 |
|----------|------|
| **XSS（跨站脚本攻击）** | 注入恶意脚本到网页，执行任意 JS 代码 |
| **CSRF（跨站请求伪造）** | 利用用户身份伪造请求，执行敏感操作 |

---

### 3. XSS 攻击详解

#### ✅ XSS 示例（存储型）：

攻击者提交一条评论，后台未做处理：

\`\`\`html
<script>alert("你被攻击了")</script>
\`\`\`

若页面未对内容做转义，这段代码将会执行。

#### 💡 XSS 防护策略：

- **对用户输入进行转义**（HTML Encode）：
  \`<\` => \`&lt;\`，\`>\` => \`&gt;\`
- **使用框架绑定数据（如 React / Vue）**：自动做转义
- **避免使用 \`innerHTML\` 等直接插入 HTML 的方式**
- 设置合适的 **Content Security Policy（CSP）**

#### React 自动转义示例：

\`\`\`jsx
<div>{userInput}</div> // 安全，React 会自动转义标签
\`\`\`

---

### 4. CSRF 攻击详解

#### ✅ CSRF 攻击原理：

用户登录状态下访问恶意网站，发起伪造请求：

\`\`\`html
<img src="https://your-site.com/delete?id=123" />
\`\`\`

如果后端没有验证来源，就可能执行了危险操作。

#### 💡 CSRF 防护策略：

| 方法 | 原理 |
|------|------|
| **Token 校验（推荐）** | 每次请求附带一个服务器生成的 Token，需比对验证 |
| **Referer 检查** | 拒绝非本站地址发起的请求 |
| **SameSite Cookie 属性** | 限制第三方请求携带 Cookie |
| **POST + Token 双重保护** | 避免 GET 接口带来副作用操作 |

#### 示例：使用 Token 校验（前后端）

前端发请求时带上 Token：

\`\`\`js
fetch("/api/delete", {
  method: "POST",
  headers: {
    "x-csrf-token": token
  }
});
\`\`\`

后端验证：

\`\`\`js
if (req.headers["x-csrf-token"] !== session.csrfToken) {
  return res.status(403).send("非法请求");
}
\`\`\`

---

### ✅ 小结


- 防止 XSS：**数据展示处做转义 / 避免插入 HTML**
- 防止 CSRF：**加 token 校验 + Cookie 限制**
- 配置安全响应头（如 CSP、X-Frame-Options 等）


`
        }



    ]


    return (
        <>
            <div>
                <ArticleList data={engineeringArticle} centerTitle="前端工程化" icon={<FaTools color="#ff6347"/>}/>
            </div>
        </>
    )
}
export default ArticlesEngineering;