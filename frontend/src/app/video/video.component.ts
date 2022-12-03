import { Video } from './../interfaces/video.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-video',
    templateUrl: './video.component.html',
    styleUrls: ['./video.component.scss'],
})
export class VideoComponent implements OnInit {
    @Input() video!: Video;

    apiUrl = 'http://localhost:3002/api/v1/video/';

    constructor() {}

    ngOnInit(): void {}
}
