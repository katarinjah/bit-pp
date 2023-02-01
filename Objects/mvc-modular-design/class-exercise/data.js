"use strict";

var dataModule = (function () {
    var sum = function(a,b) {
        return a + b;
    };

    var multiply = function(a, b) {
        return a * b;
    };

    return {
        sum: sum,
        multiply: multiply,
    };

})()