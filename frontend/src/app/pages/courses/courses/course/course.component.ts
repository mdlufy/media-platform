import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from 'src/app/+state/courses/courses.reducer';

@Component({
    selector: 'app-course',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.scss'],
})
export class CourseComponent {
    @Input() course: Course;

    @Output() openCourse = new EventEmitter<string>();

    @Output() removeCourse = new EventEmitter<string>();

    constructor() {}
}
