import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CoursesStoreService } from 'src/app/courses-store.service';
import { Course } from 'src/app/interfaces/course.interface';

@Component({
    selector: 'app-courses-list',
    templateUrl: './courses-list.component.html',
    styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent implements OnInit {
    public courses$: Observable<Course[]>;

    constructor(private coursesStore: CoursesStoreService) {
        this.courses$ = coursesStore.coursesData.state$;
    }

    ngOnInit(): void {
        this.coursesStore.fetchCourses();
    }

    public onDeleteCourse(id: string) {
        this.coursesStore.removeCourse(id);
    }
}
