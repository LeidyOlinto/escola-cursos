import { Discipline } from "./Discipline";
import { Student } from "./Student";

function findStudentByName(students: Student[], name: string): Student | undefined {
    return students.find(student => student.getName() === name);
}

function findStudentIndexByName(students: Student[], name: string): number {
    return students.findIndex(student => student.getName() === name);
}
function findDisciplineByName(disciplines: Discipline[], name: string): Discipline | undefined {
    return disciplines.find(discipline => discipline.getName() == name);
}

function findDisciplineIndexByName(disciplines: Discipline[], name: string): number {
    return disciplines.findIndex(discipline => discipline.getName() === name);
}
export { findStudentByName, findStudentIndexByName, findDisciplineByName , findDisciplineIndexByName}