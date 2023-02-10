/* 1. Write a function that capitalizes the first letter of each string argument it receives.  
	Function arguments: ['hello', 'there', 'ES', 6]
	Output: ['Hello', 'There', 'ES'] */

const array = ['hello', 'there', 'ES', 6];

const capitalizeFirstLetter = (...array) => {
    return array.filter(array => typeof array === 'string').map(array => array.charAt(0).toUpperCase() + array.slice(1));
};

console.log(capitalizeFirstLetter('hello', 'there', 'ES', 6));


/* 2. Write a function that calculates sale tax that should be paid for the product of the given price. Use a constant to set a fixed value of the tax rate (i.e. 20% in Serbia). 
	Input: [{ name: “Banana”, price: 120 }, {name: “Orange”,  price: 100}]
	Output: [{ name: “Banana”, price: 144 }, { name: “Orange”,  price: 120 }] // product full price
	Output2: [ 24, 20 ] // tax only */

const products = [{ name: "Banana", price: 120 }, { name: "Orange", price: 100 }];
const taxRate = 0.2;

const calculateTax = array => {
    return array.map(item => {
        return {
          name: item.name,
          price: item.price * (1 + taxRate)
        };
    });
};
    
const calculateTaxOnly = array => {
    return array.map(item => item.price * taxRate);
};
    
console.log(calculateTax(products));
console.log(calculateTaxOnly(products));


/* 3. Write a function that increases each element of the given array by the given value. If the value is omitted, increase each element of the array by 1.  
	Input: [4, 6, 11, -9, 2.1], 2
	Output: [6, 8, 13, -7, 4.1] */

const arr = [4, 6, 11, -9, 2.1];

const increaseValue = (array, value = 1) => {
    return array.map(element => element + value);
};
      
console.log(increaseValue(arr, 2));
console.log(increaseValue(arr));


/* 4. Write a function that filters all even elements of the array.
	Input: [6, 11, 9, 0, 3]
	Output: [6, 0] */

const arr1 = [6, 11, 9, 0, 3];

const filterEven = array => {
    return array.filter(element => element % 2 === 0);
};

console.log(filterEven(arr1));


/* 5. Write a function that filters all the strings from the given array that contain substring JS or js.
	Input: ['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter']
	Output: ['babel.js, 'JS standard'] */

const arr2 = ['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter'];

const filterJS = array => {
    return array.filter(element => /(js|JS)/.test(element));
};

console.log(filterJS(arr2));
  

/* 6. Write a function that filters all integer numbers from the given array. 
Input: [1.6, 11.34, 9.23, 7, 3.11, 8]
	Output: [7, 8] */

const arr3 = [1.6, 11.34, 9.23, 7, 3.11, 8];

const filterIntegers = array => {
    return array.filter(element => Number.isInteger(element));
};
  
console.log(filterIntegers(arr3));


/* 7. Write a function that filters all integer arguments that contain digit 5.
	Function arguments: 23, 11.5, 9, 'abc', 45, 28, 553 
	Output: [45, 553] */

const arr4 = [23, 11.5, 9, 'abc', 45, 28, 553];

const filterDigit = array => {
    return array.filter(element => {
        if (Number.isInteger(element)) {
            return String(element).includes("5");
        };
    return false;
    });
};

console.log(filterDigit(arr4));


/* 8. Write a function that returns indexes of the elements greater than 10. 
	Input: [1.6, 11.34, 29.23, 7, 3.11, 18]
	Output: [1, 2, 5] */

const arr5 = [1.6, 11.34, 29.23, 7, 3.11, 18];

const filterOver10 = array => {
    const result = [];
    array.forEach((item, index) => {
        if (item > 10) {
            result.push(index);
        };
    });
    return result;
};

console.log(filterOver10(arr5));
  

/* 9. a. Create an array of persons. A person should be an object with name and age properties. 
    Experiment with enhanced object literals. 
    b. Write a function that prints out the names of persons older than 25. 
    c. Write a function that check if there is a person older than 40.
    d. Write a function that checks if all persons are older than 20. */

const persons = [
  { name: "John", age: 55 },
  { name: "Kat", age: 34 },
  { name: "Alex", age: 20 },
  { name: "Miranda", age: 27 }
];

function printOver25(persons) {
    persons.forEach(person => {
        if (person.age > 25) {
            console.log(person.name);
        };
    });
};

function checkIfAnyOver40(persons) {
    return persons.some(person => person.age > 40);
};

function checkIfAllOver20(persons) {
  return persons.every(person => person.age > 20);
};

printOver25(persons);
console.log(checkIfAnyOver40(persons));
console.log(checkIfAllOver20(persons));


/* 10. Write a function that checks if the given array is an array of positive integer values. 
	Input: [3, 11, 9, 5, 6]
	Output: yes

	Input: [3, -12, 4, 11]
	Output: no */

const arr6 = [3, 11, 9, 5, 6];
const arr7 = [3, -12, 4, 11];

function checkIfPositive(array) {
    if (array.every(val => Number.isInteger(val) && val > 0)) {
        return "yes";
    } else {
        return "no";
    };
};

console.log(checkIfPositive(arr6));
console.log(checkIfPositive(arr7));
 

/* 11. Write a function that calculates the product of the elements of the array. 
Input: [2, 8, 3]
Output:  48 */

const arr8 = [2, 8, 3];

function calculateProduct(array) {
    return array.reduce((acc, val) => acc * val, 1);
};
  
console.log(calculateProduct(arr8));


/* 12. Write a function that calculates the maximum of the given array. 
Input: [2, 7, 3, 8, 5.4] 
	Output: 8 */

const arr9 = [2, 7, 3, 8, 5.4];

const calculateMaximum = array => Math.max(...array);

console.log(calculateMaximum(arr9));
