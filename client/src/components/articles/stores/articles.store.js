import { makeAutoObservable } from 'mobx';

class ArticlesStore {
    searchField = '';
    articles = [
        {
            id: 1,
            title: 'First article',
            content: 'TestContent'
        },
        {
            id: 2,
            title: 'Second article',
            content: 'TestContent'
        },
        {
            id: 3,
            title: 'Third article',
            content: 'TestContent'
        },
    ];

    constructor() {
        makeAutoObservable(this);
    }

    // async fetchArticles() {
    //     const responce = await ArticleService.getAll();
    //     setArticles(responce.data.articleData);
    // }

    getArticlesItemById(articlesId) {
        articlesId = Number(articlesId);

        return this.articles.find(articleItem => articleItem.id === articlesId)
    }

    deleteArticleItemById(articlesId) {
        articlesId = Number(articlesId);

        this.articles = this.articles.filter((articleItem) => articleItem.id !== articlesId);
    }

    get articlesFiltered() {
        return this.articles.filter(articlesItem => {
            return new RegExp(this.searchField, 'i').test(articlesItem.title);
        })
    }

    setSearchField(value) {
        this.searchField = value;
    }
}

export default new ArticlesStore();