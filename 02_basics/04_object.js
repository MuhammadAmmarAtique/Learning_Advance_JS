//Object destructure


// 1)Defining an object
let course= {
    CourseName: "D&AOA",
    CourseTeacher: "Sir Habib Khan",
    CourseDuration: "4.5 Months"   
}
// 2)Accessing objects value
console.log(course.CourseName);
console.log(course.CourseTeacher);
console.log(course.CourseDuration);


// 3)OBJECT DESTRUCTURE SYNTAX
const {CourseName} = course;  // (instead of writing "course.courseName" just now write CourseName)
const {CourseTeacher: Teacher} = course;
const {CourseDuration: Duration} = course; //(Here instead of writing "course.courseDuration" just now write Duration)

console.log(CourseName);
console.log(Teacher);
console.log(Duration);