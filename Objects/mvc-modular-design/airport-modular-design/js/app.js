"use strict";

var appModule = (function (data, ui) {

    var bookFlight = function(e) {
        e.preventDefault();
        var collectedData = ui.collectFlightData();
        if (!ui.validateInputs()) return;
        var flightData = data.createFlight(collectedData.destination, collectedData.date);
        ui.displayFlightData(flightData);
        ui.displayPassengerData(collectedData.seat, collectedData.category, collectedData.name);
        ui.updateCounters(flightData);
        ui.clearInputs();
    };
        
    var bookFlightButton = document.querySelector("#book-flight");
    bookFlightButton.addEventListener("click", bookFlight);

})(dataModule, uiModule)