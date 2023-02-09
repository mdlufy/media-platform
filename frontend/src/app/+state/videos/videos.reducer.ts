import { createReducer, on } from '@ngrx/store';
import { LoadingState } from './../../loading-state';
import * as VideosActions from './videos.actions';

export interface Video {
    id: string;
    title: string;
    coverImage: string;
    video: string;
}

export interface VideosState {
    loadingState: LoadingState;
    videos: Video[];
}

export const videosInitialState: VideosState = {
    loadingState: LoadingState.LOADING,
    videos: [],
};

export const videosReducer = createReducer(
    videosInitialState,
    on(VideosActions.setVideosLoadingState, (state, { loadingState }) => ({
        ...state,
        loadingState,
    })),
    on(VideosActions.loadVideosByCourseIdSuccess, (state, { videos }) => ({
        ...state,
        videos,
    })),
    on(VideosActions.createVideoSuccess, (state, { video }) => ({
        ...state,
        videos: [...state.videos, video],
    })),
    on(VideosActions.removeVideosFromCourseByCourseIdSuccess, (state) => ({
        ...state,
        videos: [],
    })),
    on(VideosActions.removeVideoByIdSuccess, (state, { videoId }) => ({
        ...state,
        videos: state.videos.filter(video => video.id !== videoId),
    }))
);
