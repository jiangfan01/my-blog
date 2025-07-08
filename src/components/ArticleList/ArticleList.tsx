import React, {useState, useRef, useEffect} from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import styles from "./ArticleList.module.scss";

gsap.registerPlugin(ScrollTrigger);

interface ArticleItem {
    question: string;
    answer: string;
}

const ArticleList: React.FC<{ data: ArticleItem[] }> = ({data}) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        if (containerRef.current) {
            gsap.fromTo(
                containerRef.current,
                {opacity: 0, y: 80},
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }
    }, []);

    const toggle = (index: number) => {
        const content = contentRefs.current[index];
        const isOpen = openIndex === index;

        if (content) {
            if (isOpen) {
                gsap.to(content, {
                    height: 0,
                    opacity: 0,
                    duration: 0.4,
                    ease: "power2.inOut"
                });
                setOpenIndex(null);
            } else {
                gsap.set(content, {height: "auto"});
                const height = content.scrollHeight;
                gsap.fromTo(
                    content,
                    {height: 0, opacity: 0},
                    {height, opacity: 1, duration: 0.5, ease: "power2.out"}
                );
                setOpenIndex(index);
            }
        }
    };

    return (
        <div className={styles.articleList} ref={containerRef}>
            {data.map((item, index) => (
                <div key={index} className={styles.articleItem}>
                    <div className={styles.question} onClick={() => toggle(index)}>
                        <span>{index + 1}. {item.question}</span>
                        <span className={styles.icon}>{openIndex === index ? "▲" : "▼"}</span>
                    </div>

                    <div
                        className={styles.answerWrapper}
                        ref={(el) => (contentRefs.current[index] = el)}
                        style={{height: 0, overflow: "hidden", opacity: 0}}
                    >
                        <div className={styles.answer}>
                            <ReactMarkdown
                                children={item.answer}
                                remarkPlugins={[remarkGfm]}
                                rehypePlugins={[rehypeHighlight]}
                                components={{
                                    img: ({node, ...props}) => (
                                        <img {...props} style={{maxWidth: "50%", borderRadius: 8, margin: "0 auto"}}/>
                                    ),
                                    table: ({node, ...props}) => (
                                        <div style={{overflowX: "auto"}}>
                                            <table {...props} />
                                        </div>
                                    )
                                }}
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ArticleList;
