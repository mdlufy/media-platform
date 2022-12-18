import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from 'src/app/config';
import { Video } from '../../interfaces/video.interface';

@Injectable({
    providedIn: 'root',
})
export class VideoService {
    constructor(private readonly http: HttpClient) {}

    public fetchVideo$(id: string): Observable<Video> {
        const queryParams = { id: id };

        return this.http.get<Video>(`${apiUrl}/video`, { params: queryParams });
    }

    public fetchVideos$(): Observable<Video[]> {
        return this.http.get<Video[]>(`${apiUrl}/videos`);
    }

    public uploadVideo$(body: FormData) {
        return this.http.post(`${apiUrl}/video`, body);
    }

    public deleteVideo$(id: string) {
        return this.http.delete(`${apiUrl}/video/${id}`);
    }
}
