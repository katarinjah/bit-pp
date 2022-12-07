"use strict";

/* 1. Create an object that represents your favourite coffee. Please include coffee name,
strength, flavour, milk, sugar, … everything you like! */

var favCoffee = {
    name: "Latte",
    strength: "Medium",
    flavour: "Mocha",
    milk: "Soy Milk",
    sugar: "Brown Sugar"
}


// 2. Create an object that represents your favourite movie. Please include title, actors, director, genre, popularity.

var favMovie = {
    title: "Fear and Loathing in Las Vegas",
    actors: {lead1: "Johnny Depp", lead2: "Benicio Del Toro"},
    director: "Terry Gilliam",
    genre: {genre1: "Comedy", genre2: "Adventure", genre3: "Drama"},
    popularity: "7,5 out of 10",
}


/* 3. Write a function that creates an object that represents a project. Each project is described by: description,  programming language, git repository, boolean status that says if the project is in development or not. Add a method that prints out the project's repository,  a method that checks if the project is written in JavaScript as well as a method that checks if the project is in development or not. */

var project = function (desc, lang, git, dev) {
    return {
    description: desc,
    programmingLanguage: lang,
    gitRepo: git,
    status: dev,
    repoInfo: function() {
                    console.log(this.gitRepo);
                },
    checkLanguage: function() {
                if (this.programmingLanguage === "JavaScript") {
                    console.log("Written in JS");
                    } else {
                        console.log("Not written in JS");
                    }
                },
    checkStatus: function() {
                    if (this.status === true) {
                        console.log("Project is in development");
                    } else {
                        console.log("Project is not in development");
                    }
                }
    }
};

var output = project("Environment Quality Improval", "PHP", "fsdfdf.github.com", true);

console.log(output);

output.repoInfo();
output.checkLanguage();
output.checkStatus();


/* 4. Write a function that creates an object that represents a culinary recipe. Each recipe is described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients, preparing time, preparing instruction. 
Add a method that prints out all the ingredients necessary for the meal preparation. 
Add a method that checks if a meal can be prepared in under 15 minutes. 
Add a method that changes the type of cuisine to the given value. 
Add a method that delete a given ingredient from the list of ingredients. */

function createRecipe(dish, type, difficulty, ingredients, time, instructions) {
    return {  
        dishName: dish,
        typeOfCuisine: type,
        complexity: difficulty,
        ingredientList: ingredients,
        prepTime: time,
        prepInstructions: instructions,
        necessaryIngredients: function() {
            console.log(this.ingredientList);
        },
        preparationTime: function() {
            if (time < 0.25) {
                console.log("This meal can be prepared in under 15 minutes.");
            } else {
                console.log("This meal requires more than 15 minutes preparation time.");
            }
        },
        newCuisine: function(newType) {
            type = newType;
            console.log(type);
        },
        newIngredients: function(ingredient) {
            var newList = [];
            for (var i = 0; i < this.ingredientList.length; i++) {
                if (this.ingredientList[i] !== ingredient) {
                    newList[newList.length] = this.ingredientList[i];
                }
            }
            console.log(newList);
        }     
    }
};

var meal = createRecipe("Sarma", "Traditional", 3, ["Sauerkraut", "Minced meat", "Onions", "Rice"], 4, "Fry the meat with onions. Add rice. Stuff and roll each cabbage leaf. Let simmer for 4 hours.");

console.log(meal);

meal.necessaryIngredients();
meal.preparationTime();
meal.newCuisine("Oldschool");
meal.newIngredients("Onions");

