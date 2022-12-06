import { apiUrl } from 'src/app/config';
import { Video } from './../../interfaces/video.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-video',
    templateUrl: './video.component.html',
    styleUrls: ['./video.component.scss'],
})
export class VideoComponent implements OnInit {
    @Input() video!: Video;

    public videoUrl = '';

    constructor() {}

    ngOnInit(): void {
        this.setVideoUrl();
    }

    private setVideoUrl() {
        this.videoUrl = `${apiUrl}/video/${this.video._id}`;
    }
}
