import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { CoursesListComponent } from './courses/courses-list/courses-list.component';
import { VideoPlayerComponent } from './videos/video-player/video-player.component';

const routes: Routes = [
    { path: '', component: CoursesListComponent },
    { path: ':id/video/:id', component: VideoPlayerComponent },
    { path: ':id', component: CourseDetailComponent },
    // {
    //     path: ':id',
    //     component: CourseDetailComponent,
    //     loadChildren: () =>
    //         import('./videos/videos.module').then((m) => m.VideosModule),
    // },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CoursesRoutingModule {}
