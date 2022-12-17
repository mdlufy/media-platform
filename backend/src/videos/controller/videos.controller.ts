import { Video } from './../../video/schema/video.schema';
import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { VideosService } from '../service/videos.service';

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
}
