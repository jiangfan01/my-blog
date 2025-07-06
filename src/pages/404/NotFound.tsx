import { useNavigate } from "react-router-dom";
import styles from './NotFound.module.scss';
import { useEffect, useRef } from "react";
import gsap from "gsap";

const NotFound = () => {
    const navigate = useNavigate();

    const digitRefs = useRef<HTMLSpanElement[]>([]);
    const messageRef = useRef<HTMLParagraphElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const tl = gsap.timeline();

        digitRefs.current.forEach((el, index) => {
            tl.fromTo(
                el,
                { scale: 3, opacity: 0, y: -100 },
                {
                    scale: 1,
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "back.out(2)",
                },
                index * 0.2 // 每个数字延迟 0.2 秒
            );
        });

        // 出现 “页面不存在”
        tl.fromTo(
            messageRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
            "+=0.2"
        );

        // 出现按钮
        tl.fromTo(
            buttonRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
            "+=0.2"
        );
    }, []);

    return (
        <div className={styles.notFoundContainer}>
            <div className={styles.code}>
                {['4', '0', '4'].map((digit, i) => (
                    <span
                        key={i}
                        ref={(el) => {
                            if (el) digitRefs.current[i] = el;
                        }}
                        className={styles.digit}
                    >
            {digit}
          </span>
                ))}
            </div>

            <p className={styles.message} ref={messageRef}>
                页面不存在
            </p>

            <button
                ref={buttonRef}
                onClick={() => navigate('/home')}
                className={styles.backButton}
            >
                返回首页
            </button>
        </div>
    );
};

export default NotFound;
