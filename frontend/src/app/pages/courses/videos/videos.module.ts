import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TuiMediaModule } from '@taiga-ui/cdk';
import { TuiButtonModule } from '@taiga-ui/core';
import { VideoComponent } from './video/video.component';
import { VideosDialogsModule } from './videos-dialogs/videos-dialogs.module';
import { VideosListComponent } from './videos-list/videos-list.component';
import { VideosRoutingModule } from './videos-routing.module';

@NgModule({
    declarations: [VideosListComponent, VideoComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        VideosDialogsModule,
        TuiButtonModule,
        TuiMediaModule,
        VideosRoutingModule,
    ],
    exports: [VideosListComponent, VideoComponent],
})
export class VideosModule {}
