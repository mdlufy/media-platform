import { LoadingState } from 'src/app/loading-state';
import { createReducer, on } from '@ngrx/store';
import * as CourseActions from './courses.actions';

export interface Course {
    id: string;
    name: string | null;
}

export interface CoursesState {
    loadingState: LoadingState;
    courses: Course[];
}

export const coursesInitialState: CoursesState = {
    loadingState: LoadingState.LOADING,
    courses: [],
};

export const coursesReducer = createReducer(
    coursesInitialState,
    on(CourseActions.setCoursesLoadingState, (state, { loadingState }) => ({
        ...state,
        loadingState,
    })),
    on(CourseActions.loadCoursesSuccess, (state, { courses }) => ({
        ...state,
        courses,
    })),
    on(CourseActions.removeCourses, (state) => ({
        ...state,
        courses: [],
    })),
    on(CourseActions.removeCourseByIdSuccess, (state, { courseId }) => ({
        ...state,
        courses: state.courses.filter((course) => course.id !== courseId),
    })),
    on(CourseActions.createCourseSuccess, (state, { course }) => ({
        ...state,
        courses: [...state.courses, course],
    })),
);
