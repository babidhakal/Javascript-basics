console.log("Day 4");

// Functions

// Fuc=nction define
// Function variable pass
// Function call

// Write a function that says hi to the user
// ES5
// function hi(user) {
//   const hello = `Hi, $(User)`;
//   return hello;
// }

// ES6 (Arrow Function)    const ...... = () =>{}

// const hi = (name, lastname) => {
//   return `Hi, ${name} ${lastname}`;
// };
// const result = hi("raktim, shrestha kumar sigdel ");
// const result1 = hi(" shrestha");
// console.log({ result, result1 });

// // Write a function too add 2 numbers
// // ask number for users using prompt

// const firstNUmber = prompt("Enter your firstNumber");
// const secondNumber = prompt("Enter your second number");

// let add = (firstNumber, secondNumber) => {
//   return ` Sum,{firstNumber}{secondNumber}`;
// };

// const sum = add(firstNumber + secondNumber);
// console.log({ result });

// write a js function that takes username and pasword
// if username === raktim && password === raktim
// Welcome admin
// nischal, nischal  Welcome user
// Invalid password or username

// Raktim,raktim  welcome admin
// nischal,nischal welcome user
// raktim , ..  invalid username or password

// Write a js function to solve the factorial of 5
// (recursive function)

const username = prompt("Enter your username");
const password = prompt("Enter your password");

const login = (username, password) => {
  if (username == "bijaya" && password == "bijaya") {
    alert("Welcome admin");
  } else if (username == "raktim" && password == "raktim") {
    alert("Welcome User");
  } else {
    alert("Invalid username or password");
  }
};
console.log(login(username, password));

// Js function to solve the factorial of 5
function factorial(n) {
  if (n === 1) {
    return 1; // Base case: factorial of 1 is 1
  } else {
    return n * factorial(n - 1); // Recursive case
  }
}

console.log(factorial(5));
