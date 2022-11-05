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

