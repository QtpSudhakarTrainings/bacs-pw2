// Anonymous functions are functions that are defined without a name. 
// They are often used as arguments to other functions or assigned to variables.

demo() // You can call function before or after its definition
// Functions are hoisted

// demoAdd(2, 3); //Cannot access 'demoAdd' before initialization

let demoAdd = function(a, b) {
    return a + b;
};


console.log(demoAdd(2, 3));

function demo(){
    console.log("This is a named function demo.");
}

demo();

function Calculator(a,b,cb){

    //Calculator function takes 3 parameters
    // a: number
    // b: number
    // cb: a function that takes two numbers and calls back
    return cb(a,b); // Calculator calling back the operation function 
}

// Example usage of Calculator function
let result = Calculator(2, 3, demoAdd );
console.log(result);

let mul = Calculator(2, 3, function(a, b) {
    return a * b;
});
console.log(mul);

let sub = Calculator(2, 3, function(a, b) {
    return a - b;
});
console.log(sub);

function enterUserName(pwdCb, loginCb){
    setTimeout(function() {
        console.log("username entered.");
        pwdCb(loginCb);

    }, 3000);
}

function enterPassword(loginCb){
    setTimeout(function() {
        console.log("password entered.");
        loginCb();
    }, 2000);
}

function clickLogin(){
    setTimeout(function() {
        console.log("clicked login.");
    }, 1000);
}

enterUserName(enterPassword, clickLogin);

// A function that is calling back another function calling another function
// Callback HELL
// To handle callback hell, you can use Promises or async/await in modern JavaScript.