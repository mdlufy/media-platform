import { Component, Inject, Injector, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TuiDialogService } from '@taiga-ui/core';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';
import { debounceTime, distinctUntilChanged, Observable, tap } from 'rxjs';
import { CoursesStoreService } from 'src/app/courses-store.service';
import { Course } from 'src/app/interfaces/course.interface';
import { CreateDialogComponent } from '../courses-dialogs/create-dialog/create-dialog.component';
import { RemoveDialogComponent } from '../courses-dialogs/remove-dialog/remove-dialog.component';

@Component({
    selector: 'app-courses-list',
    templateUrl: './courses-list.component.html',
    styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent implements OnInit {
    public courses$: Observable<Course[]>;

    public readonly searchForm = new FormControl();

    public readonly breadcrumbItems = [
        {
            caption: `Главная`,
            routerLink: `../`,
        },
        {
            caption: `Курсы`,
            routerLink: `./`,
            // routerLinkActiveOptions: { exact: true },
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
        private coursesStore: CoursesStoreService,
        private router: Router,
        private route: ActivatedRoute
    ) {
        this.courses$ = coursesStore.coursesData.state$;
    }

    ngOnInit(): void {
        this.getCourses();
        this.subscribeOnSearchForm();
    }

    public openCourse(id: string) {
        this.router.navigate(['./', id], { relativeTo: this.route });
    }

    public onDeleteCourse(id: string) {
        this.coursesStore.removeCourse(id);
    }

    public handleSearchForm(value: string): void {
        const searchValue = value ? value.trim() : value;

        if (searchValue?.length) {
            this.getCoursesByName(searchValue);
        } else {
            this.getCourses();
        }
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
        const form = {
            name: courseName,
        };

        this.coursesStore.createCourse(form);
    }

    private handleRemoveCourses(isRemove: boolean) {
        if (isRemove) {
            this.coursesStore.removeCourses();
        }
    }

    private subscribeOnSearchForm(): void {
        this.searchForm.valueChanges
            .pipe(
                debounceTime(800),
                distinctUntilChanged(),
                tap((data) => console.log(data))
            )
            .subscribe((value: string) => this.handleSearchForm(value));
    }

    private getCoursesByName(courseName: string): void {
        this.coursesStore.getCoursesByName(courseName);
    }

    private getCourses(): void {
        this.coursesStore.getCourses();
    }
}
