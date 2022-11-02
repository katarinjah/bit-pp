// Write a program that calculates the maximum of two given numbers. 

function maxNr (a,b) {

    if (!isFinite(a) || !isFinite(b)) return "Invalid input";
    if (a > b) return a;
    if (b > a) return b;
    return "Numbers are equal"
}

var x = maxNr(4,12);
console.log(x)


// Write a program that checks if a given number is odd.

function oddNr(a) {

    if (a % 2 === 1) return "The number is odd.";
    if (a % 2 !== 1) return "The number is even.";
}

var f = oddNr(9);
console.log(f)


// Write a program that checks if a given number is a three digit long number.

function threeDigitNr(z) {

    var result = "";

    if (z < 100 || z > 999) {
        result = " does not have 3 digits";
    } else if (z >= 100 || z <= 999) {
        result = " has three digits";
    }
    return (z + result);
}

var x = threeDigitNr(567);
console.log(x)


// Write a program that calculates an arithmetic mean of four numbers.

function arMean(a, b, c, d) {

    var result = (a+b+c+d) / 4;
    return result
}

var z = arMean(6,32,7,19);
console.log(z)


/* Write a program that draws a square of a given size. For example, if the size of
square is 5 the program should draw:
*****
* *
* *
* *   
*/

function drawSquare(a, b) {
    
    var output = "";

    for (var i = 0; i < a; i++) {
    for (var j = 0; j < b; j++) {
        if ( i === 0 || i === a - 1 || j === 0 || j === b - 1) {
            output += "*";
        } else {
            output += " ";
        }
    }
    if (i !== a - 1) output += "\n";    
    }
    return output
}

var x = drawSquare(4, 6);
console.log(x)


/* Write a program that draws a horizontal chart representing three given values.
For example, if values are 5, 3, and 7, the program should draw:
* * * * *
* * *
* * * * * * *
*/

function horChart (a, b, c) {
    
    var output = "";

    for (var i = 0; i < a; i++) {
        output += "*"; }   
    if (i !== a - 1) output += "\n";  

    for (var j = 0; j < b; j++) {
        output += "*"; }
    if (j !== b - 1) output += "\n";

    for (var k = 0; k < c; k++) {
        output += "*";
    }
            return output
}

var g = horChart(4, 11, 7);
console.log(g)


// Write a program that calculates a number of digits of a given number.

function numOfDigits(a) {
    
    var result = 0;

    if (a >= 1) ++result;
  
    while (a / 10 >= 1) {
      a /= 10;
      ++result;
    }
    return result;
  }

  var f = numOfDigits(6398657);
  console.log(f)


/* Write a program that calculates a number of appearances of a given number in a
given array.
Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
Result: 3  
*/

function numOfAppear(a, e) {
    
    var result = 0;

    for (var i = 0; i < a.length; i++) {
        if (a[i] === e) {
        result += 1;
        }
    } return result
}

var t = numOfAppear ([2, 4, 7, 8, 7, 7, 1], 7);
console.log(t)


// Write a program that calculates the sum of odd elements of a given array.

function sumOdd(a) {
    
    var sum = 0;

    for (var i = 0; i < a.length; i++) {
        if (a[i] % 2 === 1) {
            sum += a[i];
        }
    } return sum
}

var e = sumOdd([7, 1, 4, 2]);
console.log(e)


/* Write a program that calculates the number of appearances of a letter a in a
given string. Modify the program so it calculates the number of both letters a and
A. */

function numOfAppear(arr) {
    
    var result = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === "a" || arr[i] === "A" ) {
            result += 1;
            }
        } return result
    }

    var h = numOfAppear("ahkAajkzgaA");
    console.log(h)


/* Write a program that concatenates a given string given number of times. For
example, if “abc” and 4 are given values, the program prints out abcabcabcabc. */

function concatString(string, a) {

    var result = "";

    while (a > 0) {
        result += string;
        a--;
    } return result
    } 

var u = concatString("abc", 4);
console.log(u)


