import { CoursesStoreService } from '../../../../courses-store.service';
import { CourseService } from '../../../../api/course/course.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-course-detail',
    templateUrl: './course-detail.component.html',
    styleUrls: ['./course-detail.component.scss'],
})
export class CourseDetailComponent implements OnInit {
    public courseId: string;

    // public course$!: Observable<Course>;

    constructor(private route: ActivatedRoute, private coursesStore: CoursesStoreService, private courseService: CourseService) {
        this.courseId = this.route.snapshot.paramMap.get('id') ?? '';
        // this.course$ = this.courseService.fetchCourse$('63a36008f11cf52f142f0261');
    }

    ngOnInit(): void {
    }
}
