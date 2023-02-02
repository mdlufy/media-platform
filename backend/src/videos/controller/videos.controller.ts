import {
    Controller,
    Delete,
    Get,
    HttpStatus,
    Param,
    Res,
} from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { VideosService } from '../service/videos.service';
import { Video } from './../../video/schema/video.schema';

@ApiTags('videos')
@Controller('api/v1/videos')
export class VideosController {
    constructor(private videosService: VideosService) {}

    @ApiOperation({ summary: 'Get videos' })
    @Get()
    @ApiResponse({
        status: 200,
        description: 'Success get videos',
        type: [Video],
    })
    async getVideos(): Promise<Video[]> {
        return await this.videosService.getVideos();
    }

    @ApiOperation({ summary: 'Get videos by course ID' })
    @ApiParam({ name: 'courseId', type: String })
    @Get(':courseId')
    @ApiResponse({
        status: 200,
        description: 'Success get course videos',
        type: [Video],
    })
    async getVideosByCourseId(
        @Param('courseId') courseId: string,
        @Res() res
    ): Promise<Video[]> {
        const videos = await this.videosService.getVideosByCourseId(courseId);

        return res.status(HttpStatus.OK).json(videos);
    }

    @ApiOperation({ summary: 'Delete course videos' })
    @Delete(':courseId')
    @ApiResponse({
        status: 200,
        description: 'Successful deleted course videos',
        type: Number,
    })
    async deleteVideosFromCourse(
        @Param('courseId') courseId: string,
        @Res() res
    ): Promise<{ deletedCount: number }> {
        const { deletedCount } = await this.videosService.deleteVideosByCourseId(courseId);

        return res.status(HttpStatus.OK).json();
    }

    @ApiOperation({ summary: 'Delete videos' })
    @Delete()
    @ApiResponse({
        status: 200,
        description: 'Success deleted videos',
        type: Number,
    })
    async deleteVideos(@Res() res): Promise<{ deletedCount: number }> {
        const { deletedCount } = await this.videosService.deleteVideos();

        return res.status(HttpStatus.OK).json();
    }
}
