import { VideoComponent } from './../components/video/video.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { VideosListComponent } from './videos-list/videos-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
    declarations: [VideosListComponent, UserProfileComponent, VideoComponent],
    imports: [
        CommonModule,
        PagesRoutingModule,
        ReactiveFormsModule,
        FormsModule,
    ],
})
export class PagesModule {}
