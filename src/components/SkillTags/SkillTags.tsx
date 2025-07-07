import {useEffect, useRef} from "react";
import styles from "./SkillTags.module.scss";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

import {FaReact, FaNodeJs, FaVuejs} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger); // 注册插件

const skillList = [
    {name: "React", icon: <FaReact/>},
    {name: "Vue3", icon: <FaVuejs/>},
    {name: "TypeScript", icon: null},
    {name: "JavaScript", icon: null},
    {name: "Node.js", icon: <FaNodeJs/>},
    {name: "Express", icon: null},
    {name: "Sequelize", icon: null},
    {name: "SCSS", icon: null},
    {name: "HTML5", icon: null},
    {name: "CSS3", icon: null},
    {name: "Git", icon: null},
    {name: "Vite", icon: null},
    {name: "GSAP", icon: null},
    {name: "Video.js", icon: null},
    {name: "REST API", icon: null},
];

const SkillTags = () => {
    const tagRefs = useRef<HTMLSpanElement[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.fromTo(
            tagRefs.current,
            {opacity: 0, y: 20},
            {
                opacity: 1,
                y: 0,
                stagger: 0.08,
                duration: 0.6,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    once: true,
                },
            }
        );
    }, []);

    return (
        <div className={styles.skillWrapper} ref={containerRef}>
            <div className={styles.card}>
                <h2 className={styles.title}>🧠 技能标签</h2>
                <div className={styles.tags}>
                    {skillList.map(({name, icon}, i) => (
                        <span
                            className={styles.tag}
                            key={name}
                            ref={(el) => {
                                if (el) tagRefs.current[i] = el;
                            }}
                        >
              {icon && <span className={styles.icon}>{icon}</span>}
                            {name}
            </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SkillTags;
