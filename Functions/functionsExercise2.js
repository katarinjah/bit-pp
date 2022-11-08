/* 1. Write a function to check whether the `input` is a string or not.
"My random string" -> true
12 -> false  */

function checkIfString(a) {
    if (typeof(a) === "string") {
        return true
    } else {
        return false
    }
}

var g = checkIfString(12);
console.log(g)


/* 2. Write a function to check whether a string is blank or not.
"My random string" -> false
"" -> true
12 -> false
false -> false  */

function checkIfBlank(str) {
    if (str === "") {
        return true
    } else {
        return false
    }
}

var d = checkIfBlank("My random string");
console.log(d)


/* 3. Write a function that concatenates a given string n times (default is 1).
"Ha" -> "Ha"
"Ha", 3 -> "HaHaHa"  */

function concatString(string, n) {
    var result = "";

    while (n >= 1) {
        result += string;
        n--;
    }
    return result
}

var u = concatString("Ha", 3);
console.log(u)


/* 4. Write a function to count the number of letter occurrences in a string.
"My random string", "n" -> 2   */

function letterOccurence(string, letter) {
    var result = 0;

    for (var i = 0; i < string.length; i++) {
        if (string[i] === letter) {
            result +=1;
        }
    }
    return result
}

var h = letterOccurence("bananassss", "s");
console.log(h)


/* 5. Write a function to find the position of the first occurrence of a character in a string. The result should be the position of character. If there are no occurrences of the character, the function should return -1.   */

function firstOccurence(string, char) {
    for (var i = 0; i < string.length; i++) {
        if (string[i] === char) {
            return string.indexOf(char)
        } else if (string[i] === 0)
        return -1 
    }
}

var l = firstOccurence("banana", "n");
console.log(l)


/* 6. Write a function to find the position of the last occurrence of a character in a string. The
result should be in human numeration form. If there are no occurrences of the character,
function should return -1.   */

function lastOccurence(string, char) {

    for (var i = 0; i < string.length; i++) {
        if (string[string.length - i] === char) {
            return (string.length - i + 1)
    } 
    } if (string[i]!== char) {
    return -1
    }
}

var e = lastOccurence("betmenssss", "s");
console.log(e)


/* 7. Write a function to convert string into an array. Space in a string should be represented as “null” in new array.
"My random string" -> ["M", "y", null, "r", "a"]
"Random" -> ["R", "a", "n", "d", "o", "m"]
*/

function convertToArray (string) {
    array = [];

    for (var i = 0; i < string.length; i++) {
        if (string[i] !== " ") {
           array[array.length] = string[i];
        } else { 
            array[array.length] = null;
        }
        }
        return array
    }
    

var r = convertToArray ("My random string");
console.log(r)


/* 8. Write a function that accepts a number as a parameter and checks if the number is prime or not. 
Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself. */

function checkIfPrime(n) {
    var prime = true;
    var divider = 2;
    while ( divider < n ) {
        if (n % divider === 0)  {
            prime = false
            }
        divider = divider + 1
    }
    return prime;
}
 
var y = checkIfPrime(7);
console.log(y)


/* 9. Write a function that replaces spaces in a string with provided separator. If separator is not provided, use “-” (dash) as the default separator.

    "My random string", "_" -> "My_random_string"
    "My random string", "+" -> "My+random+string"
    "My random string" -> "My-random-string"  */

    function replaceSpace(str1, sep) {
        var str2 = "";
        for (var i = 0; i < str1.length; i++) {
          var x = str1[i] === " " ? sep : str1[i];
          str2 += x;
        } 
        return str2;
    }

      var z = replaceSpace("My Random String", "-");
      console.log(z)

 
// 10.  Write a function to get the first n characters and add “...” at the end of newly created string.

function firstCharacters(string, n) {
    var output = "";
    if (n > string.length) return "'n' exceeds the string length.";
        for (var i = 0; i < n; i++) {
        output += string[i]
    }
    return output + "..."
}

var a = firstCharacters("hahaha", 3);
console.log(a)


/* 11. Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.
["1", "21", undefined, "42", "1e+3", Infinity] -> [1, 21, 42, 1000]  */

function convertToNumArray(arr) {
    var arr2 = [];
   for (var i = 0; i < arr.length; i++) {
        var e = parseFloat(arr[i]);
        if (isFinite(e)) {
            arr2[arr2.length] = e
        }
    } 
    return arr2
}

var f = convertToNumArray(["1", "21", undefined, "42", "1e+3", Infinity]);
console.log(f);

  
/* 12. Write a function to calculate how many years there are left until retirement based on the year of birth. Retirement for men is at age of 65 and for women at age of 60. If someone is already retired, a proper message should be displayed.  */

function retirement(gender, age) {
    if (gender === "male" && age >= 65) {
        return "Already retired."
    }
    if (gender === "female" && age >= 60) {
        return "Already retired."
    }
    if (gender === "male") {
        return 65 - age
    }
    if (gender === "female")
        return 60 - age
}

var v = retirement("female", 30);
console.log(v)


/* 13. Write a function to humanize a number (formats a number to a human-readable string) with the correct suffix such as 1st, 2nd, 3rd or 4th.
1 -> 1st
11 -> 11th  */

function humanize(n) {
    if(n % 100 >= 11 && n % 100 <= 13)
        return n + "th";
    
    switch(n % 10) {
        case 1: return n + "st";
        case 2: return n + "nd";
        case 3: return n + "rd";
    }
    return n + "th";
}

var d = humanize(1);
console.log(d)
