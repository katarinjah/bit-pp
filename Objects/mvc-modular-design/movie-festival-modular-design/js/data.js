"use strict"

var dataModule = (function () {

    class Festival {
        constructor() {
            this.programList = [];
            this.movieList = [];
        };
    };

    var festival = new Festival();
    
    class Movie {
        constructor (title, length, genre) {
            this.title = title;
            this.length = parseInt(length);
            this.genre = genre;
        };
    
        getGenre() {
            var firstLetter = this.genre[0].toUpperCase();
            var lastLetter = this.genre[this.genre.length -1].toUpperCase();
            return firstLetter + lastLetter;
        };
            
        getData() {
            return this.title + ", " + this.length + "min, " + this.getGenre();
        };
    };
    
    class Program {
        constructor(date) {
            this.date = date;
            this.movieList = [];
        };
            
        addMovie(movie) {
            this.movieList.push(movie);
        };
    
        getTotalNumOfMovies() {
            return this.movieList.length;
        };
    
        getTotalMoviesLength() {
            var total = 0;
            this.movieList.forEach(function(movie) {
                total += movie.length;
            });
            return total;
        };
            
        getData() {
            var day = this.date.getDate();
            var month = this.date.getMonth() + 1;
            var year = this.date.getFullYear();
            var formattedDate = day + "." + month + "." + year;
            var output = formattedDate + ", " + (this.movieList.length) + " movies, duration " + this.getTotalMoviesLength() + "min";
            return output;
        };
    };
        
    
    function validateMovieData(title,length,genre){
        if (!title || !genre || !length) {
            return false;
        } else {
            return true;  
        };     
    };

    function validateProgramData(date){
        if (!date) {
            return false;
        } else {
            return true;
        };
    };

    function createMovie(title,length,genre){
        return new Movie(title, length, genre);
    };
     
    function addMovieToFestival(movie){
        return festival.movieList.push(movie) - 1;
    };

    function createProgram(date){
        return new Program(date);
    };
    function addProgramToFestival(program){
        return festival.programList.push(program) -1;
    };

    function validateAddMovieAndProgram (movie, program){
        if(!movie || !program) {
            return false;
        } else {
            return true;
        };
    };

    function isAddedTo(movie){
        var matchString = movie;
        festival.movieList.forEach(function(festivalMovie){
            if(festivalMovie === matchString){ 
                return false;
            } else {
                return true;
            };
        });
    };

    function addToFestival(movieIndex, programIndex){
        var movie = festival.movieList[movieIndex]
        var program = festival.programList[programIndex]
        program.movieList.push(movie);
        var programLi = document.querySelector("#program-item-" + programIndex);
        programLi.textContent = program.getData();  
    };

    return {
        validateMovieData: validateMovieData,
        validateProgramData: validateProgramData,
        createMovie: createMovie,
        addMovieToFestival: addMovieToFestival,
        createProgram: createProgram,
        addProgramToFestival: addProgramToFestival,
        validateAddMovieAndProgram: validateAddMovieAndProgram,
        isAddedTo: isAddedTo,
        addToFestival: addToFestival
    };
    
})();