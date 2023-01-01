import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { TuiDialogContext } from '@taiga-ui/core';
import { POLYMORPHEUS_CONTEXT } from '@tinkoff/ng-polymorpheus';

@Component({
    selector: 'create-dialog',
    templateUrl: './create-dialog.component.html',
    styleUrls: ['./create-dialog.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateDialogComponent {
    public name = '';

    constructor(
        @Inject(POLYMORPHEUS_CONTEXT)
        private readonly context: TuiDialogContext<string>
    ) {}

    get hasValue(): boolean {
        return this.name !== '';
    }

    public submit(): void {
        if (this.name !== '') {
            this.context.completeWith(this.name);
        }
    }
}
