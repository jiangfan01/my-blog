// CategoryPage.tsx
import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { type Question, questions } from "./Data/questions";
import QuestionModal from "../../components/Algorithm/QuestionModal";
import NoData from "../../components/NoData/NoData";
import styles from "./Category.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CategoryPage: React.FC = () => {
    const { category } = useParams();
    const filtered = questions.filter((q) => q.category === category);
    const [activeQuestion, setActiveQuestion] = useState<Question | null>(null);
    const [activeDifficulty, setActiveDifficulty] = useState<"简单" | "中等" | "困难" | "全部">("全部");

    // 获取所有难度级别的题目
    const groupByDifficulty = (level: "简单" | "中等" | "困难") =>
        filtered.filter((q) => q.difficulty === level);

    // 获取所有题目
    const allQuestions = filtered;

    // 根据选择的难度筛选题目
    const getFilteredQuestions = () => {
        if (activeDifficulty === "全部") return allQuestions;
        return groupByDifficulty(activeDifficulty);
    };

    // 按难度分组计数
    const difficultyCounts = {
        "简单": groupByDifficulty("简单").length,
        "中等": groupByDifficulty("中等").length,
        "困难": groupByDifficulty("困难").length,
        "全部": allQuestions.length
    };

    const headerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // 标题动画
        if (headerRef.current) {
            gsap.fromTo(
                headerRef.current,
                { opacity: 0, y: -30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: headerRef.current,
                        start: "top 90%",
                        toggleActions: "play none none none"
                    }
                }
            );
        }

        // 难度切换按钮动画
        gsap.fromTo(
            `.${styles.difficultyTabs} button`,
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                stagger: 0.1,
                duration: 0.5,
                scrollTrigger: {
                    trigger: `.${styles.difficultyTabs}`,
                    start: "top 85%",
                    toggleActions: "play none none none"
                }
            }
        );

        // 卡片动画
        const cards = document.querySelectorAll(`.${styles.card}`);
        if (cards.length) {
            gsap.fromTo(
                cards,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.15,
                    duration: 0.6,
                    scrollTrigger: {
                        trigger: `.${styles.list}`,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    }
                }
            );
        }

        return () => {
            ScrollTrigger.getAll().forEach((st) => st.kill());
        };
    }, [activeDifficulty]);

    const renderCardContent = (q: Question) => (
        <>
            <div className={styles.cardHeader}>
                <span className={styles.difficultyTag}>{q.difficulty}</span>
                <span className={styles.questionId}>#{q.id}</span>
            </div>
            <h3 className={styles.cardTitle}>{q.title}</h3>
        </>
    );

    return (
        <div className={styles.container}>
            <div className={styles.header} ref={headerRef}>
                <h2 className={styles.title}>
                    <span className={styles.categoryIcon}>📚</span>
                    {category} 类题目
                    <span className={styles.badge}>{allQuestions.length}题</span>
                </h2>
                <p className={styles.subtitle}>按难度分类浏览题目，点击卡片查看详情</p>
            </div>

            {/* 难度选择标签 */}
            <div className={styles.difficultyTabs}>
                {(["全部", "简单", "中等", "困难"] as const).map((level) => (
                    <button
                        key={level}
                        className={`${styles.tab} ${activeDifficulty === level ? styles.active : ''}`}
                        onClick={() => setActiveDifficulty(level)}
                        data-difficulty={level}
                    >
                        {level}
                        <span className={styles.count}>{difficultyCounts[level]}</span>
                    </button>
                ))}
            </div>

            {/* 题目列表 */}
            {activeDifficulty === "全部" ? (
                <div className={styles.group}>
                    <h3 className={`${styles.level} ${styles.全部}`}>
                        全部题目
                        <span className={styles.levelCount}>{allQuestions.length}题</span>
                    </h3>
                    <div className={styles.list}>
                        {allQuestions.length === 0 ? (
                            <NoData text="暂无题目"/>
                        ) : (
                            allQuestions.map((q) => (
                                <div
                                    key={q.id}
                                    className={`${styles.card} ${styles[q.difficulty]}`}
                                    onClick={() => setActiveQuestion(q)}
                                >
                                    {renderCardContent(q)}
                                </div>
                            ))
                        )}
                    </div>
                </div>
            ) : (
                <div className={styles.group}>
                    <h3 className={`${styles.level} ${styles[activeDifficulty]}`}>
                        {activeDifficulty}题目
                        <span className={styles.levelCount}>{difficultyCounts[activeDifficulty]}题</span>
                    </h3>
                    <div className={styles.list}>
                        {getFilteredQuestions().length === 0 ? (
                            <NoData text={`暂无${activeDifficulty}难度的题目`}/>
                        ) : (
                            getFilteredQuestions().map((q) => (
                                <div
                                    key={q.id}
                                    className={`${styles.card} ${styles[q.difficulty]}`}
                                    onClick={() => setActiveQuestion(q)}
                                >
                                    {renderCardContent(q)}
                                </div>
                            ))
                        )}
                    </div>
                </div>
            )}

            {activeQuestion && (
                <QuestionModal
                    question={{
                        ...activeQuestion,
                        answer: activeQuestion.answer || "暂无答案"
                    }}
                    onClose={() => setActiveQuestion(null)}
                />
            )}
        </div>
    );
};

export default CategoryPage;