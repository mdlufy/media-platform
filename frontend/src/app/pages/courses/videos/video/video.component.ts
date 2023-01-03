import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { apiUrl } from 'src/app/config';
import { Video } from '../../../../interfaces/video.interface';

@Component({
    selector: 'app-video',
    templateUrl: './video.component.html',
    styleUrls: ['./video.component.scss'],
})
export class VideoComponent implements OnInit {
    @Input() video!: Video;

    @Output() onDeleteVideoEvent = new EventEmitter<string>();

    public coverUrl = '';
    // public videoUrl = '';

    // public currentTime = 0;
    // public volume = 1;
    // public paused = true;

    constructor() {}

    ngOnInit(): void {
        this.setVideoUrl();
    }

    private setVideoUrl() {
        // this.videoUrl = `${apiUrl}/video/${this.video._id}`;
        this.coverUrl = `${apiUrl}/video/${this.video._id}/cover`;
    }
}
