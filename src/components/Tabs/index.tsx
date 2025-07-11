import React, {useRef} from "react";
import styles from './Tabs.module.scss';
import gsap from "gsap";
import {
    AiFillBook,
    AiFillHome, AiFillTool,
} from "react-icons/ai";
import {useNavigate} from "react-router-dom";

const Tabs: React.FC = () => {
    const navigate = useNavigate();
    const underlineRefs = useRef<HTMLDivElement[]>([]);
    const textRefs = useRef<HTMLDivElement[]>([]);

    const tabList = [
        {
            key: "home",
            label: "首页",
            icon: <AiFillHome />,
            path: "/home",
        },
        {
            key: "articles",
            label: "技术文章",
            icon: <AiFillBook />,
            path: "/home/articles/page",
        },
        {
            key: "scene",
            label: "开发场景",
            icon: <AiFillTool  />,
            path: "/home/scene/page",
        },
    ];

    const handleMouseEnter = (index: number) => {
        gsap.to(underlineRefs.current[index], {
            scaleX: 1,
            transformOrigin: "left center",
            duration: 0.4,
            ease: "power2.out"
        });
        gsap.to(textRefs.current[index], {
            color: "#0071e3",
            y: -2,
            duration: 0.3,
            ease: "power2.out"
        });

    };

    const handleMouseLeave = (index: number) => {
        gsap.to(underlineRefs.current[index], {
            scaleX: 0,
            transformOrigin: "right center",
            duration: 0.4,
            ease: "power2.in"
        });
        gsap.to(textRefs.current[index], {
            color: "#000",
            y: 0,
            duration: 0.3,
            ease: "power2.in"
        });

    };

    const handleTabClick = (index: number) => {
        const selected = tabList[index];
        if (selected?.path) {
            navigate(selected.path);
        }
    };

    return (
        <div className={styles.tabs}>
            {tabList.map((tab, index) => (
                <div
                    key={tab.key}
                    className={styles.tab}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                    onClick={() => handleTabClick(index)}
                >
                    <div
                        ref={(el) => {
                            textRefs.current[index] = el!;
                        }}
                        className={styles.tabText}
                    >
                        <span className={styles.icon}>{tab.icon}</span>
                        <span>{tab.label}</span>
                    </div>
                    <div
                        ref={(el) => {
                            underlineRefs.current[index] = el!;
                        }}
                        className={styles.underline}
                    />
                </div>
            ))}
        </div>
    );
};

export default Tabs;
