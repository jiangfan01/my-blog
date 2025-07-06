import { Route, Routes, Navigate } from "react-router-dom";
import Welcome from "../pages/welcome";
import Layout from "../pages/layout";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/welcome" replace />} />

            <Route path="/welcome" element={<Welcome />} />

            <Route path="/home" element={<Layout />} />
        </Routes>
    );
};

export default App;
