import { createFeatureSelector, createSelector } from '@ngrx/store';
import { VideosState } from './videos.reducer';

export const FEATURE_VIDEOS = 'videos';

export const getVideosState = createFeatureSelector<VideosState>(FEATURE_VIDEOS);

export const getVideosLoadingState = createSelector(
    getVideosState,
    (state: VideosState) => state.loadingState
);

export const getVideos = createSelector(
    getVideosState,
    (state: VideosState) => state.videos
);