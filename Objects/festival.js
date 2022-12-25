"use strict";

(function () {
    console.log("Hi!");

    function Genre(name) {
        if(!name) {
            throw new Error("Genre name required");
        }
        this.name = name;
        this.getData = function() {
            return (this.name[0] + this.name[this.name.length-1]).toUpperCase();
        }
    }

    function Movie(title, genre, length) {
        if(!title || !genre || !length) {
            throw new Error("Missing input");
        }
        if (!(genre instanceof Genre)) {
            throw new Error("Invalid genre");
        }
        this.title = title;
        this.genre = genre;
        this.length = length;
        this.getData = function() {
            return (this.title + ", " + this.length + "min, " + this.genre.getData());
        } 
    }

    function Program(date) {
        if(!date) {
            throw new Error("Date missing");
        }
        this.date = new Date(date);
        this.movieList = [];
        this.getNumOfMovies = function() {
            return this.movieList.length;
        }
        this.addMovie = function(movie) {
            if(!(movie instanceof Movie)) {
                throw new Error("Invalid input");
            } 
            this.movieList.push(movie);
        }
        this.getTotalLength = function() {
            var total = 0;
            this.movieList.forEach(function (movie) {
              total += movie.length;
            });
            return total;
        }
        this.getData = function() {
            var day = this.date.getDate();
            var month = this.date.getMonth() + 1;
            var year = this.date.getFullYear();
            var result = day + "." + month + "." + year + ", program duration " + this.getTotalLength() + "min";
            this.movieList.forEach(function (movie) {
                result += "\n\t\t" + movie.getData();
                });
            return result;
        }
    }
    
    function Festival(name) {
        if(!name) {
            throw new Error("Invalid name input")
        }
        this.name = name;
        this.programList = [];
        this.getTotalNumOfMovies = function() {
            var total = 0;
            this.programList.forEach(function (program) {
                total += program.getNumOfMovies();
                });
              return total;
        }
        this.addProgram = function(program) {
            if(!(program instanceof Program)) {
                throw new Error("Invalid program input");
            }
            this.programList.push(program);
        }
        this.getData = function() {
            var output = this.name + " festival has " + this.getTotalNumOfMovies() + " movie titles ";
            this.programList.forEach(function(program) {
                output += "\n\t" + program.getData();
            })
            return output;
        }  
    }

    function createMovie(title, length, genre) {
        var genre = new Genre(genre);
        var movie = new Movie(title, genre, length);
        return movie;
    }

    function createProgram(date) {
        return new Program(date);
    }

    var sundance = new Festival("Sundance");

    var program1 = createProgram("12.30.2022");
    var program2 = createProgram("12.31.2022");

    var predestination = createMovie("Predestination", 97, "Sci-Fi");
    var exam = createMovie("Exam", 101, "Mystery");
    var identity = createMovie("Identity", 90, "Thriller");
    var machinist = createMovie("The Machinist", 101, "Drama");

    program1.addMovie(predestination);
    program1.addMovie(exam);
    program2.addMovie(identity);
    program2.addMovie(machinist);

    sundance.addProgram(program1);
    sundance.addProgram(program2);

    console.log(sundance.getData());
    
})()
