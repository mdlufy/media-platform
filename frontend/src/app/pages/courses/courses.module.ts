import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TuiButtonModule } from '@taiga-ui/core';
import { CourseComponent } from './courses/course/course.component';
import { CoursesListComponent } from './courses/courses-list/courses-list.component';
import { DialogsModule } from './courses/dialogs/dialogs.module';
import { VideosModule } from './videos/videos.module';

import { ReactiveFormsModule } from '@angular/forms';
import { TuiLetModule } from '@taiga-ui/cdk';
import { TuiInputModule } from '@taiga-ui/kit';
import { CoursesRoutingModule } from './courses-routing.module';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';

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
        TuiButtonModule,
        DialogsModule,
    ],
})
export class CoursesModule {}
