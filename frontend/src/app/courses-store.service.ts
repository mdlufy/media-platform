import { Injectable } from '@angular/core';
import { CourseService } from './api/course/course.service';
import { CoursesService } from './api/courses/courses.service';
import { Course } from './interfaces/course.interface';
import { Store } from './store-creator';

@Injectable({
    providedIn: 'root',
})
export class CoursesStoreService {
    public coursesData: Store<Course[]> = new Store<Course[]>([]);

    constructor(
        private coursesService: CoursesService,
        private courseService: CourseService
    ) {}

    public fetchCourses() {
        this.coursesService
            .fetchCourses$()
            .subscribe((data) => this.coursesData.setState(data));
    }

    public fetchCourse(id: string) {
        return this.courseService.fetchCourse$(id);
    }

    public deleteCourses() {
        this.coursesService
            .deleteCourses$()
            .subscribe(() => this.coursesData.setState([]));
    }

    public removeCourse(id: string) {
        this.courseService
            .deleteCourse$(id)
            .subscribe(() =>
                this.coursesData.setState(
                    this.coursesData.state.filter((course) => course._id !== id)
                )
            );
    }
}
