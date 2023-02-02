import { Component, Inject, Injector, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TuiDialogService } from '@taiga-ui/core';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';
import { Observable } from 'rxjs';
import { Video } from 'src/app/interfaces/video';
import { VideoStoreService } from '../../../../video-store.service';
import { CreateDialogComponent } from '../videos-dialogs/create-dialog/create-dialog.component';
import { RemoveDialogComponent } from '../videos-dialogs/remove-dialog/remove-dialog.component';

@Component({
    selector: 'app-videos-list',
    templateUrl: './videos-list.component.html',
    styleUrls: ['./videos-list.component.scss'],
})
export class VideosListComponent implements OnInit {
    @Input() public courseId = '';

    public videos$: Observable<Video[]>;

    private readonly createDialog = this.dialogService.open<FormData>(
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
        @Inject(TuiDialogService)
        private readonly dialogService: TuiDialogService,
        @Inject(Injector) private readonly injector: Injector,
        private videosStore: VideoStoreService,
        private readonly router: Router,
        private readonly route: ActivatedRoute
    ) {
        this.videos$ = videosStore.videoData.state$;
    }

    ngOnInit(): void {
        this.getVideosByCourseId(this.courseId);
    }

    public openVideo(id: string) {
        this.router.navigate(['./video', id], {
            relativeTo: this.route,
            replaceUrl: true,
        });
    }

    public onDeleteVideo(id: string) {
        this.videosStore.removeVideo(id);
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

    private handleCreateVideo(formData: FormData): void {
        this.videosStore.uploadFile(formData);
    }

    private handleRemoveVideos(isRemove: boolean): void {
        if (isRemove) {
            this.videosStore.removeVideosFromCourse(this.courseId);
        }
    }

    private getVideosByCourseId(courseId: string): void {
        this.videosStore.getVideosByCourseId(courseId);
    }
}
