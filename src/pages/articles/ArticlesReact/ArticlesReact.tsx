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

- 语法糖本质：React.createElement
- 最终会被 Babel 转换为 JS 函数调用
`
        },
        {
            question: "React 的核心理念？",
            answer: `
React 的两个核心思想是：

1. **组件化开发**
2. **单向数据流**

> 所有 UI 拆成组件，数据单向流动，状态管理清晰易维护。
`
        },
        {
            question: "什么是 JSX？",
            answer: `
**JSX** 是 JavaScript 的语法扩展，它让我们可以像写 HTML 一样书写组件结构。

示例：

\`\`\`jsx
const element = <h1>Hello World</h1>;
\`\`\`

- 语法糖本质：React.createElement
- 最终会被 Babel 转换为 JS 函数调用
`
        },
        {
            question: "什么是 JSX？",
            answer: `
**JSX** 是 JavaScript 的语法扩展，它让我们可以像写 HTML 一样书写组件结构。

示例：

\`\`\`jsx
const element = <h1>Hello World</h1>;
\`\`\`

- 语法糖本质：React.createElement
- 最终会被 Babel 转换为 JS 函数调用
`
        },
        {
            question: "什么是 JSX？",
            answer: `
**JSX** 是 JavaScript 的语法扩展，它让我们可以像写 HTML 一样书写组件结构。

示例：

\`\`\`jsx
const element = <h1>Hello World</h1>;
\`\`\`

- 语法糖本质：React.createElement
- 最终会被 Babel 转换为 JS 函数调用
`
        },
        {
            question: "什么是 JSX？",
            answer: `
**JSX** 是 JavaScript 的语法扩展，它让我们可以像写 HTML 一样书写组件结构。

示例：

\`\`\`jsx
const element = <h1>Hello World</h1>;
\`\`\`

- 语法糖本质：React.createElement
- 最终会被 Babel 转换为 JS 函数调用
`
        },
        {
            question: "什么是 JSX？",
            answer: `
**JSX** 是 JavaScript 的语法扩展，它让我们可以像写 HTML 一样书写组件结构。

示例：

\`\`\`jsx
const element = <h1>Hello World</h1>;
\`\`\`

- 语法糖本质：React.createElement
- 最终会被 Babel 转换为 JS 函数调用
`
        },
        {
            question: "什么是 JSX？",
            answer: `
**JSX** 是 JavaScript 的语法扩展，它让我们可以像写 HTML 一样书写组件结构。

示例：

\`\`\`jsx
const element = <h1>Hello World</h1>;
\`\`\`

- 语法糖本质：React.createElement
- 最终会被 Babel 转换为 JS 函数调用
`
        },
        {
            question: "什么是 JSX？",
            answer: `
**JSX** 是 JavaScript 的语法扩展，它让我们可以像写 HTML 一样书写组件结构。

示例：

\`\`\`jsx
const element = <h1>Hello World</h1>;
\`\`\`

- 语法糖本质：React.createElement
- 最终会被 Babel 转换为 JS 函数调用
`
        },
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