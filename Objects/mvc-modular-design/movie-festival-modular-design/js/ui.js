"use strict";

var uiModule = (function() {

    var inputTitleElement = document.querySelector("#title");
    var inputLengthElement = document.querySelector("#length");
    var selectGenreElement = document.querySelector("#genre");
    var movieErrorElement = document.querySelector("#movieError");
    var addMovieErrorElement = document.querySelector("#addMovieError");

    var inputDateElement = document.querySelector("#date");

    var ulMovieListElement = document.querySelector("#movieList");
    var ulProgramListElement = document.querySelector("#programList");
    var selectMovieElement = document.querySelector("#selectMovie");
    var selectProgramElement = document.querySelector("#selectProgram");
    var programErrorElement = document.querySelector("#programError");

    var collectMovieData = function() {
        return {
            titleValue: inputTitleElement.value,
            lengthValue: inputLengthElement.value,
            genreValue: selectGenreElement.value,
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

    var addMovieToList = function(collectMovieData, obj, index) {
            var movieDataLi = document.createElement("li");
            movieDataLi.textContent = collectMovieData;
            ulMovieListElement.appendChild(movieDataLi);

            var movieOption = document.createElement("option");
            movieOption.textContent = inputTitleElement.value;
            //var index = data.newFestival.movieList.length - 1;
            movieOption.setAttribute("value", index);
            selectMovieElement.appendChild(movieOption);
        };

    var clearInputs = function() {
        inputTitleElement.value = "";
        inputLengthElement.value = "";
        selectGenreElement.value = "";
    };

    var collectProgramData = function(dateInputValue) {
        var dateInputValue = inputDateElement.value;
        return data.createProgram(dateInputValue);

    }

    var createdProgram = function() {
        var dateInputValue = inputDateElement.value;
        var newProgram = data.program(dateInputValue);
        festival.programList.push(newProgram);

        return {
            dateInputValue: dateInputValue,
            newProgram: newProgram
        };
    };

    var validateProgram = function() {
         var dateInputValue = inputDateElement.value;

         if (!dateInputValue) {
            programErrorElement.textContent = "Please select a date.";
            return;
        };
            
        var date = new Date(dateInputValue);
            
        if (date.getTime() < Date.now()) {
            programErrorElement.textContent = "Invalid date!";
            return;
        };
            
        var hasProgramWithSameDate = festival.programList.some(function (program) {
            return date.getTime() === program.date.getTime();
        });
            
        if (hasProgramWithSameDate) {
            programErrorElement.textContent = "Program for the same date already exists.";
            return;
        };
        programErrorElement.textContent = "";
    };

    var updateProgramList = function() {
        var index = festival.programList.length - 1;
        var li = document.createElement("li");
        li.setAttribute("id", "program-item-" + index);
        li.textContent = program.getData();
        ulProgramListElement.appendChild(li);

        var option = document.createElement("option");
        option.setAttribute("value", index);
        option.textContent = program.getData();
        selectProgramElement.appendChild(option);
    };

    var addMovieToProgram = function() {
        var selectedMovieIndex = selectMovieElement.value;
        var selectedProgramIndex = selectProgramElement.value;
        
        var movieToAdd = festival.movieList[selectedMovieIndex];
        var programToAddTo = festival.programList[selectedProgramIndex];

        programToAddTo.addMovie(movieToAdd);
        var programLi = document.querySelector("#program-item-" + selectedProgramIndex);
        programLi.textContent = programToAddTo.getData();
        selectProgramElement.textContent = "-";
    };

    var validateFestival = function() {
        if (!selectedMovieIndex || !selectedProgramIndex) {
            addMovieErrorElement.textContent = "Please select an option from the list.";
            return;
        };
        
        var movieInProgram = programToAddTo.movieList.find(function(movie) {
            return movie.title === movieToAdd.title;
        });
          
        if(movieInProgram) {
            addMovieErrorElement.textContent = "Movie is already in this program.";
              return;
        };
        
        addMovieErrorElement.textContent = "";
    };

    var updateProgramData = function() {
        festival.programList.forEach(function(program, index) {
            var newOption = document.createElement("option");
            newOption.value = index;
            newOption.textContent = program.getData();
            selectProgramElement.appendChild(newOption);
        });
    };
   
    return {
        collectMovieData: collectMovieData,
        validateMovie: validateMovie,
        addMovieToList: addMovieToList,
        clearInputs: clearInputs, 
        collectProgramData: collectProgramData,
        validateProgram: validateProgram,
        createdProgram: createdProgram,
        addMovieToProgram: addMovieToProgram,
        updateProgramList: updateProgramList,
        updateProgramData: updateProgramData,
        validateFestival: validateFestival,
    };

})();