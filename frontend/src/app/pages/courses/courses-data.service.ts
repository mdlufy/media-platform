import { LoadingState } from 'src/app/loading-state';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Course } from 'src/app/+state/courses/courses.reducer';
import { getCourses, getLoadingState } from 'src/app/+state/courses/courses.selectors';
import { CourseForm } from 'src/app/interfaces/course-form';
import * as CoursesActions from '../../+state/courses/courses.actions';

@Injectable()
export class CoursesDataService {
    public get courses$(): Observable<Course[]> {
        return this.store$.select(getCourses);
    }

    public get loadingState$(): Observable<LoadingState> {
        return this.store$.select(getLoadingState);
    }

    constructor(private store$: Store) {}

    public loadCourses(): void {
        this.store$.dispatch(CoursesActions.loadCourses());
    }

    public loadCoursesByName(courseName: string): void {
        this.store$.dispatch(CoursesActions.loadCoursesByName({ courseName }))
    }

    public loadCoursesById(courseId: string): void {
        this.store$.dispatch(CoursesActions.loadCourseById({ courseId }))
    }

    public removeCourseById(courseId: string): void {
        this.store$.dispatch(CoursesActions.removeCourseById({ courseId }))
    }

    public removeCourses(): void {
        this.store$.dispatch(CoursesActions.removeCourses())
    }

    public createCourse(course: CourseForm): void {
        this.store$.dispatch(CoursesActions.createCourse({ course }))
    }
}
