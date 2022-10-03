import {
    Body,
    Controller,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Redirect,
    Render
} from '@nestjs/common';
import { Article } from '../models/article.model';
import { articles } from './../articles';

@Controller('articles')
export class ArticleController {
    constructor() {}

    @Get('/')
    @Render('index')
    index() {
        return { articles };
    }

    @Get('new')
    @Render('new-article')
    getForm(): void {
        return;
    }

    @Get(':id')
    @Render('article')
    getById(@Param('id', ParseIntPipe) id: number) {
        return articles.find((article) => article.id === id);
    }

    @Get(':id/delete')
    @Redirect('/articles', 301)
    deleteById(@Param('id', ParseIntPipe) id: number) {
        const articleIndex = articles.findIndex((article) => article.id === id);
        articles.splice(articleIndex, 1);
    }

    @Get(':id/update')
    @Render('update')
    findToUpdateById(@Param('id', ParseIntPipe) id: number) {
        return articles.find((article) => article.id === id);
    }

    @Post(':id/update')
    @Render('update')
    updateById(@Param('id', ParseIntPipe) id: number, @Body() body: any) {
        const articleIndex = articles.findIndex((article) => article.id === id);
        const newArticle = new Article(body.title, body.content, id);

        articles.splice(articleIndex, 1, newArticle);

        return newArticle;
    }

    @Post()
    @Redirect('/articles', 301)
    create(@Body() body: any): void {
        const id = articles.length + 1;
        const article = new Article(body.title, body.content, id);
        articles.push(article);
    }
}
