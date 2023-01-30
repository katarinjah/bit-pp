"use strict";

var appModule = (function(data, ui) {

    var createMovieButton = document.querySelector("#createMovie");
    var createProgramButton = document.querySelector("#createProgram");
    var addMovieToProgramButton = document.querySelector("#addMovie");

    var clickOnCreateMovie = function() {
        if (ui.validateMovie()) {
        data.newMovie(ui.collectMovieData());
        ui.addMovieToList();
        ui.clearInputs();
        };
    };

    // var clickOnCreateProgram = function() {
    //     var formData = ui.createProgram;
    //     ui.validateProgram;
    //     var createdProgram = ui.createProgram;
    //     var index = data.createProgram;
    //     ui.updateProgramList;
    //     //ui.clearInputs;
    // };

    // var clickOnAddMovie = function() {
    //     var formData = ui.updateProgramData();
    //     var updatedProgram = program.addMovie(formData.movieIndex, formData.programIndex);
    //     ui.validateFestival();
    //     ui.updateProgramData(updatedProgram.program, updatedProgram.oldProgram);
    // };
    
    createMovieButton.addEventListener("click", clickOnCreateMovie);
    // createProgramButton.addEventListener("click", clickOnCreateProgram);
    // addMovieToProgramButton.addEventListener("click", clickOnAddMovie);

})(dataModule, uiModule);