"use strict";

var chooseSubject = document.querySelector("#subjects");
var addStudent = document.querySelector("#name");
var totalStudentCount = document.querySelector("#count");
var chooseGrade = document.querySelector("#grades");
var addEntry = document.querySelector("#add-entry");
var entryError = document.querySelector("#entry-error");
var passedList = document.querySelector("#passed-list");
var failedList = document.querySelector("#failed-list");
var passedTotal = document.querySelector("#passed-total");
var failedTotal = document.querySelector("#failed-total");
var percentageFailed = document.querySelector("#percentage-failed");
var passedCount = document.querySelector("#passed");
var failedCount = document.querySelector("#failed");


function evaluateStudent() {
    //collect data from user
    var subjectValue = chooseSubject.value;
    var studentValue = addStudent.value;
    var gradeValue = chooseGrade.value;

    //validate input
    if (!subjectValue) {
        entryError.textContent = "Please select a subject.";
        return;
    };
    if (!studentValue || !isNaN(studentValue)) {
        entryError.textContent = "Invalid student name input.";
        return;
    };

    /*var space = new RegExp("/^\s+$/");
    if (!(space.test(studentValue))) {
        entryError.textContent = "Invalid student name input.";
        return;
    };*/

    if (!gradeValue) {
        entryError.textContent = "Please select a grade.";
        return;
    };
    entryError.textContent = "";

    // clear inputs
    var subjectValue = "";
    var studentValue = "";
    var gradeValue = "";

    //create exam instance and add it to both lists
    var exam = new Exam();
    var examInfo = exam.getExamInfo();
    totalStudentCount.value = 0;
   
    if(exam.hasPassed()) {
        failedList.push(examInfo);
        var li = document.createElement("li");
        li.textContent = exam.getExamInfo();
        failedList.appendChild(li);
        failed.value += 1;
        totalStudentCount++;
    } else {
        passedList.push(examInfo);
        var li = document.createElement("li");
        li.textContent = exam.getExamInfo();
        passedList.appendChild(li);
        passed.value += 1;
        totalStudentCount++;
    };

};

function getPercentage() {
    var result = failedList.length / failed.value;
    return result + "%";
};

function getStatistics() {

};
   

addEntry.addEventListener("click", evaluateStudent);
addEntry.addEventListener("click", getStatistics);
addEntry.addEventListener("click", getPercentage); 



