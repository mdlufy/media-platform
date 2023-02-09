import { Component, Inject, Injector, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TuiDialogService } from '@taiga-ui/core';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';
import { Observable } from 'rxjs';
import { Course } from 'src/app/+state/courses/courses.reducer';
import { LoadingState } from 'src/app/loading-state';
import { CoursesDataService } from '../../courses-data.service';
import { RemoveCourseDialogComponent } from '../courses-dialogs/remove-course-dialog/remove-course-dialog.component';
import { CourseStore } from './course.store';

@Component({
    selector: 'app-course-detail',
    templateUrl: './course-detail.component.html',
    styleUrls: ['./course-detail.component.scss'],
    providers: [CourseStore],
})
export class CourseDetailComponent implements OnInit {
    public course$: Observable<Course>;

    public loadingState$: Observable<LoadingState>;

    public loadingState = LoadingState;

    public courseId: string;

    private readonly removeDialog = this.dialogService.open<boolean>(
        new PolymorpheusComponent(RemoveCourseDialogComponent, this.injector),
        {
            dismissible: true,
            label: 'Удалить курс?',
        }
    );

    constructor(
        private readonly courseStore: CourseStore,
        private route: ActivatedRoute,
        private courseDataService: CoursesDataService,
        private readonly router: Router,
        @Inject(TuiDialogService)
        private readonly dialogService: TuiDialogService,
        @Inject(Injector) private readonly injector: Injector
    ) {
        this.courseId = this.route.snapshot.paramMap.get('id') ?? '';

        this.course$ = this.courseStore.course$;
        this.loadingState$ = this.courseStore.loadingState$;
    }

    ngOnInit(): void {
        this.initCourseState();
        this.initCourseObservable();
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

    private initCourseState(): void {
        this.courseStore.setState({
            loadingState: LoadingState.LOADING,
            course: {
                id: this.courseId,
                name: null,
            },
        });
    }

    private initCourseObservable(): void {
        this.courseStore.getCourse(this.courseId);
    }
}
