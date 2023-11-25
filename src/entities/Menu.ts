import * as readlineSync from "readline-sync";
import { Student } from "./Student";
import { Discipline } from "./Discipline";
import { Course } from "./Course";


export class Menu {
    students: Student[];
    disciplines: Discipline[];
    courses: Course[];

    constructor(students: Student[] = [], disciplines: Discipline[] = [], courses: Course[] = []) {
        this.students = students
        this.disciplines = disciplines
        this.courses = courses
    }

    showMenu(): void {
        console.log("MENU:");
        console.log("1- Gerenciar ALUNOS");
        console.log("2- Gerenciar DISCIPLINAS");
        console.log("3- Gerenciar CURSOS");
        console.log("4- SAIR");

        const option: string = readlineSync.question("Escolha uma opção: ");
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
                console.log("Saindo do sistema. Até mais!");
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
                break;
        }
    }

    showMenuDisciplines(): void {
        console.log("MENU DICIPLINAS:");
        console.log("1- Cadastrar DISCIPLINA");
        console.log("2- Editar DISCIPLINAS");
        console.log("3- Deletar DISCIPLINA");
        console.log("4- Mostrar todas DISCIPLINA");
        console.log("5- SAIR");

        const option: string = readlineSync.question("Escolha uma opção: ");
        this.processOption(option);
    }
    processOptionDiciplines(option: string): void {
        switch (option) {
            case "1":
                this.manageDisciplines();
                break;
            case "2":
                this.manageDisciplines();
                break;
            case "3":
                this.manageCourses();
                break;
                case "4":
                    this.manageDisciplines();
                    break;
            case "5":
                console.log("Saindo do sistema. Até mais!");
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
                break;
        }
    }
    

    manageStudents(): void {
        console.log("Gerenciando Alunos...");
        // Implement student management operations here

        this.showMenu();
    }

    manageDisciplines(): void {
        console.log("Gerenciando Disciplinas...");
        // Implement discipline management operations here
        this.showMenu();
    }

    manageCourses(): void {
        console.log("Gerenciando Cursos...");
        // Implement course management operations here
        this.showMenu();
    }
}

