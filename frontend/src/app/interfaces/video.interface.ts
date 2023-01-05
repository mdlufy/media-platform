import { Course } from "./course.interface";

export interface Video {
    _id: string;
    title: string;
    coverImage: string;
    video: string;
    course: Course;
    __v: number;
}
