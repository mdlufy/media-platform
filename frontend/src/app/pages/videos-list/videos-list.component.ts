import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Video } from 'src/app/interfaces/video.interface';
import { VideoStoreService } from './../../video-store.service';

@Component({
    selector: 'app-videos-list',
    templateUrl: './videos-list.component.html',
    styleUrls: ['./videos-list.component.scss'],
})
export class VideosListComponent implements OnInit {
    public videos$: Observable<Video[]>;

    public isFormShown = false;

    public videoForm = new FormGroup({
        videoName: new FormControl('', [Validators.required]),

        videoFile: new FormControl('', [Validators.required]),
        videoFileSource: new FormControl('', [Validators.required]),

        videoCover: new FormControl('', [Validators.required]),
        videoCoverSource: new FormControl('', [Validators.required]),
    });

    constructor(private videosStore: VideoStoreService) {
        this.videos$ = videosStore.videoData.state$;
    }

    ngOnInit(): void {
        this.fetchVideos();
    }

    public changeFormVisibility() {
        this.isFormShown = !this.isFormShown;
    }

    public onVideoFileChange(event: any) {
        if (event.target?.files?.length > 0) {
            const file = event.target.files[0];

            this.videoForm.patchValue({ videoFileSource: file });
        }
    }

    public onVideoCoverChange(event: any) {
        if (event.target?.files?.length > 0) {
            const file = event.target.files[0];

            this.videoForm.patchValue({ videoCoverSource: file });
        }
    }

    public onSubmit() {
        console.warn(this.videoForm.value);

        const title = this.videoForm.value.videoName;
        const video = this.videoForm.value.videoFileSource;
        const cover = this.videoForm.value.videoCoverSource;

        if (video && cover && title) {
            const formData = new FormData();

            formData.append('title', title);
            formData.append('video', video);
            formData.append('cover', cover);

            this.videosStore.uploadFile(formData);
        }

        this.changeFormVisibility();
    }

    public onDeleteVideo(id: string) {
        this.videosStore.removeVideo(id);
    }

    private fetchVideos() {
        this.videosStore.fetchVideos();
    }
}
