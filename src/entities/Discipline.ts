export class Discipline {
    private _name: string;
    private _workload: number;
    private _grade : number

    constructor(name: string, workload: number, grade:number) {
        this._name = name;
        this._workload = workload;
        this._grade = grade
    }

    getName(): string {
        return this._name;
    }
    getWokload():number {
        return this._workload;
    }
    getGrade():number {
        return this._grade;
    }
    setWorkload(newWorkload: number){
        this._workload = newWorkload
    }
    setGrade(newGrade: number){
        this._grade = newGrade
    }

}