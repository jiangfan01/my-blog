import React, { useEffect, useRef } from "react";
import styles from "./NoData.module.scss";
import { gsap } from "gsap";

const NoData: React.FC<{ text?: string }> = ({ text  }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.fromTo(
            containerRef.current,
            { opacity: 0, y: 20, scale: 0.95 },
            { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power2.out" }
        );
    }, []);

    return (
        <div className={styles.noDataContainer} ref={containerRef}>
            <svg
                className={styles.icon}
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#999"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <circle cx="12" cy="12" r="10" />
                <line x1="9" y1="9" x2="15" y2="15" />
                <line x1="15" y1="9" x2="9" y2="15" />
            </svg>
            <p className={styles.text}>{text}</p>
        </div>
    );
};

export default NoData;
