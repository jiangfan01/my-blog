import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Algorithm.module.scss";

// 注册插件
gsap.registerPlugin(ScrollTrigger);

const categories = [
    { key: "array", label: "数组" },
    { key: "stack", label: "栈" },
    { key: "queue", label: "队列" },
    { key: "linkedlist", label: "链表" },
    { key: "tree", label: "树" },
    { key: "dp", label: "动态规划" },
];

const Algorithm: React.FC = () => {
    const navigate = useNavigate();
    const titleRef = useRef<HTMLHeadingElement>(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        gsap.fromTo(
            titleRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
            }
        );

        cardsRef.current.forEach((card, index) => {
            gsap.fromTo(
                card,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 90%",
                        toggleActions: "play none none none",
                    },
                }
            );
        });
    }, []);

    return (
        <div className={styles.container}>
            <h2 ref={titleRef} className={styles.title}>📚 算法分类</h2>
            <div className={styles.grid}>
                {categories.map((c, i) => (
                    <div
                        key={c.key}
                        className={styles.card}
                        onClick={() => navigate(`/home/algorithm/page/${c.key}`)}
                        ref={(el) => { cardsRef.current[i] = el!; }}
                    >
                        <div className={styles.label}>{c.label}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Algorithm;
