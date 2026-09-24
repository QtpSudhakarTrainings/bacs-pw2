let x = 10; //block scoped variable

x = 20;

console.log(x);

const company = "OpenAI"; //constant
console.log(company);

var y = 30; //variable
console.log(y);

for (let k = 0; k < 5; k++) {
    console.log(k);
}

console.log(k); // k is not accessible here because it was declared with let

for (var i = 0; i < 5; i++) {
    console.log(i);
}

console.log(i); // i is still accessible here because it was declared with var