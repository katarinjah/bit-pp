/* Write a conditional statement to sort three numbers.

Sample numbers : 0, -1, 4 
Output : 4, 0, -1  */

var a=4, b=0, c=-1;
if (a>b>c) {
    console.log(a,b,c)
} else if (b>a>c) {
    console.log(b,a,c)
} else if (c>a>b) {
    console.log(c,a,b)
} else if (c>a>b) {
    console.log(c,b,a)
}