import { Route, Routes, Navigate } from "react-router-dom";
import Welcome from "../pages/welcome";
import Layout from "../pages/layout";
import NotFound from "../pages/404/NotFound.tsx";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/welcome" replace />} />

            <Route path="/welcome" element={<Welcome />} />

            <Route path="/home" element={<Layout />} />

            {/* 通配符路径放最后，匹配不到任何路由时显示 */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default App;
