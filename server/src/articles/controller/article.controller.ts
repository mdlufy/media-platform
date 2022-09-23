import { ArticleService } from './../service/article.service';
import { UpdateArticleDto } from './../dto/update-article.dto';
import { CreateArticleDto } from './../dto/create-article.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';

@Controller('article')
export class ArticleController {
  constructor(private articleService: ArticleService) {}

  @Post()
  async createArticleDto(
    @Res() res,
    @Body() createArticleDto: CreateArticleDto,
  ) {
    try {
      const newArticle = await this.articleService.createArticle(
        createArticleDto,
      );

      return res.status(HttpStatus.CREATED).json({
        newArticle,
      });
    } catch (err) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: Student not created!',
        error: 'Bad Request',
      });
    }
  }

  @Put(':id')
  async updateStudent(
    @Res() res,
    @Param('id') articleId: number,
    @Body() updateArticleDto: UpdateArticleDto,
  ) {
    try {
      const existingStudent = await this.articleService.updateArticle(
        articleId,
        updateArticleDto,
      );

      return res.status(HttpStatus.OK).json({
        existingStudent,
      });
    } catch (err) {
      return res.status(err.status).json(err.response);
    }
  }

  @Get()
  async getStudents(@Res() res) {
    try {
      const articleData = await this.articleService.getAllArticles();

      return res.status(HttpStatus.OK).json({
        articleData,
      });
    } catch (err) {
      return res.status(err.status).json(err.response);
    }
  }

  @Get(':id')
  async getArticle(@Res() res, @Param('id') articleId: number) {
    try {
      const existingArticle = await this.articleService.getArticle(articleId);

      return res.status(HttpStatus.OK).json({
        existingArticle,
      });
    } catch (err) {
      return res.status(err.status).json(err.response);
    }
  }

  @Delete('/:id')
  async deleteArticle(@Res() res, @Param('id') articleId: number) {
    try {
      const deletedArticle = await this.articleService.deleteArticle(articleId);

      return res.status(HttpStatus.OK).json({
        deletedArticle,
      });
    } catch (err) {
      return res.status(err.status).json(err.response);
    }
  }
}
