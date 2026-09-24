//JavaScript is Asynchronous

// Synchronous:
// Code is executed line by line and waits until the current operation completes.

// Asynchronous:
// Code is executed line by line, does not wait for the current operation to complete before moving on to the next one.
// If there is any waiting, the code continues executing the next lines without blocking.
// the waiting lines will wait in queue until their specified time or condition is met.

console.log("This is before the asynchronous calls.");
setTimeout(function() {
    console.log("This is executed asynchronously after 5 seconds.");
}, 5000);

console.log("This is middle of the asynchronous calls.");

setTimeout(function() {
    console.log("This is executed asynchronously after 2 seconds.");
}, 2000);

console.log("This is after the asynchronous calls.");
