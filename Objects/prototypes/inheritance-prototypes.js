"use strict";

// Task 1: Employees and Managers:

function Person(name, surname) {
    this.name = name;
    this.surname = surname;
};

Person.prototype.getFullName = function() {
    console.log(this.name + " " + this.surname)
};

var person = new Person("Zika", "Zikic");
//console.log(person);
//person.getFullName();

function Employee(name, surname, job, salary) {
    Person.call(this, name, surname);
    this.job = job;
    this.salary = salary; 
};

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.getData = function() {
    console.log(this.name + " " + this.surname + ", " + this.salary)
}

Employee.prototype.getSalary = function() {
    console.log(this.salary);
}

Employee.prototype.increaseSalary = function() {
    this.salary = this.salary * 1.1;
    console.log(this.salary);
};

var employee = new Employee("Pera", "Peric", "Programmer", 2500);
//console.log(employee);
//employee.getData();
//employee.getSalary();
//employee.increaseSalary();


function Developer(name, surname, job, salary, specialization) {
    Employee.call(this, name, surname, job, salary);
    this.specialization = specialization;
};

Developer.prototype = Object.create(Employee.prototype);
Developer.prototype.constructor = Developer;

Developer.prototype.getSpecialization = function() {
    console.log(this.specialization)
};

var developer = new Developer("Laza", "Lazic", "Programmer", 2200, "Frontend");
//console.log(developer);
//developer.getSpecialization();

function Manager(name, surname, job, salary, specialization, department) {
    Developer.call(this, name, surname, job, salary, specialization);
    this.department = department;
};

Manager.prototype = Object.create(Developer.prototype);
Manager.prototype.constructor = Manager;

Manager.prototype.getDepartment = function() {
    console.log(this.department)
};

Manager.prototype.changeDepartment = function(newDept) {
    this.department = newDept;
};

var manager = new Manager("Pera", "Peric", "Programmer", 10000, "WebDev", "Backend");
//console.log(manager);
//manager.getDepartment();
//manager.changeDepartment("Frontend");
//console.log(manager);


// Task 2: Applications:

function App(name, licence, stars) {
    this.name = name;
    this.licence = licence;
    this.stars = stars;
};

App.prototype.isCCLicence = function() {
    if(this.licence === "CC" || "Creative Commons") {
        return true;
    } else {
        return false;
    };
};

App.prototype.like = function() {
    this.stars += 1;
    return this.stars;
};

App.prototype.showStars = function() {
    console.log(this.stars + " star rated");
};

var app = new App("SuperApp", "CC", 3);
//console.log(app);
//console.log(app.isCCLicence());
//console.log(app.like());
//app.showStars();


function WebApp(name, url, technologies, licence, stars) {
    App.call(this, name, licence, stars);
    this.url = url;
    this.technologies = technologies;
};

WebApp.prototype = Object.create(App.prototype);
WebApp.prototype.constructor = WebApp;

WebApp.prototype.getData = function() {
    console.log(this.name + "\n" + this.url + "\n" + this.technologies + "\n" + this.licence + "\n" + this.stars)
};

WebApp.prototype.reactBased = function() {
    if (this.technologies.includes("React")) {
        return true;
    } else {
        return false;
    };
};

var webApp = new WebApp("AwesomeApp", "https://blahblah.com", ["Angular", "React", "Vue"], "BB", 4);
//console.log(webApp);
//webApp.getData();
//console.log(webApp.reactBased());
//console.log(webApp.like());


function MobileApp(name, platforms, licence, stars) {
    App.call(this, name, licence, stars);
    this.platforms = platforms;
};

MobileApp.prototype = Object.create(App.prototype);
MobileApp.prototype.constructor = MobileApp;

MobileApp.prototype.getData = function() {
    console.log(this.name + "\n" + this.platforms + "\n" + this.licence + "\n" + this.stars)
};

MobileApp.prototype.forAndroid = function() {
    if (this.platforms.includes("Android")) {
        return true;
    } else {
        return false;
    };
};

var mobileApp = new MobileApp("GreatApp", ["iOS", "Android"], "cclicence", 4);
//console.log(mobileApp);
//mobileApp.getData();
//console.log(mobileApp.forAndroid());
//console.log(mobileApp.like());
//mobileApp.showStars();

