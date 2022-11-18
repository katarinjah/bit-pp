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
For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2] */

function listRotate(array, k) {
    var output = [], i, j;
    for (i = k, j = k - array.length; i < array.length + k; i++, j++) {
        if (array[i] !== undefined) {
            output[output.length] = array[i];
        } else {
            output[output.length] = array[j];
        }
    }    
    return output;
} 
    
var p = listRotate([1, 2, 3, 4, 5, 6], 4);
console.log(p)


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


// 5. Write a program that prints a multiplication table for numbers up to 12. 

function multiply12(number) {
    var result = 1, output = "", i, j;
    if (number <= 12) {
        for (i = 1; i <= number; i++) {
            for (j = 1; j <= number; j++) {
            result = i * j;
            output += result + " ";
            }
        }
    }
    return output;
}

var v = multiply12(12);
console.log(v)


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


/* 8. Write a function to find the maximum and minimum elements. Function returns an array. */

function findMinMax(array) {
    var i, min = 0, max = 0, result; newarray = [];
    for (var i = 0; i < array.length; i++) {
        if (array[0] > array[1]) {
            max = array[0];
            min = array[1];
        } else {
            max = array[1];
            min = array[0];
        }
 
        for (i = 2; i < array.length; i++) {
            if (array[i] > max) {
                max = array[i];
            } else if (array[i] < min) {
                min = array[i];
            }
        }
        
    }
    return [min, max];
}

var l = findMinMax([12, 89, 3, 9, 54, 637]);
console.log(l)



/* 9. Write a function to find the median element of array. */

function findMedian(array) {
    var i, j, result;
    for (i = 0, j = array.length - 1; i <= j; i++, j--) {
        result = (array[i] + array[j]) / 2;
    }
    return result;
}

var w = findMedian([5, 7, 9, 3, 60]);
console.log(w)


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


/* 11. Write a function to find and return the first, middle and last element of an array if the array has odd number of elements. If number of elements is even, return just the first and the last. In other cases (empty array), input array should be returned. */

function returnElements(array) {
    var first = array[0], middle = (array.length + 1), last = array[array.length-1];
    if (array.length % 2 === 1) {
        return [first, middle, last];
    }
    if (array.length % 2 === 0) {
        return [first, last];
    }
    if (array.length === 0) {
        return array;
    }
}
   
var x = returnElements([9, 8, 6, 2, 5]);
console.log(x)


/* 12. Write a function to find the average of N elements. Make the function flexible to receive
dynamic number or parameters. */

function average(array) {
    var i, sum = 0;
    for (i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
}

var m = average([2, 5, 7, 3, 1, 6]);
console.log(m)


// 13. Write a function to find all the numbers greater than the average.

function greaterThanAvg(array) {
    var i, sum = 0, average, newarray = [];
    for (i = 0; i < array.length; i++) {
        sum += array[i];
    }
    for (i = 0; i < array.length; i++) {
        average = sum / array.length;
        if (array[i] > average) {
            newarray[newarray.length] = array[i];        
        }
    }
    return newarray;
}

var t = greaterThanAvg([2, 5, 7, 3, 1, 6]);
console.log(t)


/* 14. The body mass index (BMI) is the ratio of the weight of a person (in kilograms) to the
square of the height (in meters). Write a function that takes two parameters, weight and
height, computes the BMI, and prints the corresponding BMI category:
● Starvation: less than 15
● Anorexic: less than 17.5
● Underweight: less than 18.5
● Ideal: greater than or equal to 18.5 but less than 25
● Overweight: greater than or equal to 25 but less than 30
● Obese: greater than or equal to 30 but less than 40
● Morbidly obese: greater than or equal to 40 */

function BMI(weight, height) {
    var result, output;
    result = weight / (height * height);
    if (result < 15) {
        output = "Starvation"
    }
    if (result < 17.5) {
        output = "Anorexic"
    }
    if (result < 18.5) {
        output = "Underweight"
    }
    if (result >= 18.5 && result < 25){
        output = "Ideal"
    }
    if (result >= 25 && result < 30) {
        output = "Overweight"
    }
    if (result >= 30 && result < 40) {
        output = "Obese"
    }
    if (result >= 40) {
        output = "Morbidly obese"
    }
    return output
}
 
var b = BMI(57, 1.63);
console.log(b)


/* 15. Write a function that takes a list of strings and prints them, one per line, in a rectangular
frame.:
For example the list ["Hello", "World", "in", "a", "frame"] gets
printed as:
*********
* Hello *
* World *
* in *
* a *
* frame *
*********


function frameText(array) {
    var i, j, output = "";
    for (i = 0; i < array.length; i++) {
        for (j = 0; j < array.length; j++) {
            if (i === 0 || i === array.length - 1 || j === 0 || j === array.length - 1) {
                output += "*" + array[i] + "*";
            } else {
                output += " ";
            }
        }
    }
    return output
}

var x = frameText(["Hello", "World", "in", "a", "frame"]);
console.log(x)

*/