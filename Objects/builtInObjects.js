"use strict";

/* 1. Write a functional expression that duplicates each element of a given array.
Input: [2, 4, 7, 11, -2, 1]
Output: [2, 2, 4, 4, 7, 7, 11, 11,  -2, -2, 1, 1] */

var z = function duplicate(array) {
    var newArray = []
   for (var i = 0; i < array.length; i++) {
        newArray.push(array[i], array[i])
    } 
    return newArray;
}

console.log(z([2, 4, 7, 11, -2, 1]))


/* 2. Write a functional expression that removes all duplicates in a given array.
Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
Output: [1, 4, 8, 9, 12, 13] */

var p = function removeDuplicates(array) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        if (newArray.indexOf(array[i]) === -1) {
            newArray.push(array[i])
        }
    }
    return newArray;
}
   
console.log(p([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]))


/* 3. a. Write a function that checks if a given array has odd number of elements.
Input: [1, 2, 9, 2, 1]
Output: true */
 
function checkIfOdd(array) {
    if (array.length % 2 !== 0) {
        return true
    } else {
        return false
    }
}

console.log(checkIfOdd([1, 2, 9, 2, 1]))


/* 3. b. Write a function that counts the number of elements less than the middle element. If the given array has an even number of elements, print out an error message. 
Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
Output: 4  */

function countLessThanMiddle(array) {
    var count = 0;
    if (array.length % 2 === 0) {
        return "Error";
    }
    var middleEl = array[Math.floor(array.length / 2)];
    for (var i = 0; i < array.length; i++) {
        if (array[i] < middleEl) {
            count++;
        }
    }
    return count;
}

console.log(countLessThanMiddle([-1, 8.1, 3, 6, 2.3, 44, 2.11]))


/* 4. Write a function that finds the smallest element of a given array. The function should return an object that contains the smallest value and its last position in the array.
Input: [1, 4, -2, 11, 8, 1, -2, 3]
Output:  { minValue: -2, minLastIndex: 6 } */

function getSmallest(array) {
    var minValue = Math.min(...array);
    var minLastIndex = array.lastIndexOf(minValue);
    var outputObject = {minvalue: minValue, minLastIndex: minLastIndex};
    return outputObject;
}

console.log(getSmallest([1, 4, -2, 11, 8, 1, -2, 3]))


/* 5. a. Write a function that finds all the elements in a given array less than a given element. 
Input: [2, 3, 8, -2, 11, 4], 6 
Output: [2, 3, -2, 4] */

function findAllSmaller(array, e) {
    newArray = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] < e) {
            newArray.push(array[i])
        }
    }
    return newArray
}

console.log(findAllSmaller([2, 3, 8, -2, 11, 4], 6))


/* 5. b. Write a function that finds all the elements in a given array that start with the “pro” substring. The function should be case insensitive. 
Input: [’JavaScript’, ’Programming’, ’fun’, ’product’] 
Output: [’Programming’, ‘product’] */

function findPro(array) {
    var newArray = [];
    var string = array.join(" ");
    for (var i = 0; i < array.length; i++) {
        string = array[i].toLowerCase();
        if (string.startsWith("pro")) {
        newArray.push(array[i]);
        }       
    }
    return Array.from(newArray)
}

console.log(findPro(["JavaScript", "Programming", "fun", "product"]))


/* 5. c. Write a function that expects an array and a callback function that filters out some of the elements. Use functions defined in a) or b) to test it. */

function filterElements (array, cb) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        if (cb(array[i])) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
        
console.log(filterElements([2, 3, 8, -2, 11, 4], function(e) {return e < 6}))
console.log(filterElements(["JavaScript", "Programming", "fun", "product"], function(e) {return e.toLowerCase().startsWith("pro")}))

