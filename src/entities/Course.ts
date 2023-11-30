import { Discipline } from "./Discipline";

export class Course {
    public name: string;
    private _workload: number;
    public turn: string;
    public listOfDiciplineCourse: Discipline[];

    constructor(name: string, listOfDiciplineCourse: Discipline[], turn: string) {
        this.name = name;
        this.listOfDiciplineCourse = listOfDiciplineCourse;
        this._workload = this.getTotalWorkload();
        this.turn = turn;
    }

    private getTotalWorkload(): number {
        return this.listOfDiciplineCourse.reduce((a, b) => { return a + b.getWokload() }, 0);
    }
    getName(): string { return this.name };

    getWorkload(): number { return this._workload };

    public getListOfDiciplineCourse(): Discipline[] { return this.listOfDiciplineCourse };

    getTurn(): string { return this.turn }

    setWorkload(): number { return this._workload };

    setListOfDiciplineCourse(): void { this.listOfDiciplineCourse };

    setTurn(): string { return this.turn }
}