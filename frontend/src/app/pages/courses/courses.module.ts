import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TuiButtonModule, TuiLinkModule, TuiModeModule } from '@taiga-ui/core';
import { CourseComponent } from './courses/course/course.component';
import { CoursesDialogsModule } from './courses/courses-dialogs/courses-dialogs.module';
import { CoursesListComponent } from './courses/courses-list/courses-list.component';
import { VideosModule } from './videos/videos.module';

import { ReactiveFormsModule } from '@angular/forms';
import { TuiLetModule } from '@taiga-ui/cdk';
import {
    TuiAccordionModule,
    TuiBreadcrumbsModule,
    TuiInputModule
} from '@taiga-ui/kit';
import { CoursesRoutingModule } from './courses-routing.module';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { RemoveCourseDialogComponent } from './courses/courses-dialogs/remove-course-dialog/remove-course-dialog.component';

@NgModule({
    declarations: [
        CoursesListComponent,
        CourseComponent,
        CourseDetailComponent,
        RemoveCourseDialogComponent,
    ],
    imports: [
        CommonModule,
        CoursesRoutingModule,
        TuiInputModule,
        ReactiveFormsModule,
        TuiLetModule,
        TuiButtonModule,
        CoursesDialogsModule,
        TuiBreadcrumbsModule,
        TuiLinkModule,
        TuiModeModule,
        VideosModule,
        TuiAccordionModule,
    ],
})
export class CoursesModule {}
