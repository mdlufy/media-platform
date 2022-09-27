import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';

@Schema()
export class Article {
    @Prop()
    id: number;
    @Prop()
    title: string;
    @Prop()
    content: string;
}

export const ArticleSchema = SchemaFactory.createForClass(Article);
