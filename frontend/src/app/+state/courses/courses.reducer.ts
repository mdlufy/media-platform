import { createReducer, on } from '@ngrx/store';
import * as CourseActions from './courses.actions';

export interface Course {
    courseId: string;
    name: string;
}

export interface CoursesState {
    loadingState: string | null;
    courses: Course[];
}

export const coursesInitialState: CoursesState = {
    loadingState: null,
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
        courses: state.courses.filter((course) => course.courseId !== courseId),
    })),
    on(CourseActions.createCourseSuccess, (state, { course }) => ({
        ...state,
        courses: [...state.courses, course],
    })),
);
