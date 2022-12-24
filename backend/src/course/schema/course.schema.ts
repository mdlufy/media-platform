import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type CourseDocument = Course & Document;

@Schema()
export class Course {
    @ApiProperty()
    @Prop({ required: true })
    name: string;
}

export const CourseSchema = SchemaFactory.createForClass(Course);
