import React, {useLayoutEffect} from "react";
import styles from './BackButton.module.scss'
import {AiOutlineArrowLeft} from "react-icons/ai";
import {useNavigate} from "react-router-dom";
import gsap from "gsap";

const BackButton: React.FC = () => {
    const navigate = useNavigate();
    const backButtonRef = React.useRef<HTMLDivElement>(null);

    const handleBack = () => {
        navigate(-1)
    };


    useLayoutEffect(() => {
        if (backButtonRef.current) {
            gsap.fromTo(
                backButtonRef.current,
                {opacity: 0, scale: 0.8, x: 150},
                {
                    opacity: 1,
                    scale: 1,
                    x: 0,
                    duration: 0.8,
                    ease: "power2.out",
                }
            );
        }
    }, []);


    return (
        <>
            <div
                className={styles.backContainer}
                ref={backButtonRef}
            >
                <div className={styles.back}
                    onClick={handleBack}>
                    <AiOutlineArrowLeft className={styles.icon}/>
                    <span>返回</span>
                </div>
            </div>

        </>
    )
};
export default BackButton;