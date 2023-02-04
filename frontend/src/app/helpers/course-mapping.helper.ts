import { Course } from './../+state/courses/courses.reducer';
import { CourseDto } from './../interfaces/course.dto';

export function mapCourseDtoToCourse(course: CourseDto): Course {
    const id = course._id;
    const name = course.name;

    return {
        id,
        name,
    };
}
