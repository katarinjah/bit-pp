/* 1. Write a function that creates an object that represents a project. Each project is described by: description,  programming language, git repository, boolean status that says if the project is in development or not. Add a method that prints out the project's repository,  a method that checks if the project is written in JavaScript as well as a method that checks if the project is in development or not. */

function Project(description, language, repository, status) {
    this.description = description;
    this.language = language;
    this.repository = repository;
    this.status = status;
    this.repoInfo = function() {
                    console.log(this.repository);
                };
    this.checkLanguage = function() {
        if (this.language === "JavaScript") {
            return true;
        } else {
            return false;
        }
    }
    this.checkStatus = function() {
                    return this.status;
                }
}

var output = new Project("Environment Quality Improval", "PHP", "fsdfdf.github.com", true);

console.log(output);

output.repoInfo();

console.log(output.checkLanguage());

console.log(output.checkStatus());


/* 2. Write a function that creates an object that represents a culinary recipe. Each recipe is described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients, preparing time, preparing instruction. 
Add a method that prints out all the ingredients necessary for the meal preparation. 
Add a method that checks if a meal can be prepared in under 15 minutes. 
Add a method that changes the type of cuisine to the given value. 
Add a method that delete a given ingredient from the list of ingredients. */

function Recipe(name, cuisine, complexity, ingredients, time, instructions) {
        this.name = name;
        this.cuisine = cuisine;
        this.complexity = complexity;
        this.ingredients = ingredients;
        this.time = time;
        this.prepInstructions = instructions;
        this.listIngredients = function() {
            console.log(this.ingredients);
        },
        this.prepTime = function() {
            return this.time < 15;
        },
        this.newCuisine = function(newType) {
            this.cuisine = newType;
            console.log(this.cuisine);
        },
        this.newIngredients = function(ingredient) {
            var newList = [];
            for (var i = 0; i < this.ingredients.length; i++) {
                if (this.ingredients[i] !== ingredient) {
                    newList[newList.length] = this.ingredients[i];
                }
            }
            this.ingredients = newList;
            console.log(this.ingredients);
        }     
    };

var meal = new Recipe("Sarma", "Traditional", 3, ["Sauerkraut", "Minced meat", "Onions", "Rice"], 240, "Fry the meat with onions. Add rice. Stuff and roll each cabbage leaf. Let simmer for 4 hours.");

console.log(meal);

meal.listIngredients();
console.log(meal.prepTime());
meal.newCuisine("Oldschool");
meal.newIngredients("Onions");


/* 3. Create an object using a constructor function. */

function Student(firstname, lastname, age, language, major) {
    this.name = {
        firstname: firstname,
        lastname: lastname,
    }
    this.age = age;
    this.language = language;
    this.major = major;
    this.checkGrade = function() {
        var grade = "";
        if (this.age < 20) {
            return "Junior";
        } else {
            return "Senior"
        }
    };
    this.checkGroup = function() {
        var group = "";
        if (this.major === "Language") {
            return "Linguistic Studies";
        } else if (this.major === "Mechanics") {
            return "Engineering Studies";
        } else {
            return "Other";
        }
    }
    this.checkTeacher = function() {
        var teacher = "";
        if (this.language === "Espanol") {
            teacher = "Mrs. Garcia";
        } else if (this.language === "English") {
            teacher = "Mr. Edwards";
        }
        console.log("Your teacher this semester wil be " + teacher);
    }
}

var student1 = new Student("John", "Malkovich", 24, "English", "Mechanics");
console.log(student1);

console.log(student1.checkGrade());
console.log(student1.checkGroup());
student1.checkTeacher();