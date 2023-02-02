import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { VideoService } from './api/video/video.service';
import { VideosService } from './api/videos/videos.service';
import { Video } from './interfaces/video';
import { Store } from './store-creator';

@Injectable({
    providedIn: 'root',
})
export class VideoStoreService {
    public videoData: Store<Video[]> = new Store<Video[]>([]);

    constructor(
        private videoService: VideoService,
        private videosService: VideosService
    ) {}

    public getVideosByCourseId(courseId: string) {
        this.videosService
            .fetchVideosByCourseId$(courseId)
            .subscribe((data) => this.videoData.setState(data));
    }

    public removeVideos() {
        this.videosService
            .deleteVideos$()
            .subscribe(() => this.videoData.setState([]));
    }

    public removeVideosFromCourse(courseId: string) {
        this.videosService
            .deleteVideosByCourseId$(courseId)
            .subscribe(() =>
                this.videoData.setState(
                    this.videoData.state.filter(
                        (video) => video.course._id !== courseId
                    )
                )
            );
    }

    public removeVideo(videoId: string) {
        this.videoService
            .deleteVideo$(videoId)
            .subscribe(() =>
                this.videoData.setState(
                    this.videoData.state.filter(
                        (video) => video._id !== videoId
                    )
                )
            );
    }

    public uploadFile(event: any) {
        this.videoService
            .uploadVideo$(event)
            .subscribe((data) =>
                this.videoData.setState([
                    ...this.videoData.state,
                    data as Video,
                ])
            );
    }
}
