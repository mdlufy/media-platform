import { apiUrl } from './../../config';
import { CourseDto } from '../../interfaces/course.dto';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CourseForm } from 'src/app/interfaces/course-form';

@Injectable({
    providedIn: 'root',
})
export class CoursesService {
    constructor(private readonly http: HttpClient) {}

    public fetchCourses$(): Observable<CourseDto[]> {
        return this.http.get<CourseDto[]>(`${apiUrl}/courses`);
    }

    public fetchCoursesByName$(courseName: string): Observable<CourseDto[]> {
        const options = {
            params: {
                courseName,
            },
        };
        return this.http.get<CourseDto[]>(`${apiUrl}/courses/search`, options);
    }

    public fetchCourseById$(courseId: string): Observable<CourseDto> {
        return this.http.get<CourseDto>(`${apiUrl}/course/${courseId}`);
    }


    public deleteCourseById$(courseId: string) {
        return this.http.delete(`${apiUrl}/course/${courseId}`);
    }

    public deleteCourses$() {
        return this.http.delete(`${apiUrl}/courses`);
    }

    public createCourse$(course: CourseForm): Observable<CourseDto> {
        return this.http.post<CourseDto>(`${apiUrl}/course`, course);
    }
}
