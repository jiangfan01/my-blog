import Tabs from "../../components/Tabs";
import {useEffect, useRef} from "react";
import Lenis from "@studio-freight/lenis";
import {gsap} from 'gsap';
import styles from './Layout.module.scss';
import Footer from "../../components/Footer";
// import Home from "../home";
import {Outlet, useLocation} from "react-router-dom";


const Layout = () => {

    const tabsRef = useRef<HTMLDivElement>(null);

    const location = useLocation();

    // 注册lenis及动画
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1,
            smoothWheel: true,
        });

        (window as any).__lenis__ = lenis;


        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // tabs动画
        gsap.fromTo(
            tabsRef.current,
            {
                y: 50,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: .5,
                ease: "power3.out",
                delay: 0.3
            }
        );

        return () => {
            lenis.destroy();
            (window as any).__lenis__ = null;
        };
    }, [location.pathname]);


    return (
        <>
            <div ref={tabsRef} className={styles.tabsWrapper}>
                <Tabs/>
            </div>
            <main className={styles.main}>
                <Outlet/>
            </main>
            <Footer/>
        </>
    )
}

export default Layout