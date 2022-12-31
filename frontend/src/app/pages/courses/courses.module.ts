import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CourseComponent } from './courses/course/course.component';
import { CoursesListComponent } from './courses/courses-list/courses-list.component';
import { VideosModule } from './videos/videos.module';

import { CoursesRoutingModule } from './courses-routing.module';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { TuiInputModule } from '@taiga-ui/kit';
import { ReactiveFormsModule } from '@angular/forms';
import { TuiLetModule } from '@taiga-ui/cdk';

@NgModule({
    declarations: [
        CoursesListComponent,
        CourseComponent,
        CourseDetailComponent,
    ],
    imports: [
        CommonModule,
        CoursesRoutingModule,
        VideosModule,
        TuiInputModule,
        ReactiveFormsModule,
        TuiLetModule,
    ],
})
export class CoursesModule {}
