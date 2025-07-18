import React, {useEffect, useRef} from "react";
import styles from "./Hero.module.scss";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {showMessage} from "../MessageBox/useMessage";
import avatar from "../../assets/images/avatar.jpg";
import {withBase} from "../../config/withBase.ts";

// 注册 ScrollTrigger 插件
gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
    const cardRef = useRef<HTMLDivElement>(null);
    const avatarRef = useRef<HTMLDivElement>(null);
    const infoRef = useRef<HTMLDivElement>(null);

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text);
        showMessage("✅ 已复制至剪切板！");
    };

    const contactInfo = {
        phone: "13647228144",
        email: "jf1431037397@gmail.com",
    }

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: cardRef.current,
                start: "top 80%",
                once: true,
            },
            defaults: {ease: "power3.out", duration: 1},
        });

        tl.fromTo(
            cardRef.current,
            {opacity: 0, scale: 0.95},
            {opacity: 1, scale: 1, duration: 0.8}
        )
            .fromTo(
                avatarRef.current,
                {x: -50, opacity: 0},
                {x: 0, opacity: 1},
                "-=0.4"
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
                <div className={styles.avatarBox} ref={avatarRef}>
                    <img src={avatar} alt="头像"/>
                </div>
                <div className={styles.infoBox} ref={infoRef}>
                    <h1>
                        ABOUT ME <span className={styles.name}>Jiang Fan</span>
                    </h1>
                    <p className={styles.subTitle}>一名前端开发者</p>

                    <ul className={styles.profile}>
                        <li>
                            <strong>🎓 学历：</strong> 本科 - 武汉东湖学院
                        </li>
                        <li>
                            <strong>🧑‍💻 专业：</strong> 软件工程
                        </li>
                        <li onClick={() => handleCopy(contactInfo.phone)}>
                            <strong>📞 电话：</strong>{" "}
                            <span> +86 </span>
                            <a href="mailto:JiangFANANan@example.com">
                                13647228144
                            </a>

                        </li>
                        <li onClick={() => handleCopy(contactInfo.email)}>
                            <strong>📬 邮箱：</strong>{" "}
                            <a href="mailto:JiangFANANan@example.com">
                                jf1431037397@gmail.com
                            </a>
                        </li>
                        <li>
                            <strong>📍 地址：</strong> 湖北武汉
                        </li>
                    </ul>

                    <div className={styles.links}>
                        <a
                            href="https://github.com/jiangfan01"
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                        </a>
                        <a
                            href={withBase("resume.pdf")}
                            target="_blank"
                            rel="noreferrer"
                        >
                            在线查看简历
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default React.memo(Hero);
