"use strict";

/*
function calcAge(birthYear) {
  // console.log(firstName);
  function printAge() {
    const output = `You are ${age}, born in ${birthYear}`
    console.log(output);
  }
  printAge();

  if (birthYear >= 2000 && birthYear <= 2023) {
    var genZ = true;
    const firstName = "HUH"; // will change from global firstName to this in this block
    const str = `Oh, and you are a genZ, ${firstName}`;
    console.log(str);
  }
  // console.log(str); // ref error
  // console.log(genZ); // no error

  const age = 2023 - birthYear;
  return age;
}

const firstName = "Anmol";
calcAge(2003);
// console.log(age); // ref error
// printAge(); // ref error
*/

/*
// varibales
console.log(me);
console.log(job);
console.log(age);

var me = "Anmol";
let job = "Student";
const age = 19;

// functions
console.log(addDecl(1, 1));
console.log(addExpr(1, 1));
console.log(addArrow(1, 1));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
}

var addArrow = (a, b) => a + b;

// example
if (!numProducts) deleteNum();

var numProducts = 10;

function deleteNum() {
  console.log("deleted: ", numProducts);
}

// var will create property on window object, let and const dont
var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(x === window.y);
console.log(x === window.z);
*/

/*
console.log(this);

const calcAge = function (birthYear) {
  console.log(this);
  return 2023 - birthYear;
}
calcAge(2003);

const calcAgeArrow = (birthYear) => {
  console.log(this);
  return 2023 - birthYear;
};
calcAgeArrow(2003);

const Anmol = {
  year: 2003,
  calcAge: function () {
    console.log(this);
    return 2023 - this.year;
  }
}
Anmol.calcAge();

const Sus = {
  year: 1969,
}
Sus.calcAge = Anmol.calcAge;

Sus.calcAge();

// const f = Anmol.calcAge;
// f();
*/

/*
const anmol = {
  firstName: "Anmol",
  year: 2003,

  calcAge: function () {
    // const self = this; // self or that
    // function isGenZ() {
    //   // console.log(this.year >= 2000 && this.year <= 2023);
    //   console.log(self.year >= 2000 && self.year <= 2023);
    // }
    // isGenZ();

    const isGenZ = () => {
      console.log(this.year >= 2000 && this.year <= 2023);
    }
    isGenZ();
    return 2023 - this.year;
  },

  greet: () => {
    console.log(`hey, ${this.firstName}`);
  },
};

anmol.greet();
anmol.calcAge();

// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(1, 1);
addExpr(1, 2, 3, 4);

const addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(1, 1);
*/

/*
// primitive
let age = 18;
let oldAge = age;
age = 19;
console.log(age); // 19
console.log(oldAge); //18

// reference
const me = {
  name: "Anmol",
  age: 19
}
const friend = me;
friend.age = 18;

console.log(me); // {name: 'Anmol', age: 18}
console.log(friend); // {name: 'Anmol', age: 18}
*/

/*
// primitive types
let lastName = "blah";
let oldLastName = lastName;
lastName = "doe";
console.log(lastName, oldLastName);

// reference types
const yor = {
  firstName: "Yor",
  lastName: "Blah",
};
const marriedYor = yor;
marriedYor.lastName = "Forger";

console.log("before marriage:", yor);
console.log("after marriage:", marriedYor);
// marriedYor = {};

// copying objects
const yorHuh = {
  firstName: "Yor",
  lastName: "Blah",
  family: ["anya", "loid"],
};

const yorHuhCopy = Object.assign({}, yorHuh); // works on first level
yorHuhCopy.lastName = "Forger";

yorHuhCopy.family.push("Mary"); // this will apply to both

console.log("before marriage:", yorHuh);
console.log("after marriage:", yorHuhCopy);
*/
