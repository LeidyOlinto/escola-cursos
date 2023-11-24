import * as readlineSync from 'readline-sync';

class User {
    name: string;
    phoneNumber: number;
    email: string;
    dateOfBirth: number;

    constructor(name: string, phoneNumber: number, email: string, dateOfBirth: number) {
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.dateOfBirth = dateOfBirth;
    }
}

class Student extends User {
    listOfCourses: Courses[];
    constructor(name: string, phoneNumber: number, email: string, dateOfBirth: number, listOfCourses: Courses[]) {
        super(name, phoneNumber, email, dateOfBirth);
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.dateOfBirth = dateOfBirth;
        this.listOfCourses = listOfCourses
    }

    getName(): string {
        return this.name;
    }
}
class Courses {
    name: string;
    workload: number;
    listOfDicipline: Discipline[];

    constructor(name:string, workload:number, listOfDicipline:Discipline[]){
        this.name = name;
        this.workload = workload;
        this.listOfDicipline = listOfDicipline;
    } 
}
class Discipline {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }
}

class System {
    students: Student[];
    disciplines: Discipline[] ;
    courses: Courses[] ;

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


console.log( 'ta dando certo');
const system = new System();
system.showMenu();
