import axios from '../axios.config';

export default class ArticleService {
    static getAllRequest() {
        return axios.get('/');
    }

    static getByIdRequest(articleId) {
        return axios.get('/', {data: {id: articleId}});
    }

    static createRequest(article) {
        return axios.post('/', {data: article});
    }

    static updateRequest(article) {
        return axios.put('/', {data: article});
    }

    static deleteByIdRequest(articleId) {
        return axios.delete('/', {data: {id: articleId}});
    }
}
