import React from "react";
import ArticleList from "../../../components/ArticleList/ArticleList.tsx";
import {FaReact} from "react-icons/fa";

const ArticlesReact: React.FC = () => {
    const reactArticles = [
        {
            question: "什么是 JSX？",
            answer: `
**JSX** 是 JavaScript 的语法扩展，它让我们可以像写 HTML 一样书写组件结构。

示例：

\`\`\`jsx
const element = <h1>Hello World</h1>;
\`\`\`

- 语法糖本质：React.createElement，最终会被 Babel 转换为 JS 函数调用
`
        },
        {
            question: "React的生命周期有哪些",
            answer: `
# React 生命周期总结（类组件 + Hooks 对应）

## 一、挂载阶段（组件被创建并插入 DOM）

| 生命周期方法 | 作用 |
|--------------|------|
| \`constructor()\` | 初始化 state 和方法绑定 |
| \`static getDerivedStateFromProps(props, state)\` | 根据 props 派生 state，**少用** |
| \`render()\` | 渲染组件 UI，**唯一必需的方法** |
| \`componentDidMount()\` | 组件挂载后执行，适合发请求、操作 DOM、订阅等副作用逻辑 |

---

## 二、更新阶段（state 或 props 变化时）

| 生命周期方法 | 作用 |
|--------------|------|
| \`static getDerivedStateFromProps(props, state)\` | 同上 |
| \`shouldComponentUpdate(nextProps, nextState)\` | 是否允许更新，**用于性能优化** |
| \`render()\` | 渲染更新后的 UI |
| \`getSnapshotBeforeUpdate(prevProps, prevState)\` | 获取更新前 DOM 快照 |
| \`componentDidUpdate(prevProps, prevState, snapshot)\` | DOM 更新完毕，可执行副作用操作 |

---

## 三、卸载阶段（组件被移除）

| 生命周期方法 | 作用 |
|--------------|------|
| \`componentWillUnmount()\` | 清理副作用，如取消定时器、取消订阅等 |

---

## 四、函数组件对应 Hooks 生命周期

| 类组件生命周期 | 对应的 Hook 写法 |
|----------------|------------------|
| \`componentDidMount\` | \`useEffect(() => {...}, [])\` |
| \`componentDidUpdate\` | \`useEffect(() => {...})\` |
| \`componentWillUnmount\` | \`useEffect(() => { return () => {...} }, [])\` |

### 示例：

\`\`\`tsx
import { useEffect } from 'react';

useEffect(() => {
  console.log("组件挂载或更新");

  return () => {
    console.log("组件卸载");
  };
}, [依赖项]);
          `
        },
        {
            question: "React的Virtual DOM",
            answer: `
### React 的 Virtual DOM 及其工作原理

**Virtual DOM（虚拟 DOM）** 是 React 引入的一种提高 UI 渲染性能的机制。

#### 📌 Virtual DOM 是什么？

Virtual DOM 是一种以 JavaScript 对象的形式描述 DOM 结构的技术，它是对真实 DOM 的一种抽象表示。

> 通俗理解：Virtual DOM 就是一棵以 JS 对象表示的“虚拟 DOM 树”。

---

#### ⚙️ Virtual DOM 的工作原理（核心流程）

1. **初始渲染**：
   - React 通过 \`render()\` 方法构建一棵 Virtual DOM 树。
   - React 将其映射为真实 DOM，插入到页面中。

2. **状态更新（setState / props 变化）时：**
   - React 会重新构建一棵新的 Virtual DOM 树。
   - React 将新旧 Virtual DOM 树 **进行对比（diff）**。
   - 找出变化的部分（称为 **差异 diff**）。
   - React 只对**需要更新的节点**进行 DOM 操作（**最小化 DOM 操作开销**）。

3. **更新 DOM：**
   - 根据 diff 结果，React 通过内部的 **Reconciliation（协调算法）**，高效地将变更同步到真实 DOM。

---

#### 🔍 为什么不用直接操作真实 DOM？

- 真实 DOM 操作昂贵，性能低。
- 多次 setState 会引发多次渲染，而 Virtual DOM 可以 **合并更新、批量处理**。
- Virtual DOM 提高了跨平台能力，如支持 React Native、服务端渲染等。

---
`
        }
    ];

    return (
        <>
            <div>
                <ArticleList data={reactArticles} centerTitle="React" icon={<FaReact color="#61dafb"/>}/>
            </div>
        </>
    );
};
export default ArticlesReact;