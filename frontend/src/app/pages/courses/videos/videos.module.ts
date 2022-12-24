import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { VideoComponent } from './video/video.component';
import { VideosListComponent } from './videos-list/videos-list.component';

@NgModule({
    declarations: [VideosListComponent, VideoComponent],
    imports: [CommonModule, ReactiveFormsModule],
    exports: [VideosListComponent, VideoComponent],
})
export class VideosModule {}
