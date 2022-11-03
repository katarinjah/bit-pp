/* 1. Write a program that checks if a given element e is in the array a. 
Input:  e = 3, a = [5, -4.2, 3, 7]
Output: yes

Input:  e = 3, a = [5, -4.2, 18, 7]
Output: no */

function checkIfPresent(a, e) {
    var result = "no";
    for (var i = 0; i < a.length; i++) {
        if (a[i] === e) {
            result = "yes"
        } 
    } return result
}

var k = checkIfPresent([5, -4.2, 3, 7], 3);
console.log(k)
    

/* 2. Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8] */

function multiplyPositive(a) {
    var result = [];
    for (var i = 0; i < a.length; i++) {
        if (a[i] > 0 ) {
            result[i] = a[i] * 2;
        } else {
            result[i] = a[i];
        }
    } return result
}

var f = multiplyPositive([-3, 11, 5, 3.4, -8]);
console.log(f)


/* 3. Write a program that finds the minimum of a given array and prints out its value and
index.
Input array: [4, 2, 2, -1, 6]
Output: -1, 3 */

function printMin(arr) {
    var result = 0;
    var output = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < result) {
            result = arr[i];
         } output = result + ", " + arr.indexOf(result);
    } return output
}

var b = printMin ([4, 2, 2, -1, 6]);
console.log(b)


/* 4. Write a program that finds the first element larger than minimum and prints out its value.
Input array: [4, 2, 2, -1, 6]
Output: 2 */

function printSecondLargest(arr) {
    minimum = arr[0];
    secondmin = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < minimum) {
            secondmin = minimum;
            minimum = arr[i];
        } else if (arr[i] < secondmin) {
            secondmin = arr[i];
        }    
    } return secondmin
}

var l = printSecondLargest([4, 2, 2, -1, 6]);
console.log(l)


/* 5. Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16 */

function positiveSum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        }    
    } return sum
}
 
var t = positiveSum([3, 11, -5, -3, 2]);
console.log(t)


/* 6. Write a program that checks if a given array is symmetric. An array is symmetric if it can
be read the same way both from the left and the right hand side.
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.
Input array: [3, 4, 12, 8]
Output: The array isn’t symmetric. */

function symmetryCheck (arr) {
    var result = "The array is symmetric.";
    for (var i = 0, j = arr.length - 1; i <= j; i++, j--) {
        if (arr[i] !== arr[j]) {
        result = "The array isn't symmetric.";
        break;
        }
    } return result
}

var d = symmetryCheck([2, 4, -2, 7, -2, 4, 2]);
console.log(d)


/* 7. Write a program that intertwines two arrays. You can assume the arrays are of the same
length.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9] */


/* 8. Write a program that concatenates two arrays.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9] */

function arrayConcat(arr1, arr2) {
    var arr3 = [];
    for (var i = 0, j = 0; i < arr1.length - 1, j < arr2.length - 1; i++, j++) {
        arr3 = arr1 + "," + arr2;
    } return arr3
}

var u = arrayConcat([4, 5, 6, 2], [3, 8, 11, 9]);
console.log(u)


/* 9. Write a program that deletes a given element e from the array a.
Input: e = 2, a = [4, 6, 2, 8, 2, 2]
Output array: [4, 6, 8] */

function deleteElement(arr, e) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === e) {
            delete arr[i];
            result = arr;
        }
    } return result
}

var w = deleteElement([4, 6, 2, 8, 2, 2], 2);
console.log(w)


/* 10. Write a program that inserts a given element e on the given position p in the array a. If
the value of the position is greater than the array length, print the error message.
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8] */

function insertElement(arr, e, p) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (p > arr.length) {
            result = "Error";
        break;
        }
    if(i === p) {
        result[result.length] = e;
    }
    result[result.length] = arr[i];
    } return result
}

var q = insertElement([2, -2, 33, 12, 5, 8], 78, 3);
console.log(q)
