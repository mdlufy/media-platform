import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Video } from 'src/app/interfaces/video.interface';
import { VideoStore } from './../../video-store.service';

@Component({
    selector: 'app-videos-list',
    templateUrl: './videos-list.component.html',
    styleUrls: ['./videos-list.component.scss'],
})
export class VideosListComponent implements OnInit {
    public videos$: Observable<Video[]>;

    constructor(private videosStore: VideoStore) {
        this.videos$ = videosStore.videoData.state$;
    }

    ngOnInit(): void {
        this.fetchVideos();
    }

    private fetchVideos() {
        this.videosStore.fetchVideos();
    }

    public onFileSelected(event: any) {
        this.videosStore.uploadFile(event);
    }

    public onDeleteVideo(id: string) {
        this.videosStore.removeVideo(id);
    }
}
