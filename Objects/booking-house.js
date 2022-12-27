"use strict";

(function() {

    function Country(name, odds, continent) {
        if(!name || !odds || !continent) {
            throw new Error("Please fill in valid data")
        }
        this.name = name;
        this.odds = odds;
        this.continent = {
            Europe: "EU", 
            Asia: "AS",
            Africa: "AF",
            South_America: "SA",
            North_America: "NA",
            Australia: "AU"
        };
    }

    function Person(name, surname, birthdate) {
        if(!name || !surname || !birthdate) {
            throw new Error("Please provide your info")
        }
        this.name = name;
        this.surname = surname;
        this.birthdate = new Date(birthdate);
        this.getPerson = function() {
            return (this.name + " " + this.surname + " " + this.birthdate);
        }
    }

    function Player(person, betAmount, country) {
        if(isNaN(betAmount)) {
            throw new Error("Please fill in the correct amount")
        }
        this.person = new Person();
        this.betAmount = betAmount;
        this.country = new Country();  
        this.winAmount = this.betAmount * Country.odds; 
        this.getBet = function() {
            return (this.country + ", " + this.winAmount + " eur, " + Person.name + " " + Person.surname + (new Date() - this.birthdate) + " years");
        }
    }

    function Address(country, city, postal, streetName, streetNum) {
        this.country = country;
        this.city = city;
        this.postal = postal;
        this.streetName = streetName;
        this.streetNum = streetNum;
        this.getAddress = function() {
            return (this.streetname + " " + this.streetNum + ", " + this.postal + " " + this.city + ", " + this.country);
        }
    }

    function BettingPlace(address, playerList) {
        this.address = "";
        this.playerList = [];
        this.getLocation = function() {
            return (Address.streetname + "," + Address.postal + " " + Address.city + ", sum of all bets: ");
        }
        this.addPlayer = function(player) {
            if(!(player instanceof Player)) {
                throw new Error("Invalid player input");
            }
            this.playerList.push(player);
        }
    }

    function BettingHouse(competition, bettingPlaces, numOfPlayers) {
        this.competition = competition;
        this.bettingPlaces = [];
        this.numOfPlayers = numOfPlayers;
    }

    var countries = new Object.freeze(Country);

    function createPlayer(name, surname, birthdate) {
        return new Player(name, surname, birthdate);
    }

    function createBettingPlace(address, playerList) {
        return new BettingPlace(address, playerList);
    }

    try {
        var place;
    } catch(error) {
        console.log(error.message);
    }

}) ()