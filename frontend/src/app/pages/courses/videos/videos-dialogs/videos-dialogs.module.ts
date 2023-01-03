import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiAutoFocusModule, TuiLetModule } from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiDataListModule,
    TuiLabelModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {
    TuiDataListWrapperModule,
    TuiInputFilesModule,
    TuiInputModule,
    TuiSelectModule,
    TuiSliderModule,
} from '@taiga-ui/kit';
import { CreateDialogComponent } from './create-dialog/create-dialog.component';
import { RemoveDialogComponent } from './remove-dialog/remove-dialog.component';
import { StreamVideoDialogComponent } from './stream-video-dialog/stream-video-dialog.component';

@NgModule({
    imports: [
        CommonModule,
        TuiButtonModule,
        TuiInputModule,
        TuiTextfieldControllerModule,
        TuiSliderModule,
        TuiAutoFocusModule,
        ReactiveFormsModule,
        TuiInputFilesModule,
        TuiSelectModule,
        TuiDataListModule,
        TuiDataListWrapperModule,
        TuiLetModule,
        TuiLabelModule,
        FormsModule,
    ],
    declarations: [
        CreateDialogComponent,
        RemoveDialogComponent,
        StreamVideoDialogComponent,
    ],
    exports: [
        CreateDialogComponent,
        RemoveDialogComponent,
        StreamVideoDialogComponent,
    ],
})
export class VideosDialogsModule {}
