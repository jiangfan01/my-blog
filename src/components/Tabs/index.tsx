import React, {useContext, useMemo, useRef} from "react";
import styles from './Tabs.module.scss';
import gsap from "gsap";
import {
    AiFillHome,
} from "react-icons/ai";
import {useNavigate} from "react-router-dom";
import {FaBookOpen, FaTools} from "react-icons/fa";
import {GiCircuitry} from "react-icons/gi";
import {ThemeContext} from "../../config/theme.ts";
import {throttle} from "../../utils/throttle.ts";

const Tabs: React.FC = () => {
    const navigate = useNavigate();
    const underlineRefs = useRef<HTMLDivElement[]>([]);
    const textRefs = useRef<HTMLDivElement[]>([]);
    const {theme, toggleTheme} = useContext(ThemeContext)
    const throttledToggle = useMemo(() => throttle(() => {
        toggleTheme();
    }, 800), [toggleTheme]);
    const tabList = [
        {
            key: "home",
            label: "首页",
            icon: <AiFillHome size={22} color="#3B82F6"/>,
            path: "/home",
        },
        {
            key: "articles",
            label: "技术文章",
            icon: <FaBookOpen size={22} color="#6366F1"/>,
            path: "/home/articles/page",
        },
        {
            key: "scene",
            label: "开发场景",
            icon: <FaTools size={22} color="#10B981"/>,
            path: "/home/scene/page",
        },
        {
            key: "algorithm",
            label: "算法专区",
            icon: <GiCircuitry size={22} color="#F59E0B"/>,
            path: "/home/algorithm/page",
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
            y: -2,
            duration: 0.1,
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
            y: 0,
            duration: 0.1,
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
            <button onClick={() => throttledToggle()} className={styles.themeToggleBtn}>
                切换主题（{theme === 'light' ? '🌞' : '🌙'}）
            </button>
        </div>
    );
};

export default React.memo(Tabs);
