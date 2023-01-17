"use strict";

(function () {
    console.log("Hi");

    function Person(name, surname) {
        if (!name || !surname) {
            throw new Error("Invalid input");
        };
        this.name = name;
        this.surname = surname;
        this.getData = function() {
            return (this.name + " " + this.surname);
        };
    };

    function Seat(seatNumber = Math.floor(Math.random() * 90) + 10, category = "e") {
        if(isNaN(seatNumber)) {
            throw new Error("Invalid seat number");
        };
        this.seatNumber = seatNumber;
        this.category = category;
        this.getData = function() {
            return (this.seatNumber + ", " + this.category.toUpperCase());
        };
    };

    function Passenger(person, seat) {
        if (!(person instanceof Person)) {
            throw new Error("Invalid person input");
        };
        if (!(seat instanceof Seat)) {
            throw new Error("Invalid seat input");
        };
        this.person = person;
        this.seat = seat;
        this.getData = function() {
            var category = "economy";
            if (this.seat.category === "b") {
                category = "business";
            };
            var formattedCategory = category.charAt(0).toUpperCase() + category.slice(1);
            return (this.seat.seatNumber + ", " + formattedCategory + ", " + this.person.getData());
        };
    };

    function Flight(relation, date, passengers) {
        this.relation = relation;
        this.date = new Date(date);
        this.passengers = [];
        this.addPassenger = function(passenger) {
            if (!(passenger instanceof Passenger)) {
                throw new Error("Invalid passenger input");
            };
            if (this.passengers.length > 100) {
                throw new Error("Flight is full");
            };
            for (var i = 0; i < this.passengers.length; i++) {
                if (this.passengers[i].seat.seatNumber === passenger.seat.seatNumber) {
                    throw new Error("Seat is already taken");
                };
                if (this.passengers[i].person.name === passenger.person.name && this.passengers[i].person.surname === passenger.person.surname) {
                    this.passengers[i] = passenger;
                    return passenger;
                };
            };
            this.passengers.push(passenger);
        };
        this.getData = function() {
            var flightData = "";
            var cities = this.relation.split("-");
            var origin = cities[0].trim();
            var destination = cities[1].trim();
            var originConsonants = origin.match(/[bcdfghjklmnpqrstvwxyz]/gi);
            var destinationConsonants = destination.match(/[bcdfghjklmnpqrstvwxyz]/gi);
            var formattedRelation = (originConsonants[0] + originConsonants[originConsonants.length - 1]
                    + "-" + destinationConsonants[0] + destinationConsonants[destinationConsonants.length - 1]).toUpperCase();
            flightData += "\t" + this.date.toLocaleDateString("de-DE") + " " + formattedRelation + "\n";
            this.passengers.forEach(function(passenger) {
                flightData += "\t\t" + passenger.getData() + "\n";
            });
            var businessCategoryCount = 0;
            this.passengers.forEach(function(passenger) {
                if (passenger.seat.category === "b") {
                    businessCategoryCount++;
                }
            });
            flightData += "\t\tNumber of business category passengers on this flight: " + businessCategoryCount + "\n";
            return flightData;
        };
    };

    function Airport() {
        this.name = "Nikola Tesla";
        this.flights = [];
        this.addFlight = function(flight) {
            if (!(flight instanceof Flight)) {
                throw new Error("Invalid flight input");
            };
            this.flights.push(flight);
        };
        this.getTotalPassengers = function() {
            var total = 0;
            this.flights.forEach(function(flight) {
              total += flight.passengers.length;
            });
            return total;
        };
        this.getData = function() {
            var businessCategoryCount = 0;
            this.flights.forEach(function(flight) {
                flight.passengers.forEach(function(passenger) {
                    if (passenger.seat.category === "b") {
                        businessCategoryCount++;
                    };
                });
            });
            var airportData = "Airport: " + this.name + ", total passengers: " + this.getTotalPassengers() + "\nTotal business category passengers: " + businessCategoryCount + "\n";
            this.flights.forEach(function(flight) {
                airportData += flight.getData();
            });
            return airportData;
        };
    };

    function createFlight(relation, date) {
        return new Flight(relation, date);
    };

    function createPassenger(name, surname, seatNumber, category) {
        var person = new Person(name, surname);
        var seat = new Seat(seatNumber, category);
        return new Passenger(person, seat);
    };

    try {
        var airport = new Airport();

        var flight1 = createFlight("Belgrade - New York", "Oct 25 2017");
        var flight2 = createFlight("Barcelona - Belgrade", "Nov 11 2017");

        var passenger1 = createPassenger("John", "Snow", 1, "b");
        var passenger2 = createPassenger("Cersei", "Lannister", 2, "b");
        var passenger3 = createPassenger("Daenerys", "Targaryen", 14);
        var passenger4 = createPassenger("Tyrion", "Lannister");

        flight1.addPassenger(passenger1);
        flight1.addPassenger(passenger2);
        flight2.addPassenger(passenger3);
        flight2.addPassenger(passenger4);

        airport.addFlight(flight1);
        airport.addFlight(flight2);

        console.log(airport.getData());
        
    } catch(error) {
        console.log(error.message)
    };
})();