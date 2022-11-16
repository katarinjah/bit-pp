/* 1. Write a function to count vowels in a provided string. Vowels are a, e, i, o, and u as well as A,
E, I, O, and U. */

function countVowels(string) {
    var result = 0, i = 0;
    for (i = 0; i < string.length; i++) {
        if (string[i] === "a" || string[i] === "e" || string[i] === "i" || string[i] === "o" || string[i] === "u" || string[i] === "A" || string[i] === "E" || string[i] === "I" || string[i] === "O" || string[i] === "U") {
            result++;
        }
    }
    return result;
}

var x = countVowels("jAeloUighcaa");
console.log(x)


/* 2. Write a function that combines two arrays by alternatingly taking elements.
[‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3]  */

function alternateElements(arr1, arr2) {
    var output = [], i = 0;
    for (i = 0, j = 0; i < arr1.length, j < arr2.length; i++, j++) {
        output += arr1[i] + arr2[i];
    }
    return output;
}

var t = alternateElements(["a","b","c"], [1,2,3]);
console.log(t)


/* 3. Write a function that rotates a list by k elements.
For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2] 

function listRotate(array, k) {
    var output = [];
    for (var i = 0; i <= k; i++) {
        if (array[i] === k) {
            k += array[0];
            
        }    
    }
    return output;
}

var p = listRotate([1,2,3,4,5,6], 2);
console.log(p)
*/


/* 4. Write a function that takes a number and returns array of its digits. */

function digits(num) {
    var z = "" + num, output = [], u = 0;
    for (var i = 0; i < z.length; i++) {
        u = parseFloat(z[i])
        output[output.length] = u;
    }
    return output;
}

var e = digits(4163454);
console.log(e)


/* 5. Write a program that prints a multiplication table for numbers up to 12. 

function multiply12() {
    var result = 1, output = "";
    for (var i = 1, number = 1; i <= 12, number <= 12; i++, number++) {
        result = number * i;
        output = number + " * " + i + " = " + result;
    }
    return output;
}

var v = multiply12();
console.log(v)
*/


// 6. Write a function to input temperature in Centigrade and convert to Fahrenheit.

function convertCToF(temp) {
    var output = "", result = 0;
    result = (temp * 9/5) + 32;
    output = temp + " degrees C equals to " + result + " degrees F";
    return output;
}

var b = convertCToF(18);
console.log(b)


// 7. Write a function to find the maximum element in array of numbers. Filter out all non-number elements.

function findMax(array) {
    var max = array[0], i = 0;
    for (i = 0; i < array.length; i++) {
        if (isFinite(array[i])) {
            if (max < array[i]) {
                max = array[i]
            }
        }
    }
    return max;
}

var u = findMax([1, 5, 800, 13, 90, "a", "fsdfs"]);
console.log(u)


/* 8. Write a function to find the maximum and minimum elements. Function returns an array.

function findMinMax(array) {
    var i = 0, min = array[0], max = array[0], output = [];
        for (i = 0; i < array.length; i++) {
            if (min > array[i]) {
                min = array[i]
            } 
            if (max < array[i]) {
                max = array[i]
            }
            output[output.length] = 
        }
        return output;
} 

var l = findMinMax([12, 89, 3, 9, 54, 63723]);
console.log(l)

*/

/* 9. Write a function to find the median element of array. 

function findMedian(array) {
    var i = 0, middle = 0, newarray = []; min = 0; result = 0;
    for (i = 0; i < array.length; i++) {
        if (min < array[i]) {
            min = array[i]
        }
        newarray[newarray.length] = array[i]
    } console.log(newarray)
}

var w = findMedian([5, 7, 9, 3, 60]);
console.log(w)

*/


// 10. Write a function to find the element that occurs most frequently. 

function mostFrequent(array) {
    var i = 0, j = 0, element = 0, mostFrequent = 0, result = 0;
    for (i = 0; i < array.length; i++) {
        for (j = 0; j < array.length; j++) {
            if (array[i] === array[j]) {
                element++
            }
            if (mostFrequent < element) {
                mostFrequent = element;
                result = array[i];
            }
        }
    }
    return result;
}

var k = mostFrequent([1, 2, 6, 8, 3, 2, 9, 2]);
console.log(k)


/* Write a function to find and return the first, middle and last element of an array if the array has odd number of elements. If number of elements is even, return just the first and the last. In other cases (empty array), input array should be returned. 

function returnElements(array) {
    var i = 0, first, middle, last, newarray = [];
    for (i = 0; i < array.length; i++) {
       if (array.length === 0) {
        return array
       }
    }
}
       
       
       /* () if (array.length % 2 === 0) {
            return array[0] + array[array.length-1];
        }
    }
}
      if (array.length % 2 === 1) {
        first = array[0];
        middle = (array.length + 1) / 2;
        last = array[array.length-1];
        newarray[newarray.length] = first + middle + last;
        }
    
    }
    return newarray;
}


var x = returnElements([9, 8, 6, 2, 5]);
console.log(x)

*/

