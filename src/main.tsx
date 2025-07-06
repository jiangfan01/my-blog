import {createRoot} from 'react-dom/client'
import React from 'react'
import {BrowserRouter} from "react-router-dom";
import App from "./router";
import './index.scss'


createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>
)