import {makeAutoObservable} from 'mobx';
import ArticleService from '../../../API/ArticleService';

class ArticlesStore {
    searchField = '';
    articles = [
        {
            id: 1,
            title: 'First article',
            content: 'TestContent',
        },
        {
            id: 2,
            title: 'Second article',
            content: 'TestContent',
        },
        {
            id: 3,
            title: 'Third article',
            content: 'TestContent',
        },
    ];

    constructor() {
        makeAutoObservable(this);
    }

    async fetchArticles() {
        const responce = await ArticleService.getAllRequest();

        this.articles = responce.data.articleData;

        return responce;
    }

    async deleteArticleById(articleId) {
        const response = await ArticleService.deleteByIdRequest(articleId);

        this.deleteArticleItemById(articleId);

        return response;
    }

    addArticle(article) {
        this.articles = [...this.articles, article];
    }

    getArticleItemById(articleId) {
        articleId = Number(articleId);

        return this.articles.find(
            (articleItem) => articleItem.id === articleId
        );
    }

    deleteArticleItemById(articleId) {
        articleId = Number(articleId);

        this.articles = this.articles.filter(
            (articleItem) => articleItem.id !== articleId
        );
    }

    get articlesFiltered() {
        return this.articles.filter((articlesItem) => {
            return new RegExp(this.searchField, 'i').test(articlesItem.title);
        });
    }

    setSearchField(value) {
        this.searchField = value;
    }
}

export default new ArticlesStore();
