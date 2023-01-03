import { ActivatedRoute } from '@angular/router';
import {
    ChangeDetectionStrategy,
    Component,
    Inject,
    OnInit,
} from '@angular/core';
import { TuiDialogContext } from '@taiga-ui/core';
import { POLYMORPHEUS_CONTEXT } from '@tinkoff/ng-polymorpheus';
import { apiUrl } from 'src/app/config';

@Component({
    selector: 'app-stream-video-dialog',
    templateUrl: './stream-video-dialog.component.html',
    styleUrls: ['./stream-video-dialog.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StreamVideoDialogComponent implements OnInit {
    public videoUrl = '';
    public videoId = '';

    constructor(
        @Inject(POLYMORPHEUS_CONTEXT)
        private readonly context: TuiDialogContext<void>,
        private readonly route: ActivatedRoute
    ) {
        this.videoId = this.route.snapshot.paramMap.get('id') ?? '';
    }

    ngOnInit(): void {
        this.setVideoUrl();
    }

    private setVideoUrl() {
        this.videoUrl = `${apiUrl}/video/${this.videoId}`;
    }
}
