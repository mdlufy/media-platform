import { Component, Inject, Injector, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TuiDialogService } from '@taiga-ui/core';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';
import { StreamVideoDialogComponent } from './../videos-dialogs/stream-video-dialog/stream-video-dialog.component';

@Component({
    selector: 'app-video-player',
    templateUrl: './video-player.component.html',
    styleUrls: ['./video-player.component.scss'],
})
export class VideoPlayerComponent implements OnInit {
    private readonly streamVideoDialog = this.dialogService.open<void>(
        new PolymorpheusComponent(StreamVideoDialogComponent, this.injector),
        {
            dismissible: true,
            size: 'auto',
        }
    );

    constructor(
        @Inject(TuiDialogService)
        private readonly dialogService: TuiDialogService,
        @Inject(Injector) private readonly injector: Injector,
        private readonly router: Router,
        private readonly route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.showStreamVideoDialog();
    }

    public showStreamVideoDialog(): void {
        this.streamVideoDialog.subscribe({
            next: (data) => {
                console.info(`Dialog emitted data = ${data}`);
            },
            complete: () => {
                this.navigateToCourses();

                console.info(`Dialog closed`);
            },
        });
    }

    private navigateToCourses() {
        this.router.navigate(['../../'], {
            relativeTo: this.route,
            replaceUrl: true,
        });
    }
}
