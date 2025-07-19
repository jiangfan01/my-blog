import React, {useContext, useMemo, useRef, useState} from "react";
import styles from './Tabs.module.scss';
import gsap from "gsap";
import {
    AiFillHome, AiOutlineMenu
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
    const {theme, toggleTheme} = useContext(ThemeContext);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const throttledToggle = useMemo(() => throttle(() => {
        toggleTheme();
    }, 800), [toggleTheme]);

    // 移动端底部导航的标签
    const mobileBottomTabs = [
        {key: "home", label: "首页", icon: <AiFillHome color="#3B82F6"/>},
        {key: "articles", label: "文章", icon: <FaBookOpen size={22} color="#6366F1"/>,},
        {key: "scene", label: "场景", icon: <FaTools size={22} color="#10B981"/>},
        {key: "algorithm", label: "算法", icon: <GiCircuitry size={22} color="#F59E0B"/>,},
    ];

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
            setMobileMenuOpen(false); // 关闭移动菜单
        }
    };

    const handleMobileTabClick = (path: string) => {
        navigate(path);
        setMobileMenuOpen(false); // 关闭移动菜单
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <>
            <div className={styles.tabs}>
                {/* 汉堡菜单按钮（仅移动端显示） */}
                <div className={`${styles.tab} ${styles.mobileMenu}`} onClick={toggleMobileMenu}>
                    <div className={styles.menuIcon}>
                        <AiOutlineMenu/>
                    </div>
                </div>

                {/* 常规标签（平板/PC端显示） */}
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
                                textRefs.current[index] = el!
                            }}
                            className={styles.tabText}
                        >
                            <span className={styles.icon}>{tab.icon}</span>
                            <span>{tab.label}</span>
                        </div>
                        <div
                            ref={(el) => {
                                underlineRefs.current[index] = el!
                            }}
                            className={styles.underline}
                        />
                    </div>
                ))}

                {/* 主题切换按钮（平板/PC端） */}
                <button onClick={() => throttledToggle()} className={styles.themeToggleBtn}>
                    切换主题（{theme === 'light' ? '🌞' : '🌙'}）
                </button>

                {/* 移动端下拉菜单 */}
                <div className={`${styles.mobileDropdown} ${mobileMenuOpen ? styles.open : ''}`}>
                    {tabList.map((tab) => (
                        <div
                            key={`mobile-${tab.key}`}
                            className={styles.mobileTab}
                            onClick={() => handleMobileTabClick(tab.path)}
                        >
                            <span className={styles.icon}>{tab.icon}</span>
                            <span className={styles.tabText}>{tab.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* 移动端底部导航栏 */}
            <div className={styles.mobileBottomNav}>
                {mobileBottomTabs.map((tab) => (
                    <div
                        key={`bottom-${tab.key}`}
                        className={styles.bottomTab}
                        onClick={() => navigate(tabList.find(t => t.key === tab.key)?.path || '/')}
                    >
                        <span className={styles.icon}>{tab.icon}</span>
                        <span className={styles.label}>{tab.label}</span>
                    </div>
                ))}
                <button
                    className={styles.themeToggleBtn}
                    onClick={() => throttledToggle()}
                >
                    {theme === 'light' ? '🌞' : '🌙'}
                </button>
            </div>
        </>
    );
};

export default React.memo(Tabs);