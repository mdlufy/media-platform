import { getVideos, getVideosLoadingState } from './../../../+state/videos/videos.selectors';
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { LoadingState } from 'src/app/loading-state';
import { Video } from 'src/app/+state/videos/videos.reducer';
import * as VideosActions from '../../../+state/videos/videos.actions';
import { VideoForm } from 'src/app/interfaces/video-form';

@Injectable()
export class VideosDataService {
    public get loadingState$(): Observable<LoadingState> {
        return this.store$.select(getVideosLoadingState);
    }

    public get videos$(): Observable<Video[]> {
        return this.store$.select(getVideos);
    }

    constructor(private store$: Store) {}

    public loadVideosByCourseId(courseId: string): void {
        this.store$.dispatch(VideosActions.loadVideosByCourseId({ courseId }));
    }

    public createVideo(videoForm: VideoForm): void {
        this.store$.dispatch(VideosActions.createVideo({ videoForm }));
    }

    public removeVideosFromCourseByCourseId(courseId: string): void {
        this.store$.dispatch(VideosActions.removeVideosFromCourseByCourseId({ courseId }));
    }

    public removeVideoById(videoId: string): void {
        this.store$.dispatch(VideosActions.removeVideoById({ videoId }));
    }
}