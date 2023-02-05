import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TuiPreviewModule } from '@taiga-ui/addon-preview';
import { TuiMediaModule, TuiLetModule } from '@taiga-ui/cdk';
import { TuiButtonModule } from '@taiga-ui/core';
import { VideosLoadService } from 'src/app/+state/videos/videos-load/videos-load.service';
import { VideosEffects } from 'src/app/+state/videos/videos.effects';
import { videosReducer } from 'src/app/+state/videos/videos.reducer';
import { FEATURE_VIDEOS } from './../../../+state/videos/videos.selectors';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { VideoComponent } from './video/video.component';
import { VideosDataService } from './videos-data.service';
import { VideosDialogsModule } from './videos-dialogs/videos-dialogs.module';
import { VideosListComponent } from './videos-list/videos-list.component';

const EFFECTS_LIST = [VideosEffects];

@NgModule({
    declarations: [VideosListComponent, VideoComponent, VideoPlayerComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        VideosDialogsModule,
        TuiButtonModule,
        TuiMediaModule,
        TuiPreviewModule,
        TuiLetModule,
        EffectsModule.forFeature(EFFECTS_LIST),
        StoreModule.forFeature(FEATURE_VIDEOS, videosReducer),

    ],
    providers: [VideosLoadService, VideosDataService],
    exports: [VideosListComponent, VideoComponent, VideoPlayerComponent],
})
export class VideosModule {}
