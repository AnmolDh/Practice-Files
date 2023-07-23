"use strict";

/*
let hasDriversLicence = false;
const testPassed = true;

if (testPassed) hasDriverLicence = true;
if (hasDriversLicence) console.log("you can drive")
*/

/*
// function
function logger() {
  console.log("logged via function");
}
logger(); // calling the function

function fruitProcessor(apple, orange) {
  const juice = `juice with ${apple} apples, and ${orange} oranges`;
  return juice;
}
console.log(fruitProcessor(1, 2));
*/

/*
// Function Decelaration
function calcAge1(birthYear) {
  return 2023 - birthYear;
}
const age1 = calcAge1(2003);
console.log(age1);

// Function Expression
const calcAge2 = function (birthYear) {
  return 2023 - birthYear;
};
const age2 = calcAge2(2003);
console.log(age2);

// Arrow Function
const calcAge3 = (birthYear) => 2023 - birthYear;
const age3 = calcAge3(2003);
console.log(age3);

const yearsUntilRetirement = (birthYear, retirementAge) => {
  const age = 2023 - birthYear;
  const retirement = retirementAge - age;
  return retirement;
};
console.log(yearsUntilRetirement(2003, 60));
*/

/*
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apple, orange) {
  const applePieces = cutFruitPieces(apple);
  const orangePieces = cutFruitPieces(orange);
  const juice = `juice with ${applePieces} pieces of apples, and ${orangePieces} pieces of oranges`;
  return juice;
}

console.log(fruitProcessor(2, 3));
*/

/*
const calcAvg = (x, y, z) => (x + y + z) / 3;
const dolphinsAvg = calcAvg(44, 23, 71);
const koalasAvg = calcAvg(65, 54, 49);

function checkWinner(dolphinsAvg, koalasAvg) {
  if (dolphinsAvg >= 2 * koalasAvg) {
    console.log(`Dolphins win (${dolphinsAvg + " vs " + koalasAvg})`)
  } else if (dolphinsAvg * 2 <= koalasAvg) {
    console.log(`Koalas win (${koalasAvg + " vs " + dolphinsAvg})`);
  } else {
    console.log("no team wins");
  }
}
checkWinner(dolphinsAvg, koalasAvg);
*/

