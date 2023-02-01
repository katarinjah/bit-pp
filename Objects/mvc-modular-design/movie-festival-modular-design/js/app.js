"use strict";

var appModule = (function(data, ui) {

    var createMovieButton = document.querySelector("#createMovie");
    var createProgramButton = document.querySelector("#createProgram");
    var addMovieToProgramButton = document.querySelector("#addMovie");

    var clickOnCreateMovie = function() {
        var movieData = ui.collectMovieData();
        if (!ui.validateMovie()) return;
        var movie = data.createMovie(movieData.title, movieData.length, movieData.genre);
        var index = data.addMovieToFestival(movie);
        ui.addMovieToList(movie, index);
        ui.clearMovieInputs();
    };

    var clickOnCreateProgram = function() {
        var programData = ui.collectProgramData();
        if (!ui.validateProgram()) return;
        var isValid = data.validateProgramData(programData.date)
        if (!isValid){
            ui.setProgramError("Please select a date.") ;
            return;
        };
        var date = new Date(programData.date)
        var program = data.createProgram(date);
        var index = data.addProgramToFestival(program);
        ui.addProgramToList(program, index);
        ui.clearProgram();
    };
  
    var clickOnAddMovie = function() {
        var formData = ui.addMovieToProgram();
        var isValid = data.validateAddMovieAndProgram(formData.movie, formData.program);
        if (!isValid) {
            ui.setMovieToProgramError("Please select an option from the list.");
            return;
        };
        data.addToFestival(formData.movie, formData.program);
        ui.clearFestivalData();
    };
    
    createMovieButton.addEventListener("click", clickOnCreateMovie);
    createProgramButton.addEventListener("click", clickOnCreateProgram);
    addMovieToProgramButton.addEventListener("click", clickOnAddMovie);

})(dataModule, uiModule);