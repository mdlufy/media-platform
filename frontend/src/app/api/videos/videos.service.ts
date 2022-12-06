import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Video } from './../../interfaces/video.interface';

const apiUrl = 'http://localhost:3002/api/v1';

@Injectable({
    providedIn: 'root',
})
export class VideosService {
    constructor(private readonly http: HttpClient) {}

    public fetchVideo$(id: string = '6387cbaa132d3f742b8274db'): Observable<Video> {
        const queryParams = { id: id };

        return this.http.get<Video>(`${apiUrl}/video`, { params: queryParams });
    }

    public fetchVideos$(): Observable<Video[]> {
        return this.http.get<Video[]>(`${apiUrl}/video`)
    }

    public uploadVideo$(body: FormData) {
        return this.http.post(`${apiUrl}/video`, body);
    }

    public deleteVideo$(id: string) {
        return this.http.delete(`${apiUrl}/video/${id}`);
    }
}
