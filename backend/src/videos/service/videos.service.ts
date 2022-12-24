import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Video, VideoDocument } from '../../video/schema/video.schema';

@Injectable()
export class VideosService {
    constructor(
        @InjectModel(Video.name) private videoModel: Model<VideoDocument>
    ) {}

    async getVideos(): Promise<any> {
        return this.videoModel.find().populate('createdBy').exec();
    }

    async getVideosByCourseId(courseId: string): Promise<any> {
        return this.videoModel
            .find({ course: courseId })
            .populate('course')
            .populate('createdBy')
            .exec();
    }

    async deleteVideos(): Promise<any> {
        return this.videoModel.deleteMany().exec();
    }
}
