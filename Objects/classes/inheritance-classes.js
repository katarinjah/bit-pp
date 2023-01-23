"use strict";

// Task 1: Employees and Managers

class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    getFullName = function() {
        console.log(this.name + " " + this.surname);
    }
}

var person = new Person("Zika", "Zikic");
//console.log(person);
//person.getFullName();


class Employee extends Person {
    constructor(name, surname, job, salary) {
        super(name, surname);
        this.job = job;
        this.salary = salary; 
    }

    getData = function() {
        console.log(this.name + " " + this.surname + ", " + this.salary)
    }

    getSalary = function() {
        console.log(this.salary);
    }

    increaseSalary = function() {
        this.salary = this.salary * 1.1;
        console.log(this.salary);
    }
}

var employee = new Employee("Pera", "Peric", "Programmer", 2500);
//console.log(employee);
//employee.getData();
//employee.getSalary();
//employee.increaseSalary();


class Developer extends Employee {
    constructor(name, surname, job, salary, specialization) {
        super(name, surname, job, salary);
        this.specialization = specialization;
    }

    getSpecialization = function() {
        console.log(this.specialization)
    }
}

var developer = new Developer("Laza", "Lazic", "Programmer", 2600, "Frontend");
//console.log(developer);
//developer.getSpecialization();


class Manager extends Developer {
    constructor(name, surname, job, salary, specialization, department) {
        super(name, surname, job, salary, specialization);
        this.department = department;
    }

    getDepartment = function() {
        console.log(this.department)
    }

    changeDepartment = function(newDept) {
        this.department = newDept;
        console.log(this.department);
    }
}

var manager = new Manager("Pera", "Peric", "Programmer", 3000, "Backend", "WebDev");
//console.log(manager);
//manager.getDepartment();
//manager.changeDepartment("Frontend");



// Task 2: Applications

class App {
    constructor(name, licence, stars) {
        this.name = name;
        this.licence = licence;
        this.stars = stars;
    }

    isCCLicence = function() {
        if(this.licence === "CC" || this.licence === "Creative Commons") {
            return true;
        } else {
            return false;
        }
    }

    like = function() {
        return(this.stars += 1);
    }

    showStars = function() {
        console.log(this.stars + " star rated");
    }
}

var app = new App("SuperApp", "CC", 3);
//console.log(app);
//console.log(app.isCCLicence());
//console.log(app.like());
//app.showStars();


class WebApp extends App {
    constructor(name, url, technologies, licence, stars) {
        super(name, licence, stars);
        this.url = url;
        this.technologies = technologies;
    }

    getData = function() {
        console.log(this.name + "\n" + this.url + "\n" + this.technologies + "\n" + this.licence + "\n" + this.stars)
    }

    reactBased = function() {
        if (this.technologies.includes("React")) {
            return true;
        } else {
            return false;
        }
    }
}

var webApp = new WebApp("AwesomeApp", "https://blahblah.com", ["Angular", "React", "Vue"], "BB", 4);
//console.log(webApp);
//webApp.getData();
//console.log(webApp.reactBased());
//console.log(webApp.isCCLicence());
//console.log(webApp.like());
//webApp.showStars();


class MobileApp extends App {
    constructor(name, platforms, licence, stars) {
        super(name, licence, stars);
        this.platforms = platforms;
    }

    getData = function() {
        console.log(this.name + "\n" + this.platforms + "\n" + this.licence + "\n" + this.stars)
    }

    forAndroid = function() {
        if (this.platforms.includes("Android")) {
            return true;
        } else {
            return false;
        }
    }
}

var mobileApp = new MobileApp("GreatApp", ["iOS", "Android"], "Creative Commons", 4);
//console.log(mobileApp);
//mobileApp.getData();
//console.log(mobileApp.forAndroid());
//console.log(mobileApp.isCCLicence());
//console.log(mobileApp.like());
//mobileApp.showStars();



