import { VideoStoreService } from './../../../../video-store.service';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';
import { TuiDialogService } from '@taiga-ui/core';
import { Component, OnInit, Injector, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Course } from 'src/app/interfaces/course.interface';
import { CoursesStoreService } from '../../../../courses-store.service';
import { RemoveCourseDialogComponent } from '../courses-dialogs/remove-course-dialog/remove-course-dialog.component';

@Component({
    selector: 'app-course-detail',
    templateUrl: './course-detail.component.html',
    styleUrls: ['./course-detail.component.scss'],
})
export class CourseDetailComponent implements OnInit {
    public courseId: string;

    public course$!: Observable<Course>;

    private readonly removeDialog = this.dialogService.open<boolean>(
        new PolymorpheusComponent(RemoveCourseDialogComponent, this.injector),
        {
            dismissible: true,
            label: 'Удалить курс?',
        }
    );

    constructor(
        private route: ActivatedRoute,
        private coursesStore: CoursesStoreService,
        private readonly router: Router,
        @Inject(TuiDialogService)
        private readonly dialogService: TuiDialogService,
        @Inject(Injector) private readonly injector: Injector
    ) {
        this.courseId = this.route.snapshot.paramMap.get('id') ?? '';
    }

    ngOnInit(): void {
        this.getCourse();
    }

    private getCourse(): void {
        this.course$ = this.coursesStore.getCourse(this.courseId);
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
            this.coursesStore.removeCourse(this.courseId);

            this.router.navigate(['../'], { relativeTo: this.route });
        }
    }
}
