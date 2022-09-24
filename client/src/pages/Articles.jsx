import { Button, Container } from "@mui/material";
import React, { useEffect } from "react";
import ArticleList from "../components/articles/components/ArticlesList/ArticlesList";
import ArticlesSearch from "../components/articles/components/ArticlesSearch/ArticlesSearch";
import articlesStore from "../components/articles/stores/articles.store";
import PageTitle from "../components/lib/PageTitle";

const Articles = () => {

    // useEffect(() => {
    //     articlesStore.fetchArticles();
    // }, []);

    return (
        <Container maxWidth={false}>
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
            <ArticlesSearch />
            <ArticleList />
        </Container>
    );
};

export default Articles;
