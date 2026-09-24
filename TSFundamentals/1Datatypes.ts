// Typescript provide typings to JS

// Storing Data and Accessing Data

// Variables: VariableName:Datatype = Value
// Functions: FunctionName(ParameterName:Datatype):ReturnType {  }
// Arrays: ArrayName:Datatype[] = [Value1, Value2, ...]
// Objects: Object Key and Values will automatically infer their types based on the assigned values

// number, string, boolean, null, undefined, any, void
let x: number = 10;
let y: number = 20;

let z: number = x + y;
console.log(z)

let vehicleNum: number | string = 12345;
console.log(vehicleNum);
vehicleNum = "AB123CD";
console.log(vehicleNum);

let userNames:string[] = ["sudhakar","hari"];
let userData: (number | string)[] = ["John Doe", "Jane Doe", 123];

console.log(userData);

let toolData = {
    toolName: "selenium",
    toolVersion: 4.0
};
console.log(toolData);

function addNumbers(a: number, b: number): number {
    return a + b;
}
let res: number = addNumbers(5, 10);
console.log(res);


// Custom type
type credType = { username: string, password: string, otp: number }

let credentials1: credType = { username: "admin", password: "admin123", otp: 123 };

let guestCreds: credType = { username: "guest", password: "guest@123", otp: 987 }

function login(creds: credType) {
    console.log(creds.username)
    console.log(creds.password)
    console.log(creds.otp)
}

login(credentials1)
login(guestCreds)

// unique id generation
console.log(Date.now());;