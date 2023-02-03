"use strict";

var dataModule = (function(){

    class Subject {
        constructor(subject) {
            this.subject = subject;
        };

        getSubjectName() {
            return this.subject;
        };
    };

    var createSubject = function(subject) {
        return new Subject(subject)
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

    var createStudent = function (name,surname) {
        return new Student(name,surname);
    };

    class Exam {
        constructor(sub, student, grade){
            this.sub = sub;
            this.student = student;
            this.grade = grade;
        };
        getExamInfo(){
            return this.sub + " - " + this.student;
        
        };
        hasPassed(){
            if(this.grade > 5) { 
                return true;
            } else {
                return false;
            }
        };
    };

    var createExam = function (sub, student, grade) {
        return new Exam(sub, student, grade);
    };

    return {
        createSubject: createSubject,
        createStudent: createStudent,
        createExam: createExam
    };

})()