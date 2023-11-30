"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Discipline = void 0;
var Discipline = /** @class */ (function () {
    function Discipline(name, workload, grade) {
        this._name = name;
        this._workload = workload;
        this._grade = grade;
    }
    Discipline.prototype.getName = function () { return this._name; };
    Discipline.prototype.getWokload = function () { return this._workload; };
    Discipline.prototype.getGrade = function () { return this._grade; };
    Discipline.prototype.setWorkload = function (newWorkload) { this._workload = newWorkload; };
    Discipline.prototype.setGrade = function (newGrade) { this._grade = newGrade; };
    return Discipline;
}());
exports.Discipline = Discipline;
