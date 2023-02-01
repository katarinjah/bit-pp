"use strict";

(function (ui, data) {
    var label = ui.shoutout();
    var result = data.multiply(10, 2);
    
    console.log(label + " " + result);

})(uiModule, dataModule)