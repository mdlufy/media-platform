import {
    Controller,
    Delete,
    Get,
    HttpStatus,
    Query,
    Res,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Course } from 'src/course/schema/course.schema';
import { CoursesService } from '../service/courses.service';

@ApiTags('courses')
@Controller('api/v1/courses')
export class CoursesController {
    constructor(private coursesService: CoursesService) {}

    @ApiOperation({ summary: 'Get all courses' })
    @Get()
    @ApiResponse({
        status: 200,
        description: 'Success get all courses',
        type: [Course],
    })
    async getCourses(): Promise<Course[]> {
        return await this.coursesService.getCourses();
    }

    @ApiOperation({ summary: 'Get courses by name' })
    @Get('search')
    @ApiResponse({
        status: 200,
        description: 'Success get courses by name',
        type: [Course],
    })
    async getCoursesByName(
        @Query('courseName') courseName: string
    ): Promise<Course[]> {
        return await this.coursesService.getCoursesByName(courseName);
    }

    @ApiOperation({ summary: 'Delete all courses' })
    @Delete()
    @ApiResponse({
        status: 200,
        description: 'Success removed',
    })
    async deleteCourses(@Res() res) {
        const { deletedCount } = await this.coursesService.deleteCourses();

        return res.status(HttpStatus.OK).json();
    }
}
