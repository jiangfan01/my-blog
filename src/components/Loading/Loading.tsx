// src/components/Loading/Loading.tsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./Loading.module.scss";

const Loading: React.FC = () => {
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.fromTo(
            wrapperRef.current,
            { opacity: 0, scale: 0.9 },
            { opacity: 1, scale: 1, duration: 0.6, ease: "power2.out" }
        );
    }, []);

    return (
        <div className={styles.loadingWrapper} ref={wrapperRef}>
            <div className={styles.spinner}></div>
            <div className={styles.text}>页面加载中...</div>
        </div>
    );
};

export default Loading;
