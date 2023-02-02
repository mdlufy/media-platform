import { CoursesService } from './../../api/courses/courses.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, EMPTY, map, switchMap, tap } from 'rxjs';
import { CourseService } from 'src/app/api/course/course.service';
import { LoadingState } from 'src/app/loading-state';
import { CoursesLoadService } from './courses-load/courses-load.service';
import * as CoursesActions from './courses.actions';
import { Course } from './courses.reducer';

@Injectable()
export class CoursesEffects {
    loadCourses$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CoursesActions.loadCourses),
            tap(() => this.store$.dispatch(CoursesActions.setCoursesLoadingState({ loadingState: LoadingState.LOADING }))),
            switchMap(() =>
                this.coursesLoadService.getCourses$().pipe(
                    tap((courses: Course[]) => 
                        this.store$.dispatch(CoursesActions.setCoursesLoadingState({ 
                            loadingState: courses?.length ? LoadingState.SUCCESS : LoadingState.LOADING_ERROR
                        })) 
                    ),
                    map((courses: Course[]) => 
                        CoursesActions.loadCoursesSuccess({ courses })
                    ),
                    catchError(() => EMPTY),
                )
            ),
        )
    );

    loadCoursesByName$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CoursesActions.loadCoursesByName),
            tap(() => this.store$.dispatch(CoursesActions.setCoursesLoadingState({ loadingState: LoadingState.LOADING }))),
            switchMap(({ courseName }) =>
                this.coursesLoadService.getCoursesByName$(courseName).pipe(
                    tap((courses: Course[]) =>
                        this.store$.dispatch(CoursesActions.setCoursesLoadingState({
                            loadingState: courses?.length ? LoadingState.SUCCESS : LoadingState.LOADING_ERROR
                        })),
                    ),
                    map((courses: Course[]) => 
                        CoursesActions.loadCoursesSuccess({ courses })
                    ),
                    catchError(() => EMPTY),
                ) 
            )
        )
    )

    removeCourseById$ = createEffect(() => 
        this.actions$.pipe(
            ofType(CoursesActions.removeCourseById),
            tap(() => this.store$.dispatch(CoursesActions.setCoursesLoadingState({ loadingState: LoadingState.LOADING }))),
            switchMap(({ courseId }) => 
                this.courseService.deleteCourse$(courseId).pipe(
                    tap(() =>
                        this.store$.dispatch(CoursesActions.setCoursesLoadingState({
                            loadingState: LoadingState.SUCCESS
                        })),
                    ),
                    map(() => CoursesActions.removeCourseByIdSuccess({ courseId })),
                    catchError(() => EMPTY),
                )
            )
        ) 
    )

    removeCourses$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CoursesActions.removeCourses),
            tap(() => this.store$.dispatch(CoursesActions.setCoursesLoadingState({ loadingState: LoadingState.LOADING }))),
            switchMap(() => 
                this.coursesService.deleteCourses$().pipe(
                    tap(() =>
                        this.store$.dispatch(CoursesActions.setCoursesLoadingState({
                            loadingState: LoadingState.SUCCESS
                        })),
                    ),
                    map(() => CoursesActions.removeCoursesSuccess()),
                    catchError(() => EMPTY),
                )
            )
        )
    )

    createCourse$ = createEffect(() => 
        this.actions$.pipe(
            ofType(CoursesActions.createCourse),
            tap(() => this.store$.dispatch(CoursesActions.setCoursesLoadingState({ loadingState: LoadingState.LOADING }))),
            switchMap(({ course }) => 
                this.coursesLoadService.createCourse$(course).pipe(
                    tap((course: Course) =>
                        this.store$.dispatch(CoursesActions.setCoursesLoadingState({
                            loadingState: course ? LoadingState.SUCCESS : LoadingState.LOADING_ERROR
                        })),
                    ),
                    map((course: Course) => 
                        CoursesActions.createCourseSuccess({ course })
                    ),
                    catchError(() => EMPTY),
                )
            )
        ) 
    )

    constructor(
        private actions$: Actions,
        private store$: Store,
        private coursesLoadService: CoursesLoadService,
        private courseService: CourseService,
        private coursesService: CoursesService,
    ) {}
}
