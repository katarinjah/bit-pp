"use strict";

var festival = new Festival();

var createMovieButton = document.querySelector("#createMovie");
var createProgramButton = document.querySelector("#createProgram");
var addMovieToProgramButton = document.querySelector("#addMovie");
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


function addMovie() {
  //collect data from user
  var titleValue = inputTitleElement.value;
  var lengthValue = inputLengthElement.value;
  var genreValue = selectGenreElement.value;

  //validate input
  if (!titleValue) {
    movieErrorElement.textContent = "Title is required!";
    return;
  };
  if (!lengthValue) {
    movieErrorElement.textContent = "Length is required!";
    return;
  };
  if(isNaN(lengthValue)) {
    movieError.textContent = "Please fill in length in minutes."
    return;
  };
  if (!genreValue) {
    movieErrorElement.textContent = "Please choose a genre.";
    return;
  };
  
  movieErrorElement.textContent = "";

  //create movie instance and add it to festival instance
  var movie = new Movie(titleValue, lengthValue, genreValue);
  festival.movieList.push(movie);

  //add movie to DOM movie list
  var movieDataLi = document.createElement("li");
  movieDataLi.textContent = movie.getData();
  ulMovieListElement.appendChild(movieDataLi);

  //create new movie DOM select option
  var movieOption = document.createElement("option");
  movieOption.textContent = movie.title;
  var index = festival.movieList.length - 1;
  movieOption.setAttribute("value", index);
  selectMovieElement.appendChild(movieOption);

  // clear inputs
  inputTitleElement.value = "";
  inputLengthElement.value = "";
  selectGenreElement.value = "";
};

function addProgram() {
  //collect data from user
  var dateInputValue = inputDateElement.value;

  //validate input
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

  //create program instance and add it to festival instance
  var program = new Program(date);
  festival.programList.push(program);

  //add program to DOM program list
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

function addMovieToProgram() {
  //collect data
  var selectedMovieIndex = selectMovieElement.value;
  var selectedProgramIndex = selectProgramElement.value;
  
  var movieToAdd = festival.movieList[selectedMovieIndex];
  var programToAddTo = festival.programList[selectedProgramIndex];
  
  //validate inputs
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
  
  programToAddTo.addMovie(movieToAdd);
  var programLi = document.querySelector("#program-item-" + selectedProgramIndex);
  programLi.textContent = programToAddTo.getData();

  selectProgramElement.textContent = "-";

  festival.programList.forEach(function(program, index) {
    var newOption = document.createElement("option");
    newOption.value = index;
    newOption.textContent = program.getData();
    selectProgramElement.appendChild(newOption);
  });

  // clear inputs
  selectMovieElement.value = "";
  selectProgramElement.value = ""; 
};

createMovieButton.addEventListener("click", addMovie);
createProgramButton.addEventListener("click", addProgram);
addMovieToProgramButton.addEventListener("click", addMovieToProgram);