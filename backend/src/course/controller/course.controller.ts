import {
    Body,
    Controller,
    Delete,
    Get,
    HttpStatus,
    Param,
    Post,
    Put,
    Res
} from '@nestjs/common';
import {
    ApiBody,
    ApiOperation,
    ApiParam,
    ApiResponse,
    ApiTags
} from '@nestjs/swagger';
import { Course } from '../schema/course.schema';
import { CourseService } from './../service/course.service';

@ApiTags('course')
@Controller('api/v1/course')
export class CourseController {
    constructor(private readonly courseService: CourseService) {}

    @ApiOperation({ summary: 'Create new course' })
    @ApiBody({
        description: 'Upload course',
        type: Course,
    })
    @Post()
    @ApiResponse({
        status: 201,
        description: 'The course has been successfully created.',
        type: Course,
    })
    async createCourse(@Res() res, @Body() course: Course) {
        const newCourse = await this.courseService.createCourse(course);

        return res.status(HttpStatus.CREATED).json({
            newCourse,
        });
    }

    @ApiOperation({ summary: 'Get course by id' })
    @ApiParam({ name: 'id', type: String })
    @Get(':id')
    @ApiResponse({
        status: 206,
        description: 'Return course based on particular id',
    })
    async getCourseById(@Param('id') id: string, @Res() res) {
        const course = await this.courseService.getCourseById(id);

        return res.status(HttpStatus.PARTIAL_CONTENT).json({
            course,
        });
    }

    @ApiOperation({ summary: 'Delete course by id' })
    @ApiParam({ name: 'id', type: String })
    @Delete(':id')
    @ApiResponse({
        status: 200,
        description: 'Return deleted course id',
        type: String,
    })
    async deletebyId(@Res() res, @Param('id') id) {
        await this.courseService.deleteById(id);

        return res.status(HttpStatus.OK).json({
            id: id,
        });
    }

    @ApiOperation({ summary: 'Put course by id' })
    @ApiParam({ name: 'id', type: String })
    @ApiBody({ type: Course })
    @Put(':id')
    @ApiResponse({
        status: 200,
        description: 'Return updated video',
        type: Course,
    })
    async update(@Res() res, @Param('id') id, @Body() course: Course) {
        const updatedVideo = await this.courseService.updateById(id, course);

        return res.status(HttpStatus.OK).json(updatedVideo);
    }
}
