"use strict";

(function() {
    const Continent = {
        ASIA: "AS",
        EUROPE: "EU",
        AFRICA: "AF",
        SOUTH_AMERICA: "SA",
        NORTH_AMERICA: "NA",
        AUSTRALIA: "AU",
    };

    class Country {
        constructor(name, odds, continent) {
            if(!name || !odds || !continent) {
                throw new Error("Please fill in valid data")
            };
            this.name = name;
            this.odds = odds;
            this.continent = continent;
        };
    };
  
    class Person {
        constructor(name, surname, dob) {
            if(!name || !surname || !dob) {
                throw new Error("Please provide your info")
            };
            this.name = name;
            this.surname = surname;
            this.dob = new Date(dob);
        };
        
        getFullNameAndDob() {
            var dobString = this.dob.toLocaleDateString("en-US", {day: "2-digit", month: "2-digit", year: "2-digit"});
            return this.name + " " + this.surname + " (" + dobString + ")";
        };
    };
  
    class Player extends Person {
        constructor(name, surname, dob, betAmount, country) {
            super(name, surname, dob);
            if(isNaN(betAmount)) {
                throw new Error("Invalid amount")
            };
            if(!(country instanceof Country)) {
                throw new Error("Invalid country input")
            };
            this.betAmount = betAmount;
            this.country = country;
        };
        
        getPlayerInfo() {
            var expectedWinAmount = this.betAmount * this.country.odds;
            var age = new Date().getFullYear() - this.dob.getFullYear();
            return this.country.name + ", " + expectedWinAmount.toFixed(2) + " eur, " + this.name + " " + this.surname + ", " + age + " years";
        };
    };
      
  
    class Address {
        constructor(country, city, postalCode, street, number) {
            this.country = country;
            this.city = city;
            this.postalCode = postalCode;
            this.street = street;
            this.number = number;
        };
        
        getFormattedAddress() {
            return this.street + " " + this.number + ", " + this.postalCode + " " + this.city + ", " + this.country;
        };
    };
  
    class BettingPlace extends Address {
        constructor(country, city, postalCode, street, number) {
            super(country, city, postalCode, street, number);
            this.players = [];
        };
        
        getPlaceInfo() {
            var street = this.street;
            var postalCode = this.postalCode;
            var city = this.city;
            var totalBetAmount = 0;
            for (var i = 0; i < this.players.length; i++) {
                var player = this.players[i];
                var expectedWinAmount = player.betAmount * player.country.odds;
                totalBetAmount += expectedWinAmount;
            }
            return street + ", " + postalCode + " " + city + ", sum of all bets: " + totalBetAmount + "eur";
        };

        addPlayer(player) {
            if(!(player instanceof Player)) {
                throw new Error("Invalid player input");
            };
        this.players.push(player);
        };
    };
  
    class BettingHouse {
        constructor(competition) {
            this.competition = competition;
            this.bettingPlaces = [];
            this.numberOfPlayers = 0;
        };
        
        addBettingPlace(bettingPlace) {
            if(!(bettingPlace instanceof BettingPlace)) {
                throw new Error("Invalid place input")
            };
            this.bettingPlaces.push(bettingPlace);
        };
        
        countTotalNumberOfPlayers() {
            this.numberOfPlayers = 0;
            for (var i = 0; i < this.bettingPlaces.length; i++) {
                this.numberOfPlayers += this.bettingPlaces[i].players.length;
            }
            return this.numberOfPlayers;
        };
        
        displayBettingHouseData() {
            console.log(this.competition + ", " + this.bettingPlaces.length + " betting places, " + this.countTotalNumberOfPlayers() + " bets");
            for (var i = 0; i < this.bettingPlaces.length; i++) {
                var bettingPlace = this.bettingPlaces[i];
                console.log("\t" + bettingPlace.getPlaceInfo());
                for (var j = 0; j < bettingPlace.players.length; j++) {
                    var player = bettingPlace.players[j];
                    console.log("\t\t" + player.getPlayerInfo());
                };
            };
            var betsOnCountry = {};
            for (var i = 0; i < this.bettingPlaces.length; i++) {
                var bettingPlace = this.bettingPlaces[i];
                for (var j = 0; j < bettingPlace.players.length; j++) {
                    var player = bettingPlace.players[j];
                    if (betsOnCountry[player.country.name]) {
                        betsOnCountry[player.country.name]++;
                    } else {
                        betsOnCountry[player.country.name] = 1;
                    };
                };
            };
            var maxBets = 0;
            var countryWithMostBets;
            for (var country in betsOnCountry) {
                if (betsOnCountry[country] > maxBets) {
                    maxBets = betsOnCountry[country];
                    countryWithMostBets = country;
                };
            };
            return "There are " + maxBets + " bets on " + countryWithMostBets;
        };
    };

    function createPlayer(name, surname, dob, betAmount, countryName, countryOdds, countryContinent) {
        var country = new Country(countryName, countryOdds, countryContinent);
        return new Player(name, surname, dob, betAmount, country);
    };

    function createBettingPlace(country, city, postalCode, street, number) {
        return new BettingPlace(country, city, postalCode, street, number);
    };

    try {
        var player1 = createPlayer("Alfred", "Quack", "02/01/1976", 500, "Switzerland", 3, Continent.EUROPE);
        var player2 = createPlayer("Edward", "Scissorhands", "10/10/1970", 300, "Switzerland", 2, Continent.EUROPE);
        var player3 = createPlayer("Betty", "White", "02/08/1920", 400, "Netherlands", 11, Continent.EUROPE);
        var player4 = createPlayer("Priscilla", "Presley", "12/05/1945", 200, "USA", 4, Continent.NORTH_AMERICA);
        
        var place1 = createBettingPlace("Serbia", "Belgrade", 11070, "Gramsijeva", 2);
        var place2 = createBettingPlace("USA", "New York", 10018, "Times Square", 454);

        place1.addPlayer(player1);
        place1.addPlayer(player2);
        place2.addPlayer(player3);
        place2.addPlayer(player4);

        var house = new BettingHouse("Super Bowl");

        house.addBettingPlace(place1);
        house.addBettingPlace(place2);

        console.log(house.displayBettingHouseData());   

    } catch(error) {
        console.log(error.message);
    };
})();
  