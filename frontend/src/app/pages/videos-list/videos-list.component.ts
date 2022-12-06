import { User } from './../../interfaces/user.interface';
import { VideosService } from './../../api/videos/videos.service';
import { Component, OnInit } from '@angular/core';
import { tap, Observable, Subscription } from 'rxjs';
import { Video } from 'src/app/interfaces/video.interface';

interface Data {
    id: string;
}

@Component({
    selector: 'app-videos-list',
    templateUrl: './videos-list.component.html',
    styleUrls: ['./videos-list.component.scss'],
})
export class VideosListComponent implements OnInit {
    // public video$!: Video;
    public videos$!: Video[];

    public fileName = '';
    public cover = '';

    constructor(private videosService: VideosService) {}

    ngOnInit(): void {
        this.loadVideos();
    }

    public onFileSelected(event: any) {
        const video = event.target.files[0];
        const cover = event.target.files[1];

        if (video && cover) {
            this.fileName = video.name;

            const formData = new FormData();

            formData.append('title', 'test');
            formData.append('video', video);
            formData.append('cover', cover);

            console.log(formData);

            const upload$ = this.videosService.uploadVideo$(formData);

            upload$.subscribe();
        }
    }

    private loadVideos() {
        // this.videosService.fetchVideo$()
        //     .pipe(
        //         tap((result) => console.log(result)),
        //     )
        //     .subscribe(result => this.video$ = result);

        this.videosService
            .fetchVideos$()
            .pipe(tap((result) => console.log(result)))

            .subscribe((result) => (this.videos$ = result));
    }

    public deleteVideo(videoId: string) {
        this.videosService
            .deleteVideo$(videoId)
            .pipe(tap((result) => console.log(result)))
            .subscribe(data => this.deleteVideoFromArray(data))
    }

    private deleteVideoFromArray(data: Record<string, any>) {
        this.videos$ = this.videos$.filter(video => video._id !== data['id']);
    }
}
