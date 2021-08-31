const Course = require('../api/courses/models/course')
const CourseInstructor = require('../api/courses/models/courseInstructor')
const Instructor = require('../api/instructors/models/instructor')
Course.hasMany(Instructor)