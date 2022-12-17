"use strict";

/* 1. Write a JavaScript function that reverses a number. typeof result of the function should be “number”.
12345 -> 54321 */

function reverseNumber(number) {
    var string = number.toString();
    var array = string.split("");
    var output = array.sort(function(a, b) {
        return b - a;
    })
    string = array.join("");
    return +string;
}

console.log(reverseNumber(12345));
console.log(typeof reverseNumber(12345))


/* 2. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
Note: Assume punctuation, numbers and symbols are not included in the passed string.
“Webmaster” -> “abeemrstw” */

function sortString(string) {
    var lowerCase = string.toLowerCase();
    var array = lowerCase.split("");
    var sortedArray = array.sort();
    return (sortedArray.join(""))
}

console.log(sortString("Webmaster"))


/* 3. Write a function to alphabetize words of a given string. Alphabetizing a string means rearranging the letters so they are sorted from A to Z.
"Republic Of Serbia" -> "Rbceilpu Of Sabeir" */

function alphabetize(string) {
    var array = string.split(' ');
    for (var i = 0; i < array.length; i++) {
        var subArray = array[i].split('');
        var sortedSub = subArray.sort();
        var result = subArray.join("");
        console.log(result);
    }   
}

alphabetize('Republic Of Serbia')


/* 4. Write a function to split a string and convert it into an array of words.
"John Snow" -> [ 'John', 'Snow' ] */

function splitString(string) {
    var splitString = string.split(" ");
    console.log(splitString)
}

splitString("John Snow")


/* 5. Write a function to convert a string to its abbreviated form. 
"John Snow" -> 	"John S." */

function abbreviateString(string) {
    var slicedString = string.slice(0, -3);
    console.log(slicedString + ".");
}

abbreviateString("John Snow")

