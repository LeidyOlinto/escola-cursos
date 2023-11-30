"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
var User_1 = require("./User");
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, phoneNumber, email, age, listOfCourses) {
        var _this = _super.call(this, name, phoneNumber, email, age) || this;
        _this.name = name;
        _this.phoneNumber = phoneNumber;
        _this.email = email;
        _this.age = age;
        _this.listOfCourses = listOfCourses;
        return _this;
    }
    Student.prototype.getName = function () { return this.name; };
    return Student;
}(User_1.User));
exports.Student = Student;
