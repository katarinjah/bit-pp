"use strict";

// initialize variables for tracking statistics
var studentCount = 0;
var passedCount = 0;
var failedCount = 0;

 // get form elements
 var chooseSubject = document.querySelector("#subjects");
 var addStudent = document.querySelector("#name");
 var addEntry = document.querySelector("#add-entry");
 var entryError = document.querySelector("#entry-error");
 var chooseGrade = document.querySelector("#grades");

 // get elements for displaying statistics
var totalStudentCount = document.querySelector("#count");
var passedCountSpan = document.querySelector("#passed-count");
var failedCountSpan = document.querySelector("#failed-count");
var percentageFailed = document.querySelector("#percentage-failed");

// get elements for displaying passed and failed lists
var passedList = document.querySelector("#passed-list");
var failedList = document.querySelector("#failed-list");

addEntry.addEventListener("click", function(event) {
    event.preventDefault();

    //collect data from user
    var subject = chooseSubject.value;
    var student = addStudent.value;
    var grade = parseFloat(chooseGrade.value);

    //validate input
    if (!subject) {
        entryError.textContent = "Please select a subject.";
        return;
    };
    if (!student || !isNaN(student)) {
        entryError.textContent = "Invalid student name input.";
        return;
    };
    var space = new RegExp(/\s/);
    if (!space.test(student)) {
        entryError.textContent = "Please separate name and surname.";
        return;
    };

    if (!grade) {
        entryError.textContent = "Please select a grade.";
        return;
    };
    entryError.textContent = "";

     // Increment student count
     studentCount++;
     totalStudentCount.textContent = studentCount;

    // create new list item for student
    var newItem = document.createElement("li");
    newItem.textContent = subject + " - " + student + "               " + grade;

    // check if student passed or failed
    if (grade >= 6) {
        passedCount++;
        passedCountSpan.textContent = passedCount;
        passedList.appendChild(newItem);
    } else {
        failedCount++;
        failedCountSpan.textContent = failedCount;
        failedList.appendChild(newItem);
    };

    // calculate percentage of students who failed
    if(failedCount === 0){
        failedCountSpan.textContent = "0";
        percentageFailed.textContent = "0%";
    } else {
        var percentage = (failedCount / studentCount) * 100;
        percentageFailed.textContent = percentage.toFixed(0) + "%";
    };

    // clear inputs
    chooseSubject.value = "";
    addStudent.value = "";
    chooseGrade.value = "";
});
