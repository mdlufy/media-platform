import { v4 as uuidv4} from 'uuid';

export const createArticleWithDefaults = (article) => {
    const id = uuidv4();

    return {
        id,
        ...article,
    }
}