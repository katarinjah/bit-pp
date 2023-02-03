"use strict";

var mainModule = (function(data, ui) {

    var addEntry = document.querySelector("#add-entry");

    var clickOnAdd = function(e) {
        e.preventDefault();
        if (!ui.validateInputs()) return;
        var collectedData = ui.collectData();
        var examData = data.createExam(collectedData.subjectName, collectedData.studentName, collectedData.grade);
        var updatedExam = examData.getExamInfo();
        var grade = examData.grade;
        var passed = examData.hasPassed();
        if (passed) {
            ui.passedExam(updatedExam, grade);
        } else {
            ui.failedExam(updatedExam, grade);
        };
        ui.updateStats();
        ui.clearInputs();  
    };

    addEntry.addEventListener("click", clickOnAdd);

})(dataModule,uiModule)