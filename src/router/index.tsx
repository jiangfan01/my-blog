import {Route, Routes, Navigate} from "react-router-dom";
import Welcome from "../pages/welcome";
import Layout from "../pages/layout";
import NotFound from "../pages/404/NotFound.tsx";
import ArticlesReact from "../pages/articles/ArticlesReact/ArticlesReact.tsx";
import Home from "../pages/index";
import ArticlesVue from "../pages/articles/ArticlesVue/ArticlesVue.tsx";
import ArticlesCss from "../pages/articles/ArticlesCss/ArticlesCss.tsx";
import ArticlesNode from "../pages/articles/ArticlesNode/ArticlesNode.tsx";
import ArticlesJavaScript from "../pages/articles/ArticlesJavaScript/ArticlesJavaScript.tsx";
import ArticlesWeb from "../pages/articles/ArticlesWeb/ArticlesWeb.tsx";
import ArticlesRN from "../pages/articles/ArticlesRN/ArticlesRN.tsx";
import ArticlesGit from "../pages/articles/ArticlesGit/ArticlesGit.tsx";

const App = () => {
    return (
        <Routes>
            <Route path="/" index element={<Navigate to="/welcome" replace/>}/>
            <Route path="/welcome" element={<Welcome/>}/>

            <Route path="/home" element={<Layout/>}>
                {/*首页*/}
                <Route index element={<Home/>}/>

                {/*文章*/}
                <Route path="articles/Css" element={<ArticlesCss/>}/>
                <Route path="articles/JavaScript" element={<ArticlesJavaScript/>}/>
                <Route path="articles/React" element={<ArticlesReact/>}/>
                <Route path="articles/Vue" element={<ArticlesVue/>}/>
                <Route path="articles/Node" element={<ArticlesNode/>}/>
                <Route path="articles/Web" element={<ArticlesWeb/>}/>
                <Route path="articles/ReactNative" element={<ArticlesRN/>}/>
                <Route path="articles/Git" element={<ArticlesGit/>}/>
            </Route>

            <Route path="*" element={<NotFound/>}/>
        </Routes>
    );
};

export default App;