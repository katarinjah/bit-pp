"use strict";

class Subject {
    constructor(subjectName) {
        this.name = subjectName;
    };

    getSubjectName() {
        return this.name;
    };
};

class Student {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    };

    getStudentData() {
        var firstName = this.name[0].toUpperCase() + this.name.slice(1);
        var lastName = this.surname[0].toUpperCase() + this.surname.slice(1);
        return firstName + " " + lastName;
    };
};

class Exam {
    constructor(subjectName, studentName, grade) {
        if (!(subjectName instanceof Subject)) {
            throw new Error("Invalid subject input");
        };
        if (!(studentName instanceof Student)) {
            throw new Error("Invalid student input");
        };
        this.subjectName = subjectName;
        this.studentName = studentName;
        this.grade = grade;
    };

    getExamInfo() {
        return this.subjectName.getSubjectName() + " - " + this.studentName.getStudentData();
    };

    hasPassed() {
        if (this.grade > 5) {
            return true;
        } else {
            return false;
        };
    };
};