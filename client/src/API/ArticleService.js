import axios from "axios";
import { API_URL } from "../components/articles/constants";

export default class ArticleService {
    static async getAll() {
        const responce = await axios.get(API_URL);
        
        return responce;
    }

    static async getById(id) {
        const responce = await axios.get(`${API_URL}/${id}`);
        
        return responce;

    }

    static async deleteById(id) {
        const responce = await axios.delete(`${API_URL}/${id}`);
        
        return responce;

    }
}