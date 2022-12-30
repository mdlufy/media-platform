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
import { secret } from './constants';
import { CourseController } from './course/controller/course.controller';
import { Course, CourseSchema } from './course/schema/course.schema';
import { CourseService } from './course/service/course.service';
import { CoursesController } from './courses/controller/courses.controller';
import { CoursesService } from './courses/service/courses.service';
import { UserController } from './user/controller/user.controller';
import { User, UserSchema } from './user/schema/user.schema';
import { UserService } from './user/service/user.service';
import { VideoController } from './video/controller/video.controller';
import { Video, VideoSchema } from './video/schema/video.schema';
import { VideoService } from './video/service/video.service';
import { VideosController } from './videos/controller/videos.controller';
import { VideosService } from './videos/service/videos.service';
import { AuthService } from './auth/service/auth.service';
import { AuthController } from './auth/controller/auth.controller';

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

        MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
        MongooseModule.forFeature([{ name: Video.name, schema: VideoSchema }]),
        MongooseModule.forFeature([
            { name: Course.name, schema: CourseSchema },
        ]),

        JwtModule.register({
            secret: secret,
            signOptions: { expiresIn: '24h' },
        }),

        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '..', 'public'),
        }),
    ],
    controllers: [
        AppController,
        UserController,
        VideoController,
        VideosController,
        CoursesController,
        CourseController,
        AuthController,
    ],
    providers: [
        UserService,
        VideoService,
        VideosService,
        CoursesService,
        CourseService,
        AuthService,
    ],
})
export class AppModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(isAuthenticated)
            .exclude({ path: 'api/v1/video/:id', method: RequestMethod.GET })
            .forRoutes(VideoController);
    }
}
