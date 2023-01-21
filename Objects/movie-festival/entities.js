"use strict";

    class Genre {
        constructor(name) {
            this.name = name;
        }
        
        getData() {
            return (this.name[0] + this.name[this.name.length-1]).toUpperCase();
        }
    }

    class Movie {
        constructor (title, genre, length) {
            this.title = title;
            this.genre = genre;
            this.length = length;
        }
        
        getData() {
            return (this.title + ", " + this.length + "min, " + this.genre.getData());
        } 
    }

    var genreCounter = function(list) {
        var numOfGenre = list.reduce(function(count, item) {
            if (!count[item.genre]) {
                count[item.genre] = 1;
            } else {
                count[item.genre]++;
            }
            return count;
        }, {});
        return Math.max(...Object.values(numOfGenre));
    }

    class Program {
        constructor(date) {
            this.date = new Date(date);
            this.movieList = [];
        }
        
        getNumOfMovies() {
            return this.movieList.length;
        }
        
        addMovie(movie) {
            if (!(movie instanceof Movie)) {
                throw new Error("Invalid input");
            }
            if (genreCounter(this.movieList) > 4) {
                throw new Error("Genre limit reached");
            }
            var totalLength = this.getTotalLength() + movie.length;
            if (totalLength > 480) {
                throw new Error("Total movie length cannot exceed 8 hours");
            };
            this.movieList.push(movie);
        }
        
        getData() {
            var day = this.date.getDate();
            var month = this.date.getMonth() + 1;
            var year = this.date.getFullYear();
            return (day + "." + month + "." + year + ", " + this.movieList.length + " movies, duration " + this.getTotalLength() + " minutes"
);
        }
    }
    
    class Festival {
        constructor() {
            this.programList = [];
            this.movieList = [];
        }
        
        getTotalNumOfMovies() {
            var total = 0;
            this.programList.forEach(function (program) {
                total += program.getNumOfMovies();
            });
            return total;
        }
        
        addProgram(program) {
            if (!(program instanceof Program)) {
                throw new Error("Invalid program input");
            }
            if (this.maxNumOfMovies !== 0 && this.getTotalNumOfMovies() + program.getNumOfMovies() > this.maxNumOfMovies) {
                throw new Error("Maximum number of movies exceeded");
            }
            this.programList.push(program);
        }
        
        getData() {
            var output;
            if (this.getTotalNumOfMovies() === 0) {
                output = this.name + "\n\t" + "Program to be announced";
            } else {
                output = this.name + " festival has " + this.getTotalNumOfMovies() + " movie titles ";
                this.programList.forEach(function(program) {
                    output += "\n\t" + program.getData();
                });
            }
            return output;
        }
    }


