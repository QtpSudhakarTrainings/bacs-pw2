//grammar : syntax
// This file will contain examples of basic JavaScript syntax.

// words : keywords
// Example of a keyword: let, const, if, else, for, while, function, return

// sentences : statements
// Example of a statement: let x = 10; if(x > 5){ console.log("x is greater than 5"); }

// paragraphs : blocks of code

// Single Line Comment
// Ctrl + / to toggle single line comment
// Select multiple lines and press Ctrl + / to toggle block comment
// Example of a block comment:

/*
   This is a block comment.
   It can span multiple lines.
*/

// By default semicolns optional
// you can use it for line break or write multiple statements on a single line.
// Example:
let a = 1; let b = 2; console.log(a + b);

// [] : Array
// {} : Object or block
// () : Parentheses, used for grouping expressions or function parameters

// "" : String
// '' : String
// `` : Template literal

let user = "John Doe"; // Example of a string assignment
let hotel = "Grand Hotel"; // Example of a string assignment for a hotel name
let welcomeMessage = `Welcome, ${user}! Enjoy your stay at ${hotel}.`; // Example of a template literal assignment

console.log(welcomeMessage); // Example of logging a message to the console

let anotherWelcome = "Welcome, " + user + "! Enjoy your stay at " + hotel + "."; // Example of string concatenation
console.log(anotherWelcome); // Example of logging the concatenated string to the console

// welcomeMessage is a template literal that includes the user's name and hotel name.
// anotherWelcome is a string created using concatenation that includes the user's name and hotel name.

// Operators
// Example of arithmetic operators: +, -, *, /, %
// Example of comparison operators: ==, ===, !=, !==, >, <, >=, <=
// Example of logical operators: &&, ||, !
// Example of assignment operators: =, +=, -=, *=, /=, %=

// + Addition
// - Subtraction
// * Multiplication
// / Division
// % Modulus (Remainder)
// == Equality
// === Strict Equality
// != Inequality
// !== Strict Inequality
// > Greater than
// < Less than
// >= Greater than or equal to
// <= Less than or equal to
// && Logical AND
// || Logical OR
// ! Logical NOT
// = Assignment
// += Addition assignment
// -= Subtraction assignment
// *= Multiplication assignment
// /= Division assignment
// %= Modulus assignment

let n1 = 10; // number
let n2 = "10"; // string

console.log(n1 == n2); // Compare values only, type coercion occurs
console.log(n1 === n2); // Compare values and types, no type coercion occurs

console.log(n2/5) // JavaScript performs type coercion, converting the string "10" to the number 10 before division

//ternary operator
// Example of ternary operator: condition ? expressionIfTrue : expressionIfFalse
let age = 18;
// condition? expressionIfTrue : expressionIfFalse

let canVote = age >= 18 ? "Yes" : "No";
console.log(canVote); // Output: "Yes"