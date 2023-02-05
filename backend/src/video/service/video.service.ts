import { Video, VideoDocument } from '../schema/video.schema';
import {
    Injectable,
    NotFoundException,
    ServiceUnavailableException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { createReadStream, statSync } from 'fs';
import { join } from 'path';
import { Request, Response } from 'express';

@Injectable()
export class VideoService {
    constructor(
        @InjectModel(Video.name) private videoModel: Model<VideoDocument>
    ) {}

    async createVideo(video: Object): Promise<Video> {
        const newVideo = new this.videoModel(video);

        return newVideo.save();
    }

    // async readVideo(id): Promise<any> {
    //     if (id.id) {
    //         return await this.videoModel
    //             .findOne({_id: id.id})
    //             .populate('createdBy')
    //             .exec();
    //     }

    //     return this.videoModel.find().populate('createdBy').exec();
    // }

    async streamVideo(id: string, res: Response, req: Request) {
        try {
            const data = await this.videoModel.findOne({ _id: id });

            if (!data) {
                throw new NotFoundException(null, 'VideoNotFound');
            }

            const { range } = req.headers;

            if (range) {
                const { video } = data;
                const videoPath = statSync(
                    join(process.cwd(), `./public/${video}`)
                );

                const CHUNK_SIZE = 1 * 1e6;

                const start = Number(range.replace(/\D/g, ''));
                const end = Math.min(start + CHUNK_SIZE, videoPath.size - 1);

                const videoLength = end - start + 1;

                res.status(206);
                res.header({
                    'Content-Range': `bytes ${start}-${end}/${videoPath.size}`,
                    'Accept-Ranges': 'bytes',
                    'Content-length': videoLength,
                    'Content-Type': 'video/mp4',
                });

                const videoStream = createReadStream(
                    join(process.cwd(), `./public/${video}`),
                    { start, end }
                );

                videoStream.pipe(res);
            } else {
                throw new NotFoundException(null, 'range not found');
            }
        } catch (e) {
            console.error(e);
            throw new ServiceUnavailableException();
        }
    }

    async streamCover(id: string, res: Response, req: Request) {
        try {
            const data = await this.videoModel.findOne({ _id: id });

            if (!data) {
                throw new NotFoundException(null, 'VideoNotFound');
            }

            const { coverImage } = data;

            // const coverPath = statSync(
            //     join(process.cwd(), `./public/${coverImage}`)
            // );

            // const CHUNK_SIZE = 1 * 1e6;

            // const start = Number(range.replace(/\D/g, ''));
            // const end = Math.min(start + CHUNK_SIZE, coverPath.size - 1);

            // const coverLength = end - start + 1;

            res.status(206);
            res.header({
                // 'Content-Range': `bytes ${start}-${end}/${coverPath.size}`,
                // 'Accept-Ranges': 'bytes',
                // 'Content-length': coverLength,
                'Content-Type': 'image/jpeg',
            });

            const coverStream = createReadStream(
                join(process.cwd(), `./public/${coverImage}`)
                // { start, end }
            );

            coverStream.pipe(res);
        } catch (e) {
            console.error(e);
            throw new ServiceUnavailableException();
        }
    }

    async update(id, video: Video): Promise<Video> {
        return await this.videoModel.findByIdAndUpdate(id, video, {
            new: true,
        });
    }

    async delete(id): Promise<any> {
        return await this.videoModel.findByIdAndRemove(id);
    }
}