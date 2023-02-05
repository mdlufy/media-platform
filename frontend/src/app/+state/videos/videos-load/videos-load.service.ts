import { VideosService } from './../../../api/videos/videos.service';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Video } from '../videos.reducer';
import { VideoDto } from '../../../interfaces/video.dto';
import { mapVideoDtoToVideoView } from '../../../helpers/videos-mapping.helper';
import { VideoForm } from 'src/app/interfaces/video-form';

@Injectable()
export class VideosLoadService {
    constructor(private videosService: VideosService) {}

    public getVideosByCourseId$(courseId: string): Observable<Video[]> {
        return this.videosService
            .fetchVideosByCourseId$(courseId)
            .pipe(
                map((videos: VideoDto[]) =>
                    videos.map((video) => mapVideoDtoToVideoView(video))
                )
            );
    }

    public createVideo$(videoForm: VideoForm): Observable<Video> {
        return this.videosService
            .uploadVideo$(videoForm)
            .pipe(
                map((video: VideoDto) => mapVideoDtoToVideoView(video))
            );
    }

    public removeVideosFromCourseByCourseId$(courseId: string) {
        return this.videosService.deleteVideosByCourseId$(courseId);
    }

    public removeVideoById$(videoId: string) {
        return this.videosService.deleteVideoById$(videoId);
    }
}
