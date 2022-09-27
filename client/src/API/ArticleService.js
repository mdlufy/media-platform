import axios from '../axios.config';

export default class ArticleService {
    static async getAll() {
        const responce = await axios.get('/');

        return responce;
    }

    static async getById(id) {
        const responce = await axios.get(`/${id}`);

        return responce;
    }

    static async deleteById(id) {
        const responce = await axios.delete(`/${id}`);

        return responce;
    }
}
