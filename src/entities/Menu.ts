import * as readlineSync from "readline-sync";
import { Student } from "./Student";
import { Discipline } from "./Discipline";
import { Course } from "./Course";
import { FunctionalRequirements } from "../interfaces/FunctionalRequirements";
import { findStudentByName, findStudentIndexByName, findDisciplineByName, findDisciplineIndexByName, findCourseByName as findIndexCourseByName, } from "./Utils";
import { ViewMenus } from "./ViewMenus";

export class Menu implements FunctionalRequirements {
    private students: Student[];
    private listDisciplines: Discipline[] = [];
    private listCourses: Course[];

    constructor(students: Student[] = [], courses: Course[] = []) {
        this.students = students
        this.listCourses = courses
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
        console.log("\nGerenciando Disciplinas...");
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
        console.log("\nCADASTRAR DISCIPLINA");
        const name: string = readlineSync.question("Nome da disciplina: ");
        const workload: number = parseInt(readlineSync.question("Número de horas da carga-horária: "));

        if (findDisciplineByName(this.listDisciplines, name)) {
            console.error("\nErro: Disciplina já cadastrada.\n");
        } else {
            const newDiscipline = new Discipline(name, workload, 0);
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
        console.log("\nREMOVER DISCIPLINA");
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
        console.log("\nGerenciando Cursos...");
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
                this.verifyListCourse();
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
            console.log("\nVocê não possui disciplina cadastrada\n");
            console.log("\nVolte ao MENU principal e cadastre uma diciplina\n");

            this.manageCourses()
        } else {
            console.log("\nCADASTRAR CURSO");

            const name: string = readlineSync.question("\nNome do curso: ");
            const listOfDicipline: Discipline[] = [];
            const turn: string = readlineSync.question("\nQual turno? ");
            const createdCourse: Course = new Course(name, listOfDicipline, turn);
            this.addDiciplineInCouse(createdCourse);
            this.manageCourses()
        }

    }
    public addDiciplineInCouse(createdCourse: Course): void {
        console.log(ViewMenus.addDiciplineInCouseMenu());
        const selectedOption = readlineSync.question("\nSelecione uma opção: ");
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
                this.manageCourses()
                break;
        }
    }
    public verifyDicipline(createdCourse: Course): void {
        const diciplineToAdd = readlineSync.question("\nDigite o nome da diciplina a ser adicionada: ");
        //chamar função de verificar diciplina
        const index = findDisciplineIndexByName(this.listDisciplines, diciplineToAdd)
        if (index === -1) {
            console.log("\nDiciplina não encontrada");
            this.verifyDicipline(createdCourse);
        } else {
            const tamanhoAtualListaCursos = createdCourse.getListOfDiciplineCourse.length;
            this.registerNewDisciplineOnList(createdCourse.getListOfDiciplineCourse(),this.listDisciplines[index]);
            if (tamanhoAtualListaCursos !== (createdCourse.getListOfDiciplineCourse.length + 1)) {
                this.listCourses.push(createdCourse);
                return
            } else {
                console.log('Ocorreu um erro tente novamente')
                this.manageCourses();
            }

        }
    }
    public verifyListCourse(): void {
        if (this.listCourses.length === 0) {
            console.log("\nVocê não possui curso cadastrado\n");
            console.log("\nVolte ao MENU principal e cadastre um curso\n");
            this.manageCourses()
        } else {
            this.conferCourse();

            this.manageCourses()
        }

    }
    public conferCourse(): void {
        const name: string = readlineSync.question("\nNome do curso: ");
        const courses = findIndexCourseByName(this.listCourses, name);
        if (courses === -1) {
            console.log("\nCurso não encontrado.")
            this.manageCourses();
        } else {
            console.log(ViewMenus.cousesInfo(this.listCourses[courses]));
            this.manageCourses()
        }

    }
    deleteCourse(): void {
        const name: string = readlineSync.question("Nome do curso que será removido: ");
        const coursesIndex = findIndexCourseByName(this.listCourses, name);
        if (coursesIndex !== -1) {
            const courseRemove = this.listCourses.splice(coursesIndex, 1);
            console.log("O seguinte curso foi removido com sucesso:");
            console.log(ViewMenus.cousesInfo(courseRemove[0]));

        } else {
            console.log("\nCurso não encontrado.\n");
        }

        this.manageCourses()
    }
    updateCourse(): void {
        if (this.listCourses.length == 0) {
            console.log("Não há curso para ser atualizado.");
        } else {
            this.listAllCourses();
            const name: string = readlineSync.question("\nNome do curso que será atualizado: ");
            const courseIndexToUpdate = findIndexCourseByName(this.listCourses, name);
            if (courseIndexToUpdate === -1) {
                console.log(`Curso ${name} não encontrado.`);
                this.manageCourses();
            } else {
                const course = this.listCourses[courseIndexToUpdate];
                let opt: string = readlineSync.question("Informe o novo turno do curso ou\ndeixe em branco pra manter o existente: ").trim();
                if (opt) course.setTurn(opt);
                opt = readlineSync.question("Caso informado 1, será aberto o menu para manipular\nas disciplinas desse curso, senão as disciplinas não serão afetadas: ");
                if (opt) {
                    console.log(ViewMenus.manageDisciplinesFromCourse(course));
                    const option: string = readlineSync.question("\nEscolha uma opção: ");
                    this.processOptionManageDisciplinesFromCourse(course, option);
                } else {
                    this.manageCourses();
                }
            }
        }

    }
    processOptionManageDisciplinesFromCourse(course: Course, option: string) {
        switch (option) {
            case "1":
                this.addDiciplineInCouse(course);
                break;
            case "2":
                console.log("Implementar consultar disciplina do curso");
                break;
            case "3":
                console.log("Implementar remover disciplina do curso");
                break;
            case "4":
                console.log("Implementar Atualizar disciplina do curso");
                break;
            case "5":
                console.log("Implementar listar disciplinas do curso");
                break;
            case "6":
                console.log("implementar voltar ao menu principal");
                break;
            case "7":
                console.log("Saindo do sistema!");
                break;
            default:
                console.error("Opção inválida.");
                this.updateCourse();
                break;
        }
    }

    public registerNewDisciplineOnList(listOfDisciplines: Discipline[], sourceDiscipline: Discipline) {
        const newDiscipline = new Discipline(sourceDiscipline.getName(), sourceDiscipline.getWokload(), 0);
        listOfDisciplines.push(newDiscipline);
    }

    public registerCourseToStudent(course: Course) { }

    listAllCourses(): void {
        for (const course of this.listCourses) {
            console.log(`\nNome do Curso: ${course.getName()}`);
            console.log(`Carga Horária: ${course.getWorkload()}`);
            console.log(`Turno: ${course.getTurn()}`);
            console.log(`Disciplinas: `);
            for (const discipline of course.getListOfDiciplineCourse()) {
                console.log(`   - ${discipline.getName()}`);
            }
        }
    }

    public listDisciplinesFromCourse(course: Course): void {
        let disciplines = course.getListOfDiciplineCourse();
        for (const discipline of disciplines) {
            console.log(discipline);
        }
    }
}