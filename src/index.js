"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var Course_1 = require("./entities/Course");
var Discipline_1 = require("./entities/Discipline");
var Menu_1 = require("./entities/Menu");
var Student_1 = require("./entities/Student");
var main = function (menu) { menu.start(); };
var baseMenu = function () {
    var a1 = new Student_1.Student("Marly", 992339954, "leidy@gmail.net", 28, []);
    var a2 = new Student_1.Student("John", 992321254, "john@gmail.net", 27, []);
    var a3 = new Student_1.Student("Larissa", 992339954, "lari@gmail.net", 22, []);
    var a4 = new Student_1.Student("Kimberly", 932134954, "kinber@gmail.net", 21, []);
    var a5 = new Student_1.Student("Amanda", 982339954, "aman@gmail.net", 30, []);
    var a6 = new Student_1.Student("Tiego", 919254004, "tiego@gmail.net", 27, []);
    var a7 = new Student_1.Student("Silvia", 991234564, "silvia@gmail.net", 25, []);
    var a8 = new Student_1.Student("Djair", 992663954, "dj@gmail.net", 27, []);
    var a9 = new Student_1.Student("Katrina", 9122132324, "katri@gmail.net", 26, []);
    var la1 = [a1, a2, a3, a4, a5, a6, a7, a8, a9];
    var d1 = new Discipline_1.Discipline("Logica de Programação", 25, 90);
    var d2 = new Discipline_1.Discipline("Poo", 18, 10);
    var d3 = new Discipline_1.Discipline("Banco de dados", 30, 80);
    var d4 = new Discipline_1.Discipline("Padrões de Projeto", 20, 60);
    var ld1 = [d1, d2];
    var ld2 = [d3, d4];
    var c1 = new Course_1.Course("TI dados", ld1, "Manhã");
    var c2 = new Course_1.Course("Dados", __spreadArray(__spreadArray([], ld2, true), ld1, true), "Noturno");
    var lc1 = [c1, c2];
    return new Menu_1.Menu(la1, lc1);
};
var withBase = 0; // Mude para 1 e será carregado alguns dados iniciais para manipulação ou mude para 0 caso não queira dados pre-carregados
if (withBase)
    main(baseMenu());
else
    main(new Menu_1.Menu());
