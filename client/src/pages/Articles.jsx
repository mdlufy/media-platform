import { Container } from "@mui/material";
import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import ArticleList from "../components/articles/components/ArticlesList/ArticlesList";
import ArticlesModal from "../components/articles/components/ArticlesModal/ArticlesModal";
import ArticlesSearch from "../components/articles/components/ArticlesSearch/ArticlesSearch";
import articlesStore from "../components/articles/stores/articles.store";
import PageTitle from "../components/lib/PageTitle";

const Articles = observer(() => {

    useEffect(() => {
        articlesStore.fetchArticles();
    }, []);

    return (
        <Container maxWidth={false}>
            <PageTitle
                title="Статьи"
                actionButton={
                    <ArticlesModal />
                }
            />
            <ArticlesSearch />
            <ArticleList />
        </Container>
    );
});

export default Articles;
