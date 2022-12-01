import { Component, Input, OnInit } from '@angular/core';
import { VideoDto } from './video.dto';

@Component({
    selector: 'app-video',
    templateUrl: './video.component.html',
    styleUrls: ['./video.component.scss'],
})
export class VideoComponent implements OnInit {
    @Input() video!: VideoDto;

    apiUrl = 'http://localhost:3002/api/v1/video/';

    constructor() {}

    ngOnInit(): void {}
}
