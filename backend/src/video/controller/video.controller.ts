import {
    Body,
    Controller,
    Delete,
    Get,
    HttpStatus,
    Param,
    Post,
    Put,
    Req,
    Res,
    UploadedFiles,
    UseInterceptors,
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import {
    ApiBody,
    ApiConsumes,
    ApiHeader,
    ApiOperation,
    ApiParam,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';
import { Video } from '../schema/video.schema';
import { VideoService } from '../service/video.service';

@ApiTags('video')
@Controller('api/v1/video')
export class VideoController {
    constructor(private readonly videoService: VideoService) {}

    @UseInterceptors(
        FileFieldsInterceptor([
            { name: 'video', maxCount: 1 },
            { name: 'cover', maxCount: 1 },
        ])
    )
    @ApiOperation({ summary: 'Create new video' })
    @ApiConsumes('multipart/form-data')
    @ApiBody({
        description: 'Upload video',
        type: Video,
    })
    @Post()
    @ApiResponse({
        status: 201,
        description: 'The video has been successfully created.',
        type: Video,
    })
    async createBook(
        @Res() res,
        @Req() req,
        @Body() video: Video,
        @UploadedFiles()
        files: { video?: Express.Multer.File[]; cover?: Express.Multer.File[] }
    ) {
        const reqBody = {
            createdBy: req.user,
            title: video.title,
            video: files.video[0].filename,
            coverImage: files.cover[0].filename,
        };

        const newVideo = await this.videoService.createVideo(reqBody);

        return res.status(HttpStatus.CREATED).json(newVideo);
    }

    // @Get()
    // async read(@Query() id): Promise<Object> {
    //     return await this.videoService.readVideo(id);
    // }

    @ApiOperation({ summary: 'Get video by id' })
    @ApiParam({ name: 'id', type: String })
    @Get(':id')
    @ApiResponse({
        status: 206,
        description: 'Return video to stream based on particular id',
    })
    async stream(@Param('id') id, @Res() res, @Req() req) {
        return this.videoService.streamVideo(id, res, req);
    }

    @ApiOperation({ summary: 'Put video by id' })
    @ApiParam({ name: 'id', type: String })
    @ApiBody({ type: Video })
    @Put(':id')
    @ApiResponse({
        status: 200,
        description: 'Return updated video',
        type: Video,
    })
    async update(@Res() res, @Param('id') id, @Body() video: Video) {
        const updatedVideo = await this.videoService.update(id, video);

        return res.status(HttpStatus.OK).json(updatedVideo);
    }

    @ApiOperation({ summary: 'Delete video by id' })
    @ApiParam({ name: 'id', type: String })
    @Delete(':id')
    @ApiResponse({
        status: 200,
        description: 'Return deleted video id',
        type: String,
    })
    async delete(@Res() res, @Param('id') id) {
        await this.videoService.delete(id);

        return res.status(HttpStatus.OK).json({
            id: id,
        });
    }
}
