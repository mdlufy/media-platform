import { VideoForm } from './../../interfaces/video-form';
import { LoadingState } from './../../loading-state';
import { createAction, props } from "@ngrx/store";
import { Video } from './videos.reducer';


export const getVideosLoadingState = createAction(
    '[Videos Page] Get Videos Loading State',
);

export const setVideosLoadingState = createAction(
    '[Videos Page] Set Videos Loading State',
    props<{ loadingState: LoadingState }>(),
);

export const loadVideosByCourseId = createAction(
    '[Videos Page] Load Videos By Course Id',
    props<{ courseId: string }>(),
);

export const loadVideosByCourseIdSuccess = createAction(
    '[Videos Page] Load Videos By Course Id Success',
    props<{ videos: Video[] }>(),
);

export const removeVideosFromCourseByCourseId = createAction(
    '[Videos Page] Remove Videos From Course By Course Id',
    props<{ courseId: string }>(), 
);

export const removeVideosFromCourseByCourseIdSuccess = createAction(
    '[Videos Page] Remove Videos From Course By Course Id Success',
    props<{ courseId: string }>(), 
);

export const createVideo = createAction(
    '[Videos Page] Create Video',
    props<{ videoForm: VideoForm }>()
);

export const createVideoSuccess = createAction(
    '[Videos Page] Create Video Success',
    props<{ video: Video }>(),
);

export const removeVideoById = createAction(
    '[Videos Page] Remove Video By Id',
    props<{ videoId: string }>(),
)
;
export const removeVideoByIdSuccess = createAction(
    '[Videos Page] Remove Video By Id Success',
    props<{ videoId: string }>(),
);