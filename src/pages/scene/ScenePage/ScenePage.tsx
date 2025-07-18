import React, {useRef, useEffect} from "react";
import styles from "./ScenePage.module.scss";
import {sceneList} from "../Data/sceneData.tsx";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useNavigate} from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

interface SceneItem {
    key: string;
    title: string;
    desc: string;
    icon: React.ReactNode;
}

const ScenePage: React.FC = () => {
    const cardsRef = useRef<HTMLDivElement[]>([]);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const navigate = useNavigate();
    useEffect(() => {
        gsap.fromTo(
            cardsRef.current,
            {opacity: 0, y: 40, scale: 0.95},
            {
                opacity: 1,
                y: 0,
                scale: 1,
                stagger: 0.2,
                duration: 0.6,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: cardsRef.current[0],
                    start: "top 80%",
                },
            }
        );
        gsap.fromTo(
            titleRef.current,
            {opacity: 0, x: 200},
            {
                opacity: 1,
                x: 0,
                duration: 1,
                ease: "power2.out",
            }
        );
    }, []);

    const handleClick = (scene: SceneItem) => {
        navigate(`/home/scene/detail/${scene.key}`);
    };

    return (
        <div className={styles.sceneWrapper}>
            <h2 className={styles.title} ref={titleRef}>开发场景 · 技术实践</h2>
            <div className={styles.cardContainer}>
                {sceneList.map((scene, index) => (
                    <div
                        key={scene.key}
                        ref={(el) => {
                            if (el) {
                                cardsRef.current[index] = el;
                            } else {
                                delete cardsRef.current[index];
                            }
                        }}
                        className={styles.card}
                        onClick={() => handleClick(scene)}
                    >
                        <div className={styles.icon}>{scene.icon}</div>
                        <h3>{scene.title}</h3>
                        <p>{scene.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ScenePage;
