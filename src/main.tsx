import {createRoot} from 'react-dom/client'
import React from 'react'
import {BrowserRouter} from "react-router-dom";
import MessageBox from "./components/MessageBox/MessageBox";
import App from "./router";
import './index.scss'

// 动态设置basename，适应开发和生产环境
const basename = process.env.NODE_ENV === 'production' ? '/my-blog' : '';
createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter basename={basename}>
            <App/>
            <MessageBox/>
        </BrowserRouter>
    </React.StrictMode>
)