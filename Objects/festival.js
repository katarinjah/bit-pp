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
        if(isNaN(length)) {
            throw new Error("Please input valid length");
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
            if (!(movie instanceof Movie)) {
              throw new Error("Invalid input");
            }
            var totalLength = this.getTotalLength() + movie.length;
            if (totalLength > 480) {
              throw new Error("Total movie length cannot exceed 8 hours");
            }
            /*var genreCounter = 0;
            this.movieList.forEach(function (m) {
              if (m.genre.name === movie.genre.name) {
                genreCounter++;
              }
            });
            if (genreCounter > 4) {
              throw new Error("Limit for genre " + movie.genre.name + " reached");
            } */
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
        this.maxNumOfMovies = 0;
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
            if (this.maxNumOfMovies !== 0 && this.getTotalNumOfMovies() + program.getNumOfMovies() > this.maxNumOfMovies) {
                throw new Error("Maximum number of movies reached");
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
        //this.setMaxNumOfMovies = function(number) {
          //  if(!isNaN(number)) {
              //  throw new Error("Please input a number")
           // } else {
             //   return number;
           // }
        //}
    }

    function createMovie(title, length, genre) {
        var genre = new Genre(genre);
        var movie = new Movie(title, genre, length);
        return movie;
    }

    function createProgram(date) {
        return new Program(date);
    }

    try {
        var sundance = new Festival("Sundance");

        var program3012 = createProgram("12.30.2022");
        var program3112 = createProgram("12.31.2022");

        var predestination = createMovie("Predestination", 97, "Sci-Fi");
        var exam = createMovie("Exam", 101, "Mystery");
        //var d1 = createMovie("d1", 54, "Mystery");
        //var d2 = createMovie("d2", 545, "Mystery");
        //var d3 = createMovie("d3", 643, "Mystery");
        //var d4 = createMovie("d4", 656, "Mystery");
        var identity = createMovie("Identity", 90, "Thriller");
        var machinist = createMovie("The Machinist", 101, "Drama");

        program3012.addMovie(predestination);
        //program3012.addMovie(d1);
        //program3012.addMovie(d2);
        //program3012.addMovie(d3);
        //program3012.addMovie(d4);
        program3012.addMovie(exam);
        program3112.addMovie(identity);
        program3112.addMovie(machinist);

        sundance.addProgram(program3012);
        sundance.addProgram(program3112);

        console.log(sundance.getData()); 
    } catch(error) {
        console.log(error.message)
    }
    
})()
