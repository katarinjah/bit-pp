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
    var newGrade = parseFloat(chooseGrade.value);

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

    if (!newGrade) {
        entryError.textContent = "Please select a grade.";
        return;
    };
    entryError.textContent = "";

    // split student name and surname
    var student_name = student.split(" ");
    var initialName = student_name[0];
    var initialSurname = student_name[1];

    var name = initialName[0].toUpperCase() + initialName.slice(1);
    var surname = initialSurname[0].toUpperCase() + initialSurname.slice(1);

    // create entities
    var newStudent = new Student(name, surname);
    var newSubject = new Subject(subject);
    var newExam = new Exam(newSubject, newStudent, newGrade);

    // increment student count
    studentCount++;
    totalStudentCount.textContent = studentCount;

    // create new list item for each added entry
    var newItem = document.createElement("li");
    newItem.textContent = newExam.getExamInfo();

    // check if student passed or failed
    if (newExam.hasPassed()) {
        passedCount++;
        passedCountSpan.textContent = passedCount;
        var gradePspan = document.createElement("span");
        gradePspan.setAttribute("id", "grade-passed");
        gradePspan.textContent = newGrade;
        passedList.appendChild(newItem);
        newItem.appendChild(gradePspan);  
    } else {
        failedCount++;
        failedCountSpan.textContent = failedCount;
        var gradeFspan = document.createElement("span");
        gradeFspan.setAttribute("id", "grade-failed");
        gradeFspan.textContent = newGrade;
        failedList.appendChild(newItem);
        newItem.appendChild(gradeFspan); 
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