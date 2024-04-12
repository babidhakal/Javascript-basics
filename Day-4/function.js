console.log("Day 5");

const largestWord = (large) => {
  const word = large.split(" ");
  let largeAns = "";
  for (let i = 0; i < word.length; i++) {
    if (largeAns.length < word[i].length) {
      largeAns = word[i];
    }
  }
  return largeAns;
};
console.log(largestWord("My name is Lakhan"));

// Types of Function of JavaScript
/*
1. Parameterized function
2. Default Function
3. Explicit  Function
4. Implicit Function
5. Anonymous Function
6. In line function
7. Closure 
8. IIFE
9. Pure Function
8. 
*/
// Basic Function
const hello = () => {
  return "Hello";
};

// Parameterized function
const getFirstName = (name) => {
  // Raktim Shrestha
  const words = name.split(" "); // 1 line code = return
  const result = words[0];
  return result;
};

// Default Function
// Real world function pagination
const sayHi = (topic = "user") => {
  alert(`Hi ${topic}`);
};
sayHi("raktim");

// Conver the temperature from celcius to forenheit
// const temp = prompt("Enter the celsius degree");
// function change(celsius) {
//   const change = (celsius * 9) / 5 + 32;
//   return change;
// }
// console.log(change(temp));

const getTemp = (temp, type = "c") => {
  if (type === "C") {
    return 1.8 * temp + 32;
  } else {
    return (5 * temp) / 9 - 17.78;
  }
};
console.log(getTemp(32), "F");
console.log(getTemp(100, "F"), "C");

// Explicit Function
const getEName = () => {
  return "raktim"; // explict means return keyword is mentioned
};

// Implicit function

const getIName = (name) => name.split(" ")[1];
{
  const words = name.split(" ");
  console.log(words); // ["raktim", "shrestha"]
  console.log(words[0], words[1]);
}

// Write a javascript function that accepts a number as a paramenter
// and check wheather it is a prime number or not

const primeNumber = (userNumber) => {
  if (userNumber <= 1) return false;
  for (i = 2; i < userNumber - 1; i++) {
    if (userNumber % i === 0) return false;
  }
  return true;
};
console.log(primeNumber(4));

// Write a implict js function that converts a long sentence into '...' statement
// truncate

// raktim is a very busy person. He is teaching at Broadyway at the time.
// raktim is a very busy person.....

const truncate = (sentence) => sentence.substring(0, 30).concat("....");
console.log(
  truncate(
    " raktim is a very busy person. He is teaching at Broadyway at the time."
  )
);

// Function Chaining

// Anonymous Function
const sayHello = function () {};

// InLine Function

const sayHey = () => {
  console.log("Hi bijaya"); // Lexical Scope
};

// IIFEs
// Immediately Invoked Functional Expression

// DevOps (Script Run,  )

(function () {
  console.log("hel1");
  console.log("hel2");
  console.log("hel3");
})();

// Closure

// Pure Function

// Callback Function
