import { Observable } from 'rxjs';
import { apiUrl } from 'src/app/config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CourseDto } from 'src/app/interfaces/course.dto';
import { CourseForm } from 'src/app/interfaces/course-form';

@Injectable({
    providedIn: 'root',
})
export class CourseService {
    constructor(private readonly http: HttpClient) {}

    public fetchCourse$(courseId: string): Observable<CourseDto> {
        return this.http.get<CourseDto>(`${apiUrl}/course/${courseId}`);
    }

    public createCourse$(course: CourseForm): Observable<CourseDto> {
        return this.http.post<CourseDto>(`${apiUrl}/course`, course);
    }

    public deleteCourse$(courseId: string) {
        return this.http.delete(`${apiUrl}/course/${courseId}`);
    }
}
