import { LoadingState } from 'src/app/loading-state';
import { Component, Inject, Injector, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TuiDialogService } from '@taiga-ui/core';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';
import { Observable } from 'rxjs';
import { Video } from 'src/app/+state/videos/videos.reducer';
import { VideoForm } from 'src/app/interfaces/video-form';
import { VideosDataService } from '../videos-data.service';
import { CreateDialogComponent } from '../videos-dialogs/create-dialog/create-dialog.component';
import { RemoveDialogComponent } from '../videos-dialogs/remove-dialog/remove-dialog.component';

@Component({
    selector: 'app-videos-list',
    templateUrl: './videos-list.component.html',
    styleUrls: ['./videos-list.component.scss'],
})
export class VideosListComponent implements OnInit {
    @Input() public courseId: string;

    public videos$: Observable<Video[]>;
    public loadingState$: Observable<LoadingState>;

    public loadingState = LoadingState;

    private readonly createDialog = this.dialogService.open<VideoForm>(
        new PolymorpheusComponent(CreateDialogComponent, this.injector),
        {
            dismissible: true,
            label: `Новое видео`,
        }
    );

    private readonly removeDialog = this.dialogService.open<boolean>(
        new PolymorpheusComponent(RemoveDialogComponent, this.injector),
        {
            dismissible: true,
            label: 'Удалить все видео?',
        }
    );

    constructor(
        @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
        @Inject(Injector) private readonly injector: Injector,
        private readonly router: Router,
        private readonly route: ActivatedRoute,
        private readonly videosDataSerivce: VideosDataService
    ) {
        this.videos$ = this.videosDataSerivce.videos$;
        this.loadingState$ = this.videosDataSerivce.loadingState$;
    }

    ngOnInit(): void {
        this.videosDataSerivce.loadVideosByCourseId(this.courseId);
    }

    public openVideo(id: string) {
        this.router.navigate(['./video', id], {
            relativeTo: this.route,
            replaceUrl: true,
        });
    }

    public onDeleteVideo(videoId: string) {
        this.videosDataSerivce.removeVideoById(videoId);
    }

    public showCreateVideoDialog(): void {
        this.createDialog.subscribe({
            next: (data) => {
                this.handleCreateVideo(data);
                console.info(`Dialog emitted data = ${data}`);
            },
            complete: () => {
                console.info(`Dialog closed`);
            },
        });
    }

    public showRemoveVideosDialog(): void {
        this.removeDialog.subscribe({
            next: (data) => {
                this.handleRemoveVideos(data);
                console.info(`Dialog emitted data = ${data}`);
            },
            complete: () => {
                console.info(`Dialog closed`);
            },
        });
    }

    private handleCreateVideo(videoForm: VideoForm): void {
        this.videosDataSerivce.createVideo(videoForm);
    }

    private handleRemoveVideos(isRemove: boolean): void {
        if (isRemove) {
            this.videosDataSerivce.removeVideosFromCourseByCourseId(this.courseId);
        }
    }
}
