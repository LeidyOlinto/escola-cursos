import * as readlineSync from "readline-sync";
import { Student } from "./Student";
import { Discipline } from "./Discipline";
import { Course } from "./Course";
import { FunctionalRequirements } from "../interfaces/FunctionalRequirements";


export class Menu implements FunctionalRequirements {
    students: Student[];
    disciplines: Discipline[];
    courses: Course[];

    constructor(students: Student[] = [], disciplines: Discipline[] = [], courses: Course[] = []) {
        this.students = students
        this.disciplines = disciplines
        this.courses = courses
    }
        
    // MENU PRINCIPAL ---------------------------------

    start(): void {
        console.log("MENU:");
        console.log("1 - Gerenciar ALUNOS");
        console.log("2 - Gerenciar DISCIPLINAS");
        console.log("3 - Gerenciar CURSOS");
        console.log("4 - SAIR");

        const option: string = readlineSync.question("\nEscolha uma opção: ");
        this.processOption(option);
    }

    processOption(option: string): void {
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
                this.start()
                break;
        }
    }

    manageStudents(): void {
        console.log("\nGerenciando Alunos...\n");
        this.showMenuStudents()
    }
    manageDisciplines(): void {
        console.log("\nGerenciando Disciplinas...\n");
        this.showMenuDisciplines()
    }
    manageCourses(): void {
        console.log("\nGerenciando Cursos...\n");
        this.showMenuCourses()
    }

    // SUBMENU ALUNOS ------------------------------------

    showMenuStudents(): void {
        console.log("MENU ALUNOS:");
        console.log("1 - Cadastrar ALUNO");
        console.log("2 - Consultar ALUNO");
        console.log("3 - Remover ALUNO");
        console.log("5 - Voltar ao menu principal");
        console.log("6 - Sair");

        const option: string = readlineSync.question("\nEscolha uma opção: ");
        this.processOptionStudents(option);
    }

    processOptionStudents(option: string): void {
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
                this.start()
                break;
            case "6":
                console.log("\nSaindo do sistema. Até mais!");
                break;
            default:
                console.log("\nOpção inválida. Tente novamente.\n");
                this.showMenuDisciplines()
                break;
        }
    }

    registerStudent(): void {
        console.log("\nIMPLEMENTAR CADASTRAR ALUNO");
    }
    conferStudent(): void {
        console.log("\nIMPLEMENTAR CONSULTAR ALUNO");
    }
    deleteStudent(): void {
        console.log("\nIMPLEMENTAR REMOVER ALUNO");
    }
    updateStudent(): void {
        console.log("\nIMPLEMENTAR ATUALIZAR ALUNO");
    }

    // SUBMENU DISCIPLINAS ------------------------------------

    showMenuDisciplines(): void {
        console.log("MENU DICIPLINAS:");
        console.log("1- Cadastrar DISCIPLINA");
        console.log("2- Consultar DISCIPLINA");
        console.log("3- Remover DISCIPLINA");
        console.log("4- Atualizar DISCIPLINA");
        console.log("5 - Voltar ao menu principal");
        console.log("6 - Sair");

        const option: string = readlineSync.question("\nEscolha uma opção: ");
        this.processOptionDisciplines(option);
    }

    processOptionDisciplines(option: string): void {
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
                this.start()
                break;
            case "6":
                console.log("\nSaindo do sistema. Até mais!");
                break;
            default:
                console.log("\nOpção inválida. Tente novamente.\n");
                this.showMenuDisciplines()
                break;
        }
    }

    registerDiscipline(): void {
        console.log("\nIMPLEMENTAR CADASTRAR DISCIPLINA");
    }
    conferDiscipline(): void {
        console.log("\nIMPLEMENTAR CONSULTAR DISCIPLINA");
    }
    deleteDiscipline(): void {
        console.log("\nIMPLEMENTAR REMOVER DISCIPLINA");
    }
    updateDiscipline(): void {
        console.log("\nIMPLEMENTAR ATUALIZAR DISCIPLINA");
    }


    // SUBMENU CURSOS ------------------------------

    showMenuCourses(): void {
        console.log("MENU CURSOS:");
        console.log("1 - Cadastrar CURSO");
        console.log("2 - Consultar CURSO");
        console.log("3 - Remover CURSO");
        console.log("4 - Atualizar CURSO");
        console.log("5 - Voltar ao menu principal");
        console.log("6 - Sair");

        const option: string = readlineSync.question("\nEscolha uma opção: ");
        this.processOptionCourses(option);
    }

    processOptionCourses(option: string): void {
        switch (option) {
            case "1":
                this.registerCourse();
                break;
            case "2":
                this.conferCourse();
                break;
            case "3":
                this.deleteCourse();
                break;
            case "4":
                this.updateCourse();
                break;
            case "5":
                this.start()
                break;
            case "6":
                console.log("\nSaindo do sistema. Até mais!");
                break;
            default:
                console.log("\nOpção inválida. Tente novamente.\n");
                this.showMenuDisciplines()
                break;
        }
    }

    registerCourse(): void {
        console.log("\nIMPLEMENTAR CADASTRAR CURSO");
    }
    conferCourse(): void {
        console.log("\nIMPLEMENTAR CONSULTAR CURSO");
    }
    deleteCourse(): void {
        console.log("\nIMPLEMENTAR DELETAR CURSO");
    }
    updateCourse(): void {
        console.log("\nIMPLEMENTAR ATUALIZAR CURSO");
    }

}

