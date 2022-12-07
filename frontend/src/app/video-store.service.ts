import { VideosService } from './api/videos/videos.service';
import { Video } from './interfaces/video.interface';
import { Injectable } from '@angular/core';
import { Store } from './api/store-creator';

@Injectable({
    providedIn: 'root',
})
export class VideoStore {
    public videoData: Store<Video[]> = new Store<Video[]>([]);

    constructor(private videosService: VideosService) {}

    public fetchVideos() {
        this.videosService
            .fetchVideos$()
            .subscribe((data) => this.videoData.setState(data));
    }

    public removeVideo(id: string) {
        this.videosService
            .deleteVideo$(id)
            .subscribe(() =>
                this.videoData.setState(
                    this.videoData.state.filter((video) => video._id !== id)
                )
            );
    }

    public uploadFile(event: any) {
        this.videosService
            .uploadVideo$(event)
            .subscribe((data) =>
                this.videoData.setState([
                    ...this.videoData.state,
                    data as Video,
                ])
            );
        // const video = event.target.files[0];
        // const cover = event.target.files[1];

        // if (video && cover) {
        //     const formData = new FormData();

        //     formData.append('title', 'test');
        //     formData.append('video', video);
        //     formData.append('cover', cover);

        //     this.videosService
        //         .uploadVideo$(formData)
        //         .subscribe((data) =>
        //             this.videoData.setState([
        //                 ...this.videoData.state,
        //                 data as Video,
        //             ])
        //         );
        // }
    }
}
