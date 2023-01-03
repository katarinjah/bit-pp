"use strict";

(function() {

    const Continent = {
        EUROPE: "EU",
        ASIA: "AS",
        AFRICA: "AF",
        SOUTH_AMERICA: "SA",
        NORTH_AMERICA: "NA",
        AUSTRALIA: "AU"
    }

    function Country(name, odds, continent) {
        if(!name || !odds || !continent) {
            throw new Error("Please fill in valid data")
        }
        this.name = name;
        this.odds = odds;
        this.continent = continent;
    }

    function Person(name, surname, birthdate) {
        if(!name || !surname || !birthdate) {
            throw new Error("Please provide your info")
        }
        this.name = name;
        this.surname = surname;
        this.birthdate = new Date(birthdate);
        this.getData = function() {
            return (this.name + " " + this.surname + " " + this.birthdate);
        }
    }

    function Player(person, betAmount, country) {
        if(isNaN(betAmount)) {
            throw new Error("Invalid amount")
        }
        if(!(person instanceof Person)) {
            throw new Error("Invalid person input")
        };
        this.person = person;
        this.betAmount = betAmount;
        this.country = country;  
        this.winAmount = this.betAmount * this.country.odds; 
        this.getBet = function() {
            return (this.country + ", " + this.winAmount + " eur, " + this.person.name + " " + this.person.surname + (new Date() - this.person.birthdate) + " years");
        }
    }

    function Address(country, city, postal, streetName, streetNum) {
        this.country = country;
        this.city = city;
        this.postal = postal;
        this.streetName = streetName;
        this.streetNum = streetNum;
        this.getAddress = function() {
            return (this.streetName + " " + this.streetNum + ", " + this.postal + " " + this.city + ", " + this.country);
        }
    }

    function BettingPlace(address, playerList) {
        this.address = "";
        this.playerList = [];
        this.getBetSum = function() {
            var total = 0;
            this.playerList.forEach(function(betAmount) {
                total += Player.betAmount;
                return total;
            })
        }
        this.getLocation = function() {
            return (Address.streetname + "," + Address.postal + " " + Address.city + ", sum of all bets: " + this.getBetSum());
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
        this.addBettingPlaces = function(place) {
            if(!(place instanceof BettingPlace)) {
                throw new Error("Invalid place input")
            }
            this.bettingPlaces.push(place);
        };
        this.getTotalNumberOfBets = function() {
            return this.bettingPlaces.reduce(function(total, place) {
              return total + place.playerList.reduce(function(total, player) {
                return total + player.betAmount;
              }, 0);
            }, 0);
        };
        var place = new BettingPlace;
        var playa = new Player;
        this.getData = function() {
            return (this.competition + ", " + this.bettingPlaces.length + ", " + this.getTotalNumberOfBets() + "\n\t" + place.getLocation() + "\n\t" + playa.getBet());
        };
    };

    function createPlayer(person, betAmount, country) {
        return new Player(person, betAmount, country);
    }

    function createBettingPlace(address, playerList) {
        return new BettingPlace(address, playerList);
    }

    try {

        var person1 = new Person("Alfred", "Quack", "02/01/1976");
        var person2 = new Person("Edward", "Scissorhands", "10/10/1970");
        var person3 = new Person("Betty", "White", "02/08/1920");
        var person4 = new Person("Priscilla", "Presley", "12/05/1945");

        var country1 = new Country("Serbia", 3, Continent.EUROPE);
        var country2 = new Country("Uzbekistan", 2, Continent.EUROPE);
        var country3 = new Country("Netherlands", 11, Continent.EUROPE);
        var country4 = new Country("USA", 4, Continent.NORTH_AMERICA);
       
        var player1 = createPlayer(person1, 500, country1);
        var player2 = createPlayer(person2, 300, country2);
        var player3 = createPlayer(person3, 400, country3);
        var player4 = createPlayer(person4, 200, country4);

        var address1 = new Address("Serbia", "Belgrade", 11070, "Gramsijeva", 2);
        var address2 = new Address("USA", "New York", 10018, "Times Square", 454)
        
        var place1 = createBettingPlace(address1);
        var place2 = createBettingPlace(address2);

        var house = new BettingHouse("Super Bowl");

        console.log(house.getData());   

    } catch(error) {
        console.log(error.message);
    }

}) ()