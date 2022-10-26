// Write a program that will iterate from 0 to 10 and display squares of numbers.

var x=0;

for (var x = 0; x <= 10; x++) {
    console.log(x * x);
    }


/* Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen. */

var i=0;

for (i=0; i<=15; i++) {
    if (i%2===0) {
        console.log(i + " is even")
    } else {
        console.log(i + " is odd")
    }
}


// Write a program to sum the multiples of 3 and 5 under 1000. 

var i=0, total=0;

for (i=0; i<1000; i++) {
    if (i%3===0 || i%5===0) {
        total= total + i;
    }
}
console.log("The total is: " + total)


// Write a program to compute the sum and product of an array of integers.

var arr=[2,10,3,5,18,9], sum=0, product=1, i=0;

for (i = 0; i < arr.length; i++) {
    sum += arr[i];
    product *= arr[i];
    }
console.log("Sum is "+ sum + ", " + "product is " + product)


/* Write a program which prints the elements of the following array as a single string.
var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined]; */

var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined], i=0, string="";

for (i=0; i < x.length; i++) {
    string += x[i]
}
console.log(string)



/* Write a program that prints the elements of the following array.
var a = [
[1, 2, 1, 24], 
[8, 11, 9, 4], 
[7, 0, 7, 27]
]; */

var a = [ [1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27] ], i=0;

for (i=0; i < a.length; i++) {   
    console.log(a[i])
}


// Write a program that outputs the sum of squares of the first 20 numbers. 

var i=0, sum=0;
for (i=1; i<=20; i++) {
    sum += i*i
}
console.log(sum)



/* 
Write a program that computes average marks of the following students. Then use this average to determine the corresponding grade. 
	
David
80
Marko
77
Dany
88
John
95
Thomas
68


The grades are computed as follows :

< 60%
F
< 70%
D
< 80%
C
< 90%
B
< 100%
A
*/

var grades = [ ["David", 80], ["Marko", 77], ["Dany", 88], ["John", 95], ["Thomas", 68] ], average=0, output=0;

for (i=0; i < grades.length; i++) {
    average += grades[i][1];
    output = average/grades.length;
    } 

    if (output < 60) {
        console.log("Grade is F");      
        } else if (output < 70) {
              console.log("Grade is D"); 
        } else if (output < 80) {
              console.log("Grade is C"); 
        } else if (output < 90) {
              console.log("Grade is B"); 
        } else if (output < 100) {
              console.log("Grade is A"); 
        }


/* Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead. When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those). */

var i=1, div3=0, div5=0;

for (i=1; i<=100; i++) {

    div3 = i%3;
    div5 = i%5;

    if ((div3==0) && (div5==0)) {
        console.log("FizzBuzz")
    } else if (div3===0) {
        console.log("Fizz");
    } else if (div5===0) {
        console.log("Buzz");
    } else {
        console.log(i)
    }
}


   

   
   
   /* if (i%3===0) {
        console.log("Fizz");
    } else {
        console.log(res+=i)
    }

    if (i%5===0) {
        console.log("Buzz")
        } else {
            console.log(res+=i)
        }
}

*/
        
 /*       if (i%3===0 || i%5===0) {
            console.log("FizzBuzz")
        } else {
            console.log(res+=i)
        }  */






