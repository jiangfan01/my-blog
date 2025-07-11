import React, {useEffect, useRef, useState} from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css";
import styles from "./ArticleList.module.scss";
import gsap from "gsap";

interface ArticleItem {
    question: string;
    answer: string;
}

interface Props {
    data: ArticleItem[];
    centerTitle?: string;
    icon?: React.ReactNode;
}

const ArticleList: React.FC<Props> = ({data, centerTitle, icon}) => {
    const [active, setActive] = useState<ArticleItem | null>(null);
    const centerTitleRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const answerBoxRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        // 动画
        if (centerTitleRef.current) {
            gsap.fromTo(
                centerTitleRef.current,
                {opacity: 0, x: 200},
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    ease: "power2.out",
                }
            );
        }

        if (containerRef.current) {
            const cards = containerRef.current.querySelectorAll(`.${styles.card}`);
            gsap.fromTo(
                cards,
                {x: -150, opacity: 0},
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "elastic.out(.1,.5)",
                    stagger: 0.1,
                }
            );
        }
    }, []);

    useEffect(() => {

        // 键盘关闭事件
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape" && active) {
                setActive(null);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [active]);

    useEffect(() => {
        const lenis = (window as any).__lenis__;
        if (active) {
            // 停止 Lenis 滚动
            if (lenis && lenis.stop) lenis.stop();

            document.body.style.overflow = "hidden";
            document.body.style.height = "100vh";

            // 动画
            gsap.fromTo(
                `.${styles.overlay}`,
                {opacity: 0},
                {opacity: 1, duration: 0.3}
            );

            gsap.fromTo(
                `.${styles.answerBox}`,
                {y: 50, opacity: 0},
                {y: 0, opacity: 1, duration: 0.4, ease: "back.out(1.7)"}
            );
        } else {
            // 恢复 Lenis 滚动
            if (lenis && lenis.start) lenis.start();

            document.body.style.overflow = "";
            document.body.style.height = "";
        }
    }, [active]);
    return (
        <div className={styles.wrapper}>
            {centerTitle && (
                <div className={styles.title} ref={centerTitleRef}>
                    {icon && <span className={styles.iconLeft}>{icon}</span>}
                    {centerTitle}
                </div>
            )}

            <div className={styles.grid} ref={containerRef}>
                {data.map((item, index) => (
                    <div
                        key={index}
                        className={styles.card}
                        onClick={() => setActive(item)}
                    >
                        <span className={styles.qIndex}>{index + 1}</span>
                        <div className={styles.qText}>{item.question}</div>
                    </div>
                ))}
            </div>

            {active && (
                <div className={styles.overlay} onClick={() => setActive(null)}>
                    <div
                        className={styles.answerBox}
                        data-lenis-prevent
                        onClick={(e) => e.stopPropagation()}
                        ref={answerBoxRef}
                    >
                        <div className={styles.answerHeader}>
                            <h2>{active.question}</h2>
                            <button
                                className={styles.closeButton}
                                onClick={() => setActive(null)}
                                aria-label="关闭"
                            >
                                &times;
                            </button>
                        </div>

                        <div className={styles.answerContent}>
                            <ReactMarkdown
                                children={active.answer}
                                remarkPlugins={[remarkGfm]}
                                rehypePlugins={[rehypeHighlight]}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ArticleList;