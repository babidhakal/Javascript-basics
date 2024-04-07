console.log("Hello World");

// Data Types
// 1 String

const person = "ram";
let female = "Sita";
const user = "bijaya";
const user2 = `nischal`; // backtick, tilde sign
console.log({ person, female, user, user2 });
var num = 20.0;

// 2 number
const pi = 3.14;
const num2 = 2;
const num3 = 2.0;

console.log({ pi, num2, num3 });

// 3 boolen (true/false)

const isRaktimBoy = true; // Camel Case
const isRaktimMan = true;

console.log({ isRaktimBoy, isRaktimMan });
// 4 Undefined

let test;
var test2;

console.log({ test, test2 });

// 5 null
const data = null;
console.log({ data });

// Type Conversion & Type coercion
// Multiply using interacrion key (prompt)

const mul1 = prompt("Enter the 1st num"); //string
const mul2 = prompt("Enter the 2nd num"); //string

// Type conversion Method 1
const result = Number(mul1) * Number(mul2);
const stringOnly = String(mul1);
console.log({ result, stringOnly });

// Type conversion Method 2
const result2 = +mul1 * mul2;
console.log({ result2 });

// Operator ( logical operator)
// AND (&&), OR (||), NOT (!)

const andCheck = mul1 && mul2; // true
const orCheck = mul1 || mul2; // true
const notCheck = !mul1; // false

console.log({ andCheck, orCheck, notCheck });
