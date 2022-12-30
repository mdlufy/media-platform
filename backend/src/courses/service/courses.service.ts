import { Course, CourseDocument } from './../../course/schema/course.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CoursesService {
    constructor(
        @InjectModel(Course.name) private courseModel: Model<CourseDocument>
    ) {}

    async getCourses(): Promise<any> {
        return this.courseModel.find().exec();
    }

    async getCoursesByName(courseName: string): Promise<any> {
        return this.courseModel
            .find({ name: new RegExp(courseName, 'i') })
            .exec();
    }

    async deleteCourses(): Promise<any> {
        return this.courseModel.deleteMany().exec();
    }
}
