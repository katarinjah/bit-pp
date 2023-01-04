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

    function Country(name, odds, continent) {
        if(!name || !odds || !continent) {
            throw new Error("Please fill in valid data")
        };
        this.name = name;
        this.odds = odds;
        this.continent = continent;
    };
  
    function Person(name, surname, dob) {
        if(!name || !surname || !dob) {
            throw new Error("Please provide your info")
        };
        this.name = name;
        this.surname = surname;
        this.dob = dob;
        this.getFullNameAndDob = function() {
            var dobString = this.dob.toLocaleDateString("en-US", {day: "2-digit", month: "2-digit", year: "2-digit"});
            return this.name + " " + this.surname + " (" + dobString + ")";
        };
    };
  
    function Player(person, betAmount, country) {
        if(isNaN(betAmount)) {
            throw new Error("Invalid amount")
        };
        if(!(person instanceof Person)) {
            throw new Error("Invalid person input")
        };
        if(!(country instanceof Country)) {
            throw new Error("Invalid country input")
        };
        this.person = person;
        this.betAmount = betAmount;
        this.country = country;
        this.getPlayerInfo = function() {
            var expectedWinAmount = this.betAmount * this.country.odds;
            var age = new Date().getFullYear() - this.person.dob.getFullYear();
            return this.country.name + ", " + expectedWinAmount.toFixed(2) + " eur, " + this.person.name + " " + this.person.surname + ", " + age + " years";
        };
    };
      
  
    function Address(country, city, postalCode, street, number) {
        this.country = country;
        this.city = city;
        this.postalCode = postalCode;
        this.street = street;
        this.number = number;
        this.getFormattedAddress = function() {
            return this.street + " " + this.number + ", " + this.postalCode + " " + this.city + ", " + this.country;
        };
    };
  
    function BettingPlace(address) {
        if(!(address instanceof Address)) {
            throw new Error("Invalid address input")
        };
        this.address = address;
        this.players = [];
        this.getPlaceInfo = function() {
            var street = this.address.street;
            var postalCode = this.address.postalCode;
            var city = this.address.city;
            var totalBetAmount = 0;
            for (var i = 0; i < this.players.length; i++) {
                var player = this.players[i];
                var expectedWinAmount = player.betAmount * player.country.odds;
                totalBetAmount += expectedWinAmount;
            }
            return street + ", " + postalCode + " " + city + ", sum of all bets: " + totalBetAmount + "eur";
        };
        this.addPlayer = function(player) {
            if(!(player instanceof Player)) {
                throw new Error("Invalid player input");
            };
        this.players.push(player);
        };
    };
  
    function BettingHouse(competition) {
        this.competition = competition;
        this.bettingPlaces = [];
        this.numberOfPlayers = 0;
        this.addBettingPlace = function(bettingPlace) {
            if(!(bettingPlace instanceof BettingPlace)) {
                throw new Error("Invalid place input")
            };
            this.bettingPlaces.push(bettingPlace);
        };
        this.countTotalNumberOfPlayers = function() {
            this.numberOfPlayers = 0;
            for (var i = 0; i < this.bettingPlaces.length; i++) {
                this.numberOfPlayers += this.bettingPlaces[i].players.length;
            }
            return this.numberOfPlayers;
        };
        this.displayBettingHouseData = function() {
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
        var person = new Person(name, surname, new Date(dob));
        var country = new Country(countryName, countryOdds, countryContinent);
        return new Player(person, betAmount, country);
    };

    function createBettingPlace(country, city, postalCode, street, number) {
        var address = new Address(country, city, postalCode, street, number);
        return new BettingPlace(address);
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
  