"use strict";

var festival = new Festival();

var createMovieButton = document.querySelector("#createMovie");
var createProgramButton = document.querySelector("#createProgram");
var addMovieButton = document.querySelector("#addMovie");

var titleInput = document.querySelector("#title");
var lengthInput = document.querySelector("#length");
var selectGenre = document.querySelector("#genre");
var dateInput = document.querySelector("#date");
var movieList = document.querySelector("#movieList");
var programList = document.querySelector("#programList");
var selectMovie = document.querySelector("#selectMovie");
var selectProgram = document.querySelector("#programSelect");

var movieError = document.querySelector("#movieError");
var programError = document.querySelector("#programError");
var addMovieError = document.querySelector("#addMovieError");

function addMovie() {
    var title = titleInput.value;
    var length = lengthInput.value;
    var genreValue = selectGenre.value;

    if(!title) {
        movieError.textContent = "Title required!"
        return;
    };

    if(!length) {
        movieError.textContent = "Movie length required!"
        return;
    };

    if(!genreValue) {
        movieError.textContent = "Please choose a genre."
        return;
    };

    movieError.textContent = "";
    
    var genre = new Genre(genreValue);
    var movie = new Movie(title, genre, length);
    festival.programList.push(movie);
    
    var movieListItem = document.createElement("li");
    movieListItem.textContent = movie.getData();
    movieList.appendChild(movieListItem);
    
    var movieOption = document.createElement("option");
    movieOption.textContent = movie.title;
    var index = festival.movieList.length - 1;
    movieOption.setAttribute("value", index);
    selectMovie.appendChild(movieOption);

    titleInput.value = "";
    lengthInput.value = "";
    selectGenre.value = "";
}


function addProgram() {
    var dateValue = dateInput.value;

    if (!dateValue) {
        programError.textContent = "Please choose a date.";
        return;
    }

    var date = new Date(dateInput.value);

    if(date.getTime() < Date.now()) {
        programError.textContent = "Invalid date!";
        return;
    }

    programError.textContent = "";

    var checkProgramDatesForDuplicates = festival.programList.some(function(program) {return date.getTime() === program.date.getTime();
    });

    if(checkProgramDatesForDuplicates) {
        programError.textContent = "Program for this day already exists!";
        return;
    }

    programError.textContent = "";

    var program = new Program(date);
    program.movieList.push(program);

    var index = festival.programList.length - 1;
    var programListItem = document.createElement("li");
    programListItem.setAttribute("id", "program-item-" + index);
    programListItem.textContent = program.getData();
    programList.appendChild(programListItem);
}


function addMovieToProgram() {
    var movieIndex = selectMovie.value;
    var programIndex = selectProgram.value;

    if (!movieIndex || !programIndex) {
        addMovieError.textContent = "Please select an option from the list.";
    }

    var movie = festival.movieList[movieIndex];
    var program = festival.movieList[programIndex];

    program.addMovie(movie);

    var programOption = document.querySelector('#program-item-' + programIndex);
    programOption.textContent = program.getData();
}

createMovieButton.addEventListener("click", addMovie);
createProgramButton.addEventListener("click", addProgram);
addMovieButton.addEventListener("click", addMovieToProgram);
