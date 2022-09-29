import {Container} from '@mui/material';
import {observer} from 'mobx-react-lite';
import React, {useEffect} from 'react';
import ArticleService from '../API/ArticleService';
import ArticleList from '../components/articles/components/ArticlesList/ArticlesList';
import ArticlesModal from '../components/articles/components/ArticlesModal/ArticlesModal';
import ArticlesSearch from '../components/articles/components/ArticlesSearch/ArticlesSearch';
import articlesStore from '../components/articles/stores/articles.store';
import PageTitle from '../components/lib/PageTitle';

const Articles = observer(() => {
    useEffect(() => {
        fetchArticles();
    }, []);

    async function fetchArticles() {
        try {
            const {data} = await ArticleService.getAllRequest();

            articlesStore.setArticles(data.articleData);
        } catch (e) {
            throw new Error(`${e.name}: ${e.message}`);
        }
    }

    return (
        <Container maxWidth={false}>
            <PageTitle title="Статьи" actionButton={<ArticlesModal />} />
            <ArticlesSearch />
            <ArticleList />
        </Container>
    );
});

export default Articles;
