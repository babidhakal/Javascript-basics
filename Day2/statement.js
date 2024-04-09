// IF ELSE
// SWITCH CASE

// Write a program that uses age to print the status of person

const age = Number(prompt("Enter your Age ")); // 30
if (age >= 30) {
  alert("you are old");
} else {
  alert("You are young");
}

/*
 if(condition){
    // code block 1 run
 } else {
    code block 2 run
 }
*/

// Write a js program that checks your username and password.
//  If username is your name and passowrd is your name
// Print welcome admin
// else
// if username is equal to password but for another person
// print welcome user

const username = prompt("Enter your Username");
const password = prompt("Enter your passowrd");

if ((username && passowrd) == "bijaya") {
  alert("Welcome admin");
} else {
  alert("Welcome User");
}

// Write a js program that ask user the time\
// if the time is in between 4 and 5:30
// alert class is in session
// else
// alert class is completed for today

/*const time = Number(prompt("What is the time? Select between 1 to 6"));

const classRunCondition = time >= 4 && time <= 5.5;

if (classRunCondition) {
  alert("Class is in session");
} else {
  alert("Class is completed for today");
}
*/
// switch case statement

/*
const userTime="" 
Switch(condition):
 case value:
    alert("Class is not started")
    break;
  case value:
     alert("Class is in session")
    break;
  case value
    alert("Class has finished for today")
    break;
  default:
      alert("Invalid Time")

*/
// user time 1 to 6
// class is running : time >=4 && time <=5.5
//  class has not started: time >=1 && time<4
// class is over: time >5.5 && time <=6

/*const time = Number(prompt("What is the time? Select between 1 to 6"));

switch (time) {
  case 4:
  case 5:
    alert("Class is running");
    break;
  case 1:
  case 2:
  case 3:
    alert("Class is in session");
    break;
  case 6:
    alert("Class has finished for today");
    break;
  default:
    alert("Invalid Time");
}

/* Score Grading tool
Userscore = 85;
Rank ?? // A,B,C,D,E,F

A = 90 and above
B = 80 and below 90
C = 70 and below 80
D = 60 and below 70
F = below 60
*/

// const userScore = Number(prompt("Enter your Score"));

// Switch (score) {
//   case userScore >= 90
//   alert("your rank is A");
//   break;
//   case userScore >= 80 && <90
//   alert("your rank is B");
//   break;
//   case userScore >= 70 && <80
//   alert("your rank is C");
//   break;
//   case userScore >= 60 && <70
//   alert("your rank is D");
//   break;
//   case  userScore >= 50 && <60
//   alert("your rank is E");
//   break;
//   case userScore <50
//   alert=("Your rank is F")
//   default:
//     alert("Invalid Score")
// }

// Switch(true){
//  case userScore >=90:

// if esle, ifelseif, switch case (ES5)
// ES6
// Ternary Operation
const un = prompt("Enter your name");
un === "raktim" ? alert("welcome admin") : alert("welcome user");
// condition ? true : false

const gender = prompt("Enter your gender's first letter");
gender == "m"
  ? alert("male")
  : gender === "f"
  ? alert("female")
  : alert("other");

// Loop
