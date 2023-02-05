"use strict";

var uiModule = (function() {

    var inputTitleElement = document.querySelector("#title");
    var inputLengthElement = document.querySelector("#length");
    var selectGenreElement = document.querySelector("#genre");
    var movieErrorElement = document.querySelector("#movieError");
    var ulMovieListElement = document.querySelector("#movieList");

    var inputDateElement = document.querySelector("#date");
    var programErrorElement = document.querySelector("#programError");
    var ulProgramListElement = document.querySelector("#programList");

    var selectMovieElement = document.querySelector("#selectMovie");
    var selectProgramElement = document.querySelector("#selectProgram");
    var addMovieErrorElement = document.querySelector("#addMovieError");

    var collectMovieData = function() {
        var title = inputTitleElement.value;
        var length = inputLengthElement.value;
        var genre = selectGenreElement.value;
        
        return {
        title: title,
        length: length,
        genre: genre
        };
    };
    
    var validateMovie = function() {
        if (!(inputTitleElement.value)) {
            movieErrorElement.textContent = "Title is required!";
            return false;
        };
        if (!(inputLengthElement.value)) {
            movieErrorElement.textContent = "Length is required!";
            return false;
        };
        if(isNaN(inputLengthElement.value)) {
            movieError.textContent = "Please fill in length in minutes."
            return false;
        };
        if (!(selectGenreElement.value)) {
            movieErrorElement.textContent = "Please choose a genre.";
            return false;
        } else {
            movieErrorElement.textContent = "";
            return true;
        };
    };

    var addMovieToList = function(movie, index) {
        var movieDataLi = document.createElement("li");
        movieDataLi.textContent = movie.getData();
        ulMovieListElement.appendChild(movieDataLi);

        var movieOption = document.createElement("option");
        movieOption.textContent = movie.title;
        movieOption.setAttribute("value", index);
        selectMovieElement.appendChild(movieOption);
    };

    var clearMovieInputs = function() {
        inputTitleElement.value = "";
        inputLengthElement.value = "";
        selectGenreElement.value = "";
    };

  var collectProgramData = function() {
        var dateInputValue = inputDateElement.value;
        
        return {
        date: dateInputValue
        };
    };

    var validateProgram = function() {
        var dateInputValue = inputDateElement.value;
        var date = new Date(dateInputValue);
        if (date.getTime() < Date.now()) {
        programErrorElement.textContent = "Invalid date!";
        return false;
        } else {
        programErrorElement.textContent = "";
        return true;
        };
    };

    function setProgramError(string){
        programErrorElement.textContent = string;
        return;
    };

    var clearProgram = function() {
        inputDateElement.value = "";
    };

    var addProgramToList = function(program, index) {
        var li = document.createElement("li");
        li.setAttribute("id", "program-item-" + index);
        li.textContent = program.getData();
        ulProgramListElement.appendChild(li);

        var option = document.createElement("option");
        option.setAttribute("value", index);
        option.textContent = li.textContent;
        selectProgramElement.appendChild(option);
    };

    var addMovieToProgram = function() {
        var selectedMovieIndex = selectMovieElement.value;
        var selectedProgramIndex = selectProgramElement.value;

        return {
            movie: selectedMovieIndex,
            program: selectedProgramIndex
        };
    };

    var setMovieToProgramError = function(string){
        addMovieErrorElement.textContent = string;
    };   

    var clearFestivalData = function() {
        selectMovieElement.value = "";
        selectProgramElement.value = "";
        addMovieErrorElement.textContent = "";
    };
    
    return {
        collectMovieData: collectMovieData,
        collectProgramData: collectProgramData,
        setProgramError: setProgramError,
        addMovieToList: addMovieToList,
        addMovieToProgram: addMovieToProgram,
        validateMovie: validateMovie,
        validateProgram: validateProgram,
        clearMovieInputs: clearMovieInputs, 
        clearProgram: clearProgram,
        addProgramToList: addProgramToList,
        setMovieToProgramError: setMovieToProgramError,
        clearFestivalData: clearFestivalData
    };

})();