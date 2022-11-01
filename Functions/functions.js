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

