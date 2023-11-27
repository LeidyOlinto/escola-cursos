import { Course } from "./Course";
import { User } from "./User";

export class Student extends User {
    listOfCourses: Course[];

    constructor(name: string, phoneNumber: number, email: string, age: number, listOfCourses: Course[]) {
        super(name, phoneNumber, email, age);
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.age = age;
        this.listOfCourses = listOfCourses
    }

    public getName(): string { return this.name; }
}