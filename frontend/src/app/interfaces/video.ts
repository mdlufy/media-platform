import { CourseDto } from "./course.dto";

export interface Video {
    _id: string;
    title: string;
    coverImage: string;
    video: string;
    course: CourseDto;
    __v: number;
}
