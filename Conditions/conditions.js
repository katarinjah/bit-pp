/* Task 1. Write a conditional statement to find the sign of product of three numbers. Display the
result in the console with the specified sign.
Sample numbers: 3, -7, 2
Output: The sign is - */

var a=3, b=-7, c=2, result="";
var d=a*b*c;
if (d>0) {
    result="The sign is +"
} else {
    result="The sign is -"
}
console.log(result)


/*Task 2. Write a conditional statement to find the largest of five numbers. Display the result in the
console.
Sample numbers: -5, -2, -6, 0, -1
Output: 0 */

var a=-5, b=-2, c=-6, d=0, e=-1;
if (a>b && a>c && a>d && a>e) {
    console.log(a)
} else if (b>a && b>c && b>d && b>e) {
    console.log(b)
} else if (c>a && c>b && c>d && c>e) {
    console.log(c)
} else if (d>a && d>b && d>c && d>e) {
    console.log(d)
} else if (e>a && e>b && e>c && e>d) {
    console.log(e)
}


/* Task 3. Write a conditional statement to print three numbers as sorted number list.
Sample numbers : 0, -1, 4
Output : 4, 0, -1 */

var a=4, b=0, c=-1;
if (a>b>c) {
    console.log(a,b,c)
} else if (b>a>c) {
    console.log(b,a,c)
} else if (c>a>b) {
    console.log(c,a,b)
} else if (c>b>a) {
    console.log(c,b,a)
}


/* Task 4. Write a program to check if the variable is a number and if it’s a number, check if it is
divisible by 2. If it is, print the result, if not, show “X”.
Sample input: 10 Output: 10 / 2 = 5 
Sample input: 7 Output: X */

var a=10;
if (typeof a=="number" && a%2===0) {
    console.log(a/2)
} else {
    console.log("X")
}

var a=7;
if (typeof a=="number" && a%2===0) {
    console.log(a/2)
} else {
    console.log("X")
}


/* Task 5. Write a program that compares two numbers and displays the larger. Display the result in
the console. */

var a=16, b=45;
if (a>b) {
    console.log(a)
} else {
    console.log(b)
}


/* Task 6. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
Formula : F = (9*C/5) + 32 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
Sample Input: 60°C
Output : 60°C is 140 °F */

var c=60; f=0, result="";
if (f=(9*c/5) +32) {
    result= c +"°C is " + f + "°F"
}
console.log(result)


/* Task 7. Write a JavaScript program to get the difference between a given number and 13, if
the number is greater than 13 return double difference between that number and 13.
Sample Input: 11 Output : 2
Sample Input: 32 Output : 38 */

var a=11;
if (a>13) {
    console.log((a-13)*2)
}

var a=32, result=0;
if (a>13) {
    console.log((a-13)*2)
}


/* Task 8. Write a JavaScript program to compute the sum of the two given integers. If the two
values are same, then returns triple their sum.
Sample Input: 12,5 Output : 17
Sample Input: 8,8 Output : 48 */

var a=12, b=5;
if (a===b) {
    console.log((a+b)*3)
} else {
    console.log(a+b)
}

var a=8, b=8;
if (a===b) {
    console.log((a+b)*3)
} else {
    console.log(a+b)
}


/* Task 9. Write a JavaScript program to check two given numbers and print “true” if one of
the number is 50 or if their sum is 50.
Sample Input: 5,54 Output : -
Sample Input: 6,50  Output : true
Sample Input: 40,10 Output : true */

var a=5, b=54;
if (a===50 || b===50 || a+b===50) {
    console.log("true")
}

var a=6, b=50;
if (a===50 || b===50 || a+b===50) {
    console.log("true")
}

var a=40, b=10;
if (a===50 || b===50 || a+b===50) {
    console.log("true")
}


/* Task 10. Write a JavaScript program to check a given integer is within 20 of 100 or 400,
and print range in which number belongs.
Sample Input: 13 Output : -
Sample Input: 34 Output : 20 ⇔ 100
Sample Input: 256 Output : 100 ⇔ 400 */

var a=13;
if (a>20 && a<100) {
    console.log("range is between 20 and 100")
} else if (a>100 && a<400) {
    console.log("range is between 100 and 400")
}

var b=34;
if (b>20 && b<100) {
    console.log("range is between 20 and 100")
} else if (b>100 && b<400) {
    console.log("range is between 100 and 400")
}

var c=256;
if (c>20 && c<100) {
    console.log("range is between 20 and 100")
} else if (c>100 && c<400) {
    console.log("range is between 100 and 400")
}