"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnNamesDiciplinesInCourse = exports.findCourseByName = exports.findDisciplineIndexByName = exports.findDisciplineByName = exports.findStudentIndexByName = exports.findStudentByName = void 0;
function findStudentByName(students, name) {
    return students.find(function (student) { return student.getName().toUpperCase() === name.toUpperCase(); });
}
exports.findStudentByName = findStudentByName;
function findStudentIndexByName(students, name) {
    return students.findIndex(function (student) { return student.getName().toUpperCase() === name.toUpperCase(); });
}
exports.findStudentIndexByName = findStudentIndexByName;
function findDisciplineByName(disciplines, name) {
    return disciplines.find(function (discipline) { return discipline.getName().toUpperCase() == name.toUpperCase(); });
}
exports.findDisciplineByName = findDisciplineByName;
function findDisciplineIndexByName(disciplines, name) {
    return disciplines.findIndex(function (discipline) { return discipline.getName().toUpperCase() === name.toUpperCase(); });
}
exports.findDisciplineIndexByName = findDisciplineIndexByName;
function findCourseByName(courses, name) {
    return courses.findIndex(function (courses) { return courses.getName().toUpperCase() === name.toUpperCase(); });
}
exports.findCourseByName = findCourseByName;
function returnNamesDiciplinesInCourse(diciplines) {
    var nomesConcatenados = diciplines.reduce(function (acumulador, objeto, indice) {
        if (indice > 0) {
            acumulador += ', ';
        }
        acumulador += objeto.getName();
        return acumulador;
    }, '');
    return nomesConcatenados;
}
exports.returnNamesDiciplinesInCourse = returnNamesDiciplinesInCourse;
