import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'
import {BrowserRouter} from "react-router-dom";
import App from "./router";


createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
)