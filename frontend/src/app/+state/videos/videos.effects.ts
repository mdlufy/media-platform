import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { LoadingState } from '../../loading-state';
import { VideosLoadService } from './videos-load/videos-load.service';
import * as VideosActions from './videos.actions';
import { Video } from './videos.reducer';


@Injectable()
export class VideosEffects {
    loadVideosByCourseId$ = createEffect(() =>
        this.actions$.pipe(
            ofType(VideosActions.loadVideosByCourseId),
            tap(() => this.store$.dispatch(VideosActions.setVideosLoadingState({ loadingState: LoadingState.LOADING }))),
            switchMap(({ courseId }) =>
                this.videosLoadService.getVideosByCourseId$(courseId).pipe(
                    tap(() => this.store$.dispatch(VideosActions.setVideosLoadingState({ loadingState: LoadingState.SUCCESS }))),
                    map((videos: Video[]) => VideosActions.loadVideosByCourseIdSuccess({ videos })),
                    catchError(() => of(VideosActions.setVideosLoadingState({ loadingState: LoadingState.LOADING_ERROR }))),
                )

            )
        )
    );

    createVideo$ = createEffect(() =>
        this.actions$.pipe(
            ofType(VideosActions.createVideo),
            tap(() => this.store$.dispatch(VideosActions.setVideosLoadingState({ loadingState: LoadingState.LOADING }))),
            switchMap(({ videoForm }) =>
                this.videosLoadService.createVideo$(videoForm).pipe(
                    tap(() => this.store$.dispatch(VideosActions.setVideosLoadingState({ loadingState: LoadingState.SUCCESS }))),
                    map((video: Video) => VideosActions.createVideoSuccess({ video })),
                    catchError(() => of(VideosActions.setVideosLoadingState({ loadingState: LoadingState.LOADING_ERROR }))),
                )
            )
        )
    );

    removeVideosFromCourseByCourseId$ = createEffect(() =>
        this.actions$.pipe(
            ofType(VideosActions.removeVideosFromCourseByCourseId),
            tap(() => this.store$.dispatch(VideosActions.setVideosLoadingState({ loadingState: LoadingState.LOADING }))),
            switchMap(({ courseId }) =>
                this.videosLoadService.removeVideosFromCourseByCourseId$(courseId).pipe(
                    tap(() => this.store$.dispatch(VideosActions.setVideosLoadingState({ loadingState: LoadingState.SUCCESS }))),
                    map(() => VideosActions.removeVideosFromCourseByCourseIdSuccess({ courseId })),
                    catchError(() => of(VideosActions.setVideosLoadingState({ loadingState: LoadingState.LOADING_ERROR }))),
                ) 
            )
        )
    );

    removeVideoById$ = createEffect(() =>
        this.actions$.pipe(
            ofType(VideosActions.removeVideoById),
            tap(() => this.store$.dispatch(VideosActions.setVideosLoadingState({ loadingState: LoadingState.LOADING }))),
            switchMap(({ videoId }) =>
                this.videosLoadService.removeVideoById$(videoId).pipe(
                    tap(() => this.store$.dispatch(VideosActions.setVideosLoadingState({ loadingState: LoadingState.SUCCESS }))),
                    map(() => VideosActions.removeVideoByIdSuccess({ videoId })),
                    catchError(() => of(VideosActions.setVideosLoadingState({ loadingState: LoadingState.LOADING_ERROR }))),
                )
            )
        )
    )

    constructor(
        private actions$: Actions,
        private store$: Store,
        private videosLoadService: VideosLoadService
    ) {}
}