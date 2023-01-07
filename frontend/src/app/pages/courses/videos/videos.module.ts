import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TuiMediaModule } from '@taiga-ui/cdk';
import { TuiButtonModule } from '@taiga-ui/core';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { VideoComponent } from './video/video.component';
import { VideosDialogsModule } from './videos-dialogs/videos-dialogs.module';
import { VideosListComponent } from './videos-list/videos-list.component';

@NgModule({
    declarations: [VideosListComponent, VideoComponent, VideoPlayerComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        VideosDialogsModule,
        TuiButtonModule,
        TuiMediaModule,
    ],
    exports: [VideosListComponent, VideoComponent, VideoPlayerComponent],
})
export class VideosModule {}
