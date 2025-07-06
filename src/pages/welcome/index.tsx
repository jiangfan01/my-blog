import {useEffect, useRef} from "react";
import {useNavigate} from "react-router-dom";
import gsap from "gsap";
import styles from './Welcome.module.scss';

const Welcome = () => {
    const navigate = useNavigate();
    const textRef = useRef<HTMLHeadingElement>(null);

    /*
    使用GSAP库实现动画
    * */
    useEffect(() => {
        const tl = gsap.timeline();
        tl.fromTo(
            textRef.current,
            {
                scale: 8,
                opacity: 0,
            },
            {
                scale: 1,
                opacity: 1,
                duration: 1.5,
                ease: "power3.out",
            }
        );

        tl.to({}, {
            duration: 1.5,
            onComplete: () => {
                navigate("/home");
            }
        });
    }, []);

    return (
        <div className={styles.welcomeContainer}>
            <h1 className={styles.welcomeText} ref={textRef}>
                Welcome
            </h1>
        </div>
    );
};

export default Welcome;
