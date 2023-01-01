import { Component, Inject } from '@angular/core';
import { TuiDialogContext } from '@taiga-ui/core';
import { POLYMORPHEUS_CONTEXT } from '@tinkoff/ng-polymorpheus';

@Component({
    selector: 'app-remove-dialog',
    templateUrl: './remove-dialog.component.html',
    styleUrls: ['./remove-dialog.component.scss'],
})
export class RemoveDialogComponent {
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
