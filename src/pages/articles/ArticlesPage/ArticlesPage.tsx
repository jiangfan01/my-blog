import React, { useEffect, useRef } from 'react';
import styles from './ArticlesPage.module.scss';
import {
    FaCss3Alt, FaJs, FaReact, FaVuejs, FaNodeJs,
    FaChrome, FaMobileAlt, FaGitAlt, FaTools
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const categories = [
    {
        key: "Css",
        label: "CSS3",
        icon: <FaCss3Alt color="#264de4" />,
        desc: "🎨 动画与布局美学",
    },
    {
        key: "JavaScript",
        label: "JavaScript",
        icon: <FaJs color="#f7df1e" />,
        desc: "🧠 万能前端脚本语言",
    },
    {
        key: "React",
        label: "React",
        icon: <FaReact color="#61dafb" />,
        desc: "⚛️ 构建交互式 UI",
    },
    {
        key: "Vue",
        label: "Vue",
        icon: <FaVuejs color="#42b883" />,
        desc: "🍃 渐进式前端框架",
    },
    {
        key: "Node",
        label: "Node.js",
        icon: <FaNodeJs color="#68a063" />,
        desc: "🧩 后端也能写 JS",
    },
    {
        key: "web",
        label: "浏览器",
        icon: <FaChrome color="#e34c26" />,
        desc: "🌐 渲染之源",
    },
    {
        key: "ReactNative",
        label: "React Native",
        icon: <FaMobileAlt color="#000" />,
        desc: "📱 一套代码多端跑",
    },
    {
        key: "Git",
        label: "Git",
        icon: <FaGitAlt color="#f05033" />,
        desc: "🗂️ 项目版本控制",
    },
    {
        key: "Engineering",
        label: "工程化",
        icon: <FaTools color="#ff6347" />,
        desc: "⚙️ 前端工程化",
    },
];

const ArticlesPage: React.FC = () => {
    const navigate = useNavigate();
    const titleRef = useRef<HTMLHeadingElement>(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: titleRef.current,
                start: "top 80%",
                end: "bottom 40%",
                toggleActions: "play none none none",
            },
        });

        tl.fromTo(titleRef.current,
            { opacity: 0, x: 150 },
            { opacity: 1, x: 0, duration: 1, ease: "power2.out" }
        ).fromTo(cardsRef.current,
            { opacity: 0, scale: 0.9, y: 30 },
            { opacity: 1, scale: 1, y: 0, stagger: 0.1, duration: 0.6, ease: "power2.out" },
            "-=0.3"
        );
    }, []);

    return (
        <div className={styles.container}>
            <h2 className={styles.title} ref={titleRef}>技术分类</h2>
            <div className={styles.grid}>
                {categories.map((cat, index) => (
                    <div
                        key={cat.key}
                        className={styles.card}
                        onClick={() => navigate(`/home/articles/${cat.key}`)}
                        ref={(el) => {
                            cardsRef.current[index] = el!;
                        }}
                    >
                        <div className={styles.icon}>{cat.icon}</div>
                        <div className={styles.label}>{cat.label}</div>
                        <div className={styles.desc}>{cat.desc}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ArticlesPage;
