import { IsString } from 'class-validator';

export class DeleteArticleDto {
    @IsString()
    id: string;
}
