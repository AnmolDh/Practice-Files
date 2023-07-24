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

/*
const year = new Array(2003, 2001, 2004);

const friends = ["John", "Shawn", "Kevin"];
console.log(friends);
console.log(friends[0]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Brandon";
console.log(friends);

const firstName = "Anmol";
const anmol = [firstName, "Dhiman", 2023 - 2003, friends];
console.log(anmol);

const calcAge = (birthYear) => 2023 - birthYear;
const age = calcAge(year[0]);
console.log(age);

const ages = [calcAge(year[0]), calcAge(year[1]), calcAge(year[year.length - 1])];
console.log(ages);
*/

/*
const friends = ["John", "Shawn", "Kevin"];

// Add Element
const newLength = friends.push("Jake"); // at last
console.log(friends);
console.log(newLength);

friends.unshift("Kay"); // at start
console.log(friends);

// Remove Element
friends.pop(); // from last
const popped = friends.pop();
console.log(friends);
console.log(popped);

friends.shift(); // from first
console.log(friends);

console.log(friends.indexOf("Shawn"));

console.log(friends.includes("Kay"));

if (friends.includes("John")) {
  console.log("hey John");
}
*/

/*
const calcTip = (bill) => {
  if (bill >= 50 && bill <= 300) {
    return (bill / 100) * 15;
  } else {
    return (bill / 100) * 20;
  }
};

console.log(calcTip(100));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], (bills[1] + tips[1]), (bills[2] + tips[2])];
console.log(total);
*/

/*
const anmol = {
  firstName: "Anmol",
  lastName: "Dhiman",
  age: 2023 - 2003,
  friends: ["John", "Shawn", "Kevin"],
};
console.log(anmol);
console.log(anmol.firstName);
console.log(anmol["lastName"]);

const nameKey = "Name";
console.log(anmol["first" + nameKey]);
console.log(anmol["last" + nameKey]);

const query = prompt("huh");

if (anmol[query]) {
  console.log(anmol[query]);
} else {
  console.log("error");
}

anmol.country = "India";
anmol["city"] = "Chandigarh";
console.log(anmol);

console.log(
  `${anmol.firstName} has ${anmol.friends.length} friends, and his best friend is ${anmol.friends[0]}`
);
*/

/*
const anmol = {
  firstName: "Anmol",
  lastName: "Dhiman",
  birthYear: 2003,
  friends: ["John", "Shawn", "Kevin"],
  hasDriversLicence: true,
  // calcAge: function (birthYear) {
  //   return 2023 - birthYear;
  // },
  // calcAge: function () {
  //   return 2023 - this.birthYear;
  // },
  calcAge: function () {
    this.age = 2023 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-years old, and he has ${
      this.hasDriversLicence ? "a" : "no"
    } drivers licence.`;
  },
};

// console.log(anmol.calcAge(anmol.birthYear));
// console.log(anmol["calcAge"](2000));
// console.log(anmol.calcAge());

// anmol.calcAge();
// console.log(anmol.age)

console.log(anmol.getSummary());
*/

/*
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};
const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

if (mark.calcBMI() > john.calcBMI()) {
  console.log(
    `Mark's BMI (${mark.BMI}) is higher than John's BMI (${john.BMI})`
  );
} else {
  console.log(
    `John's BMI (${john.BMI}) is higher than Mark's BMI (${mark.BMI})`
  );
}
*/

/*
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

const anmol = ["Anmol", "Dhiman", 2023 - 2003, ["John", "Shawn", "Kevin"]];
const types = [];

for (let i = 0; i < anmol.length; i++) {
  console.log(anmol[i]);
  types[i] = typeof anmol[i];
}
console.log(types);

// continue and break
for (let i = 0; i < anmol.length; i++) {
  if (typeof anmol[i] !== "string") continue;
  console.log(anmol[i], typeof anmol[i]);
}
for (let i = 0; i < anmol.length; i++) {
  if (typeof anmol[i] === "number") break;
  console.log(anmol[i], typeof anmol[i]);
}

for (let i = anmol.length - 1; i >= 0; i--){
  console.log(anmol[i]);
}

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 15; j++){
    console.log("set " + i, "rep " + j)
  }
}
*/

/*
let rep = 1;
while (rep <= 15) {
  console.log(rep);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
  console.log(`you rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("loop will end now");
}
*/

/*
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = (bill) => {
  if (bill >= 50 && bill <= 300) {
    return (bill / 100) * 15;
  } else {
    return (bill / 100) * 20;
  }
};

for (let i = 0; i < bills.length; i++){
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
}

console.log(totals);

const calcAvg = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum / arr.length;
}
console.log(calcAvg(totals));
*/

