import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CoursesStoreService } from 'src/app/courses-store.service';
import { Course } from 'src/app/interfaces/course.interface';
import { Video } from 'src/app/interfaces/video.interface';
import { VideoStoreService } from '../../../../video-store.service';

@Component({
    selector: 'app-videos-list',
    templateUrl: './videos-list.component.html',
    styleUrls: ['./videos-list.component.scss'],
})
export class VideosListComponent implements OnInit {
    @Input() public courseId!: string;

    public videos$: Observable<Video[]>;

    public courses$: Observable<Course[]>;

    public isFormShown = false;

    public videoForm = new FormGroup({
        videoName: new FormControl('', [Validators.required]),

        videoFile: new FormControl('', [Validators.required]),
        videoFileSource: new FormControl('', [Validators.required]),

        videoCover: new FormControl('', [Validators.required]),
        videoCoverSource: new FormControl('', [Validators.required]),

        courseName: new FormControl('', [Validators.required]),
    });

    constructor(
        private videosStore: VideoStoreService,
        private coursesStore: CoursesStoreService
    ) {
        this.videos$ = videosStore.videoData.state$;
        this.courses$ = coursesStore.coursesData.state$;
    }

    ngOnInit(): void {
        this.fetchVideosByCourseId(this.courseId);
        this.fetchCourses();
    }

    public changeFormVisibility() {
        this.isFormShown = !this.isFormShown;
    }

    public onVideoFileChange(event: any) {
        if (event.target?.files?.length > 0) {
            const file = event.target.files[0];

            this.videoForm.patchValue({ videoFileSource: file });
        }
    }

    public onVideoCoverChange(event: any) {
        if (event.target?.files?.length > 0) {
            const file = event.target.files[0];

            this.videoForm.patchValue({ videoCoverSource: file });
        }
    }

    // public onCourseChange(event: any) {
    //     console.log(event.target.value);

    //     if (event.target.value) {
    //         const course = event.target.value;

    //         this.videoForm.patchValue({ courseName: course });
    //     }
    // }

    public onSubmit() {
        console.warn(this.videoForm.value);

        const title = this.videoForm.value.videoName;
        const video = this.videoForm.value.videoFileSource;
        const cover = this.videoForm.value.videoCoverSource;
        const course = this.videoForm.value.courseName;

        if (video && cover && title && course) {
            const formData = new FormData();

            formData.append('title', title);
            formData.append('video', video);
            formData.append('cover', cover);
            formData.append('course', course);

            this.videosStore.uploadFile(formData);
        }

        this.changeFormVisibility();
    }

    public onDeleteVideo(id: string) {
        this.videosStore.removeVideo(id);
    }

    private fetchVideosByCourseId(courseId: string) {
        this.videosStore.fetchVideosByCourseId(courseId);
    }

    private fetchCourses() {
        this.coursesStore.fetchCourses();
    }

    public onDeleteVideos() {
        this.videosStore.deleteVideos();
    }
}
