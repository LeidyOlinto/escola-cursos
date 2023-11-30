"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Course = void 0;
var Course = /** @class */ (function () {
    function Course(name, listOfDiciplineCourse, turn) {
        this.name = name;
        this.listOfDiciplineCourse = listOfDiciplineCourse;
        this._workload = this.getTotalWorkload();
        this.turn = turn;
    }
    Course.prototype.getTotalWorkload = function () {
        return this.listOfDiciplineCourse.reduce(function (a, b) { return a + b.getWokload(); }, 0);
    };
    Course.prototype.getName = function () { return this.name; };
    ;
    Course.prototype.getWorkload = function () { return this._workload; };
    ;
    Course.prototype.getListOfDiciplineCourse = function () { return this.listOfDiciplineCourse; };
    ;
    Course.prototype.getTurn = function () { return this.turn; };
    Course.prototype.setWorkload = function () { return this._workload; };
    ;
    Course.prototype.setListOfDiciplineCourse = function () { this.listOfDiciplineCourse; };
    ;
    Course.prototype.setTurn = function () { return this.turn; };
    return Course;
}());
exports.Course = Course;
