import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Video } from 'src/app/+state/videos/videos.reducer';
import { VideoForm } from 'src/app/interfaces/video-form';
import { VideoDto } from 'src/app/interfaces/video.dto';
import { apiUrl } from './../../config';

@Injectable({
    providedIn: 'root',
})
export class VideosService {
    constructor(private readonly http: HttpClient) {}

    public fetchVideos$(): Observable<VideoDto[]> {
        return this.http.get<VideoDto[]>(`${apiUrl}/videos`);
    }

    public fetchVideosByCourseId$(courseId: string): Observable<VideoDto[]> {
        return this.http.get<VideoDto[]>(`${apiUrl}/videos/${courseId}`);
    }

    public deleteVideos$(): Observable<{ deletedCount: number }> {
        return this.http.delete<{ deletedCount: number }>(`${apiUrl}/videos`);
    }

    public deleteVideosByCourseId$(courseId: string) {
        return this.http.delete(`${apiUrl}/videos/${courseId}`);
    }

    public fetchVideoById$(videoId: string): Observable<Video> {
        const options = {
            params: {
                videoId,
            },
        };

        return this.http.get<Video>(`${apiUrl}/video`, options);
    }

    public uploadVideo$(videoForm: VideoForm): Observable<VideoDto> {
        return this.http.post<VideoDto>(`${apiUrl}/video`, videoForm);
    }

    public deleteVideoById$(videoId: string) {
        return this.http.delete(`${apiUrl}/video/${videoId}`);
    }
}
