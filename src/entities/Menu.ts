import * as readlineSync from "readline-sync";
import { Student } from "./Student";
import { Discipline } from "./Discipline";
import { Course } from "./Course";
import { FunctionalRequirements } from "../interfaces/FunctionalRequirements";
import { findStudentByName, findStudentIndexByName, findDisciplineByName, findDisciplineIndexByName, } from "./Utils";
import { ViewMenus } from "./ViewMenus";

export class Menu implements FunctionalRequirements {
    private students: Student[];
    private listDisciplines: Discipline[] = [];
    private courses: Course[];

    constructor(students: Student[] = [], courses: Course[] = []) {
        this.students = students
        this.courses = courses
    }

    public start(): void {
        console.log(ViewMenus.mainMenu());
        const option: string = readlineSync.question("\nEscolha uma opção: ");
        this.processStartOption(option);
    }

    private processStartOption(option: string): void {
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

    public manageStudents(): void {
        console.log(ViewMenus.studentsMainMenu());
        const option: string = readlineSync.question("\nEscolha uma opção: ");
        this.processOptionStudents(option);
    }

    private processOptionStudents(option: string): void {
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
                this.manageStudents();
                break;
        }
    }

    public registerStudent(): void {
        console.log("\nCADASTRAR ALUNO:");
        const name: string = readlineSync.question("Nome do aluno: ");
        const phoneNumber: number = parseInt(readlineSync.question("Número de telefone: "));
        const email: string = readlineSync.question("Email: ");
        const age: number = parseInt(readlineSync.question("Idade: "));

        if (findStudentByName(this.students, name)) {
            console.error("\nErro: Aluno já cadastrado.\n");
        } else {
            const newStudent = new Student(name, phoneNumber, email, age, []);
            this.students.push(newStudent);
            console.log("\nAluno cadastrado com sucesso.\n");
        }

        this.manageStudents();
    }

    public conferStudent(): void {
        console.log("\nCONSULTAR ALUNO:");
        const name: string = readlineSync.question("Nome do aluno: ");
        const student = findStudentByName(this.students, name);
        console.log(ViewMenus.studentInfo(student));

        this.manageStudents();
    }

    public deleteStudent(): void {
        console.log("\nREMOVER ALUNO:");
        const name: string = readlineSync.question("Nome do aluno: ");
        const studentIndex = findStudentIndexByName(this.students, name);

        if (studentIndex !== -1) {
            this.students.splice(studentIndex, 1);
            console.log("\nAluno removido com sucesso.\n");
        } else {
            console.log("\nAluno não encontrado.\n");
        }

        this.manageStudents();
    }

    public updateStudent(): void {
        console.log("\nATUALIZAR ALUNO:");

        const name: string = readlineSync.question("Nome do aluno: ");
        const studentIndex = findStudentIndexByName(this.students, name);

        if (studentIndex !== -1) {
            const student = this.students[studentIndex];
            console.log(ViewMenus.studentUpdate());
            const option: string = readlineSync.question("\nEscolha uma opção: ");

            switch (option) {
                case "1":
                    const newPhoneNumber: number = parseInt(readlineSync.question("Novo número de telefone: "));
                    student.setPhoneNumber(newPhoneNumber);
                    console.log("\nTelefone atualizado com sucesso.\n");
                    break;
                case "2":
                    const newEmail: string = readlineSync.question("Novo email: ");
                    student.setEmail(newEmail);
                    console.log("\nEmail atualizado com sucesso.\n");
                    break;
                case "3":
                    break;
                default:
                    console.error("\nOpção inválida.\n");
            }
        } else {
            console.log("\nAluno não encontrado.\n");
        }

        this.manageStudents();
    }


    public manageDisciplines(): void {
        console.log("\nGerenciando Disciplinas...\n");
        console.log(ViewMenus.disciplinesMainMenu());
        const option: string = readlineSync.question("\nEscolha uma opção: ");
        this.processOptionDisciplines(option);
    }

