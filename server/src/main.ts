import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);

    app.enableCors();

    app.setBaseViewsDir(join(__dirname, '../src/articles/views'));
    app.setViewEngine('pug');

    app.useGlobalPipes(new ValidationPipe());

    await app.listen(3002);
}
bootstrap();
