import {FaMagic, FaBolt, FaKey} from "react-icons/fa";
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
    }
];
