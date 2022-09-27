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

    addArticle(article) {
        this.articles = [...this.articles, article];
    }

    async fetchArticles() {
        const responce = await ArticleService.getAll();

        this.articles = responce.data.articleData;

        return responce;
    }

    getArticlesItemById(articlesId) {
        articlesId = Number(articlesId);

        return this.articles.find(
            (articleItem) => articleItem.id === articlesId
        );
    }

    deleteArticleItemById(articlesId) {
        articlesId = Number(articlesId);

        this.articles = this.articles.filter(
            (articleItem) => articleItem.id !== articlesId
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
