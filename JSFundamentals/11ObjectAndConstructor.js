let john = {
    name: "John",
    age: 30,
    greet: function () {
        console.log("Hello, my name is " + this.name);
    },
    sayAge: function () {
        console.log("I am " + this.age + " years old");
    },
    introduce: function () {
        // Arrow functions do not have their own 'this', so 'this' will not refer to the person object here.
        console.log("Hi, I am " + this.name + " and I am " + this.age + " years old");
    }
};

john.greet();
john.sayAge();
john.introduce();

function Person(name, age) { //this is object constructor function
    this.name = name;
    this.age = age;
    this.greet = function () {
        console.log("Hello, my name is " + this.name);
    };
    this.sayAge = function () {
        console.log("I am " + this.age + " years old");
    };
    this.introduce = function () {
        console.log("Hi, I am " + this.name + " and I am " + this.age + " years old");
    };
}
let person1 = new Person("Alice", 25);
person1.greet();
person1.sayAge();
person1.introduce();

class createtool {
    constructor(name, type, version) {
        // Object Constructor function for creating tool objects
        this.name = name;
        this.type = type;
        this.version = version;
    }

    getInfo() { // this is a method
        return this.name + " is a " + this.type + " tool, version " + this.version;
    };
}

let tool1 = new createtool("Selenium", "Testing", "4.0");
console.log("tool1", tool1.getInfo());

let tool2 = new createtool("Postman", "API Testing", "8.0");
console.log("tool2", tool2.getInfo());

let tool3 = new createtool("Jest", "Testing", "27.0");
console.log("tool3", tool3.getInfo());