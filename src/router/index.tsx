import {Route, Routes} from "react-router-dom";
import Layout from "../pages/layout";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>

            </Route>
            <Route path="/"></Route>
        </Routes>
    )
}
export default  App