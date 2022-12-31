import { ActivatedRoute, Router } from '@angular/router';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
    BehaviorSubject,
    debounceTime,
    distinctUntilChanged,
    filter,
    map,
    Observable,
    takeUntil,
    tap,
} from 'rxjs';
import { CoursesStoreService } from 'src/app/courses-store.service';
import { Course } from 'src/app/interfaces/course.interface';

@Component({
    selector: 'app-courses-list',
    templateUrl: './courses-list.component.html',
    styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent implements OnInit {
    public courses$: Observable<Course[]>;

    // public courses$ = new BehaviorSubject<Course[]>([]);

    public readonly searchForm = new FormControl();

    private searchValue: string | null = null;

    constructor(
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

    public onDeleteCourse(id: string) {
        this.coursesStore.removeCourse(id);
    }

    public handleSearchForm(value: string): void {
        const searchValue = value ? value.trim() : value;

        this.searchValue = searchValue;

        if (searchValue?.length) {
            this.getCoursesByName(searchValue);
        } else {
            this.getCourses();
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

    public openCourse(id: string) {
        this.router.navigate(['./', id], { relativeTo: this.route });
    }
}
