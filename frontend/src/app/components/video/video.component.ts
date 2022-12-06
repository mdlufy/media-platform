import {
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output
} from '@angular/core';
import { tap } from 'rxjs';
import { apiUrl } from 'src/app/config';
import { VideosService } from './../../api/videos/videos.service';
import { Video } from './../../interfaces/video.interface';

@Component({
    selector: 'app-video',
    templateUrl: './video.component.html',
    styleUrls: ['./video.component.scss'],
})
export class VideoComponent implements OnInit {
    @Input() video!: Video;

    @Output() onDeleteVideoEvent = new EventEmitter<string>();

    public videoUrl = '';

    constructor(
        private videosService: VideosService,
    ) {}

    ngOnInit(): void {
        this.setVideoUrl();
    }

    private setVideoUrl() {
        this.videoUrl = `${apiUrl}/video/${this.video._id}`;
    }

    // public deleteVideo(videoId: string) {
    //     this.videosService
    //         .deleteVideo$(videoId)
    //         .pipe(tap((result) => console.log(result)))
    //         .subscribe();
    // }
}
