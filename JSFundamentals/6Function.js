// A function is a reusable block of code that performs a specific task. It can be defined once and called multiple times throughout the program.

// These are named functions

function addDemo(a,b){
    console.log(a+b)
}

addDemo(2,3)
addDemo(20,30)
addDemo(100,200)

function addNumbers(a,b,c){
    return a+b+c
}

let res = addNumbers(2,3,4);
console.log(res)

function registerUser(){

    // Steps for registration
    // return Registration ID
}

function login(userName,pwd){
    //Enter details and login
    // Verify login successful
}

function isOdd(n){
    if(n%2==1){
        return true
    }else{
        return false
    }
}

// Return Odd Numbers from a function

function getOddNumbers(rStart, rEnd){
    let oddNumbers = []; // Defining to consolidate all odd numbers in the range
    for(let n=rStart;n<=rEnd;n++){
        if(isOdd(n)){
           oddNumbers.push(n) // push will add value to an array
        }
    }

    return oddNumbers;

}

let oddNumbersInRange = getOddNumbers(20,50);
console.log(oddNumbersInRange);
