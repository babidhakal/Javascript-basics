console.log("Hello world");

// (single line comment)
/*  multi line comment*/

// variable start
// keywords: var, let, const
// var: used for global variable define
//  let : reuse variable
//  const: value constant

const person = "Bijaya Dhakal";
const person1 = "nischal basnet";

let number = 3.14;

number = 5;
// print the number
console.log(number);
console.log({ person });
console.log({ person1 });

// INteraction
alert("Hello World");
const question1 = prompt("What is your Name?");
const question2 = confirm("are you 18 years or above?");
console.log({ question1, question2 });

//  update the above question 1 and 2 to print name and age through alert

alert("you are " + question1 + " , you are not above 18 years old" + question2);

// Write a multiplication calculator for 3 digits
let number1 = prompt("Enter the first number");
let number2 = prompt("Enter the second number");
let result = number1 * number2;
console.log(result);
