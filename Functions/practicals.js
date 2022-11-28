"use strict";

/* 1. Write a function that checks if a given string contains digit 5.
Input: “1b895abd”
Output: true
Input: “1bser9re”
Output: false  */

function checkIfPresent(string) {
    var result = false;
    for (var i = 0; i < string.length; i++) {
        if (string[i] === "5") {
            result = true;
        } 
    }
    return result;
}

var l = checkIfPresent("1bser9re");
console.log(l)


/* 2. Write a function that in a given string replaces all the appearances of the string ‘JS’ with ‘**’. 
Input: “Programming in JS is super interesting!”
Output: “Programming in ** is super interesting!” */

function replaceString(string) {
    var newString = [];
    for (var i = 0; i < string.length; i++) {
        if (string[i] === "J" || string[i] === "S") {
            newString += "*";
        } else {
            newString += string[i] 
        }
    }
    return newString;
}

var t = replaceString("Programming in JS is super interesting!");
console.log(t)


/* 3. Write a function that inserts a given character on a given position in the string.
Input: “Goo morning”, 4, ‘d’ 
Output: “Good morning” */

function insertCharacter(string, character, position) {
    if (!position) {
      position = 1;
    }
    var output = "";
    for (var i = 0; i < string.length; i++) {
      if (i === position - 1) {
        output += character;
      }
      output += string[i]
    }
    return output
}
  
var b = insertCharacter("Goo morning", "d", 4);
console.log(b)


/* 4. Write a function that deletes a character from the given position in the string. 
Input: “Goodd morning!”, 3 
Output: “Good morning!”  

function deleteCharacter(string, position) {
    var result = "";
    for (var i = 0; i < string.length; i++) {
        var e = string[i];
    if(position === string.indexOf(e)) {
        delete string[i];
    }
    result = string;
    } 
    return result
}

var w = deleteCharacter("Goodd morning!", 3);
console.log(w)
*/


/* 5. Write a function that deletes every second element of the given array.
Input: [3, 5, 1, 8, 90, -4, 23, 1, 67]
Output: [3, 1, 90, 23, 67] 

function deleteEverySecond(array) {
    for (var i = 0, j = i + 1; i < array.length, j < array.length; i++, j++) {
        if (array.indexOf(i) === j) {
        delete array[i];
        }
    } 
    return array;
}

var w = deleteEverySecond([3, 5, 1, 8, 90, -4, 23, 1, 67]);
console.log(w)
*/

/* 6. Write a function that replaces the elements of the given array between two positions with their doubled values. 
Input: [3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6 
Output: [3, 5, 2, 16, 180, -8, 46, 1, 67] 

function replaceAndDouble(array, position1, position2) {
    var newArray = [], result = [];
    for (var i = 0; i < array.length; i++) {
        if (position1 < array.indexOf([i]) && array.indexOf([i]) < position2) {
            array[i] = array[i] * 2;
        }
        newArray[newArray.length] = array[i];
    }
    return newArray;
}

var r = replaceAndDouble ([3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6);
console.log(r)
*/


/* 7. Write a function that checks if every element of the first array is contained in the second array. Be careful with repetitions! 
Input: [3, 4, 1, 3], [8, 9, 3, 1, 11, 4, 3]
Output: true */

function checkIfPresent(array1, array2) {
    var result = true;
    for (var i = 0; i < array1.length; i++) {
        if (array2.indexOf(array1[i]) === -1) {
            result = false;
            break;
        }
    }
    return result;
}

var g = checkIfPresent([3, 4, 1, 3], [8, 9, 3, 1, 11, 4, 3]);
console.log(g)


/* 8. Write a function that sorts an array of strings by the number of appearances of the letter ‘a’ or ‘A’. 
Input: [‘apple’, ‘tea’,  ‘amazing’, ‘morning’, ‘JavaScript’]
Output: [‘morning’, ‘apple’, ‘tea’, ‘JavaScript’, ‘amazing’] 

function checkA(array) {
    var newArray = [], result = 0;
    for (var i = 0; i < array.length; i++) {
        for (j = 0; j < array[i].length; j++) {
            if (array[j] === "a" || array[j] === "A") {
                result++;
            }
            newArray = array
        }
    }
    return newArray, result
}

var t = checkA(["apple", "tea",  "amazing", "morning", "JavaScript"]);
console.log(t)


function manipulateArray(array) {
    var output = "";

    for (var i = 0; i < array.length; i++) {
      if (typeof array[i] !== "number" && array[i].length > 2) {
        var part = array[i][0] + array[i][1];
        output += part;
      }
    }
    return output
  }

  var t = manipulateArray(["apple", "tea",  "amazing", "morning", "JavaScript"]);
console.log(t)
*/


/* 9. Write a function that prints out the date of the next day. 
Output:  25. 10. 2018. */

function printNextDate(day, month, year) {
    var nextDay = day + 1, nextMonth = month, nextYear = year;
    if (day === 31) {
        if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
            nextDay = 1;
            nextMonth = month + 1;
        }
    }
    if (day === 30) {
        if (month === 2 || month === 4 || month === 6 || month === 9 || month === 11) {
            nextDay = 1;
            nextMonth = month + 1;
        }
    }
    if (month === 12 && day === 31) {
        nextYear = year + 1;
        nextDay = 1;
        nextMonth = 1;
    }
    if (month === 2 && day === 29) {
        nextMonth = 3;
        nextDay = 1;
    }
    return (nextDay + "." + nextMonth + "." + nextYear)
}

var b = printNextDate(31, 12, 2022);
console.log(b)


/* 10. Write a function that prints out the date of the previous day. 
Output:  23. 10. 2018. */

function printPreviousDate(day, month, year) {
    var lastDay = day - 1, lastMonth = month, lastYear = year;
    if (day === 1) {
        if (month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
            lastDay = 30;
            lastMonth = month - 1;
        }
        if (month === 1 || month === 2 || month === 4 || month === 6 || month === 9 || month === 11) {
            lastDay = 31;
            lastMonth = month - 1;
        }
    }
    if (month === 1 && day === 1) {
        lastYear = year - 1;
        lastDay = 31;
        lastMonth = 12;
    }
    return (lastDay + "." + lastMonth + "." + lastYear)
}

var k = printPreviousDate(28, 11, 2022);
console.log(k)


/* 11. Write a function that prints out an array of the numbers aligned from the right side.
Input: [78, 111, 4, 4321]
Output: 
  78
 	 111  
    	    4
                      4321


function printAlignedRight(array) {
    var output = [], temp = [];
    for (var i = 0; i < array.length; i++) {
        temp += "    " + array[i];
        output[output.length] = temp;
    }
    return output
}

var f = printAlignedRight([78, 111, 4, 4321]);
console.log(f)

*/