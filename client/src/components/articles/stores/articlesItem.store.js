import {makeAutoObservable} from 'mobx';

class ArticlesItemStore {
    articlesItem = {};

    constructor() {
        makeAutoObservable(this);
    }

    create(item) {
        this.articlesItem = {
            title: item?.title || '',
            content: item?.content || '',
        };
    }
}

export default new ArticlesItemStore();
