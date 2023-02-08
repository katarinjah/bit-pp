"use strict";

var dataModule = (function () {

    class Person {
        constructor(name) {
            this.name = name;
            
            return {
                name: name
            };
        };
    };

    class Seat {
        constructor(seatNumber, category) {
            this.seatNumber = seatNumber || Math.floor(Math.random() * 90) + 10;
            this.category = category || "Economy";
        };
        
        getData() {
            return (this.seatNumber + ", " + this.category.charAt(0).toUpperCase() + this.category.slice(1) + ",");
        };
    };

    class Passenger extends Seat {
        constructor(name, seatNumber, category) {
            super(seatNumber, category);
            this.person = new Person(name);
            if (this.category !== "Economy") {
                this.category = "Business";
            };
        };

        getData() { 
            return (this.seatNumber + ", " + this.category.charAt(0).toUpperCase() + this.category.slice(1) + ", " + this.person.getData());
        };
    };

    var createPassenger = function(name, seatNumber, category) {
        return new Passenger(name, seatNumber, category);
    };

    class Flight {
        constructor(relation, date) {
            this.relation = relation;
            this.date = new Date(date);
            this.passengers = [];
        };
        
        addPassenger(passenger) {
            if (!(passenger instanceof Passenger)) {
                throw new Error("Invalid passenger input");
            };
            if (this.passengers.length > 100) {
                throw new Error("Flight is full");
            };
            for (var i = 0; i < this.passengers.length; i++) {
                if (this.passengers[i].seatNumber === passenger.seatNumber) {
                    throw new Error("Seat is already taken");
                };
                if (this.passengers[i].person.name === passenger.person.name && this.passengers[i].person.surname === passenger.person.surname) {
                    this.passengers[i] = passenger;
                    return passenger;
                };
            };
            this.passengers.push(passenger);
        };
        
        getData() {
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
                flightData += "\t\t" + " " + passenger.getData() + " " + passenger.person.name + " " + passenger.person.surname + "\n";
            });
            var businessCategoryCount = 0;
            this.passengers.forEach(function(passenger) {
                if (passenger.category === "business") {
                    businessCategoryCount++;
                };
            });
            flightData += "\t\tNumber of business category passengers on this flight: " + businessCategoryCount + "\n";
            return flightData;
        };
    };

    var createFlight = function(relation, date) {
        return new Flight(relation, date);
    };

    class Airport {
        constructor() {
            this.flights = [];
        };
        
        addFlight(flight) {
            if (!(flight instanceof Flight)) {
                throw new Error("Invalid flight input");
            };
            this.flights.push(flight);
        };
        
        getTotalPassengers() {
            var total = 0;
            this.flights.forEach(function(flight) {
            total += flight.passengers.length;
            });
            return total;
        };
        
        getData() {
            var businessCategoryCount = 0;
            this.flights.forEach(function(flight) {
                flight.passengers.forEach(function(passenger) {
                    if (passenger.category === "Business") {
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

    return {
        createPassenger: createPassenger,
        createFlight: createFlight,
    };

})()