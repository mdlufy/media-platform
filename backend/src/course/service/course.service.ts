import {
    Injectable,
    NotFoundException,
    ServiceUnavailableException
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Course, CourseDocument } from '../schema/course.schema';

@Injectable()
export class CourseService {
    constructor(
        @InjectModel(Course.name) private courseModel: Model<CourseDocument>
    ) {}

    async createCourse(course: Course): Promise<Course> {
        const newCourse = new this.courseModel(course);

        return newCourse.save();
    }

    async getCourseById(id: string) {
        try {
            const data = await this.courseModel.findOne({ _id: id }).exec();

            if (!data) {
                throw new NotFoundException(null, 'CourseNotFound');
            }

            return data;
        } catch (e) {
            console.error(e);
            throw new ServiceUnavailableException();
        }
    }

    async getCourseByName(name: string): Promise<Course> {
        return await this.courseModel.findOne({ name }).exec();
    }

    async updateById(id: string, course: Course): Promise<Course> {
        return await this.courseModel.findByIdAndUpdate(id, course, {
            new: true,
        });
    }

    async deleteById(id: string): Promise<any> {
        return await this.courseModel.findByIdAndRemove(id);
    }
}
