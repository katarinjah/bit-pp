"use strict";

var dataModule = (function() {

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

var newMovie = function(title, length, genre) {
    return new Movie(title, length, genre);
};

class Program {
    constructor(date) {
        this.date = new Date(date);
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

var newProgram = function(date) {
    return new Program(date);
};
    
class Festival {
    constructor() {
        this.programList = [];
        this.movieList = [];
    };
};

var newFestival = function() {
    return new Festival();
};

return {
    newMovie: newMovie,
    newProgram: newProgram,
    newFestival: newFestival
};

})();