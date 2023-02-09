import { createAction, props } from "@ngrx/store";
import { CourseForm } from "src/app/interfaces/course-form";
import { LoadingState } from "src/app/loading-state";
import { Course } from "./courses.reducer";

export const getCoursesLoadingState = createAction(
    '[Courses Page] Get Courses Loading State',
);

export const setCoursesLoadingState = createAction(
    '[Courses Page] Get Courses Loading State',
    props<{ loadingState: LoadingState }>(),
);

export const loadCourses = createAction(
    '[Courses Page] Load All Courses',
);

export const loadCourseById = createAction(
    '[Courses Page] Load Course By Course Id',
    props<{ courseId: string }>(),
);

export const loadCoursesByName = createAction(
    '[Courses Page] Load Courses By Course Name',
    props<{ courseName: string }>(),
);

export const loadCoursesSuccess = createAction(
    '[Courses Page] Load Courses Success',
    props<{ courses: Course[] }>(),
)

export const createCourse = createAction(
    '[Course Page] Create Course',
    props<{ course: CourseForm }>(),
);

export const createCourseSuccess = createAction(
    '[Course Page] Create Course Success',
    props<{ course: Course }>(),
)

export const removeCourses = createAction(
    '[Course Page] Remove Courses',
);

export const removeCoursesSuccess = createAction(
    '[Course Page] Remove Courses Success',
);

export const removeCourseById = createAction(
    '[Courses Page] Remove Course By Course Id',
    props<{ courseId: string }>(),
);

export const removeCourseByIdSuccess = createAction(
    '[Courses Page] Remove Course By Course Id Success',
    props<{ courseId: string }>(),
);
