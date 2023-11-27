import { Discipline } from "./Discipline";
export class Course {
   public name: string;
   private _workload: number;
   public turn:string;
   public  listOfDicipline: Discipline[];

    constructor(name: string, listOfDicipline: Discipline[],turn: string) {
        this.name = name;
        this.listOfDicipline = listOfDicipline;
        this._workload = this.getTotalWorkload();
        this.turn = turn;
    }

    private getTotalWorkload(): number {
        return this.listOfDicipline.reduce((a, b) => { return a + b.getWokload() }, 0);
    }
    getName(): string { 
        return this.name
     };
    getWorkload(): number { 
        return this._workload
    };
   public getListOfDicipline(): Discipline[]{
       return this.listOfDicipline
    };
    getTurn(): string {
        return this.turn
    }

    setWorkload(): number {
        return this._workload
    };
    setListOfDicipline():void {
         this.listOfDicipline
    };
    setTurn(): string {
        return this.turn
    }
    
};