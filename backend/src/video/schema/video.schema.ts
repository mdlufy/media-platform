import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import mongoose from 'mongoose';
import { Course } from 'src/course/schema/course.schema';
import { User } from '../../user/schema/user.schema';

export type VideoDocument = Video & Document;

@Schema()
export class Video {
    @ApiProperty()
    @Prop()
    title: string;

    @ApiProperty({ type: 'string', format: 'binary' })
    @Prop()
    video: string;

    @ApiProperty({ type: 'string', format: 'binary' })
    @ApiProperty()
    @Prop()
    coverImage: string;

    @ApiProperty()
    @Prop({ default: Date.now() })
    uploadDate: Date;

    @ApiProperty()
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    createdBy: User;

    @ApiProperty()
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Course' })
    course: Course;
}

export const VideoSchema = SchemaFactory.createForClass(Video);
