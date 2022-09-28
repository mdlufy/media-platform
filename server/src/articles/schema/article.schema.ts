import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';

export type ArticleDocument = Article & Document;

@Schema()
export class Article {
    @Prop()
    id: string;
    @Prop()
    title: string;
    @Prop()
    content: string;
}

export const ArticleSchema = SchemaFactory.createForClass(Article);
