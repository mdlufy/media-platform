import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from 'src/app/config';
import { VideoForm } from 'src/app/interfaces/video-form';
import { Video } from '../../interfaces/video';

@Injectable({
    providedIn: 'root',
})
export class VideoService {
    constructor(private readonly http: HttpClient) {}

    public uploadVideo$(video: VideoForm) {
        return this.http.post(`${apiUrl}/video`, video);
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
