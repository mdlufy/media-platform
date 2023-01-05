import {
    Controller,
    Delete,
    Get,
    HttpStatus,
    Param,
    Res
} from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { VideosService } from '../service/videos.service';
import { Video } from './../../video/schema/video.schema';

@ApiTags('videos')
@Controller('api/v1/videos')
export class VideosController {
    constructor(private videosService: VideosService) {}

    @ApiOperation({ summary: 'Get all videos' })
    @Get()
    @ApiResponse({
        status: 200,
        description: 'Return all videos',
        type: [Video],
    })
    async getVideos(): Promise<Object> {
        return await this.videosService.getVideos();
    }

    @ApiOperation({ summary: 'Get videos by course id' })
    @ApiParam({ name: 'courseId', type: String })
    @Get(':courseId')
    @ApiResponse({
        status: 200,
        description: 'Return course videos',
        type: [Video],
    })
    async getVideosByCourseId(@Param('courseId') courseId: string, @Res() res) {
        const videos = await this.videosService.getVideosByCourseId(courseId);

        return res.status(HttpStatus.OK).json(videos);
    }

    @ApiOperation({ summary: 'Delete all videos' })
    @Delete(':courseId')
    @ApiResponse({
        status: 200,
        description: 'Return count of deleted videos',
        type: Number,
    })
    async deleteVideosFromCourse(@Param('courseId') courseId: string, @Res() res) {
        const { deletedCount } = await this.videosService.deleteVideosByCourseId(courseId);

        return res.status(HttpStatus.OK).json({
            deletedCount,
        });
    }

    @ApiOperation({ summary: 'Delete all videos' })
    @Delete()
    @ApiResponse({
        status: 200,
        description: 'Return count of deleted videos',
        type: Number,
    })
    async deleteVideos(@Res() res) {
        const { deletedCount } = await this.videosService.deleteVideos();

        return res.status(HttpStatus.OK).json({
            deletedCount,
        });
    }
}
