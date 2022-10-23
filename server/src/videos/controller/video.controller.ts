import {Video} from './../schema/video.schema';
import {
    Body,
    Controller,
    Delete,
    Get,
    HttpStatus,
    Param,
    Post,
    Put,
    Query,
    Req,
    Res,
    UploadedFiles,
    UseInterceptors,
} from '@nestjs/common';
import {FileFieldsInterceptor} from '@nestjs/platform-express';
import { VideoService } from '../service/video.service';

@Controller('api/v1/video')
export class VideoController {
    constructor(private readonly videoService: VideoService) {}

    @Post()
    @UseInterceptors(
        FileFieldsInterceptor([
            {name: 'video', maxCount: 1},
            {name: 'cover', maxCount: 1},
        ])
    )
    async createBook(
        @Res() res,
        @Req() req,
        @Body() video: Video,
        @UploadedFiles()
        files: {video?: Express.Multer.File[]; cover?: Express.Multer.File[]}
    ) {
        const reqBody = {
            createdBy: req.user,
            title: video.title,
            video: files.video[0].filename,
            coverImage: files.cover[0].filename,
        };

        const newVideo = await this.videoService.createVideo(reqBody);

        return res.status(HttpStatus.CREATED).json({newVideo});
    }

    @Get()
    async read(@Query() id): Promise<Object> {
        return await this.videoService.readVideo(id);
    }

    @Get(':id')
    async stream(@Param('id') id, @Res() res, @Req() req) {
        return this.videoService.streamVideo(id, res, req);
    }

    @Put(':id')
    async update(@Res() res, @Param('id') id, @Body() video: Video) {
        const updatedVideo = await this.videoService.update(id, video);

        return res.status(HttpStatus.OK).json(updatedVideo);
    }

    @Delete(':id')
    async delete(@Res() res, @Param('id') id) {
        await this.videoService.delete(id);

        return res.status(HttpStatus.OK).json({
            user: null,
        });
    }
}
