import { apiUrl } from './../../config';
import { Course } from './../../interfaces/course.interface';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class CoursesService {
    constructor(private readonly http: HttpClient) {}

    public fetchCourses$(): Observable<Course[]> {
        return this.http.get<Course[]>(`${apiUrl}/courses`);
    }

    public deleteCourses$(): Observable<{ deletedCount: number }> {
        return this.http.delete<{ deletedCount: number }>(`${apiUrl}/courses`);
    }

    public fetchCoursesByName$(courseName: string): Observable<Course[]> {
        const options = {
            params: {
                courseName,
            },
        };
        return this.http.get<Course[]>(`${apiUrl}/courses/search`, options);
    }
}
