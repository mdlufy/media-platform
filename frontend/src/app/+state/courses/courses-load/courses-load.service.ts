import { Injectable } from '@angular/core';
import { catchError, EMPTY, map, Observable, of } from 'rxjs';
import { CoursesService } from './../../../api/courses/courses.service';
import { CourseDto } from '../../../interfaces/course.dto';
import { Course } from '../courses.reducer';
import { CourseForm } from 'src/app/interfaces/course-form';
import { CourseService } from 'src/app/api/course/course.service';
import { mapCourseDtoToCourse } from '../../../helpers/course-mapping.helper';

@Injectable()
export class CoursesLoadService {
    constructor(private coursesService: CoursesService, private courseService: CourseService) {}

    public getCourses$(): Observable<Course[]> {
        return this.coursesService
            .fetchCourses$()
            .pipe(
                map((courses: CourseDto[]) => courses.map((course: CourseDto) => mapCourseDtoToCourse(course))),
            );
    }

    public getCoursesByName$(courseName: string): Observable<Course[]> {
        return this.coursesService
            .fetchCoursesByName$(courseName)
            .pipe(
                map((courses: CourseDto[]) => courses.map((course: CourseDto) => mapCourseDtoToCourse(course))),
            );
    }

    public createCourse$(course: CourseForm): Observable<Course> {
        return this.courseService
            .createCourse$(course)
            .pipe(
                map((course: CourseDto) => mapCourseDtoToCourse(course)),
            )
    }
}
