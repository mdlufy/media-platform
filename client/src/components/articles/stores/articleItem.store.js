import {makeAutoObservable} from 'mobx';

class ArticleItemStore {
    articleItem = {};

    constructor() {
        makeAutoObservable(this);
    }

    create(item) {
        this.articleItem = {
            title: item?.title || '',
            content: item?.content || '',
        };

        return this.articleItem;
    }
}

export default new ArticleItemStore();
