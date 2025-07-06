import {Outlet} from 'react-router-dom'
import Tabs from "../../components/Tabs";
import {useEffect} from "react";
import Lenis from "@studio-freight/lenis";

const Layout = () => {

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

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <>
            <Tabs/>
            <main style={{paddingTop: 50, minHeight: 'calc(100vh - 50px)'}}>
                <Outlet/>
            </main>
        </>
    )
}

export default Layout