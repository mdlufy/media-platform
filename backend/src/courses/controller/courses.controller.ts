import { Controller, Delete, Get, HttpStatus, Res } from '@nestjs/common';
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
        description: 'Return all courses',
        type: [Course],
    })
    async getCourses(): Promise<Object> {
        return await this.coursesService.getCourses();
    }

    @ApiOperation({ summary: 'Delete all courses' })
    @Delete()
    @ApiResponse({
        status: 200,
        description: 'Return count of deleted courses',
        type: Number,
    })
    async deleteCourses(@Res() res,) {
        const { deletedCount } = await this.coursesService.deleteCourses();

        return res.status(HttpStatus.OK).json({
            deletedCount,
        });
    }
}
