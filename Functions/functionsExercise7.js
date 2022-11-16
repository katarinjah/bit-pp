/* 1. Why pay a fortune teller when you can just program your fortune yourself?
Write a function named tellFortune that:
takes 4 arguments: number of children, partner's name, geographic location, job title.
outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
Call that function 3 times with 3 different values for the arguments. */

function tellFortune(children, partner, location, job) {
    return "You will be a " + job + " in " + location + ", and married to " + partner + " with " + children + " kids."
}

var q = tellFortune(0, "Nikola", "Belgrade", "programmer");
var t = tellFortune(17, "Jerry", "New York", "translator");
var z = tellFortune(9, "Billy", "Amsterdam", "cleaning lady");
console.log(q);
console.log(t);
console.log(z)


/* 2. You know how old your dog is in human years, but what about dog years? Calculate it!
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
Call the function three times with different sets of values.
Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years. */

function calculateDogAge(age) {
    var result = age * 7;
    return "Your doggie is " + result + " years old in dog years!"
}

var h = calculateDogAge(12);
console.log(h)


/* 3. Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age).
outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
Call that function three times, passing in different values each time.
Bonus: Accept floating point values for amount per day, and round the result to a round number. */

function calculateSupply(age, amount) {
    var oldage = 120, result = 0;
    result = (amount * 365) * (oldage - age);
    return "You will need " + result + " snacks to last you until the ripe old age of " + oldage;
}

var e = calculateSupply(38, 2);
var y = calculateSupply(70, 1);
var r = calculateSupply(50, 3);
console.log(e);
console.log(y);
console.log(r)


/* 4. It's hot out! Let's make a converter based on the steps here.
Create a function called celsiusToFahrenheit:
Store a celsius temperature into a variable.
Convert it to fahrenheit and output "NN°C is NN°F".
Create a function called fahrenheitToCelsius:
Now store a fahrenheit temperature into a variable.
Convert it to celsius and output "NN°F is NN°C." */

function celsiusToFahrenheit(tempC) {
    var result = (tempC * 9/5) + 32;
    var output = tempC + "°C is " + result + "°F";
    return output;
}

var o = celsiusToFahrenheit(26);
console.log(o)


function fahrenheitToCelsius(tempF) {
    var result = (tempF - 32) * 5/9;
    var output = tempF + "°F is " + result + "°C";
    return output;
}

var g = fahrenheitToCelsius(140);
console.log(g)