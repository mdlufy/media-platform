import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CourseForm } from 'src/app/interfaces/course-form';
import { mapCourseDtoToCourse } from '../../../helpers/course-mapping.helper';
import { CourseDto } from '../../../interfaces/course.dto';
import { Course } from '../courses.reducer';
import { CoursesService } from './../../../api/courses/courses.service';

@Injectable()
export class CoursesLoadService {
    constructor(private coursesService: CoursesService) {}

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
        return this.coursesService
            .createCourse$(course)
            .pipe(
                map((course: CourseDto) => mapCourseDtoToCourse(course)),
            )
    }
}
