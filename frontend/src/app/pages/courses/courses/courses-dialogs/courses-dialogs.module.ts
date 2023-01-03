import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiAutoFocusModule } from '@taiga-ui/cdk';
import { TuiButtonModule, TuiLabelModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { TuiInputModule, TuiSliderModule } from '@taiga-ui/kit';
import { CreateDialogComponent } from './create-dialog/create-dialog.component';
import { RemoveDialogComponent } from './remove-dialog/remove-dialog.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiButtonModule,
        TuiInputModule,
        TuiTextfieldControllerModule,
        TuiSliderModule,
        TuiAutoFocusModule,
        TuiLabelModule,
    ],
    declarations: [CreateDialogComponent, RemoveDialogComponent],
    exports: [CreateDialogComponent, RemoveDialogComponent],
})
export class CoursesDialogsModule {}
