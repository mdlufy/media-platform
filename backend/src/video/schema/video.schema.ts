import { User } from '../../user/schema/user.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

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
}

export const VideoSchema = SchemaFactory.createForClass(Video);
