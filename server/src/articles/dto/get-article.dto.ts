import { PartialType } from '@nestjs/mapped-types';
import { DeleteArticleDto } from './delete-article.dto';


export class GetArticleDto extends PartialType(DeleteArticleDto) {}