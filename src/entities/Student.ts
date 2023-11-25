import { User } from "./User";


export class Student extends User {
    //listOfCourses: Courses[];
    constructor(name: string, phoneNumber: number, email: string, age: number, /*listOfCourses: Courses[]*/) {
        super(name, phoneNumber, email, age);
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.age = age;
        //this.listOfCourses = listOfCourses
    }

    public getName(): string {
        return this.name;
    }
}