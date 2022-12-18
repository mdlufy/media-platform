import { apiUrl } from './../../config';
import { Video } from './../../interfaces/video.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class VideosService {
    constructor(private readonly http: HttpClient) {}

    public fetchVideos$(): Observable<Video[]> {
        return this.http.get<Video[]>(`${apiUrl}/videos`);
    }

    public deleteVideos$(): Observable<{ deletedCount: number }> {
        return this.http.delete<{ deletedCount: number }>(`${apiUrl}/videos`);
    }
}
