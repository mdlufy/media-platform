import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TuiButtonModule, TuiLabelModule } from '@taiga-ui/core';
import { VideoComponent } from './video/video.component';
import { VideosDialogsModule } from './videos-dialogs/videos-dialogs.module';
import { VideosListComponent } from './videos-list/videos-list.component';

@NgModule({
    declarations: [VideosListComponent, VideoComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        VideosDialogsModule,
        TuiButtonModule,
    ],
    exports: [VideosListComponent, VideoComponent],
})
export class VideosModule {}
