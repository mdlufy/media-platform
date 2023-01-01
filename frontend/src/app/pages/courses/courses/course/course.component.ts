import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/interfaces/course.interface';

@Component({
    selector: 'app-course',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.scss'],
})
export class CourseComponent implements OnInit {
    @Input() course!: Course;

    @Output() onDeleteCourseEvent = new EventEmitter<string>();
    @Output() openCourse = new EventEmitter<string>();

    constructor(private router: Router, private route: ActivatedRoute) {}

    ngOnInit(): void {}
}
