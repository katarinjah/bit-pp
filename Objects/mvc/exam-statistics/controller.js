"use strict";

var student = new Student();
var chooseSubject = document.querySelector("#subjects");
var addStudent = document.querySelector("#name");
var chooseGrade = document.querySelector("#grades");
var addEntry = document.querySelector("#add-entry");
var entryError = document.querySelector("#entry-error");

function evaluateStudent() {
    //collect data from user
    var subjectValue = chooseSubject.value;
    var studentValue = addStudent.value;
    var gradeValue = chooseGrade.value;

    //validate input
    if (!subjectValue) {
        entryError.textContent = "Please choose a subject.";
        return;
    };
    if (!studentValue) {
        entryError.textContent = "Please provide a name.";
        return;
    };
    if (!gradeValue) {
        entryError.textContent = "Please choose a grade.";
        return;
    };
    entryError.textContent = "";


    // clear inputs
    var subjectValue = "";
    var studentValue = "";
    var gradeValue = "";

};

function getStatistics() {

};

addEntry.addEventListener("click", evaluateStudent);


