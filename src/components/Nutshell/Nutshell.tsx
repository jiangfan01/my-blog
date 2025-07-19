import React, {useEffect, useRef} from "react";
import styles from "./Nutshell.module.scss";
import gsap from "gsap";

const Nutshell: React.FC = () => {
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = textRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    gsap.fromTo(
                        textRef.current,
                        {opacity: 0, x: -150},
                        {
                            opacity: 1,
                            x: 0,
                            duration: .8,
                            ease: "power4.out",
                        }
                    );
                    observer.unobserve(el);
                }
            },
            {
                threshold: 0.1
            }
        );

        observer.observe(el);

        return () => observer.disconnect();
    }, []);

    return (
        <div className={styles.nutshell} ref={textRef}>
            <p>
                👋🏼 你好，<strong>我是 Jiang Fan</strong>，一名前端开发者。这个博客是我用于
                <strong>展示技能</strong>、<strong>沉淀知识</strong> 和 <strong>记录成长</strong> 的空间。
            </p>
            <p>
                我热衷于构建有趣且实用的 Web 应用，专注于
                <strong>前端开发</strong>、<strong>动效设计</strong> 和
                <strong>用户体验</strong>。希望这个网站能让你更了解我，也成为我们交流的桥梁。
            </p>
            <p>
                技术方向主要聚焦在 <strong>React</strong> / <strong>Vue</strong> / <strong>Node.js</strong> 等现代前端框架与生态，
                同时也对 <strong>界面设计</strong>、<strong>动效实现</strong>、<strong>前端工程化</strong>
                保持浓厚兴趣。欢迎交流与指正！
            </p>
        </div>
    );
};

export default React.memo(Nutshell);
