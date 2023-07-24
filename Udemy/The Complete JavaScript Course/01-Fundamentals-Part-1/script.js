/*
let js = "amazing";

console.log(40 + 2 + 43 + 5);

let firstName = "Anmol";
console.log(firstName);

let continent = "Asia";
let country = "India";
let population = 140;
console.log(continent, country, population)
*/

/*
let jsIsBad = false;
console.log(jsIsBad);
console.log(typeof jsIsBad);
console.log(typeof true);
console.log(typeof 10);
console.log(typeof "hey");
console.log(typeof true);

jsIsBad = "No"
console.log(typeof jsIsBad)

let year;
console.log(year)
console.log(typeof year)

console.log(typeof null)
*/

/*
let age = 19;
age = 20;

const birthYear = 2003;

// throws error
// birthYear = 2001;
// const dob;

const continent = "Asia";
const country = "India";
const language = "Hindi"
let population = 140;
console.log(continent, country, language, population);
*/

/*
// Math Operators
const anmolAge = 2023 - 2003;
console.log(anmolAge);
console.log(anmolAge * 2, anmolAge / 2, 2 ** 3);

const firstName = "Anmol";
const lastName = "Dhiman";
console.log(firstName + " " + lastName);

// Assignment Operators
let x = 10 + 5; // 15
x += 10 // x = x + 10 = 25
x *= 2 // x = x * 2 = 50
x++ // x = x + 1 = 51
x-- // x = x - 1 = 50
console.log(x);

// Comparison Operators
console.log(10 > 8); // >, <, >=, <=
const isGreater = 8 > 9;
console.log(isGreater);


const continent = "Asia";
const country = "India";
const language = "Hindi";
let population = 140;
console.log((population /= 2));
console.log(population++);

const isGreaterThanFinland = population > 6;
const isLessThanAverage = population < 33;

console.log(
  country +
    " is in " +
    continent +
    ", its " +
    population +
    " million people speak " +
    language
);
*/

/*
let x, y, z;
x = y = 25 - 10 - 5;
console.log(x, y);

x = 20;
y = 10;
z = 2;
console.log((x + y) / 2);
*/

/*
let markWeight = 78;
let markHeight = 1.69;
let johnWeight = 92;
let johnHeight = 1.95;

let markBMI = markWeight / (markHeight ** 2);
let johnBMI = johnWeight / (johnHeight ** 2);

let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);
*/

/*
const firstName = "Anmol";
const job = "Student";
const birthYear = 2003;
const year = 2023;
const anmol = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job;
console.log(anmol);

const anmolNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}`;
console.log(anmolNew);

console.log("string with\nmultiple\nlines");
console.log(`string with
multiple
lines`);

const continent = "Asia";
const country = "India";
const language = "Hindi";
let population = 140;

console.log(
  `${country} is in ${continent}, and its ${population} million speaks ${language}`
);
*/

/*
const age = 14;
if (age >= 18) {
  console.log("can get a driving licence");
} else {
  console.log(`wait ${18 - age} years to get your driving licence`);
}

const birthYear = 2003;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;
const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / johnHeight ** 2;
const markHigherBMI = markBMI > johnBMI;
if (markHigherBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`);
} else {
  console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})`)
}
*/

/*
// Type Conversion
const inputYear = "2003";
console.log(Number(inputYear) - 3);

console.log(Number("Anmol"));
console.log(typeof NaN);

console.log(String(2003));

// Type Coercion
console.log("i'm " + 20 + " years old");
console.log("20" - "5" - 10);
*/

/*
const age = 18;
if (age === 18) console.log(":D (strict)");
if (age == "18") console.log(":D (loose)");

const num = prompt("enter a number");
console.log(num);
console.log(typeof num);

if (num !== 23) console.log("not 23");


const numNeighbours = Number(
  prompt("how many neighbour countries, does your country have?")
);
if (numNeighbours === 1) {
  console.log("only 1 border");
} else if (numNeighbours > 1) {
  console.log("more than 1 border");
} else {
  console.log("no borders");
}
*/

/*
console.log(true && true);
console.log(true && false);
console.log(true || true);
console.log(false || true);
console.log(!false && true);

const dolphinsAvg = (96 + 108 + 89) / 3;
const koalasAvg = (88 + 91 + 110) / 3;
if (dolphinsAvg >= 100 && dolphinsAvg > koalasAvg) {
  console.log("dolphins win");
} else if (koalasAvg >= 100 && dolphinsAvg < koalasAvg) {
  console.log("koala wins");
} else if (
  dolphinsAvg === koalasAvg &&
  dolphinsAvg >= 100 &&
  koalasAvg >= 100
) {
  console.log("draw");
} else {
  console.log("no one wins");
}
*/

/*
const day = "sunday";
switch (day) {
  case "monnday":
    console.log("hue hue monday");
    break;
  case "saturday":
  case "sunday":
    console.log("hei hei weekend");
    break;
  default:
    console.log("brrr");
    break;
}
*/

/*
const age = 18;
const drink = age >= 18 ? "wine" : "water";
console.log(drink);
console.log(`i like to drink ${age >= 18 ? "wine" : "water"}`);

const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill / 100 * 15 : bill / 100 * 20;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value
${bill+ tip}`);
*/

