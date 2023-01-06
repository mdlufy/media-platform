import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { TuiDialogContext } from '@taiga-ui/core';
import { POLYMORPHEUS_CONTEXT } from '@tinkoff/ng-polymorpheus';

@Component({
    selector: 'app-remove-course-dialog',
    templateUrl: './remove-course-dialog.component.html',
    styleUrls: ['./remove-course-dialog.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RemoveCourseDialogComponent {
    constructor(
        @Inject(POLYMORPHEUS_CONTEXT)
        private readonly context: TuiDialogContext<boolean>
    ) {}

    public submit(isRemove: boolean): void {
        isRemove
            ? this.context.completeWith(true)
            : this.context.completeWith(false);
    }
}
