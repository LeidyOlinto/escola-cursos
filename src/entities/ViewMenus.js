"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewMenus = void 0;
var Utils_1 = require("./Utils");
var ViewMenus = /** @class */ (function () {
    function ViewMenus() {
    }
    ViewMenus.mainMenu = function () {
        return "\n    +=========== MENU: =============+\n    | 1 - Gerenciar ALUNOS          |\n    | 2 - Gerenciar DISCIPLINAS     |\n    | 3 - Gerenciar CURSOS          |\n    | 4 - SAIR                      |\n    +===============================+\n    ";
    };
    ViewMenus.studentsMainMenu = function () {
        return "\n    +========= MENU ALUNOS: ===========+\n    | 1 - Cadastrar ALUNO              |\n    | 2 - Consultar ALUNO              |\n    | 3 - Remover ALUNO                |\n    | 4 - Atualizar ALUNO              |\n    | 5 - Voltar ao menu principal     |\n    | 6 - Sair                         |\n    +==================================+\n    ";
    };
    ViewMenus.studentInfo = function (student) {
        if (student) {
            return "\n      Informa\u00E7\u00F5es do aluno:\n      Nome: ".concat(student.getName(), "\n      Telefone: ").concat(student.getPhoneNumber(), "\n      Email: ").concat(student.getEmail(), "\n      Idade: ").concat(student.getAge(), "\n      ");
        }
        return "\nAluno não encontrado.\n";
    };
    ViewMenus.studentUpdate = function () {
        return "\n    Op\u00E7\u00F5es de atualiza\u00E7\u00E3o:\n    +==========================+\n    | 1 - Atualizar telefone   |\n    | 2 - Atualizar email      |\n    | 3 - Voltar               |\n    +==========================+\n    ";
    };
    ViewMenus.disciplinesMainMenu = function () {
        return "\n    +====== MENU DICIPLINAS: =======+\n    | 1 - Cadastrar DISCIPLINA      |\n    | 2 - Consultar DISCIPLINA      |\n    | 3 - Remover DISCIPLINA        |\n    | 4 - Atualizar DISCIPLINA      |\n    | 5 - Voltar ao menu principal  |\n    | 6 - Sair                      |\n    +===============================+\n    ";
    };
    ViewMenus.disciplineInfo = function (discipline) {
        if (discipline) {
            return "\n    Nome: ".concat(discipline.getName(), "\n    Carga-hor\u00E1ria: ").concat(discipline.getWokload(), "\n    Nota obtida: ").concat(discipline.getGrade(), "\n    ");
        }
        return "\nDisciplina n\u00E3o cadastrada.\n";
    };
    ViewMenus.disciplineUpdate = function () {
        return "\n    Op\u00E7\u00F5es de atualiza\u00E7\u00E3o para disciplina:\n    +=============================================+\n    | 1 - Atualizar a carga-hor\u00E1ria da disciplina |\n    | 2 - Atualizar a nota da disciplina          |\n    | 3 - Voltar                                  |\n    +=============================================+\n    ";
    };
    ViewMenus.coursesMainMenu = function () {
        return "\n    +========= MENU CURSOS: ===========+\n    |  1 - Cadastrar CURSO             |\n    |  2 - Consultar CURSO             |\n    |  3 - Remover CURSO               |\n    |  4 - Atualizar CURSO             |\n    |  5 - Voltar ao menu principal    |\n    |  6 - Sair                        |\n    +==================================+\n    ";
    };
    ViewMenus.cousesInfo = function (courses) {
        if (courses) {
            return "\n      Nome: ".concat(courses.getName(), "\n      Lista de diciplinas:").concat((0, Utils_1.returnNamesDiciplinesInCourse)(courses.listOfDiciplineCourse), "\n      Turno: ").concat(courses.getTurn(), "\n      ");
        }
        return "\nCurso n\u00E3o cadastrado.\n";
    };
    ViewMenus.cousesUpdate = function () {
        return "\n    Op\u00E7\u00F5es de atualiza\u00E7\u00E3o para cursos:\n  +=============================================+\n  | 1 - Visualizar lista de cursos              |\n  | 2 - Atualizar turno                         |\n  | 3 - Voltar                                  |\n  +=============================================+\n  ";
    };
    ViewMenus.addDiciplineInCouseMenu = function () {
        return "\n    Op\u00E7\u00F5es de adi\u00E7\u00E3o de diciplinas em um cursos:\n  +================================================+\n  | 1 - Adicionar a diciplina que foi cadastrada:  |\n  | 2 - Voltar                                     |\n  +================================================+\n  ";
    };
    return ViewMenus;
}());
exports.ViewMenus = ViewMenus;
