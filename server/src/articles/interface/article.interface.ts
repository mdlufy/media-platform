import {Document} from 'mongoose';

export interface IArticle extends Document {
    id: string;
    title: string;
    content: string;
}
