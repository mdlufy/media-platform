import { Button, Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import ArticleService from "../API/ArticleService";
import ArticleList from "../components/articles/components/ArticlesList/ArticlesList";

function Articles() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetchArticles();
    }, []);

    async function fetchArticles() {
        const responce = await ArticleService.getAll();
        setArticles(responce.data.articleData);
    }

    function removeArticle(article) {
        setArticles(articles.filter((item) => item.id !== article.id));
    }

    function createArticle(newArticle) {
        setArticles([...articles, newArticle]);
    }

    return (
        <>
            <Button style={{ marginTop: 15 }}>
                Создать статью
            </Button>
            <Divider/>
            <ArticleList remove={removeArticle} articles={articles} />
        </>
    );
}

export default Articles;
