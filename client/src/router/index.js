import ArticleItem from "../components/ArticleItem";
import ArticleList from "../components/articles/components/ArticlesList/ArticlesList";


export const publicRoutes = [
    {path: '/', element: <ArticleList/>},
    {path: '/:id', element: <ArticleItem/>},
]
