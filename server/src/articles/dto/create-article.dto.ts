import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateArticleDto {
    @IsString()
    id: string;

    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    content: string;
}
