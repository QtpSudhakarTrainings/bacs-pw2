//Variable Declaration

// By default variable declaring is optional
// Declaring variable is a standard practice
// let is used to declare variables
// "use strict" is used to enforce strict mode in JavaScript
// "use strict";

let x = 10 //number
let y = 20 //number
let z = x + y; // number
console.log(z);
let sudhakar = "Hello World"; // string

console.log(sudhakar);

let isElementExist = false; // boolean

console.log("typeof isElementExist:", typeof isElementExist);
console.log("typeof z:", typeof z);
console.log("typeof sudhakar:", typeof sudhakar);

let myVariable; // undefined
console.log("typeof myVariable:", typeof myVariable);
// When a variable is declared but not initialized, its type is undefined

let users = ["mahesh", "sudhakar"]; // array of strings
console.log("typeof users:", typeof users);

//Storing multiple values in a single variable using an index
console.log("First user:", users[0]);
console.log("Second user:", users[1]);

let userData = { // Object datatype
    name: "mahesh",
    age: 30,
    isAdmin: true
}; // object
console.log("typeof userData:", typeof userData);
console.log("User name:", userData.name);
console.log("User age:", userData.age);
console.log("Is user admin:", userData.isAdmin);
console.log(userData["name"]);
console.log(userData["age"]);
console.log(userData["isAdmin"]);



// Array, Objects

let tool1Data = {
    name: "selenium",
    version: 4.5,
    languages: ["java","js","c#","python","ruby"]
}
let tool2Data = {
    name: "playwright",
    version: 1.63,
    languages: ["java","js","c#","python"]
}

let toolData={
    tool1: tool1Data,
    tool2: tool2Data
}


//Number
// String
// Boolean
// Undefined
// object (array, object)
// null

let db = null;
console.log(typeof null)

//Symbol
//BigInt