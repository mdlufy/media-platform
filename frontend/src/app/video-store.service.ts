import { VideosService } from './api/videos/videos.service';
import { VideoService } from './api/video/video.service';
import { Video } from './interfaces/video.interface';
import { Injectable } from '@angular/core';
import { Store } from './api/store-creator';

@Injectable({
    providedIn: 'root',
})
export class VideoStoreService {
    public videoData: Store<Video[]> = new Store<Video[]>([]);

    constructor(
        private videoService: VideoService,
        private videosService: VideosService
    ) {}

    public fetchVideos() {
        this.videoService
            .fetchVideos$()
            .subscribe((data) => this.videoData.setState(data));
    }

    public deleteVideos() {
        this.videosService
            .deleteVideos$()
            .subscribe(() => this.videoData.setState([]));
    }

    public removeVideo(id: string) {
        this.videoService
            .deleteVideo$(id)
            .subscribe(() =>
                this.videoData.setState(
                    this.videoData.state.filter((video) => video._id !== id)
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
