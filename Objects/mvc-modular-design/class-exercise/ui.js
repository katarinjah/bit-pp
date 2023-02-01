"use strict";

var uiModule = (function() {
    var resultLabel = function() {
        return "Result is: ";
    };

    var shoutout = (function() {
        var a = "blah";
        var b = "yeah";
        var result = a + " " + b;
        return result;
    })

    return {
        resultLabel: resultLabel,
        shoutout: shoutout,
    };
})()