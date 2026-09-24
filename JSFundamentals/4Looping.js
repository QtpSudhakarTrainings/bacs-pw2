// Looping in JavaScript
// Executing a block of code specific number of times or based condition

// Print numbers from 1 to 5 using a for loop

for (let i = 1; i <= 10; i++) { // i++ means i=i+1
    console.log(i);
}

// Print numbers from 10 to 1 using a for loop
for (let i = 10; i >= 1; i--) { // i-- means i=i-1
    console.log(i);
}

// print odd numbers between 30 and 100

for (let i = 31; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

for (let i = 30; i <= 100; i += 2) {
    console.log(i);
}

// Index based for loop
let arr = ['a', 'b', 'c', 'd'];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// Condition based loops

// While and Do while loops are condition based
// While executes block zero or more times as long as the condition is true
// Do while executes block at least once and then continues as long as the condition is true

let j = 0;
while (j < 5) {
    console.log(j);
    j++;
}

let k = 0;
do {
    console.log(k);
    k++;
} while (k < 5);