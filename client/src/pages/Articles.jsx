import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import ArticleService from "../API/ArticleService";
import ArticleList from "../components/articles/components/ArticlesList/ArticlesList";
import PageTitle from "../components/lib/PageTitle";

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
            <PageTitle
                title="Статьи"
                actionButton={
                    <Button
                        variant="contained"
                        // onClick={toNewsAddPage}
                        // className={styles.toAddPageBtn}
                    >
                        Добавить статью
                    </Button>
                }
            />
            <ArticleList remove={removeArticle} articles={articles} />
        </>
    );
}

export default Articles;
