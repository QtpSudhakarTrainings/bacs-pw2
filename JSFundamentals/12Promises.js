
// Still Executing
// Completed
// Failed

// Promise will have 3 states

// Pending : Promise is Still Executing
// Fulfilled : Promise has Completed Successfully
// Rejected : Promise has Failed

// Promise have two methods
// 1. then() : Called when the promise is fulfilled
// 2. catch() : Called when the promise is rejected

// Example of a Promise

//Syntax for creating promise
// new Promise(function(resolve, reject) {
//     // asynchronous operation
//     if (success) {
//         resolve(result);
//     } else {
//         reject(error);
//     }
// });


function enterUserName() {

    return new Promise(function (resolve, reject) {
        setTimeout(function () {

            let isSuccess = true; // Simulating success scenario

            if (isSuccess) {
                console.log("username entered.");
                resolve();
            } else {
                reject("Failed to enter username.");
            }
        }, 3000);
    });
}

function enterPassword() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            let isSuccess = false; // Simulating success scenario

            if (isSuccess) {
                console.log("password entered.");
                resolve();
            } else {
                reject("Failed to enter password.");
            }
        }, 2000);
    });
}

function clickLogin() {
    return new Promise( (resolve, reject)=> {
        setTimeout( () => {
            let isSuccess = true; // Simulating success scenario
            isSuccess? (console.log("clicked login."), resolve("session123")) : reject("Failed to click login.");
        }, 1000);
    });
}



//Usage example of the promise

// enterUserName().then(() => {
//     return enterPassword();
// }).then(() => {
//     return clickLogin();
// }).catch((error) => {
//     console.log(error);
// });

//With Call back we have Callback Hell
//With Promises we can avoid Callback Hell
// But it is leading promise chaining which can become hard to read and maintain for complex sequences of asynchronous operations.


// Async, Await introduced ES2017

//Create a function with async, And use await before every promise call
// await will wait for promise to complete execution
// resolve mean the promise has been fulfilled successfully
// reject mean the promise has been rejected due to some error
// If it is pending await will wait for promise statement to complete

async function login() {
    await enterUserName();
    await enterPassword();
    let session = await clickLogin();
    console.log("Session ID:", session);
}

login().catch((error) => {
    console.log(error);
    throw new Error(error);
});
