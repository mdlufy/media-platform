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

    public fetchVideo$(videoId: string): Observable<Video> {
        const options = {
            params: {
                videoId,
            },
        };

        return this.http.get<Video>(`${apiUrl}/video`, options);
    }

    public uploadVideo$(body: FormData) {
        return this.http.post(`${apiUrl}/video`, body);
    }

    public deleteVideo$(videoId: string) {
        return this.http.delete(`${apiUrl}/video/${videoId}`);
    }
}
