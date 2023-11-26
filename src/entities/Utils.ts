import { Student } from "./Student";

export function findStudentByName(students: Student[], name: string): Student | undefined {
    return students.find(student => student.getName() === name);
}

export function findStudentIndexByName(students: Student[], name: string): number {
    return students.findIndex(student => student.getName() === name);
}