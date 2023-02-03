"use strict";

var uiModule = (function () {

    var studentCount = 0;
    var passedCount = 0;
    var failedCount = 0;

    var chooseSubject = document.querySelector("#subjects");
    var addStudent = document.querySelector("#name");
    var entryError = document.querySelector("#entry-error");
    var chooseGrade = document.querySelector("#grades");
    var totalStudentCount = document.querySelector("#count");
    var passedCountSpan = document.querySelector("#passed-count");
    var failedCountSpan = document.querySelector("#failed-count");
    var percentageFailed = document.querySelector("#percentage-failed");
    var passedList = document.querySelector("#passed-list");
    var failedList = document.querySelector("#failed-list");

    var validateInputs = function() {
        if (!chooseSubject.value) {
            entryError.textContent = "Please select a subject.";
            return false;
        };
        if (!addStudent.value || !isNaN(addStudent.value)) {
            entryError.textContent = "Invalid student name input.";
            return false;
        };
        var space = new RegExp(/\s/);
        if (!space.test(addStudent.value)) {
            entryError.textContent = "Please separate name and surname.";
            return false;
        };
        if (!chooseGrade.value) {
            entryError.textContent = "Please select a grade.";
            return false;
        } else {
        entryError.textContent = "";
        return true;
        };
    };

    var collectData = function() {
        var subject = chooseSubject.value;
        var student = addStudent.value;
        var grade = chooseGrade.value;

        var studentName = student.split(" ");
        var initialName = studentName[0];
        var initialSurname = studentName[1];

        var firstName = (initialName[0]).toUpperCase() + initialName.slice(1);
        var lastName = (initialSurname[0]).toUpperCase() + initialSurname.slice(1);

        return {
            subjectName: subject,
            studentName: firstName + " " + lastName,
            grade: grade
        };
    };

    var passedExam = function(studentData, chosenGrade) {
        var passedItem = document.createElement("li");
        passedItem.textContent = studentData;
        var gradePspan = document.createElement("span");
        gradePspan.setAttribute("id", "grade-passed");
        gradePspan.textContent = chosenGrade;
        passedList.appendChild(passedItem);
        passedItem.appendChild(gradePspan);  
    };

    var failedExam = function(studentData, chosenGrade) {
        var failedItem = document.createElement("li");
        failedItem.textContent = studentData;
        var gradeFspan = document.createElement("span");
        gradeFspan.setAttribute("id", "grade-failed");
        gradeFspan.textContent = chosenGrade;
        failedList.appendChild(failedItem);
        failedItem.appendChild(gradeFspan); 
    };

    var updateStats = function(data) {
        studentCount = document.getElementsByTagName("li").length;
        totalStudentCount.textContent = studentCount;

        passedCount = document.querySelectorAll("#grade-passed").length;
        passedCountSpan.textContent = passedCount;

        failedCount = studentCount - passedCount;
            if (failedCount === 0){
                failedCountSpan.textContent = "0";
                percentageFailed.textContent = "0%";
            };
        failedCountSpan.textContent = failedCount;
        
        var failedPercentage = (failedCount * 100) / studentCount;
        percentageFailed.textContent = failedPercentage.toFixed() + "%";
    };

    var clearInputs = function() {
        chooseSubject.value = "";
        addStudent.value = "";
        chooseGrade.value = "";
    };

    return {
        collectData: collectData,
        validateInputs: validateInputs,
        passedExam: passedExam,
        failedExam: failedExam,
        updateStats: updateStats,
        clearInputs: clearInputs
    };

})()
