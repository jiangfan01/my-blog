import React, {useEffect, useRef} from "react";
import styles from "./Hero.module.scss";
import gsap from "gsap";
import {showMessage} from "../MessageBox/useMessage.ts";

const Hero: React.FC = () => {
    const cardRef = useRef<HTMLDivElement>(null);
    const avatarRef = useRef<HTMLDivElement>(null);
    const infoRef = useRef<HTMLDivElement>(null);

    const handleCopy = () => {
        navigator.clipboard.writeText("jf1431037397@gmail.com");
        showMessage("📋 邮箱已复制！");
    }


    useEffect(() => {
        const tl = gsap.timeline({defaults: {ease: "power3.out", duration: 1}});

        tl.fromTo(
            cardRef.current,
            {opacity: 0, scale: 0.95},
            {opacity: 1, scale: 1, duration: 0.8}
        )
            .fromTo(
                avatarRef.current,
                {x: -50, opacity: 0},
                {x: 0, opacity: 1},
                "-=0.4" // 同时开始部分重叠
            )
            .fromTo(
                infoRef.current,
                {y: 50, opacity: 0},
                {y: 0, opacity: 1},
                "-=0.6"
            );
    }, []);


    return (
        <div className={styles.heroWrapper}>
            <div className={styles.heroCard} ref={cardRef}>
                {/* 左边头像 */}
                <div className={styles.avatarBox} ref={avatarRef}>
                    <img src="/src/assets/images/avatar.jpg" alt="头像"/>
                </div>

                {/* 右边文本信息 */}
                <div className={styles.infoBox} ref={infoRef}>
                    <h1>
                        HELLO，我是 <span className={styles.name}>Jiang F</span>
                    </h1>
                    <p className={styles.subTitle}>一名前端开发者</p>

                    <ul className={styles.profile}>
                        <li><strong>🎓 学历：</strong> 本科 - 武汉东湖学院</li>
                        <li><strong>🧑‍💻 专业：</strong> 软件工程</li>
                        <li onClick={() => handleCopy()}><strong>📬 邮箱：</strong> <a
                            href="mailto:jiangfan@example.com">jf1431037397@gmail.com</a></li>
                        <li><strong>📍 地址：</strong> 武汉</li>
                    </ul>

                    <div className={styles.links}>
                        <a href="https://github.com/jiangfan01" target="_blank" rel="noreferrer">GitHub</a>
                        <a href="/src/assets/resume/resume.pdf" target="_blank" rel="noreferrer">在线查看简历</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Hero;
