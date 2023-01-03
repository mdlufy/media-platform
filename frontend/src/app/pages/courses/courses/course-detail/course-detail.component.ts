import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Course } from 'src/app/interfaces/course.interface';
import { CoursesStoreService } from '../../../../courses-store.service';

@Component({
    selector: 'app-course-detail',
    templateUrl: './course-detail.component.html',
    styleUrls: ['./course-detail.component.scss'],
})
export class CourseDetailComponent implements OnInit {
    public courseId: string;

    public course$!: Observable<Course>;

    constructor(
        private route: ActivatedRoute,
        private coursesStore: CoursesStoreService
    ) {
        this.courseId = this.route.snapshot.paramMap.get('id') ?? '';
    }

    ngOnInit(): void {
        this.getCourse();
    }

    private getCourse(): void {
        this.course$ = this.coursesStore.getCourse(this.courseId);
    }
}
