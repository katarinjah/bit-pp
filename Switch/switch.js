/* 1. Write a program that shows text representation of a day in a week for a number input from
1 to 7. Print output in console.
For input 1, output should be “Monday”. */

var day = 1;
var result = "";

switch (day) {
    case 1:
        result = "Monday";
        break;
    case 2:
        result = "Tuesday";
        break;
    case 3:
        result = "Wednesday";
        break;
    case 4:
        result = "Thursday";
        break;
    case 5:
        result = "Friday";
        break;
    case 6:
        result = "Saturday";
        break;
    case 7:
        result = "Sunday";
}

console.log(result)


/* 2. Write a program that shows text representation of a day in a week for a number input from
1 to 7. All other cases output a message explaining that input must be a number between 1
and 7.
For input 1, output should be “Monday”.
For input 10, output should be “Input must be a number between 1 and 7”. */

var day = 10;
var result = "";

switch (day) {
    case 1:
        result = "Monday";
        break;
    case 2:
        result = "Tuesday";
        break;
    case 3:
        result = "Wednesday";
        break;
    case 4:
        result = "Thursday";
        break;
    case 5:
        result = "Friday";
        break;
    case 6:
        result = "Saturday";
        break;
    case 7:
        result = "Sunday";
        break;
    default:
        result = "Input must be a number between 1 and 7";
}

console.log(result)


/* 3. Write a program that for a 1-7 number input (representing a day in a week) shows if that day
is a weekday or weekend. All other cases output a message explaining that input must be a
number between 1 and 7.
For input 2, output should be “It’s weekday”.
For input 6, output should be “It’s weekend”.
For input 12, output should be “Input must be number between 1 and 7”. */

var day = 12;
var result = "";

switch (day) {
    case 1:
        result = "It's weekday.";
    case 2:
        result = "It's weekday.";
    case 3:
        result = "It's weekday.";
    case 4:
        result = "It's weekday.";
    case 5:
        result = "It's weekday.";
        break;
    case 6:
        result = "It's weekend.";
    case 7:
        result = "It's weekend.";
        break;
    default:
        result = "Input must be a number between 1 and 7";
}

console.log(result)


/* 4. Write a program that for a 1-12 number input (representing a month in a year) shows that
month’s name. All other cases output a message explaining that input must be a number
between 1 and 12.
For input 2, output should be “February”.
For input 6, output should be “June”.
For input 13, output should be “Input must be a number between 1 and 12”. */

var month = 13;
result = "";

switch (month) {
    case 1:
        result = "January";
        break;
    case 2:
        result = "February";
        break;
    case 3:
        result = "March";
        break;
    case 4:
        result = "April";
        break;
    case 5:
        result = "May";
        break;
    case 6:
        result = "June";
        break;
    case 7:
        result = "July";
        break;
    case 8:
        result = "August";
        break;
    case 9:
        result = "September";
        break;
    case 10:
        result = "October";
        break;
    case 11:
        result = "November";
        break;
    case 12:
        result = "December";
        break;
    default:
        result = "Input must be a number between 1 and 12";
    }

console.log(result)


/* 5. Write a program that for a 1-12 number input (representing a month in a year) shows what
season it is. All inputs different from 1-12 output a message explaining that input must be a
number between 1 and 12. */

var month = 12;
result = "";

switch (month) {
    case 1:
        result = "It's winter.";
    case 2:
        result = "It's winter.";
    case 3:
        result = "It's winter.";
        break;
    case 4:
        result = "It's spring.";
    case 5:
        result = "It's spring.";
    case 6:
        result = "It's spring.";
        break;
    case 7:
        result = "It's summer.";
    case 8:
        result = "It's summer.";
    case 9:
        result = "It's summer.";
        break;
    case 10:
        result = "It's autumn.";
    case 11:
        result = "It's autumn.";
    case 12:
        result = "It's autumn.";
        break;
    default:
        result = "Input must be a number between 1 and 12";
    }

console.log(result)


/* 6. Write a program that for a string input of a grade from “A”-“F” outputs a proper info
message about that grade in the following manner: A - &quot;Good job&quot;&quot;, B - &quot;Pretty good&quot;&quot;, C -
&quot;Passed&quot;&quot;, D - &quot;Not so good&quot;&quot;, F - &quot;Failed&quot;. Input different from letters A-F outputs a message
&quot;Unknown grade&quot;. */

var grade = "G";
var result = "";

switch (grade) {
    case "A":
        result = "Good job";
        break;
    case "B":
        result = "Pretty good";
        break;
    case "C":
        result = "Passed";
        break;
    case "D":
        result = "Not so good";
        break;
    case "F":
        result = "Failed";
        break;
    default:
        result = "Unknown grade";
}

console.log(result)


/* 7. Write a program that takes as input a city name and outputs the country where the city is.
You may choose which cities and countries you want to output yourself, however there has
to be at least 5 countries and 15 cities. Note that each country must have a different
number of cities. Input different from the listed cities should output a message&quot;Please
choose a different city&quot;. */

var city = "Scheveningen";
result = "";

switch (city) {
    case "Amsterdam":
        result = "The Netherlands";
    case "Rotterdam":
        result = "The Netherlands";
    case "Scheveningen":
        result = "The Netherlands";
    case "Breda":
        result = "The Netherlands";
    case "Nijmegen":
        result = "The Netherlands";
        break;
    case "Hamburg":
        result = "Germany";
    case "Neuburg":
        result = "Germany";
    case "Berlin":
        result = "Germany";
    case "Munich":
        result = "Germany";
        break;
    case "Paris":
        result = "France";
        break;
    case "Rio de Janeiro":
        result = "Brazil";
    case "Sao Paolo":
        result = "Brazil";
        break;
    case "Bangkok":
        result = "Thailand";
    case "Phuket":
        result = "Thailand";
    case "Lampang":
        result = "Thailand";
        break;
    default:
        result = "Please choose a different city";
}

console.log(result)


/* 8. Write a program that takes as input two numbers and a string denoting the operation (“+”, “-
”, “*”, “/”) and prints out the appropriate result. Watch out for division by zero! */

var a = 1;
var b = 2;
var operator = "+";

switch (operator) {
    case "+":
        result = a+b;
        break;
    case "-":
        result = a-b;
        break;
    case "*":
        result = a*b;
        break;
    case "/":
        result = a/b;
}

console.log(result)