//Default
function login(userName = "guest", pwd = "guest@123#") {
    //Enter details and login
    // Verify login successful
    console.log("Logging in with", userName, pwd)
}

login();
login("admin", "admin@123#");
login("sudhakar");
login(undefined, "test@123#");

function demoAdd(a, b) { // By default all parameters are optional 
    console.log(a + b)
}

demoAdd(5, 10);
demoAdd(20); // NaN because b is undefined
demoAdd(); //NaN

//Rest Parameters
function addAllNumbers(...numbers) {
    console.log(numbers);
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
    }
    console.log("sum", sum);
}

// ... represent rest parameter
// you can pass any number of arguments to the function
// it will convert all the arguments into an array

let arr = [10, 20, 30, 40,50]
addAllNumbers(...arr); //Spread Operator
addAllNumbers(100,200,300); //Spread Operator

// While passing an array to a function that accepts rest parameters, 
// use the spread operator to expand the array into individual elements.

let numArr = [100, 200, 300]
let [x, y, z] = [...numArr];
console.log(x, y, z);


numArr.forEach((num)=>{
    console.log(num);
})