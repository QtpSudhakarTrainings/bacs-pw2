// Verify Data
let x = 10;
// check if x is number of not
if (typeof x === "number") {
    console.log("x is a number");
} else {
    console.log("x is not a number");
}

// find big number betwerrn two numbers
let n1 = 15; // number
let n2 = 15; // number
if (n1 > n2) {
    console.log("n1 is bigger than n2");
} else if (n1 < n2) {
    console.log("n1 is smaller than n2");
} else {
    console.log("n1 and n2 are equal");
}

// odd number using ternary operator
let number = 7;
let isOdd = number % 2 !== 0 ? true : false;
console.log(isOdd); // Output: true

// Ternary operator program for find big number between two numbers
let num1 = 10;
let num2 = 20;
let bigger = num1 > num2 ? num1 : num1 < num2 ? num2 : "Both are equal";
console.log(bigger); // Output: 20

// Condition?trueExpression:Condition?trueExpression: falseExpression


// If condition used for this or that scenario

// switch is used for choose one from many scenario

let day = 10;

switch (day) {
    default:
        console.log("Invalid day");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;

}