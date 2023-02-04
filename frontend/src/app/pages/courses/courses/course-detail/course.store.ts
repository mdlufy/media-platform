import { CourseDto } from 'src/app/interfaces/course.dto';
import { LoadingState } from 'src/app/loading-state';
import { CourseService } from 'src/app/api/course/course.service';
import { ComponentStore } from '@ngrx/component-store';
import { Injectable } from '@angular/core';
import { Course } from 'src/app/+state/courses/courses.reducer';
import { catchError, map, Observable, of, switchMap, tap } from 'rxjs';
import { mapCourseDtoToCourse } from 'src/app/helpers/course-mapping.helper';

export interface CourseState {
    loadingState: LoadingState;
    course: Course;
}

@Injectable()
export class CourseStore extends ComponentStore<CourseState> {
    public readonly course$: Observable<Course> = this.select(
        (state) => state.course
    );
    public readonly loadingState$: Observable<LoadingState> = this.select(
        (state) => state.loadingState
    );

    constructor(private readonly courseService: CourseService) {
        super();
    }

    public getCourse = this.effect((courseId$: Observable<string>) => {
        return courseId$.pipe(
            switchMap((id: string) =>
                this.courseService.fetchCourseById$(id).pipe(
                    map((course: CourseDto) => mapCourseDtoToCourse(course)),
                    tap((course: Course) => {
                        this.setState({
                            loadingState: LoadingState.SUCCESS,
                            course,
                        });
                    }),
                    catchError(() => of(null))
                )
            )
        );
    });
}
