import { VideosService } from './../../services/videos.service';
import { Component, OnInit } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { VideoDto } from '../video/video.dto';

@Component({
    selector: 'app-videos-list',
    templateUrl: './videos-list.component.html',
    styleUrls: ['./videos-list.component.scss'],
})
export class VideosListComponent implements OnInit {
    public video$!: VideoDto;

    public fileName = '';
    public cover = ''; 

    constructor(private videosService: VideosService) {}

    ngOnInit(): void {
        this.loadVideos();
    }

    private loadVideos() {
        this.videosService.fetchVideo$()
            .pipe(
                tap((result) => console.log(result)),
            )
            .subscribe(result => this.video$ = result);
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
}
