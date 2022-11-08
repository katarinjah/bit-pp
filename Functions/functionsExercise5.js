/* 1. Find the min and max element in the following array and switch their places. Print out the modified array in the console.
Input:  [ 3, 500, 12, 149, 53, 414, 1, 19 ]
Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ] 

function switchMinMax(array) {
    var min = array[0], max = array[0], newarray = [];

    for (var i = 0; i < array.length; i++) {
        if (array[i] < min) {
           min = array[i]
        } 
        if (array[i] > max) {
            max = array[i]
        }
        newarray.indexOf[min] += newarray.indexOf[max]
        
    } 
    return newarray
} 

var o = switchMinMax([ 3, 500, 12, 149, 53, 414, 1, 19 ]);
console.log(o)
*/


/* 2. Use the following array to make a new one by dividing its values by two and adding 5. If a given element's value is 0, change it to 20.
Input:  [ 3, 500, -10, 149, 53, 414, 1, 19 ]
Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ]  */

function arrayManipulation(arr1) {
    var arr2 = [];
    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] <= 0) {
            arr2[arr2.length] = 20
        } else {
            arr2[arr2.length] = arr1[i] / 2 + 5;
        }
    }
   return arr2
}

var d = arrayManipulation([ 3, 500, -10, 149, 53, 414, 1, 19 ]);
console.log(d)


/* 3. Initialize two arrays. The first one should contain student names, the second one the number of points for each student. Display students' names with their corresponding grade. Use the following ranges:
51-60 -> 6,
61-70 -> 7,
71-80 -> 8,
81-90 -> 9,
91-100 -> 10.
Input: 
[ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63, 72, 99, 51, 83, 59 ]
Output: 
Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete the exam.  */

function grades(names,points) {
  var output = "";

  for (var i = 0; i < points.length; i++) {
    if (points[i] <= 50) {
        var result = "failed"
    }
    if (points[i] > 50 && points[i] <= 60) {
        result = 6
    }
    if (points[i] > 60 && points[i] <= 70) {
        result = 7
    }
    if (points[i] > 70 && points[i] <= 80){
        result = 8
    }
    if (points[i] > 80 && points[i] <= 90) {
        result = 9
    }
    if (points[i] <= 100 && points[i] > 90) {
        result = 10
    }
    output += names[i] + " " + result + "\n";
  }
  return output
}

var c = grades([ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63, 72, 99, 51, 83, 59 ]);
console.log(c)


// instructions say that tasks 4. and 5. should be skipped


/* 6. Write a program that uses a loop to add all the even numbers from 1 to 1000 and subtracts all the odd numbers 1 to 500 from the calculated sum. The result should then be multiplied by 12.5 and displayed in console.
Output: 2350000  */

function loopMath() {
    var even = 0, odd = 0;
    for (var i = 0, j = 500; i <= 1000; i += 2, j--) {
        even += i;
        if (j % 2 === 1) {
            odd += j
        }
    }   
    var result = (even - odd) * 12.5;
    return result
}

var q = loopMath();
console.log(q)


/* 7. Define a 10 element array. Take the first two letters from every string (that has at least 2 letters) in the array and create a new string from them. Print it out in the console.
Input: [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]
Output: AnStJoJoDaMa  */

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

var e = manipulateArray([ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]);
console.log(e)


/* 8. Write a program that takes a string and prints its characters out in reversed order in the console.
Input:  Belgrade Institute of Technology
Output: ygolonhceT fo etutitsnI edargleB  */

function reverseString(string) {
    var output = "";
    for (var i = string.length - 1; i >= 0; i--) {
        output += string[i]
    }
    return output
}

var y = reverseString("Belgrade Institute of Technology");
console.log(y)


/* 9. Write a program that displays all the combinations of two numbers between 1 and 7. Don't display two of the same numbers at the same time. Display the number of possible combinations, as well. (E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...).  */

function numberCombination() {
    var output = "";
    for (var i = 1; i <= 7; i++) {
      for (var j = 1; j <= 7; j++) {
        if (i !== j) {
          output += "(" + i + ", " + j + ")" + " ";
        }
      }
    }
    return output
  }
  var p = numberCombination();
  console.log(p)


/* 10. Write a program that checks if the entered number is a prime number (i.e. divisible only by 1 and by itself).
Input:  17    | 15
Output: true  | false  */

function checkIfPrime(n) {
    var prime = true;
    var divider = 2;
    while ( divider < n ) {
        if (n % divider === 0)  {
            prime = false
            }
        divider = divider + 1
    }
    return prime
}
 
var y = checkIfPrime(17);
console.log(y)


/* 11. Check if a given string is a palindrome (spaces are ignored).
Input:  eye  | Geek  | a nut for a jar of tuna
Output: true | false | true */

function symmetryCheck (string) {
    var result = true;
    for (var i = 0, j = string.length - 1; i <= j; i++, j--) {
      if (string[i] !== string[j]) {
        result = false;
        break
        }
    } 
    return result
}

var d = symmetryCheck("geek");
console.log(d)


/* 12. Write a program that calculates the greatest common divisor of two integers. Note: The greatest common divisor of two non-zero integers is the greatest positive number that divides both numbers with no remainder.
Input:  192 42 | 81 9
Output: 6      | 9   

function greatestDivisor(a, b) {
    var output = 1;
    for (var i = 1; i <= a && i <= b; i++) {
        if (a % i === 0 && b % i === 0) {
            output += i
    }
    return output
}
}

var t = greatestDivisor(192, 42);
console.log(t)

*/
