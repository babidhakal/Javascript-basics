console.log("Day 3");

// loops

//  for
//  do while
// while

// Write a multiplication table for 3;

for (let i = 1; i <= 10; i++) {
  console.log(`3 x ${i} = ${3 * i}`);
}
console.log("==============================================");
let multiplier = 1;
let result = 0;
do {
  result = 3 * multiplier;
  console.log(`3 x ${multiplier} = ${result}`);
  multiplier++;
} while (multiplier <= 10);
console.log("===============================================");
let mult = 1;
let resu = 0;
while (mult <= 10) {
  resu = 3 * mult;
  console.log(`3 x ${mult} = ${resu}`);
  mult++;
}

// Write a factorial of 5 (5*4*3*2*1)

let fact = 5;
for (i = 1; i <= number; i++) {
  fact *= i;
}
