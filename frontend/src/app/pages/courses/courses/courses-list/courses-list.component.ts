import { CoursesDataService } from './../../courses-data.service';
import { Component, Inject, Injector, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TuiDialogService } from '@taiga-ui/core';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';
import { debounceTime, distinctUntilChanged, Observable, tap } from 'rxjs';
import { Course } from 'src/app/+state/courses/courses.reducer';
import { CreateDialogComponent } from '../courses-dialogs/create-dialog/create-dialog.component';
import { RemoveDialogComponent } from '../courses-dialogs/remove-dialog/remove-dialog.component';
import { LoadingState } from 'src/app/loading-state';

@Component({
    selector: 'app-courses-list',
    templateUrl: './courses-list.component.html',
    styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent implements OnInit {
    public courses$: Observable<Course[]>;
    public loadingState$: Observable<LoadingState>;

    public readonly loadingState = LoadingState;

    public readonly searchForm = new FormControl();

    public readonly breadcrumbItems = [
        {
            caption: `Главная`,
            routerLink: `../`,
        },
        {
            caption: `Курсы`,
            routerLink: `./`,
        },
    ];

    private readonly createDialog = this.dialogService.open<string>(
        new PolymorpheusComponent(CreateDialogComponent, this.injector),
        {
            dismissible: true,
            label: `Новый курс`,
        }
    );

    private readonly removeDialog = this.dialogService.open<boolean>(
        new PolymorpheusComponent(RemoveDialogComponent, this.injector),
        {
            dismissible: true,
            label: 'Удалить курсы?',
        }
    );

    constructor(
        @Inject(TuiDialogService)
        private readonly dialogService: TuiDialogService,
        @Inject(Injector) private readonly injector: Injector,
        private router: Router,
        private route: ActivatedRoute,
        private coursesDataService: CoursesDataService,
    ) {
        this.courses$ = this.coursesDataService.courses$;
        this.loadingState$ = this.coursesDataService.loadingState$;
    }

    ngOnInit(): void {
        this.initObservables();
        this.subscribeOnSearchForm();
    }

    public openCourse(id: string) {
        this.router.navigate(['./', id], { relativeTo: this.route });
    }

    public onRemoveCourse(courseId: string) {
        this.coursesDataService.removeCourseById(courseId);
    }

    public handleSearchForm(value: string): void {
        const searchValue = value ? value.trim() : value;

        if (searchValue?.length) {
            this.coursesDataService.loadCoursesByName(searchValue);

            return;
        }

        this.coursesDataService.loadCourses();
    }

    public showCreateDialog(): void {
        this.createDialog.subscribe({
            next: (data) => {
                this.handleCreateCourse(data);
                console.info(`Dialog emitted data = ${data}`);
            },
            complete: () => {
                console.info(`Dialog closed`);
            },
        });
    }

    public showRemoveDialog(): void {
        this.removeDialog.subscribe({
            next: (data) => {
                this.handleRemoveCourses(data);
                console.info(`Dialog emitted data = ${data}`);
            },
            complete: () => {
                console.info(`Dialog closed`);
            },
        });
    }

    private handleCreateCourse(courseName: string) {
        const course = {
            name: courseName,
        };

        this.coursesDataService.createCourse(course);
    }

    private handleRemoveCourses(isRemove: boolean): void {
        if (isRemove) {
            this.coursesDataService.removeCourses();
        }
    }

    private subscribeOnSearchForm(): void {
        this.searchForm.valueChanges
            .pipe(
                debounceTime(600),
                distinctUntilChanged(),
                tap((data) => console.log(data))
            )
            .subscribe((value: string) => this.handleSearchForm(value));
    }

    private initObservables(): void {
        this.coursesDataService.loadCourses();
    }
}
