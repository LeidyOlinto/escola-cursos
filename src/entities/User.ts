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

    public getName(): string { return this.name; }

    public getPhoneNumber(): number { return this.phoneNumber; }

    public getEmail(): string { return this.email; }

    public getAge(): number { return this.age; }

    public setName(newName: string): void { this.name = newName; }

    public setPhoneNumber(newPhoneNumber: number): void { this.phoneNumber = newPhoneNumber; }

    public setEmail(newEmail: string): void { this.email = newEmail; }

    public setAge(newAge: number): void { this.age = newAge; }
}