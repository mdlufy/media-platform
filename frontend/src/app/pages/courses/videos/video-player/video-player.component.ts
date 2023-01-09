import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    Inject,
    OnInit,
    TemplateRef,
    ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TuiPreviewDialogService } from '@taiga-ui/addon-preview';
import { TuiDialogContext } from '@taiga-ui/core';
import { finalize } from 'rxjs';
import { apiUrl } from './../../../../config';

@Component({
    selector: 'app-video-player',
    templateUrl: './video-player.component.html',
    styleUrls: ['./video-player.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoPlayerComponent implements OnInit, AfterViewInit {
    @ViewChild(`preview`)
    readonly preview!: TemplateRef<TuiDialogContext<void>>;

    public videoUrl = '';
    public videoId = '';

    constructor(
        @Inject(TuiPreviewDialogService)
        private readonly previewDialogService: TuiPreviewDialogService,
        private readonly router: Router,
        private readonly route: ActivatedRoute
    ) {
        this.videoId = this.route.snapshot.paramMap.get('id') ?? '';
    }

    ngOnInit(): void {
        this.setVideoUrl();
    }

    ngAfterViewInit(): void {
        this.showStream();
    }

    private setVideoUrl() {
        this.videoUrl = `${apiUrl}/video/${this.videoId}`;
    }

    private showStream(): void {
        this.previewDialogService
            .open(this.preview)
            .pipe(finalize(() => this.onCloseVideo()))
            .subscribe();
    }

    private onCloseVideo() {
        this.router.navigate(['.'], {
            relativeTo: this.route.parent,
            replaceUrl: true,
        });
    }
}
