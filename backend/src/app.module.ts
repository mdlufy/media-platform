import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { MulterModule } from '@nestjs/platform-express';
import { ServeStaticModule } from '@nestjs/serve-static';
import { diskStorage } from 'multer';
import { join } from 'path';
import { v4 as uuidv4 } from 'uuid';
import { AppController } from './app.controller';
import { isAuthenticated } from './app.middleware';
import { UserController } from './user/controller/user.controller';
import { UserService } from './user/service/user.service';
import { secret } from './constants';
import { VideoController } from './video/controller/video.controller';
import { Video, VideoSchema } from './video/schema/video.schema';
import { VideoService } from './video/service/video.service';
import { VideosController } from './videos/controller/videos.controller';
import { VideosService } from './videos/service/videos.service';
import { AdminModule } from '@adminjs/nestjs';
import * as AdminJSMongoose from '@adminjs/mongoose';
import AdminJS from 'adminjs';
import { User, UserSchema } from './user/schema/user.entity';

const DEFAULT_ADMIN = {
    email: '1',
    password: '1',
};

const authenticate = async (email: string, password: string) => {
    if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
        return Promise.resolve(DEFAULT_ADMIN);
    }

    return null;
};

AdminJS.registerAdapter({
    Resource: AdminJSMongoose.Resource,
    Database: AdminJSMongoose.Database,
});

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

        MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
        MongooseModule.forFeature([{ name: Video.name, schema: VideoSchema }]),

        JwtModule.register({
            secret: secret,
            signOptions: { expiresIn: '24h' },
        }),

        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '..', 'public'),
        }),

        AdminModule.createAdminAsync({
            useFactory: () => ({
                adminJsOptions: {
                    rootPath: '/admin',
                    resources: [
                        {
                            resource: User,
                            options: {
                                navigation: { name: null, icon: 'Person' },
                            },
                        },
                    ],
                },
            }),
        }),
    ],
    controllers: [
        AppController,
        UserController,
        VideoController,
        VideosController,
    ],
    providers: [UserService, VideoService, VideosService],
})
export class AppModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(isAuthenticated)
            .exclude({ path: 'api/v1/video/:id', method: RequestMethod.GET })
            .forRoutes(VideoController);
    }
}