    private processOptionDisciplines(option: string): void {
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
                console.error("\nOpção inválida. Tente novamente.\n");
                this.manageDisciplines()
                break;
        }
    }

    public registerDiscipline(): void {
        console.log("\nCADASTRAR DISCIPLINA\n");
        const name: string = readlineSync.question("Nome da disciplina: ");
        const workload: number = parseInt(readlineSync.question("Número de horas da carga-horária: "));

        const opt = readlineSync.question("Digite 1 caso já possuas uma nota para essa disciplina: ");
        let grade: number = 0;
        if (opt == "1") {
            grade = Number(readlineSync.question("Informe a nota para a disciplina: "));
        }

        if (findDisciplineByName(this.listDisciplines, name)) {
            console.error("\nErro: Disciplina já cadastrada.\n");
        } else {
            const newDiscipline = new Discipline(name, workload, grade);
            this.listDisciplines.push(newDiscipline);
            console.log("\nDisciplina cadastrada com sucesso.\n");
        }
        this.manageDisciplines()
    }

    public conferDiscipline(): void {
        const name: string = readlineSync.question("Nome da disciplina: ");
        const discipline = findDisciplineByName(this.listDisciplines, name);
        console.log(ViewMenus.disciplineInfo(discipline));
        this.manageDisciplines()
    }

    public deleteDiscipline(): void {
        console.log("\nREMOVER DISCIPLINA\n");
        const name: string = readlineSync.question("Nome da disciplina que será removida: ");
        const disciplineIndex = findDisciplineIndexByName(this.listDisciplines, name);
        if (disciplineIndex !== -1) {
            const disciplinesRemoved = this.listDisciplines.splice(disciplineIndex, 1);
            console.log("A seguinte disciplina foi removida com sucesso:");
            console.log(ViewMenus.disciplineInfo(disciplinesRemoved[0]));
        } else {
            console.log("\nDisciplina não encontrada.\n");
        }

        this.manageDisciplines()
    }

    public updateDiscipline(): void {
        const name: string = readlineSync.question("Nome da disciplina: ");
        const disciplineIndex = findDisciplineIndexByName(this.listDisciplines, name);

        if (disciplineIndex !== -1) {
            const discipline = this.listDisciplines[disciplineIndex];
            console.log(ViewMenus.disciplineUpdate());
            const option: string = readlineSync.question("\nEscolha uma opção: ");

            switch (option) {
                case "1":
                    const newWorkload: number = Number(readlineSync.question("Nova carga-horária para disciplina: "));
                    discipline.setWorkload(newWorkload);
                    console.log("\nCarga-horária atualizada com sucesso.\n");
                    break;
                case "2":
                    const newGrade: number = Number(readlineSync.question("Nova nota para disciplina: "));
                    discipline.setGrade(newGrade);
                    console.log("\nNota atualizada com sucesso.\n");
                    break;
                case "3": break;
                default:
                    console.log("\nOpção inválida.\n");
            }
        } else
            console.error("\nDisciplina não encontrada.\n");

        this.manageDisciplines()
    }


    public manageCourses(): void {
        console.log("\nGerenciando Cursos...\n");
        console.log(ViewMenus.coursesMainMenu());
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
                this.manageDisciplines()
                break;
        }
    }


    public registerCourse(): void {
        if (this.listDisciplines.length === 0) {
            console.log("\nVoçê não possue disciplina cadastrada\n");

            this.manageCourses()
        } else {
            console.log("\nCADASTRAR CURSO\n");

            const name: string = readlineSync.question("Nome do curso: ");
            const listOfDicipline: Discipline[] = this.listDisciplines;
            const turn: string = readlineSync.question("Qual turno ?");
            const createdCourse: Course = new Course(name, listOfDicipline, turn);
            this.addDiciplineInCouse(createdCourse);
            const opt = readlineSync.question("Digite 1 caso já possuas uma nota para esse curso: ");
            let courses: number = 0;
            if (opt == "1") {
                courses = Number(readlineSync.question("Informe a nota para o curso: "));
            }
            this.manageCourses()
        }

    }
    public addDiciplineInCouse(createdCourse: Course): void {
        ViewMenus.addDiciplineInCouseMenu();
        const selectedOption = readlineSync.question("Selecione uma opção");
        switch (selectedOption) {
            case "1":
                this.verifyDicipline(createdCourse);
                console.log("Digite o nome da diciplina a ser adicionada");
                break;
            case "2":
                console.log("Nenhum curso para atualizar.");
                break;
            case "3":
                console.log("\nSaindo do sistema. Até mais!");
                break;
            default:
                console.log("\nOpção inválida. Tente novamente.\n");
                this.manageCourses()
                break;
        }
    }
    public verifyDicipline(createdCourse: Course): void {
        const diciplineToAdd = readlineSync.question("Digite o nome da diciplina a ser adicionada:");
        //chamar função de verificar diciplina
        const index = findDisciplineIndexByName(this.listDisciplines, diciplineToAdd)
        if (index !== -1) {
            console.log("Diciplina não encontrada");
            this.verifyDicipline(createdCourse);

        } else {
            createdCourse.getListOfDicipline().push(this.listDisciplines[index])
        }
    }
    public conferCourse(): void {
        const name: string = readlineSync.question("Nome do curso: ");
        // const course = findCourseIndexByName(this.courses, name);
        // console.log(ViewMenus.cousesInfo(course));
        this.manageCourses()
    }

    deleteCourse(): void {
        console.log("\nIMPLEMENTAR REMOVER CURSO\n");
        this.manageCourses()
    }

    updateCourse(): void {
        console.log("\nIMPLEMENTAR ATUALIZAR CURSO\n");
        this.manageCourses()
    }
}