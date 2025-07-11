import {useEffect, useRef} from "react";
import gsap from "gsap";
import styles from "./QuestionModal.module.scss"
import ReactMarkdown from "react-markdown";

interface Question {
    title: string;
    difficulty: string;
    description: string;
    answer: string;
}

interface QuestionModalProps {
    question: Question;
    onClose: () => void;
}

const QuestionModal = ({question, onClose}: QuestionModalProps) => {
    const modalRef = useRef<HTMLDivElement>(null);
    // const [active, setActive] = useState(false);
    console.log(question, 99999)
    useEffect(() => {
        const lenis = (window as any).__lenis__;

        if (question) {
            lenis?.stop?.();
            document.body.style.overflow = "hidden";
            if (modalRef.current) {
                gsap.fromTo(
                    modalRef.current,
                    {y: 80, opacity: 0},
                    {y: 0, opacity: 1, duration: 0.5, ease: "power2.out"}
                );
            } else {
                lenis?.start?.();
                document.body.style.overflow = "";
            }
        }
        return () => {
            lenis?.start?.();
            document.body.style.overflow = "";
        };
    }, [question]);

    // useEffect(() => {
    //     const lenis = (window as any).__lenis__;
    //     if (active) {
    //         // 停止 Lenis 滚动
    //         if (lenis && lenis.stop) lenis.stop();
    //
    //         document.body.style.overflow = "hidden";
    //
    //         // 动画
    //         gsap.fromTo(
    //             `.${styles.overlay}`,
    //             {opacity: 0},
    //             {opacity: 1, duration: 0.3}
    //         );
    //
    //         gsap.fromTo(
    //             `.${styles.answerBox}`,
    //             {y: 50, opacity: 0},
    //             {y: 0, opacity: 1, duration: 0.4, ease: "back.out(1.7)"}
    //         );
    //     } else {
    //         // 恢复 Lenis 滚动
    //         if (lenis && lenis.start) lenis.start();
    //
    //         document.body.style.overflow = "";
    //         document.body.style.height = "";
    //     }
    // }, [active]);

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} ref={modalRef} onClick={(e) => e.stopPropagation()}>
                <div className={styles.left}>
                    <h3 className={styles.title}>{question.title}</h3>
                    <p className={styles.difficulty}>难度：{question.difficulty}</p>
                    <div className={styles.description} data-lenis-prevent>
                        <strong>题目描述：</strong>
                        <ReactMarkdown>{question.description}</ReactMarkdown>
                    </div>
                </div>
                <div className={styles.rightWrapper} data-lenis-prevent>
                    <div className={styles.right}>
                        <strong className={styles.answerTitle}>参考答案：</strong>
                        <div className={styles.answer}>
                            <ReactMarkdown>{question.answer}</ReactMarkdown>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuestionModal;
