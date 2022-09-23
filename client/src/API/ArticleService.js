import axios from "axios";

export default class ArticleService {
    static async getAll() {
        const responce = await axios.get('http://localhost:3002/article');
        
        return responce;
    }

    static async getById(id) {
        const responce = await axios.get('http://localhost:3002/article/' + id);
        
        return responce;

    }

    static async deleteById(id) {
        const responce = await axios.delete('http://localhost:3002/article/' + id);
        
        return responce;

    }
}