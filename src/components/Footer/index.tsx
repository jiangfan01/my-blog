import React, {useEffect, useState, useRef} from "react";
import styles from "./Footer.module.scss";
import {FaGithub, FaWeixin, FaVideo} from "react-icons/fa";
import gsap from "gsap";
import douyin from "../../assets/images/douyin.jpg"
import wexin from "../../assets/images/weixin.jpg"
import {showMessage} from "../MessageBox/useMessage.ts";

const Footer: React.FC = () => {
    const [visibleQr, setVisibleQr] = useState<"wechat" | "douyin" | null>(null);
    const qrRef = useRef<HTMLDivElement>(null);

    // 监听点击空白处关闭二维码
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (qrRef.current && !qrRef.current.contains(e.target as Node)) {
                setVisibleQr(null);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    // QR 显示后触发动画
    useEffect(() => {
        if (qrRef.current) {
            gsap.fromTo(
                qrRef.current,
                {opacity: 0, scale: 0.8},
                {opacity: 1, scale: 1, duration: 0.4, ease: "power3.out"}
            );
        }
    }, [visibleQr]);

    const handleMobileToggle = (type: "微信" | "抖音") => {
        if (window.innerWidth <= 768) {
            showMessage(`请前往PC端查看${type}二维码`)
        }
    };

    return (
        <footer className={styles.footer}>
            <p className={styles.copyright}>© 2025 Jiang Fan的个人博客</p>
            <div className={styles.socialLinks}>
                <a href="https://github.com/jiangfan01" target="_blank" rel="noreferrer">
                    <FaGithub/>
                </a>

                <div
                    className={styles.iconWrapper}
                    onClick={() => handleMobileToggle("抖音")}
                    onMouseEnter={() => window.innerWidth > 768 && setVisibleQr("douyin")}
                    onMouseLeave={() => window.innerWidth > 768 && setVisibleQr(null)}
                >
                    <FaVideo/>
                    {visibleQr === "douyin" && (
                        <div className={styles.qrPopup} ref={qrRef}>
                            <img src={douyin} alt="抖音二维码"/>
                            <span>抖音扫码关注</span>
                        </div>
                    )}
                </div>

                <div
                    className={styles.iconWrapper}
                    onClick={() => handleMobileToggle("微信")}
                    onMouseEnter={() => window.innerWidth > 768 && setVisibleQr("wechat")}
                    onMouseLeave={() => window.innerWidth > 768 && setVisibleQr(null)}
                >
                    <FaWeixin/>
                    {visibleQr === "wechat" && (
                        <div className={styles.qrPopup} ref={qrRef}>
                            <img src={wexin} alt="微信二维码"/>
                            <span>微信扫码加我</span>
                        </div>
                    )}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
