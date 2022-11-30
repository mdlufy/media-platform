import { VideoDto } from './../components/video/video.dto';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class VideosService {
    constructor(private readonly http: HttpClient) {}

    public fetchVideo$(id: string = '6387cbaa132d3f742b8274db') {
        return this.http.get<VideoDto>(`http://localhost:3002/api/v1/video?id=${id}`);
    }

    public uploadVideo$(body: FormData) {
        return this.http.post('http://localhost:3002/api/v1/video', body);
    }

    public deleteVideo$() {
        return this.http.delete('api/v1/video');
    }
}
