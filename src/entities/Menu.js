"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
var readlineSync = require("readline-sync");
var Student_1 = require("./Student");
var Discipline_1 = require("./Discipline");
var Course_1 = require("./Course");
var Utils_1 = require("./Utils");
var ViewMenus_1 = require("./ViewMenus");
var Menu = /** @class */ (function () {
    function Menu(students, courses) {
        if (students === void 0) { students = []; }
        if (courses === void 0) { courses = []; }
        this.listDisciplines = [];
        this.students = students;
        this.listCourses = courses;
    }
    Menu.prototype.start = function () {
        console.log(ViewMenus_1.ViewMenus.mainMenu());
        var option = readlineSync.question("\nEscolha uma opção: ");
        this.processStartOption(option);
    };
    Menu.prototype.processStartOption = function (option) {
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
                console.log("\nSaindo do sistema. Até mais!");
                break;
            default:
                console.log("\nOpção inválida. Tente novamente.\n");
                this.start();
                break;
        }
    };
    Menu.prototype.manageStudents = function () {
        console.log(ViewMenus_1.ViewMenus.studentsMainMenu());
        var option = readlineSync.question("\nEscolha uma opção: ");
        this.processOptionStudents(option);
    };
    Menu.prototype.processOptionStudents = function (option) {
        switch (option) {
            case "1":
                this.registerStudent();
                break;
            case "2":
                this.conferStudent();
                break;
            case "3":
                this.deleteStudent();
                break;
            case "4":
                this.updateStudent();
                break;
            case "5":
                this.start();
                break;
            case "6":
                console.log("\nSaindo do sistema. Até mais!");
                break;
            default:
                console.log("\nOpção inválida. Tente novamente.\n");
                this.manageStudents();
                break;
        }
    };
    Menu.prototype.registerStudent = function () {
        console.log("\nCADASTRAR ALUNO:");
        var name = readlineSync.question("Nome do aluno: ");
        var phoneNumber = parseInt(readlineSync.question("Número de telefone: "));
        var email = readlineSync.question("Email: ");
        var age = parseInt(readlineSync.question("Idade: "));
        if ((0, Utils_1.findStudentByName)(this.students, name)) {
            console.error("\nErro: Aluno já cadastrado.\n");
        }
        else {
            var newStudent = new Student_1.Student(name, phoneNumber, email, age, []);
            this.students.push(newStudent);
            console.log("\nAluno cadastrado com sucesso.\n");
        }
        this.manageStudents();
    };
    Menu.prototype.conferStudent = function () {
        console.log("\nCONSULTAR ALUNO:");
        var name = readlineSync.question("Nome do aluno: ");
        var student = (0, Utils_1.findStudentByName)(this.students, name);
        console.log(ViewMenus_1.ViewMenus.studentInfo(student));
        this.manageStudents();
    };
    Menu.prototype.deleteStudent = function () {
        console.log("\nREMOVER ALUNO:");
        var name = readlineSync.question("Nome do aluno: ");
        var studentIndex = (0, Utils_1.findStudentIndexByName)(this.students, name);
        if (studentIndex !== -1) {
            this.students.splice(studentIndex, 1);
            console.log("\nAluno removido com sucesso.\n");
        }
        else {
            console.log("\nAluno não encontrado.\n");
        }
        this.manageStudents();
    };
    Menu.prototype.updateStudent = function () {
        console.log("\nATUALIZAR ALUNO:");
        var name = readlineSync.question("Nome do aluno: ");
        var studentIndex = (0, Utils_1.findStudentIndexByName)(this.students, name);
        if (studentIndex !== -1) {
            var student = this.students[studentIndex];
            console.log(ViewMenus_1.ViewMenus.studentUpdate());
            var option = readlineSync.question("\nEscolha uma opção: ");
            switch (option) {
                case "1":
                    var newPhoneNumber = parseInt(readlineSync.question("Novo número de telefone: "));
                    student.setPhoneNumber(newPhoneNumber);
                    console.log("\nTelefone atualizado com sucesso.\n");
                    break;
                case "2":
                    var newEmail = readlineSync.question("Novo email: ");
                    student.setEmail(newEmail);
                    console.log("\nEmail atualizado com sucesso.\n");
                    break;
                case "3":
                    break;
                default:
                    console.error("\nOpção inválida.\n");
            }
        }
        else {
            console.log("\nAluno não encontrado.\n");
        }
        this.manageStudents();
    };
    Menu.prototype.manageDisciplines = function () {
        console.log("\nGerenciando Disciplinas...");
        console.log(ViewMenus_1.ViewMenus.disciplinesMainMenu());
        var option = readlineSync.question("\nEscolha uma opção: ");
        this.processOptionDisciplines(option);
    };
    Menu.prototype.processOptionDisciplines = function (option) {
        switch (option) {
            case "1":
                this.registerDiscipline();
                break;
            case "2":
                this.conferDiscipline();
                break;
            case "3":
                this.deleteDiscipline();
                break;
            case "4":
                this.updateDiscipline();
                break;
            case "5":
                this.start();
                break;
            case "6":
                console.log("\nSaindo do sistema. Até mais!");
                break;
            default:
                console.error("\nOpção inválida. Tente novamente.\n");
                this.manageDisciplines();
                break;
        }
    };
    Menu.prototype.registerDiscipline = function () {
        console.log("\nCADASTRAR DISCIPLINA");
        var name = readlineSync.question("Nome da disciplina: ");
        var workload = parseInt(readlineSync.question("Número de horas da carga-horária: "));
        var opt = readlineSync.question("Digite 1 caso já possuas uma nota para essa disciplina: ");
        var grade = 0;
        if (opt == "1") {
            grade = Number(readlineSync.question("Informe a nota para a disciplina: "));
        }
        if ((0, Utils_1.findDisciplineByName)(this.listDisciplines, name)) {
            console.error("\nErro: Disciplina já cadastrada.\n");
        }
        else {
            var newDiscipline = new Discipline_1.Discipline(name, workload, grade);
            this.listDisciplines.push(newDiscipline);
            console.log("\nDisciplina cadastrada com sucesso.\n");
        }
        this.manageDisciplines();
    };
    Menu.prototype.conferDiscipline = function () {
        var name = readlineSync.question("Nome da disciplina: ");
        var discipline = (0, Utils_1.findDisciplineByName)(this.listDisciplines, name);
        console.log(ViewMenus_1.ViewMenus.disciplineInfo(discipline));
        this.manageDisciplines();
    };
    Menu.prototype.deleteDiscipline = function () {
        console.log("\nREMOVER DISCIPLINA");
        var name = readlineSync.question("Nome da disciplina que será removida: ");
        var disciplineIndex = (0, Utils_1.findDisciplineIndexByName)(this.listDisciplines, name);
        if (disciplineIndex !== -1) {
            var disciplinesRemoved = this.listDisciplines.splice(disciplineIndex, 1);
            console.log("A seguinte disciplina foi removida com sucesso:");
            console.log(ViewMenus_1.ViewMenus.disciplineInfo(disciplinesRemoved[0]));
        }
        else {
            console.log("\nDisciplina não encontrada.\n");
        }
        this.manageDisciplines();
    };
    Menu.prototype.updateDiscipline = function () {
        var name = readlineSync.question("Nome da disciplina: ");
        var disciplineIndex = (0, Utils_1.findDisciplineIndexByName)(this.listDisciplines, name);
        if (disciplineIndex !== -1) {
            var discipline = this.listDisciplines[disciplineIndex];
            console.log(ViewMenus_1.ViewMenus.disciplineUpdate());
            var option = readlineSync.question("\nEscolha uma opção: ");
            switch (option) {
                case "1":
                    var newWorkload = Number(readlineSync.question("Nova carga-horária para disciplina: "));
                    discipline.setWorkload(newWorkload);
                    console.log("\nCarga-horária atualizada com sucesso.\n");
                    break;
                case "2":
                    var newGrade = Number(readlineSync.question("Nova nota para disciplina: "));
                    discipline.setGrade(newGrade);
                    console.log("\nNota atualizada com sucesso.\n");
                    break;
                case "3": break;
                default:
                    console.log("\nOpção inválida.\n");
            }
        }
        else
            console.error("\nDisciplina não encontrada.\n");
        this.manageDisciplines();
    };
    Menu.prototype.manageCourses = function () {
        console.log("\nGerenciando Cursos...");
        console.log(ViewMenus_1.ViewMenus.coursesMainMenu());
        var option = readlineSync.question("\nEscolha uma opção: ");
        this.processOptionCourses(option);
    };
    Menu.prototype.processOptionCourses = function (option) {
        switch (option) {
            case "1":
                this.registerCourse();
                break;
            case "2":
                this.verifyListCourse();
                break;
            case "3":
                this.deleteCourse();
                break;
            case "4":
                this.updateCourse();
                break;
            case "5":
                this.start();
                break;
            case "6":
                console.log("\nSaindo do sistema. Até mais!");
                break;
            default:
                console.log("\nOpção inválida. Tente novamente.\n");
                this.manageDisciplines();
                break;
        }
    };
    Menu.prototype.registerCourse = function () {
        if (this.listDisciplines.length === 0) {
            console.log("\nVocê não possui disciplina cadastrada\n");
            console.log("\nVolte ao MENU principal e cadastre uma diciplina\n");
            this.manageCourses();
        }
        else {
            console.log("\nCADASTRAR CURSO");
            var name_1 = readlineSync.question("\nNome do curso: ");
            var listOfDicipline = [];
            var turn = readlineSync.question("\nQual turno? ");
            var createdCourse = new Course_1.Course(name_1, listOfDicipline, turn);
            this.addDiciplineInCouse(createdCourse);
            this.manageCourses();
        }
    };
    Menu.prototype.addDiciplineInCouse = function (createdCourse) {
        console.log(ViewMenus_1.ViewMenus.addDiciplineInCouseMenu());
        var selectedOption = readlineSync.question("\nSelecione uma opção: ");
        switch (selectedOption) {
            case "1":
                this.verifyDicipline(createdCourse);
                break;
            case "2":
                this.verifyListCourse();
                console.log("\nNenhum curso para atualizar.");
                break;
            default:
                console.log("\nOpção inválida. Tente novamente.\n");
                this.manageCourses();
                break;
        }
    };
    Menu.prototype.verifyDicipline = function (createdCourse) {
        var diciplineToAdd = readlineSync.question("\nDigite o nome da diciplina a ser adicionada: ");
        //chamar função de verificar diciplina
        var index = (0, Utils_1.findDisciplineIndexByName)(this.listDisciplines, diciplineToAdd);
        if (index === -1) {
            console.log("\nDiciplina não encontrada");
            this.verifyDicipline(createdCourse);
        }
        else {
            var tamanhoAtualListaCursos = createdCourse.getListOfDiciplineCourse.length;
            createdCourse.listOfDiciplineCourse.push(this.listDisciplines[index]);
            if (tamanhoAtualListaCursos !== (createdCourse.getListOfDiciplineCourse.length + 1)) {
                this.listCourses.push(createdCourse);
                return;
            }
            else {
                console.log('Ocorreu um erro tente novamente');
                this.manageCourses();
            }
        }
    };
    Menu.prototype.verifyListCourse = function () {
        if (this.listCourses.length === 0) {
            console.log("\nVocê não possui curso cadastrado\n");
            console.log("\nVolte ao MENU principal e cadastre um curso\n");
            this.manageCourses();
        }
        else {
            this.conferCourse();
            this.manageCourses();
        }
    };
    Menu.prototype.conferCourse = function () {
        var name = readlineSync.question("\nNome do curso: ");
        var courses = (0, Utils_1.findCourseByName)(this.listCourses, name);
        if (courses === -1) {
            console.log("\nCurso não encontrado.");
            this.manageCourses();
        }
        else {
            console.log(ViewMenus_1.ViewMenus.cousesInfo(this.listCourses[courses]));
            this.manageCourses();
        }
    };
    Menu.prototype.deleteCourse = function () {
        var name = readlineSync.question("Nome da curso que será removido: ");
        var coursesIndex = (0, Utils_1.findCourseByName)(this.listCourses, name);
        if (coursesIndex !== -1) {
            var courseRemove = this.listCourses.splice(coursesIndex, 1);
            console.log("O seguinte curso foi removido com sucesso:");
            console.log(ViewMenus_1.ViewMenus.cousesInfo(courseRemove[0]));
        }
        else {
            console.log("\nCurso não encontrado.\n");
        }
        this.manageCourses();
    };
    Menu.prototype.updateCourse = function () {
        console.log("\nIMPLEMENTAR ATUALIZAR CURSO\n");
        if (this.listCourses.length == 0) {
            console.log("Não há curso para ser atualizado.");
        }
        else {
            this.listAllCourses();
            var name_2 = readlineSync.question("Nome da curso que será removido: ");
        }
        this.manageCourses();
    };
    Menu.prototype.listAllCourses = function () {
        for (var _i = 0, _a = this.listCourses; _i < _a.length; _i++) {
            var course = _a[_i];
            console.log(course);
        }
    };
    return Menu;
}());
exports.Menu = Menu;
