"use strict";

var uiModule = (function () {

    var totalPassengers = document.querySelector("#total-passengers");
    var totalBusinessPassengers = document.querySelector("#total-business-passengers");
    var flight = document.querySelector(".flight")
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

    var displayFlightData = function(collectFlightData) {
        var day = collectFlightData.date.getDate();
        var month = collectFlightData.date.getMonth() + 1;
        var year = collectFlightData.date.getFullYear();
        var formattedDate = day + "." + month + "." + year;
        var cities = destinationInfo.value.split(" - ");
        var origin = cities[0];
        var destination = cities[1];
        var originAbbr = origin[0].toUpperCase();
        function isConsonant(letter) {
          var vowels = "aeiouAEIOU";
          return !vowels.includes(letter);
        };
        for (var i = origin.length - 1; i >= 0; i--) {
            if (isConsonant(origin[i])) {
                originAbbr += origin[i].toUpperCase();
                break;
            };
        };
        var destinationAbbr = destination[0].toUpperCase();
        for (var i = destination.length - 1; i >= 0; i--) {
            if (isConsonant(destination[i])) {
                destinationAbbr += destination[i].toUpperCase();
                break;
            };
        };
        var hr = document.createElement("hr");
        flight.appendChild(hr);
        var formattedRelation = originAbbr + "-" + destinationAbbr;
        flightData.textContent = formattedDate + " " + formattedRelation;
    };
      

    var displayPassengerData = function(seat, category, name) {
        var li = document.createElement("li");
        li.textContent = "Seat: " + seat + "  |  Class: " + category + "  |  Name: " + name;
        passengerList.appendChild(li);
    };

    var updateCounters = function(data) {
        var passengersCount = document.getElementsByTagName("li").length;
        totalPassengers.textContent = passengersCount;

        var businessCategoryCount = 0;
        for (var i = 0; i < passengersCount; i++) {
            if (document.getElementsByTagName("li")[i].textContent.includes("Business")) {
                businessCategoryCount++;
            };
        };
        totalBusinessPassengers.textContent = businessCategoryCount;

    }



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
        updateCounters: updateCounters,
        clearInputs: clearInputs,
    };

})()