export class Discipline {
    public name: string;
    public workload: number;

    constructor(name: string, workload: number) {
        this.name = name;
        this.workload = workload
    }

    getName(): string {
        return this.name;
    }
}