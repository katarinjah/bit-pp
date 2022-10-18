/*Write a conditional statement to find the largest of five numbers. Display the result in console.

Sample numbers: -5, -2, -6, 0, -1 
Output: 0 */


var a=-5, b=-2, c=-6, d=0, e=-1;
if (a>b&&a>c&&a>d&&a>e) {
console.log(a)
} else if (b>a&&b>c&&b>d&&b>e) {
    console.log(b)
} else if (c>a&&c>b&&c>d&&c>e) {
    console.log(c)
} else if (d>a&&d>b&&d>c&&d>e) {
    console.log(d)
} else if (e>a&&e>b&&e>c&&e>d) {
    console.log(e)
}