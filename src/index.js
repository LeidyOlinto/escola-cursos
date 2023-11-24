"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var User = /** @class */ (function () {
    function User(name, phoneNumber, email, dateOfBirth) {
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.dateOfBirth = dateOfBirth;
    }
    return User;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, phoneNumber, email, dateOfBirth, listOfCourses) {
        var _this = _super.call(this, name, phoneNumber, email, dateOfBirth) || this;
        _this.name = name;
        _this.phoneNumber = phoneNumber;
        _this.email = email;
        _this.dateOfBirth = dateOfBirth;
        _this.listOfCourses = listOfCourses;
        return _this;
    }
    Student.prototype.getName = function () {
        return this.name;
    };
    return Student;
}(User));
var Courses = /** @class */ (function () {
    function Courses(name, workload, listOfDicipline) {
        this.name = name;
        this.workload = workload;
        this.listOfDicipline = listOfDicipline;
    }
    return Courses;
}());
var Discipline = /** @class */ (function () {
    function Discipline(name) {
        this.name = name;
    }
    Discipline.prototype.getName = function () {
        return this.name;
    };
    return Discipline;
}());
var System = /** @class */ (function () {
    function System() {
    }
    System.prototype.showMenu = function () {
        console.log("MENU:");
        console.log("1- Gerenciar ALUNOS");
        console.log("2- Gerenciar DISCIPLINAS");
        console.log("3- Gerenciar CURSOS");
        console.log("4- SAIR");
        var option = readlineSync.question("Escolha uma opção: ");
        this.processOption(option);
    };
    System.prototype.processOption = function (option) {
        switch (option) {
            case "1":
                this.manageStudents();
                break;
            case "2":
                this.manageDisciplines();
                break;
            case "3":
                this.manageCourses();
                break;
            case "4":
                console.log("Saindo do sistema. Até mais!");
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
                break;
        }
    };
    System.prototype.manageStudents = function () {
        console.log("Gerenciando Alunos...");
        // Implement student management operations here
        this.showMenu();
    };
    System.prototype.manageDisciplines = function () {
        console.log("Gerenciando Disciplinas...");
        // Implement discipline management operations here
        this.showMenu();
    };
    System.prototype.manageCourses = function () {
        console.log("Gerenciando Cursos...");
        // Implement course management operations here
        this.showMenu();
    };
    return System;
}());
console.log('ta dando certo');
var system = new System();
system.showMenu();
