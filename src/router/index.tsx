import {Route, Routes, Navigate} from "react-router-dom";
import {Suspense, lazy} from "react";

// 基础页可以保留同步导入（如 404、布局页）
import NotFound from "../pages/404/NotFound.tsx";
import Layout from "../pages/layout";
import Loading from "../components/Loading/Loading.tsx";
import ScenePage from "../pages/scene/ScenePage/ScenePage.tsx";
import Algorithm from "../pages/algorithm";
import CategoryPage from "../pages/algorithm/CategoryPage.tsx";

// 懒加载页面
const Welcome = lazy(() => import("../pages/welcome"));
const Home = lazy(() => import("../pages/index"));
const ArticlesPage = lazy(() => import("../pages/articles/ArticlesPage/ArticlesPage.tsx"));
const ArticlesCss = lazy(() => import("../pages/articles/ArticlesCss/ArticlesCss.tsx"));
const ArticlesJavaScript = lazy(() => import("../pages/articles/ArticlesJavaScript/ArticlesJavaScript.tsx"));
const ArticlesReact = lazy(() => import("../pages/articles/ArticlesReact/ArticlesReact.tsx"));
const ArticlesVue = lazy(() => import("../pages/articles/ArticlesVue/ArticlesVue.tsx"));
const ArticlesNode = lazy(() => import("../pages/articles/ArticlesNode/ArticlesNode.tsx"));
const ArticlesWeb = lazy(() => import("../pages/articles/ArticlesWeb/ArticlesWeb.tsx"));
const ArticlesRN = lazy(() => import("../pages/articles/ArticlesRN/ArticlesRN.tsx"));
const ArticlesGit = lazy(() => import("../pages/articles/ArticlesGit/ArticlesGit.tsx"));
const ArticlesEngineering = lazy(() => import("../pages/articles/ArticlesEngineering/ArticlesEngineering.tsx"));

const App = () => {
    return (
        <Suspense fallback={<Loading/>}>
            <Routes>
                <Route path="/" index element={<Navigate to="/welcome" replace/>}/>
                <Route path="/welcome" element={<Welcome/>}/>

                <Route path="/home" element={<Layout/>}>
                    <Route index element={<Home/>}/>

                    {/*技术文章*/}
                    <Route path="articles/Page" element={<ArticlesPage/>}/>
                    <Route path="articles/Css" element={<ArticlesCss/>}/>
                    <Route path="articles/JavaScript" element={<ArticlesJavaScript/>}/>
                    <Route path="articles/React" element={<ArticlesReact/>}/>
                    <Route path="articles/Vue" element={<ArticlesVue/>}/>
                    <Route path="articles/Node" element={<ArticlesNode/>}/>
                    <Route path="articles/Web" element={<ArticlesWeb/>}/>
                    <Route path="articles/ReactNative" element={<ArticlesRN/>}/>
                    <Route path="articles/Git" element={<ArticlesGit/>}/>
                    <Route path="articles/Engineering" element={<ArticlesEngineering/>}/>

                    {/*开发场景*/}
                    <Route path="scene/Page" element={<ScenePage/>}/>

                    {/*    算法专区*/}
                    <Route path="algorithm/Page" element={<Algorithm />}/>
                    <Route path="algorithm/page/:category" element={<CategoryPage />} />
                </Route>

                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </Suspense>
    );
};

export default App;
