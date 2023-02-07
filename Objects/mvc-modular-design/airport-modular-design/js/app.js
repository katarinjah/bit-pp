"use strict";

var appModule = (function (data, ui) {

    var bookFlight = function(e) {
        e.preventDefault();
        var collectedData = ui.collectFlightData();
        if (!ui.validateInputs()) return;
        var flightData = data.createFlight(collectedData.destination, collectedData.date);
        var newFlight = flightData.getData();
        var flightId = data.createPassenger();
        ui.displayFlightData(flightData);
        ui.displayPassengerList(newFlight.addPassenger(flightId));
        ui.updateTotalPassengerCount(data.getTotalPassengerCount());
        ui.updateTotalBusinessPassengerCount(data.getTotalBusinessPassengerCount());
        ui.updateBusinessPassengerCountOnFlight(data.getBusinessPassengerCountOnFlight(flightId));
        ui.clearInputs();
    };
        
    var bookFlightButton = document.querySelector("#book-flight");
    bookFlightButton.addEventListener("click", bookFlight);

})(dataModule, uiModule)