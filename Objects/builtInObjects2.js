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


/* 6. Write a function that adds string to the left or right of string, by replacing it’s characters.
'0000', ‘123’, 'l' -> '0123'
'00000000', ‘123’, 'r' -> '12300000' */

var addString = function (str1, str2, type) {
    var output = "";
    var i = 0;
    if (type === "l") {
        i = str1.length - str2.length;
        output = str1.slice(0, i) + str2;
    }
    if (type === "r") {
        i = str2.length - 1;
        output = str2 + str1.slice(i, -1);
    }
    return output;
};

console.log(addString("0000", "123", "l"))


/* 7. Write a function to capitalize the first letter of a string and returns modified string.
"js string exercises" -> "Js string exercises" */

function capitalize(string) {
    var first = string.charAt(0);
    var capitalized = first.toUpperCase() + string.slice(1);
    return capitalized;
}

 console.log(capitalize("js string exercises"));


 /* 8. Write a function to hide email addresses to protect them from unauthorized users.
"somerandomaddress@example.com" -> "somerand...@example.com" */

function hideEmail(email) {
    var avg, splitted, part1, part2;
    splitted = email.split("@");
    part1 = splitted[0];
    avg = part1.length / 2;
    part1 = part1.substring(0, (part1.length - avg));
    part2 = splitted[1];
    return part1 + "...@" + part2;
};

console.log(hideEmail("somerandomaddress@example.com"));


/* 9. Write a program that accepts a string as input and swaps the case of each character. For example, if you input 'The Quick Brown Fox', the output should be 'tHE qUICK bROWN fOX'.
       var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
       var LOWER = 'abcdefghijklmnopqrstuvwxyz';
"The Quick Brown Fox" -> "tHE qUICK bROWN fOX" */

function swap(string) {
    var newString = "";
    for (var i = 0; i < string.length; i++) {
        if (string[i] === string[i].toLowerCase()) {
            newString += string[i].toUpperCase();
        } else {
            newString += string[i].toLowerCase();
        }
    }
    return newString;
}

console.log(swap("The Quick Brown Fox"))





