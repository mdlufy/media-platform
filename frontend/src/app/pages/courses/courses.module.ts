import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TuiButtonModule, TuiLinkModule, TuiModeModule } from '@taiga-ui/core';
import { CourseComponent } from './courses/course/course.component';
import { CoursesDialogsModule } from './courses/courses-dialogs/courses-dialogs.module';
import { CoursesListComponent } from './courses/courses-list/courses-list.component';
import { VideosModule } from './videos/videos.module';

import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TuiLetModule } from '@taiga-ui/cdk';
import {
    TuiAccordionModule,
    TuiBreadcrumbsModule,
    TuiInputModule
} from '@taiga-ui/kit';
import { CoursesLoadService } from 'src/app/+state/courses/courses-load/courses-load.service';
import { CoursesEffects } from 'src/app/+state/courses/courses.effects';
import { coursesReducer } from 'src/app/+state/courses/courses.reducer';
import { FEATURE_COURSES } from 'src/app/+state/courses/courses.selectors';
import { CoursesDataService } from './courses-data.service';
import { CoursesRoutingModule } from './courses-routing.module';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { RemoveCourseDialogComponent } from './courses/courses-dialogs/remove-course-dialog/remove-course-dialog.component';

const EFFECTS_LIST = [CoursesEffects];

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
        TuiLetModule,
        StoreModule.forFeature(FEATURE_COURSES, coursesReducer),
        EffectsModule.forFeature(EFFECTS_LIST),
    ],
    providers: [
        CoursesLoadService,
        CoursesDataService,
    ]
})
export class CoursesModule {}
