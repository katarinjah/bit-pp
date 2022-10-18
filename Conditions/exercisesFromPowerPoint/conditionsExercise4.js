//Write a conditional statement to find the sign of product of three numbers. Display the result in the console with the specified sign. 
//Sample numbers: 3, -7, 2 
//Output: The sign is - 

var a=3, b=-7, c=2, result="";
var d=a*b*c;
if (d>0) {
    result="The sign is +"
} else {
    result="The sign is -"
}
console.log(result)