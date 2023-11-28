import { Course } from "./Course";
import { Discipline } from "./Discipline";
import { Student } from "./Student";

function findStudentByName(students: Student[], name: string): Student | undefined {
    return students.find(student => student.getName().toUpperCase() === name.toUpperCase());
}

function findStudentIndexByName(students: Student[], name: string): number {
    return students.findIndex(student => student.getName().toUpperCase() === name.toUpperCase());
}

function findDisciplineByName(disciplines: Discipline[], name: string): Discipline | undefined {
    return disciplines.find(discipline => discipline.getName().toUpperCase() == name.toUpperCase());
}

function findDisciplineIndexByName(disciplines: Discipline[], name: string): number {
    return disciplines.findIndex(discipline => discipline.getName().toUpperCase() === name.toUpperCase());
}
function findCourseByName(courses: Course[], name:string){//  : Course | undefined 
    return courses.findIndex(courses => courses.getName().toUpperCase() === name.toUpperCase());

}


export { findStudentByName, findStudentIndexByName, findDisciplineByName , findDisciplineIndexByName,findCourseByName}