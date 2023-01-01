import { Observable } from 'rxjs';
import { apiUrl } from 'src/app/config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from 'src/app/interfaces/course.interface';

@Injectable({
    providedIn: 'root',
})
export class CourseService {
    constructor(private readonly http: HttpClient) {}

    public fetchCourse$(courseId: string): Observable<Course> {
        const queryParams = { courseId: courseId };

        return this.http.get<Course>(`${apiUrl}/course`, { params: queryParams });
    }

    public deleteCourse$(courseId: string) {
        return this.http.delete(`${apiUrl}/course/${courseId}`);
    }

    public createCourse$(body: {name: string}) {
        return this.http.post(`${apiUrl}/course`, body);
    }
}
