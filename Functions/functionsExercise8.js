"use strict";

/* 1. Write IIFE that replaces the first and the last element of the given array and prints out its elements. 
	Input array: [4, 5, 11, 9]
	Output array: [ 9, 5, 11, 4] */

    (function replaceFirstAndLast(array) {
        var temp = array[0];
        array[0] = array[array.length-1];
        array[array.length-1] = temp;
        console.log(array);
    }) ([4, 5, 11, 9])

/*  
(function replaceFirstAndLast(array) {
        var newArray = [], temp = array[0];
        for (var i = 0; i < array.length; i++) {
            var element = array[i];
            if (element === array[0]) {
                element = array[array.length-1]
            } else if (element === array[array.length-1]) {
                element = array[0]
            }
            temp = element;
            newArray[newArray.length] = temp;
        }
        console.log(newArray);
}) ([4, 5, 11, 9])
*/


/* 2. Write IIFE that calculates the surface area of the given rectangle with sides a and b. 
Input: 4 5
Output: 20 */

(function calculateSurface(a, b) {
    console.log(a * b);
}) (4,5)


/* 3. Write IIFE that replaces all appearances of the letters m or M with * and returns the number of replacements. 
	Input: prograMming
	Output: progra**ing, 2 */

    (function replaceLetter(string) {
        var output = [], count = 0;
        for (var i = 0; i < string.length; i++) {
            if (string[i] === "m" || string[i] === "M") {
                output += "*";
                count++;
            } else {
                output += string[i] 
            }
        }
        console.log(output, count);
    }) ("prograMming")

 
/* 4. Write a function with parameters name and surname that returns a function that
suggests an email in the form name.surname@gmail.com.
Input: pera peric
Output: pera.peric@gmail.com */

(function(name, surname) {
    console.log(name + "." + surname + "@gmail.com")
}
)("pera", "peric")


/* 5. Write a function that returns a function that calculates a decimal value of the given octal
number.
Input: 034
Output: 28 */

(function calculateDecimal(octalnr) {
    console.log(parseInt(octalnr))
}) (015)


/* 6. Write a function that checks if a given string is valid password. The password is valid if it
is at least 6 characters long and contains at least one digit. The function should receive
two callbacks named successCallback and errorCallback that should be called in case
password is correct or invalid.
Input: JSGuru
Output: Your password is invalid!
Input: JSGuru123
Output: Your password is cool! 

function checkIfValidPw(string, cb1, cb2) {
    for (var i = 0; i < string.length; i++) {
        if (typeof string[i] === "number" && string.length > 5) {
            return cb1();
        } else {
            return cb2();
        }
    }
}

var m = checkIfValidPw("JSGuru123", function successCallback() {return "Your password is cool!"}, function errorCallback() {return "Your password is invalid!"});
console.log(m)
*/


/* 7. Write a function that filters elements of the given array so that they satisfy a condition
given by the callback function.
Input: [2, 8, 11, 4, 9, 3], callback function checks if the number is odd
Output: [11, 9, 3] */

function filter(array, cb) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        var element = array[i];
        var isTrue = cb(element);
        if (isTrue) {
            newArray[newArray.length] = array[i];
        }
    }
    return newArray
} 

var v = filter([2, 8, 11, 4, 9, 3], function isOdd(e) {return e % 2 !== 0});
console.log(v)

