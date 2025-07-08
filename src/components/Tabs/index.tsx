import React, {useRef} from "react";
import styles from './Tabs.module.scss';
import gsap from "gsap";
import {
    AiFillHome,
} from "react-icons/ai";
import {
    FaCss3Alt,
    FaJs,
    FaReact,
    FaVuejs,
    FaNodeJs,
    FaChrome,
    FaMobileAlt,
    FaGitAlt
} from "react-icons/fa";
import {useNavigate} from "react-router-dom";

const Tabs: React.FC = () => {
    const navigate = useNavigate();
    const underlineRefs = useRef<HTMLDivElement[]>([]);
    const textRefs = useRef<HTMLDivElement[]>([]);

    const tabList = [
        {key: "home", label: "首页", icon: <AiFillHome/>},
        {key: "CSS3", label: "CSS3", icon: <FaCss3Alt/>},
        {key: "JavaScript", label: "JavaScript", icon: <FaJs/>},
        {key: "React", label: "React", icon: <FaReact/>},
        {key: "Vue", label: "Vue", icon: <FaVuejs/>},
        {key: "Node", label: "Node.js", icon: <FaNodeJs/>},
        {key: "web", label: "浏览器", icon: <FaChrome/>},
        {key: "ReactNative", label: "React Native", icon: <FaMobileAlt/>},
        {key: "Git", label: "Git", icon: <FaGitAlt/>},
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
        console.log(`点击了 ${tabList[index].label}`);
        navigate(`/${tabList[index].key}`)
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
