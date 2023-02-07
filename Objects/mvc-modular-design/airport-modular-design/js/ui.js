"use strict";

var uiModule = (function () {

    var totalPassengers = document.querySelector("#total-passengers");
    var totalBusinessPassengers = document.querySelector("#total-business-passengers");
    var flightData = document.querySelector("#flight-data");
    var passengerList = document.querySelector("#passenger-list");
    var numOfBusinessOnFlight = document.querySelector("#business-passengers-on-flight");
    var flightError = document.querySelector("#flight-error");
    var destinationInfo = document.querySelector("#destination");
    var dateInput =  document.querySelector("#flight-date");
    var travelClass = document.querySelector("#class");
    var seatNumber = document.querySelector("#seat-number");
    var passengerName = document.querySelector("#name");

    var collectFlightData = function() {
        var destination = destinationInfo.value;
        var date = dateInput.value;
        var category = travelClass.value || "Economy";
        var seat = seatNumber.value || Math.floor(Math.random() * 90) + 10;
        var name = passengerName.value;

        return {
            destination: destination,
            date: date,
            category: category,
            name: name,
            seat: seat,
        };
    };

    var validateInputs = function() {
        if (!destinationInfo.value || !isNaN(destinationInfo.value)) {
            flightError.textContent = "Please enter origin and destination country.";
            return false;
        };
        if (!dateInput.value) {
            flightError.textContent = "Please select date.";
            return false;
        };
        var date = new Date(dateInput.value);
        if (date.getTime() < Date.now()) {
            flightError.textContent = "Invalid date!";
            return false;
        };
        if (!passengerName.value || !isNaN(passengerName.value)) {
            flightError.textContent = "Please enter passenger name.";
            return false;
        } else {
            flightError.textContent = "";
            return true;
        };
    };

    var displayFlightData = function(destination, date) {
        flightData.textContent = "Destination: " + collectFlightData.destination + "  |  Date: " + collectFlightData.date;
    };

    var displayPassengerData = function(seat, category, name) {
        var li = document.createElement("li");
        li.textContent = "Seat: " + seat + "  |  Class: " + category + "  |  Name: " + name;
        passengerList.appendChild(li);
    };

    var updateTotalPassengerCount = function() {
        var total = 0;
        collectFlightData.forEach(function() {
            total += collectFlightData.name.length;
        });
        totalPassengers.textContent = total;
    };

    var updateTotalBusinessPassengerCount = function() {
        var total = 0;
        collectFlightData.forEach(function() {
            if (collectFlightData.category === "Business") {
                total++;
            };
        });
        totalBusinessPassengers.textContent = total;
    };

    var updateBusinessPassengerCountOnFlight = function() {
        var count = 0;
        if (collectFlightData.category === "Business") {
            count++;
        };
        numOfBusinessOnFlight.textContent = count;
    };

    var clearInputs = function() {
        destinationInfo.textContent = "";
        dateInput.value = "";
        travelClass.value = "Economy";
        seatNumber.textContent = "";
        passengerName.textContent = "";
    }

    return {
        collectFlightData: collectFlightData,
        validateInputs: validateInputs,
        displayFlightData: displayFlightData,
        displayPassengerData: displayPassengerData,
        updateTotalPassengerCount: updateTotalPassengerCount,
        updateTotalBusinessPassengerCount: updateTotalBusinessPassengerCount,
        updateBusinessPassengerCountOnFlight: updateBusinessPassengerCountOnFlight,
        clearInputs: clearInputs,
    };

})()