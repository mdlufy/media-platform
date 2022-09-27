import {ArticleController} from './articles/controller/article.controller';
import {ArticleSchema} from './articles/schema/article.schema';
import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ArticleService} from './articles/service/article.service';

@Module({
    imports: [
        MongooseModule.forRoot('mongodb://localhost:27017', {
            dbName: 'articledb',
        }),
        MongooseModule.forFeature([{name: 'Article', schema: ArticleSchema}]),
    ],
    controllers: [AppController, ArticleController],
    providers: [AppService, ArticleService],
})
export class AppModule {}
