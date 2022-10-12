import {ArticleController} from './articles/controller/article.controller';
import {ArticleSchema} from './articles/schema/article.schema';
import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ArticleService} from './articles/service/article.service';
import {UserController} from './user/controller/user.controller';
import {VideoController} from './video/controller/video.controller';
import {JwtModule} from '@nestjs/jwt';
import {secret} from './constants';
import {ServeStaticModule} from '@nestjs/serve-static';
import {join} from 'path/posix';
import {UserService} from './user/service/user.service';
import {MulterModule} from '@nestjs/platform-express';
import {diskStorage} from 'multer';
import {v4 as uuidv4} from 'uuid';

@Module({
    imports: [
        MongooseModule.forRoot('mongodb://localhost:27017', {
            dbName: 'Stream',
        }),
        MulterModule.register({
            storage: diskStorage({
                destination: './public',
                filename: (req, file, cb) => {
                    const ext = file.mimetype.split('/')[1];
                    cb(null, `${uuidv4()} - ${Date.now()}.${ext}`);
                },
            }),
        }),
        // MongooseModule.forFeature([{name: 'Article', schema: ArticleSchema}]),
        JwtModule.register({
            secret: secret,
            signOptions: {expiresIn: '24h'},
        }),
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '..', 'public'),
        }),
    ],
    controllers: [
        AppController,
        ArticleController,
        UserController,
        VideoController,
    ],
    providers: [AppService, ArticleService, UserService],
})
export class AppModule {}
