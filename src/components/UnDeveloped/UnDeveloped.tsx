import React, { useEffect, useRef } from "react";
import styles from "./UnDeveloped.module.scss";
import { gsap } from "gsap";

const UnDeveloped: React.FC = () => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subRef = useRef<HTMLParagraphElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

        tl.fromTo(wrapperRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 })
            .fromTo(titleRef.current, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.3")
            .fromTo(lineRef.current, { scaleX: 0 }, { scaleX: 1, transformOrigin: "left", duration: 0.6 }, "-=0.4")
            .fromTo(subRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.3");
    }, []);

    return (
        <div className={styles.container} ref={wrapperRef}>
            <h1 className={styles.title} ref={titleRef}>
                🚧 页面建设中
            </h1>
            <div className={styles.line} ref={lineRef}></div>
            <p className={styles.subtitle} ref={subRef}>
                正在努力构思中，敬请期待...
            </p>
        </div>
    );
};

export default UnDeveloped;
