import { Course } from "./Course";
import { Discipline } from "./Discipline";
import { Student } from "./Student";

/**
 * Função para buscar o estudante através do nome 
 * @param students 
 * @param name 
 * @returns 
 */
function findStudentByName(students: Student[], name: string): Student | undefined {
    return students.find(student => student.getName().toUpperCase() === name.toUpperCase());
}

/**
 * Função que busca o estudante através do id
 * @param students 
 * @param name 
 * @returns 
 */
function findStudentIndexByName(students: Student[], name: string): number {
    return students.findIndex(student => student.getName().toUpperCase() === name.toUpperCase());
}

/**
 * Função que busca a disciplina através do nome 
 * @param disciplines 
 * @param name 
 * @returns 
 */
function findDisciplineByName(disciplines: Discipline[], name: string): Discipline | undefined {
    return disciplines.find(discipline => discipline.getName().toUpperCase() == name.toUpperCase());
}

/**
 * Função que busca a disciplina através do id
 * @param disciplines 
 * @param name 
 * @returns 
 */
function findDisciplineIndexByName(disciplines: Discipline[], name: string): number {
    return disciplines.findIndex(discipline => discipline.getName().toUpperCase() === name.toUpperCase());
}

/**
 * Função que busca o curso através do nome
 * @param courses 
 * @param name 
 * @returns 
 */
function findCourseByName(courses: Course[], name: string) {//  : Course | undefined
    return courses.findIndex(courses => courses.getName().toUpperCase() === name.toUpperCase());
}

/**
 * Função que retorna as disciplinas relacionadas ao curso
 * @param diciplines 
 * @returns 
 */
function returnNamesDiciplinesInCourse(diciplines: Discipline[]): string {
    const nomesConcatenados = diciplines.reduce((acumulador, objeto, indice) => {

        if (indice > 0) {
            acumulador += ', ';
        }
        acumulador += objeto.getName();

        return acumulador;
    }, '');
    return nomesConcatenados;
}

export { findStudentByName, findStudentIndexByName, findDisciplineByName, findDisciplineIndexByName, findCourseByName, returnNamesDiciplinesInCourse }