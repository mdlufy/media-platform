import {makeAutoObservable} from 'mobx';

class ArticlesStore {
    searchField = '';
    articles = [];

    constructor() {
        makeAutoObservable(this);
    }

    addArticle(article) {
        this.articles = [...this.articles, article];
    }

    getArticleItemById(articleId) {
        return this.articles.find(
            (articleItem) => articleItem.id === articleId
        );
    }

    updateArticleItem(articleItem) {
        this.articles = this.articles.map((article) =>
            article.id === articleItem.id ? articleItem : article
        );
    }

    deleteArticleItemById(articleId) {
        this.articles = this.articles.filter(
            (articleItem) => articleItem.id !== articleId
        );
    }

    get articlesFiltered() {
        return this.articles.filter((articlesItem) => {
            return new RegExp(this.searchField, 'i').test(articlesItem.title);
        });
    }

    setArticles(articles) {
        this.articles = [...articles];
    }

    setSearchField(value) {
        this.searchField = value;
    }
}

export default new ArticlesStore();
