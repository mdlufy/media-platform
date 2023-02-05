import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Video } from 'src/app/+state/videos/videos.reducer';
import { apiUrl } from 'src/app/config';

@Component({
    selector: 'app-video',
    templateUrl: './video.component.html',
    styleUrls: ['./video.component.scss'],
})
export class VideoComponent implements OnInit {
    @Input() video: Video;

    @Output() removeVideo = new EventEmitter<string>();

    public coverUrl: string;

    ngOnInit(): void {
        this.setVideoUrl();
    }

    private setVideoUrl() {
        this.coverUrl = `${apiUrl}/video/${this.video.id}/cover`;
    }
}
