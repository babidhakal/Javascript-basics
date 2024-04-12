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

// const username = prompt("Enter your username");
// const password = prompt("Enter your password");

// const login = (username, password) => {
//   if (username == "bijaya" && password == "bijaya") {
//     alert("Welcome admin");
//   } else if (username == "raktim" && password == "raktim") {
//     alert("Welcome User");
//   } else {
//     alert("Invalid username or password");
//   }
// };
// console.log(login(username, password));

// Js function to solve the factorial of 5
// Es5
// function factorial(n) {
//   if (n === 1) {
//     return 1; // Base case: factorial of 1 is 1
//   } else {
//     return n * factorial(n - 1); // Recursive case
//   }
// }

// console.log(factorial(5));
// ES6

// const factorial = (n) => {
//   if (n === 1) {
//     return 1;
//   }
//   return n * factorial(n - 1);
// };

// console.log(factorial(5));

// Es5
// Function Define

// function sum(a, b) {
//   const add = a + b;
//   return add;
// }
// // Function call
// const sumResult = sum(2, 3);
// // print
// console.log({ sumResult });

// // ES6
// const addi = (a, b) => {
//   return a + b;
// };
// console.log(addi(2, 3));
// WA JS function to calculate the SI
// P= 10000 T=10years R=10%
// WA js function that calculates the age of the person from the date of birth

// WA js function that calculates the age of the person from the date of birth
// const dob = prompt("Enter your date of birth"); //2050

// function age(birthYear) {
//   const age = 2080 - birthYear;
//   return age;
// }
// console.log(age(dob));

// // WA js function that calculates the SI
// function sI(principle, time, rate) {
//   const siInt = (principle * time * rate) / 100;
//   return siInt;
// }
// console.log(sI(10000, 10, 10));

// // WA js function that reverses the string
// // 3210 => 0123
// const reverse = (word) => {
//   let newString = "";
//   for (let i = word.length - 1; i >= 0; i--) {
//     newString += word[i];
//   }
//   return newString;
// };
// console.log(reverse("3210"));

// Write a js function to check if the word is palindrome
// mom,dad
// Write a js function to find the largest word
// in the sentence
// eg: "My name is Lakhan"
// function(word){
//   for ()
//   return true;
// }

// const palindrome = (word) => {
//   let newString = "";
//   for (let i = word.length - 1; i >= 0; i--) {
//     newString += word[i];
//   }

//   if (newString === word) {
//     return true;
//   } else return false;
// };
// console.log(palindrome("mom"));

// // Write a js function to find the largest word
//  const largestWord = (large) => {
//   const word= large.split(" ");
//   let largeAns="";
//    for( let i = 0, i < word.length;  i++){
//     if (largeAns.length<word[i].length)
//     largeAns =words[i];
//  };
//  largestWord("My name is Lakhan");

//  }
// console.log("My name is Lakhan");
// mozilla javascript string;
// Write a javascript function to convert temp c to f
// Formula = c/5 = (f-32)/9   60 deg c is 140 deg f

// const temp = prompt("Enter the celsius degree");
// function change(celsius) {
//   const change = (celsius * 9) / 5 + 32;
//   return change;
// }
// console.log(change(temp));

// Write a JavaScript function that accepts a number as a parameter and checks whether it is prime or not.

// const primeNumber = prompt("Enter your number");
// function check(number) {
//   if ((prime = number / 2)) {
//     alert("Your number is not a prime number");
//   } else if ((prime = number / 3)) {
//     alert("your number is not a prime number");
//   } else {
//     alert("Your number is a prime number");
//   }
// }
// console.log(number(primeNumber));
