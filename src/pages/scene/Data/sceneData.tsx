import {FaMagic, FaBolt, FaKey, FaComments, FaSync, FaCode, FaCog} from "react-icons/fa";
import type {ReactNode} from "react";

interface SceneItem {
    key: string;
    title: string;
    desc: string;
    icon: ReactNode;
}

export const sceneList: SceneItem[] = [
    {
        key: "animation",
        title: "动效统一管理",
        desc: "使用 GSAP Timeline 控制所有入场动画，实现页面动效统一与丝滑滚动体验。",
        icon: <FaMagic/>,
    },
    {
        key: "zustand",
        title: "探索 Zustand：React 状态管理的新选择",
        desc: " 轻量、高效、无样板代码的 React 状态管理解决方案",
        icon: <FaBolt/>, // 使用闪电图标，象征轻量、快速的状态管理
    },
    {
        key: "nodeJwt",
        title: "JWT：Node.js 身份验证利器",
        desc: "基于 Token 的无状态认证机制，保障前后端安全通信",
        icon: <FaKey />, // 使用钥匙图标，象征身份验证与访问控制
    },
    {
        key: "tsUtils",
        title: "TypeScript 工具函数库：让代码更优雅",
        desc: "收集那些让人眼前一亮的 TS 工具函数，写代码效率翻倍！",
        icon: <FaCode />, // 使用代码图标，象征工具函数
    },
    {
        key: "SSEChatScene",
        title: "AI聊天：用SSE做实时对话和工具调用",
        desc: "基于 Server-Sent Events 技术，实现高性能、低延迟的实时聊天体验",
        icon: <FaComments />, // 使用对话图标，象征实时通信
    },
    {
        key: "reactQuery",
        title: "React Query ：不用 Zustand 也能全局状态管理",
        desc: "我发现了个好东西！用 React Query 直接干掉状态管理库，一行代码全局刷新",
        icon: <FaSync />, // 使用同步图标，象征数据刷新与状态同步
    },
    {
        key: "viteOptimization",
        title: "Vite 打包优化：让打包体积缩小，加载更快！",
        desc: "从代理配置到打包分析，这些 Vite 优化技巧让你的项目性能翻倍！",
        icon: <FaCog />, // 使用齿轮图标，象征配置优化
    }
];
