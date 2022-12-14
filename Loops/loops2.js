/* Write a program that checks if a given element e is in the array a. 
Input:  e = 3, a = [5, -4.2, 3, 7]
Output: yes

Input:  e = 3, a = [5, -4.2, 18, 7]
Output: no */

var i = 0, e = 3, a = [5, -4.2, 3, 7], result = "no";

for (i = 0; i < a.length; i++) {
    if (a[i] === e) {
        result="yes";
        break;
    }
}
console.log(result)

    
/* Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8] */

var a = [-3, 11, 5, 3.4, -8], i = 0, b = [];

for (i = 0; i < a.length; i++) {
    if (a[i] > 0 ) {
        b[i] = a[i] * 2;
    } else {
        b[i] = a[i];
    }
}
console.log(b)


/* Write a program that finds the minimum of a given array and prints out its value and
index.
Input array: [4, 2, 2, -1, 6]
Output: -1, 3 */

var arr = [4, 2, 2, -1, 6], i = 0, result = arr[0];

for (i = 0; i < arr.length; i++) {
    if (arr[i] < result) {
        result = arr[i];
    }
}
console.log(result, arr.indexOf(result))


/* Write a program that finds the first element larger than minimum and prints out its value.
Input array: [4, 2, 2, -1, 6]
Output: 2 */

var arr = [4, 2, 2, -1, 6], minimum = arr[0], secondmin = arr[0];

for (i = 0; i < arr.length; i++) {
    if (arr[i] < minimum) {
        secondmin = minimum;
        minimum = arr[i];
    } else if (arr[i] < secondmin) {
        secondmin = arr[i];
    }    
}
console.log(secondmin)


/* Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16 */

var arr = [3, 11, -5, -3, 2], i = 0, sum = 0;

for (i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        sum += arr[i];
    }    
}
console.log(sum)  


/* Write a program that checks if a given array is symmetric. An array is symmetric if it can
be read the same way both from the left and the right hand side.
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.
Input array: [3, 4, 12, 8]
Output: The array isn’t symmetric. */

var arr = [3, 4, 12, 8], result = "The array is symmetric.";

for (var i = 0, j = arr.length - 1; i <= j; i++, j--) {
    if (arr[i] !== arr[j]) {
    result = "The array isn't symmetric.";
    break;
    }
}
console.log(result)


/* Write a program that intertwines two arrays. You can assume the arrays are of the same
length.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9] */

var a = [4, 5, 6, 2], b = [3, 8, 11, 9], c = [];

for (var i = 0; i < a.length; i++) {
    c[c.length] = a[i];
    c[c.length] = b[i];
} 
console.log(c)


/* Write a program that concatenates two arrays.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9] */

var a = [4, 5, 6, 2], b = [3, 8, 11, 9], c = [];

for (var i = 0, j = 0; i < a.length - 1, j < b.length - 1; i++, j++) {
    c = a + "," + b;
}
console.log(c)


/* Write a program that deletes a given element e from the array a.
Input: e = 2, a = [4, 6, 2, 8, 2, 2]
Output array: [4, 6, 8] */

var e = 2, a = [4, 6, 2, 8, 2, 2], result = [];

for (var i = 0; i < a.length; i++) {
    if (a[i] === e) {
        delete a[i];
        result = a;
    }
}
console.log(result)


/* Write a program that inserts a given element e on the given position p in the array a. If
the value of the position is greater than the array length, print the error message.
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8] */

var e = 78, p = 3, a = [2, -2, 33, 12, 5, 8], result=[];

for (var i=0; i < a.length; i++) {
  if (p > a.length) {
    result = "Error";
    break;
  }
if(i === p) {
    result[result.length] = e;
}
result[result.length] = a[i];
}
console.log(result)
