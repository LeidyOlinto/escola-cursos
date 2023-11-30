"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User(name, phoneNumber, email, age) {
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.age = age;
    }
    User.prototype.getName = function () { return this.name; };
    User.prototype.getPhoneNumber = function () { return this.phoneNumber; };
    User.prototype.getEmail = function () { return this.email; };
    User.prototype.getAge = function () { return this.age; };
    User.prototype.setName = function (newName) { this.name = newName; };
    User.prototype.setPhoneNumber = function (newPhoneNumber) { this.phoneNumber = newPhoneNumber; };
    User.prototype.setEmail = function (newEmail) { this.email = newEmail; };
    User.prototype.setAge = function (newAge) { this.age = newAge; };
    return User;
}());
exports.User = User;
