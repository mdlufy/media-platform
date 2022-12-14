import {User} from '../../users/schema/user.schema';
import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import mongoose from 'mongoose';

export type VideoDocument = Video & Document;
@Schema()
export class Video {
    @Prop()
    title: string;
    @Prop()
    video: string;
    @Prop()
    coverImage: string;
    @Prop({default: Date.now()})
    uploadDate: Date;
    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'User'})
    createdBy: User;
}

export const VideoSchema = SchemaFactory.createForClass(Video);