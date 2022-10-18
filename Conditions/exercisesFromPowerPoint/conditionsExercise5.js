/*Write a program to check if the variable is a number. If it’s a number, check if it is divisible by 2. If it is, print the result, if not, show “X”
Sample numbers: 10 | 7 (check one at the time)
Output: 10 / 2 = 5 | X */

var a=10, result;
if (typeof a=="number" && a%2===0) {
    result=a/2;
   } else {
    result="x"
   }
   console.log(result)


var b=7, result;
if (typeof b=="number" && b%2===0) {
    result=b/2;
} else {
    result="x"
}
console.log(result)