import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from 'src/app/config';
import { CreateVideoInterface } from 'src/app/interfaces/create-video.interface';
import { Video } from '../../interfaces/video.interface';

@Injectable({
    providedIn: 'root',
})
export class VideoService {
    constructor(private readonly http: HttpClient) {}

    public uploadVideo$(body: FormData) {
        return this.http.post(`${apiUrl}/video`, body);
    }

    public fetchVideo$(videoId: string): Observable<Video> {
        const options = {
            params: {
                videoId,
            },
        };

        return this.http.get<Video>(`${apiUrl}/video`, options);
    }

    public deleteVideo$(videoId: string) {
        return this.http.delete(`${apiUrl}/video/${videoId}`);
    }
}
