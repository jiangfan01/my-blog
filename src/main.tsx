import {createRoot} from 'react-dom/client'
import React, {useEffect, useState} from 'react'
import './styles/global.scss';
import {BrowserRouter} from "react-router-dom";
import MessageBox from "./components/MessageBox/MessageBox";
import App from "./router";
import {ThemeContext} from "./config/theme.ts";

const basename = process.env.NODE_ENV === 'production' ? '/my-blog' : '';
const Root = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>(() => {
        const storedTheme = localStorage.getItem('theme');
        return storedTheme === 'dark' ? 'dark' : 'light';
    })

    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    return (
        <>
            <ThemeContext.Provider value={{theme, toggleTheme}}>
                <App/>
            </ThemeContext.Provider>
        </>
    )
}

// 动态设置basename，适应开发和生产环境
createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter basename={basename}>
            <Root/>
            <MessageBox/>
        </BrowserRouter>
    </React.StrictMode>
)
export default Root;