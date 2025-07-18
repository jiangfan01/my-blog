import {FaMagic, FaBolt} from "react-icons/fa";
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

];
