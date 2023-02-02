import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from './../../config';
import { Video } from '../../interfaces/video';

@Injectable({
    providedIn: 'root',
})
export class VideosService {
    constructor(private readonly http: HttpClient) {}

    public fetchVideos$(): Observable<Video[]> {
        return this.http.get<Video[]>(`${apiUrl}/videos`);
    }

    public fetchVideosByCourseId$(courseId: string): Observable<Video[]> {
        return this.http.get<Video[]>(`${apiUrl}/videos/${courseId}`);
    }

    public deleteVideos$(): Observable<{ deletedCount: number }> {
        return this.http.delete<{ deletedCount: number }>(`${apiUrl}/videos`);
    }

    public deleteVideosByCourseId$(
        courseId: string
    ): Observable<{ deletedCount: number }> {
        return this.http.delete<{ deletedCount: number }>(
            `${apiUrl}/videos/${courseId}`
        );
    }
}
