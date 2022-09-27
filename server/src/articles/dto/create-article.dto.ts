import {IsNotEmpty, IsNumber, IsString, MaxLength} from 'class-validator';

export class CreateArticleDto {
    @IsNumber()
    id: number;

    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    content: string;
}
