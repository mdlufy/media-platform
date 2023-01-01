import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TuiDialogContext } from '@taiga-ui/core';
import { POLYMORPHEUS_CONTEXT } from '@tinkoff/ng-polymorpheus';

import { TuiFileLike } from '@taiga-ui/kit';
import { Observable, of, Subject, timer } from 'rxjs';
import { finalize, map, switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-create-dialog',
    templateUrl: './create-dialog.component.html',
    styleUrls: ['./create-dialog.component.scss'],
})
export class CreateDialogComponent implements OnInit {
    public courseId: string;

    public readonly videoName = new FormControl();
    public readonly videoFile = new FormControl();
    public readonly coverFile = new FormControl();
    public readonly courseName = new FormControl();

    readonly rejectedVideoFile$ = new Subject<TuiFileLike | null>();
    readonly loadingVideoFile$ = new Subject<TuiFileLike | null>();

    readonly loadedVideoFile$ = this.videoFile.valueChanges.pipe(
        switchMap((file) => (file ? this.makeRequestVideo(file) : of(null)))
    );

    readonly rejectedCoverFile$ = new Subject<TuiFileLike | null>();
    readonly loadingCoverFile$ = new Subject<TuiFileLike | null>();

    readonly loadedCoverFile$ = this.coverFile.valueChanges.pipe(
        switchMap((file) => (file ? this.makeRequestCover(file) : of(null)))
    );

    constructor(
        @Inject(POLYMORPHEUS_CONTEXT)
        private readonly context: TuiDialogContext<FormData, string>,
        private route: ActivatedRoute
    ) {
        this.courseId = this.route.snapshot.paramMap.get('id') ?? '';
    }

    ngOnInit(): void {}

    public onSubmit() {
        event?.preventDefault();

        const title = this.videoName.value;
        const video = this.videoFile.value;
        const cover = this.coverFile.value;
        const courseId = this.courseId;

        if (video && cover && title && courseId) {
            const formData = new FormData();

            formData.append('title', title);
            formData.append('video', video);
            formData.append('cover', cover);
            formData.append('courseId', courseId);

            this.context.completeWith(formData);
        }
    }

    onRejectVideoFile(file: TuiFileLike | readonly TuiFileLike[]): void {
        this.rejectedVideoFile$.next(file as TuiFileLike);
    }

    removeVideoFile(): void {
        this.videoFile.setValue(null);
    }

    clearRejectedVideoFile(): void {
        this.removeVideoFile();
        this.rejectedVideoFile$.next(null);
    }

    makeRequestVideo(file: TuiFileLike): Observable<TuiFileLike | null> {
        this.loadingVideoFile$.next(file);

        return timer(1000).pipe(
            map(() => {
                if (Math.random() > 0.5) {
                    return file;
                }

                this.rejectedVideoFile$.next(file);

                return null;
            }),
            finalize(() => this.loadingVideoFile$.next(null))
        );
    }

    onRejectCoverFile(file: TuiFileLike | readonly TuiFileLike[]): void {
        this.rejectedCoverFile$.next(file as TuiFileLike);
    }

    removeCoverFile(): void {
        this.coverFile.setValue(null);
    }

    clearRejectedCoverFile(): void {
        this.removeCoverFile();
        this.rejectedCoverFile$.next(null);
    }

    makeRequestCover(file: TuiFileLike): Observable<TuiFileLike | null> {
        this.loadingCoverFile$.next(file);

        return timer(1000).pipe(
            map(() => {
                if (Math.random() > 0.5) {
                    return file;
                }

                this.rejectedCoverFile$.next(file);

                return null;
            }),
            finalize(() => this.loadingCoverFile$.next(null))
        );
    }
}
