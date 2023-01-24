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
        var firstName = this.name[0].toUpperCase() + this.name.slice(1);
        var lastName = this.surname[0].toUpperCase() + this.surname.slice(1);
        return firstName + lastName;
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
        return this.subjectName + " - " + getStudentData() + "\t\t\t\t" + this.grade;
    };

    hasPassed() {
        if (this.grade.value > 5) {
            return true;
        } else {
            return false;
        };
    };
};


