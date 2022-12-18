import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
    @ApiProperty()
    @Prop({ required: true })
    fullname: string;

    @ApiProperty()
    @Prop({ required: true, unique: true, lowercase: true })
    email: string;

    @ApiProperty()
    @Prop({ required: true })
    password: string;

    @ApiProperty()
    @Prop({ default: Date.now() })
    createdDate: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
