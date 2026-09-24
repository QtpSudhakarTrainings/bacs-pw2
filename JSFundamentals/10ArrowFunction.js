// Arrow functions are a concise way to write functions in JavaScript.
// They do not have their own 'this' context, which makes them different from regular functions.

// Arrow functions is short syntax for writing anonymous functions.

// Syntax: ()=>{}
// () is optional when there is exactly one parameter.
// {} is optional when there is one statement
// When there is one statement, the value be the return value
// No need to use return keyword for single statement functions.

let demoAdd = (a, b)=> {
    return a + b;
};

let demoMul = (a, b)=>  a + b;

let demoSq = x=>x*x;
// function demoSquare(x){
//     return x*x;
// }


function Calculator(x,y,operation){
    return operation(x,y)
}

Calculator(10,20,(a,b)=>a+b);

Calculator(10,20,(a,b)=>a*b);

setTimeout(()=>console.log("exected after 2 seconds"),2000)
