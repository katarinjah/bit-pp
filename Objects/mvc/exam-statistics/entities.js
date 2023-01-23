"use strict";

class Subject {
    constructor(subjectName) {
        this.name = subjectName;
    };

    getSubjectName() {
        return this.name;
    }
};

class Student {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    };

    getStudentData() {
        var firstLetter = this.name[0].toUpperCase() + this.name.slice(1);
        var lastLetter = this.surname[0].toUpperCase() + this.surname.slice(1);
        return firstLetter + lastLetter;
    };
};

class Exam extends Student {
    constructor(subjectName, name, surname, grade) {
        super(name, surname);
        if (!(subjectName instanceof Subject)) {
            throw new Error("Invalid subject input");
        };
        this.subjectName = subjectName;
        this.grade = grade;
    };

    getExamInfo() {
        return this.subjectName + ", " + this.getStudentData();
    };

    hasPassed() {
        if (this.grade.value > 5) {
            return true;
        } else {
            return false;
        };
    };
};



