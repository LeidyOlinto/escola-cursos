import { Discipline } from "./Discipline";


export class Course {
    name: string;
    workload: number;
    listOfDicipline: Discipline[];

    constructor(name: string, listOfDicipline: Discipline[]) {
        this.name = name;
        this.listOfDicipline = listOfDicipline;
        this.workload = this.getTotalWorkload();
    }

    private getTotalWorkload(): number {
        return this.listOfDicipline.reduce((a, b) => { return a + b.getWokload() }, 0);
    }
}