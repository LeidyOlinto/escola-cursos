export class User {
    protected name: string;
    protected phoneNumber: number;
    protected email: string;
    protected age: number;

    constructor(name: string, phoneNumber: number, email: string, age: number) {
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.age = age;
    }
}