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
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1,
            smoothWheel: true,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // tabs动画
        gsap.fromTo(
            tabsRef.current,
            {
                y: 100,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                delay: 0.3
            }
        );

        return () => {
            lenis.destroy();
        };
    }, [location.pathname]);

    return (
        <>
            <div ref={tabsRef} className={styles.tabsWrapper}>
                <Tabs/>
            </div>
            <main style={{paddingTop: "10vh", minHeight: 'calc(100vh - 50px)'}}>
                <Outlet/>
            </main>
            <Footer/>
        </>
    )
}

export default Layout