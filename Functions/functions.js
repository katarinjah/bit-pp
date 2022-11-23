"use strict";

var result = (function(scared) {
    return "Boo! " + scared;
   
}) ("Are you scared?");

console.log(result) 



function outer(param) {
	
    function inner(theinput) {
        return theinput * 2; 
    }
     
    return "The result is " + inner(param);
}
 
var o = outer(11);
console.log(o)  



var outer = function(param) {
    var inner = function(theinput) {
        return theinput * 2;
    };
    return "The result is " + inner(param);
};

console.log(outer(10)) 



function a() {
    console.log("A!")
    return function() {
        console.log("B!");
    };
}
a()()  



function sum(funcA, funcB) {
    return funcA() + funcB();
}

var res = sum (
    function() {
        return 2;
    },
    function() {
        return 4;
    }
)

console.log(res)





function a() {
    console.log("A!");
    return function () {
        console.log("B!");
    }
}

var result = a();
result()



function outer(string) {
    return string
}

var res = outer("cao");
console.log(res)



function outer(string) {
    function inner(s) {
        return s + s;
    }
    return inner(string)
}

var res = outer("cao");
console.log(res)



var outer = function() {
    var inner = function(s) {
        return s + s;
    }
    return inner;
}

var res = outer();
var result = res("cao");
console.log(result)


 