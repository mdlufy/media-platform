import { Component, Inject, Injector, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TuiDialogService } from '@taiga-ui/core';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';
import { map, Observable } from 'rxjs';
import { Course } from 'src/app/+state/courses/courses.reducer';
import { CoursesDataService } from '../../courses-data.service';
import { RemoveCourseDialogComponent } from '../courses-dialogs/remove-course-dialog/remove-course-dialog.component';

@Component({
    selector: 'app-course-detail',
    templateUrl: './course-detail.component.html',
    styleUrls: ['./course-detail.component.scss'],
})
export class CourseDetailComponent implements OnInit {
    // TODO: разобраться почему селектор возвращает undefined
    public course$: Observable<Course | undefined>;

    public courseId: string;

    private readonly removeDialog = this.dialogService.open<boolean>(
        new PolymorpheusComponent(RemoveCourseDialogComponent, this.injector),
        {
            dismissible: true,
            label: 'Удалить курс?',
        }
    );

    constructor(
        private route: ActivatedRoute,
        private courseDataService: CoursesDataService,
        private readonly router: Router,
        @Inject(TuiDialogService)
        private readonly dialogService: TuiDialogService,
        @Inject(Injector) private readonly injector: Injector
    ) {
        this.courseId = this.route.snapshot.paramMap.get('id') ?? '';
    }

    ngOnInit(): void {
        this.initObservables();
    }

    public showRemoveCourseDialog(): void {
        this.removeDialog.subscribe({
            next: (data) => {
                this.handleRemoveCourse(data);
                console.info(`Dialog emitted data = ${data}`);
            },
            complete: () => {
                console.info(`Dialog closed`);
            },
        });
    }

    private handleRemoveCourse(isRemove: boolean): void {
        if (isRemove) {
            this.courseDataService.removeCourseById(this.courseId);

            this.router.navigate(['../'], { relativeTo: this.route });
        }
    }

    private initObservables(): void {
        this.course$ = this.courseDataService.courses$
            .pipe(
                map((courses: Course[]) => courses.find(course => course.courseId === this.courseId)),
            );
    }
}
