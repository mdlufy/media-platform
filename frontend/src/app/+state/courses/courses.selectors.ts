import { CoursesState } from './courses.reducer';
import { createFeatureSelector, createSelector } from "@ngrx/store" 

export const FEATURE_COURSES = 'courses';

export const getCoursesState = createFeatureSelector<CoursesState>(FEATURE_COURSES);


export const getCoursesLoadingState = createSelector(
    getCoursesState,
    (state: CoursesState) => state.loadingState
);

export const getCourses = createSelector(
    getCoursesState,
    (state: CoursesState) => state.courses
);
