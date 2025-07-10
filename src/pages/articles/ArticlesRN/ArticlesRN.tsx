import React from "react";
import ArticleList from "../../../components/ArticleList/ArticleList.tsx";
import {FaReact} from "react-icons/fa";

const ArticlesRN: React.FC = () => {
    const rnArticles = [
        {
            question: "什么是 React Native",
            answer: `
## React Native 详解

---

### 1️⃣ 什么是 React Native？

React Native 是由 Facebook（现 Meta）开发的开源跨平台移动应用框架，允许开发者使用 JavaScript 和 React 来编写移动应用，同时能渲染原生界面。

简单来说，React Native 让你用熟悉的 React 语法和 JavaScript 写移动 App，且这些 App 可以在 iOS 和 Android 两大主流平台上运行，且接近原生性能和体验。

---

### 2️⃣ React Native 的核心原理

- 使用 React 框架思想：组件化开发、声明式 UI。
- 桥接机制（Bridge）：JS 代码和原生代码通过桥接通信，JS 负责业务逻辑，原生负责渲染界面和调用设备能力。
- 渲染原生组件：不同于 WebView，React Native 直接渲染原生 UI 组件，提高性能与体验。

---

### 3️⃣ React Native 的优势

- 跨平台开发：一套代码同时适配 iOS 和 Android。
- 开发效率高：代码热更新、快速调试，减少开发和维护成本。
- 丰富生态：大量第三方库、社区支持，涵盖导航、状态管理、动画等。
- 接近原生体验：UI 使用原生组件，动画和响应性能更优于纯 Web 技术。
- 灵活调用原生模块：可根据需求编写原生代码，扩展功能。

---

### 4️⃣ 典型开发流程

1. 使用 React 和 JSX 编写组件。
2. 通过 React Native 提供的 API 操作 UI 和设备功能。
3. 在模拟器或真机上运行和调试。
4. 根据需要编写原生模块扩展功能。
5. 打包发布到 App Store 和 Google Play。

---

### 5️⃣ React Native 与传统开发对比

| 特性       | React Native                   | 原生开发                    |
|------------|-------------------------------|-----------------------------|
| 语言       | JavaScript + React            | Java/Kotlin（Android）<br>Swift/Obj-C（iOS） |
| 性能       | 接近原生                      | 最佳                        |
| 开发效率   | 高，代码复用                  | 低，需要分别开发            |
| UI 渲染    | 原生组件渲染                  | 原生组件渲染                |
| 社区生态   | 丰富                          | 丰富，但分散                |

---

### 6️⃣ 适用场景

- 跨平台移动应用开发。
- 需要快速迭代和高性能的移动项目。
- 团队熟悉 React 生态，减少学习成本。
- 需要同时支持 iOS 和 Android。
`
        },
        {
            question: "React Native 及其他跨平台框架对比",
            answer: `
## React Native 及其他跨平台框架对比

---

### 1️⃣ 技术栈及开发语言

| 框架          | 语言                         | 说明                                    |
|---------------|------------------------------|-----------------------------------------|
| React Native  | JavaScript + React           | 原生组件渲染，性能接近原生，灵活调用原生API  |
| UniApp        | Vue.js                       | 编译到多端（小程序、H5、App），基于 Vue 语法  |
| Flutter       | Dart                         | 自绘 UI，性能优秀，支持多平台                |
| Cordova       | HTML/CSS/JS                  | 基于 WebView，适合简单应用                    |

---

### 2️⃣ 渲染机制

- React Native 通过桥接调用原生组件，界面原生性能高。
- UniApp 编译到对应平台的组件（小程序原生组件，App使用 WebView 或原生渲染）。
- Flutter 自绘渲染 UI，跨平台表现一致。
- Cordova 完全基于 WebView，性能较弱。

---

### 3️⃣ 跨平台覆盖范围

| 框架         | 覆盖平台                                  |
|--------------|-------------------------------------------|
| React Native | iOS、Android                             |
| UniApp       | 微信/支付宝/百度等小程序、H5、App (通过DCloud) |
| Flutter      | iOS、Android、Web、桌面                   |
| Cordova      | iOS、Android (WebView)                    |

---

### 4️⃣ 代码复用与开发体验

- React Native 代码可重用，但需针对原生模块做适配。
- UniApp 使用 Vue 语法，适合 Vue 开发者，代码可跨多端运行。
- Flutter 采用 Dart 语言，UI 与逻辑高度集成。
- Cordova 纯 Web 技术，复用率高但体验有限。

---

### 5️⃣ 社区与生态

- React Native 社区活跃，第三方库丰富。
- UniApp 在国内小程序生态广泛，生态快速发展。
- Flutter 社区增长迅速。
- Cordova 生态相对薄弱。

---

### 6️⃣ 适用场景对比

| 框架         | 适用场景                                  |
|--------------|-------------------------------------------|
| React Native | 高性能跨平台移动 App，接近原生体验          |
| UniApp       | 快速开发多端小程序和 App，代码复用高          |
| Flutter      | 需要高度定制 UI 和多平台支持                |
| Cordova      | 轻量级 Web 应用，快速上线                    |

---

## 总结

| 框架         | 优势                                   | 劣势                         |
|--------------|----------------------------------------|------------------------------|
| React Native | 性能好，原生组件，社区成熟              | 学习曲线，需桥接原生开发         |
| UniApp       | 多端覆盖，Vue 语法，开发门槛低           | App 性能较 React Native 略逊    |
| Flutter      | 性能极佳，自绘 UI，跨多平台               | Dart 语言门槛，体积较大           |
| Cordova      | 开发简单，纯 Web 技术                    | 性能差，体验受限                |

`
        },
        {
            question: "Expo 配合 React Native",
            answer: `
## Expo 配合 React Native

---

### 1️⃣ 什么是 Expo？

Expo 是基于 React Native 的一个开源工具集和服务平台，旨在简化 React Native 的开发流程，提供一套开箱即用的功能和组件，减少原生环境配置的复杂度。

---

### 2️⃣ Expo 的优势

- **无需复杂环境配置**：不需要安装 Xcode 或 Android Studio，即可快速启动项目。
- **丰富的内置 API**：包括相机、定位、推送通知、文件系统等，开箱即用。
- **热重载和实时预览**：支持扫码直接在真机或模拟器运行，开发效率高。
- **支持 OTA（Over-The-Air）更新**：无需重新发布应用即可推送更新。
- **社区和生态完善**：大量开源插件和示例。

---

### 3️⃣ Expo 与 React Native CLI 区别

| 特性           | Expo                               | React Native CLI                 |
|----------------|----------------------------------|--------------------------------|
| 环境配置       | 极简，开箱即用                   | 需安装原生开发环境              |
| 原生代码修改   | 受限，需要“eject”或使用开发客户端 | 完全支持原生代码修改            |
| 适用场景       | 快速开发、原型、简单项目          | 复杂项目、需要自定义原生功能    |
| 构建和发布     | Expo 提供云端构建和发布服务       | 需本地或 CI 配置构建            |

---

### 4️⃣ Expo 常用命令

- 创建项目：\`npx create-expo-app my-app\`
- 启动开发服务器：\`expo start\`
- 运行到模拟器/设备：扫码或使用快捷键
- 构建发布：\`expo build:android\` / \`expo build:ios\`

---

### 5️⃣ Expo 的局限性

- 对原生模块定制有限，如需调用第三方原生库，可能需要“弹射”（eject）出 Expo 管理。
- 构建和发布依赖 Expo 服务。

---

### 6️⃣ 总结

Expo 作为 React Native 的轻量级开发平台，极大降低了跨平台移动开发的门槛。适合快速开发和中小型项目。复杂需求时可选择弹射出 Expo，使用 React Native CLI 进行深度定制。
`
        },
        {
            question: "React Native 组件的分类与区别",
            answer: `
## React Native 组件分类与区别

---

### 1️⃣ 原生组件（Native Components）

- 由 React Native 框架提供，直接映射到 iOS 和 Android 的原生 UI 组件。
- 例如：\`View\`、\`Text\`、\`Image\`、\`ScrollView\` 等。
- 性能优越，用户体验接近原生应用。

---

### 2️⃣ 纯 JavaScript 组件（JS Components）

- 使用 React 和 JavaScript 编写的组件。
- 依赖于原生组件进行渲染，不能直接访问原生 API。
- 灵活，可实现复杂的业务逻辑和界面。

---

### 3️⃣ 第三方组件库组件

- 来自社区的开源组件库，如 \`react-native-elements\`、\`react-native-paper\`。
- 封装了常用 UI 和功能，提升开发效率。
- 适合快速搭建界面和实现常见功能。

---

### 4️⃣ 自定义原生组件（Native Modules / Native UI Components）

- 通过原生代码（Java/Swift/Objective-C）编写，封装复杂功能或性能关键模块。
- 通过桥接机制暴露给 React Native 调用。
- 适用于对性能有较高要求或需要调用设备底层功能的场景。

---

### 5️⃣ 组件总结对比

| 类型               | 语言             | 功能范围           | 优点                       | 适用场景                   |
|--------------------|------------------|--------------------|----------------------------|----------------------------|
| 原生组件           | Objective-C/Java | UI 基础组件         | 性能好，接近原生体验       | 所有 React Native 项目      |
| 纯 JS 组件          | JavaScript       | 业务逻辑与组合组件   | 灵活，易于开发与复用       | 业务界面开发                |
| 第三方组件库组件    | JS + 原生封装    | UI + 功能组件       | 快速开发，减少重复造轮子   | 快速搭建界面，常用功能      |
| 自定义原生组件      | Java/Swift/Obj-C | 高性能/底层功能     | 性能最佳，功能全面         | 需要原生性能或设备特性访问  |

---

## 总结

React Native 组件体系丰富，合理选用不同类型组件，既能保证开发效率，也能满足性能和功能需求，是开发跨平台移动应用的关键。
`
        }




    ];
    return (
        <>
            <div>
                <ArticleList data={rnArticles} centerTitle="React Native" icon={<FaReact color="#61dafb"/>}/>
            </div>
        </>
    );
};
export default ArticlesRN;