"use strict";

/*
/////////////////////////////////////////////////////////
const bookings = [];

const createBooking = function (flightNum, numPassangers = 1, price = 199*numPassangers) {
  // numPassangers = numPassangers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassangers,
    price
  }

  bookings.push(booking);
  console.log(booking);
}

createBooking("IN23");
createBooking("IN23", 2, 200);
createBooking("IN23", 2);
createBooking("IN23", undefined, 2000);
*/

/*
/////////////////////////////////////////////////////////
const flight = "IN23";
const anmol = {
  name: "Anmol Dhiman",
  passport: 1292200110,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "IN232";
  passenger.name = "Mr. " + passenger.name;

  if (passenger.passport === 1292200110) {
    alert("Check In");
  } else {
    alert("Wrong Passport");
  }
};

checkIn(flight, anmol);
console.log(flight);
console.log(anmol);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);
}
newPassport(anmol);
checkIn(flight, anmol);
*/

/*
/////////////////////////////////////////////////////////
const oneWord = function (str) {
  return str.replaceAll(" ", "");
}

const upperFirst = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
}

// higher order function
const transform = function (str, fn) {
  console.log(`original string: ${str}`);
  console.log(`transformed string: ${fn(str)}`);
  console.log(`transformed by: ${fn.name}`);
}

transform("hello there", upperFirst);
transform("hello there", oneWord);

const high5 = function () {
  console.log("hi");
};
document.body.addEventListener("click", high5);
*/

/*
/////////////////////////////////////////////////////////
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet("Hey");
greeterHey("Anmol");

greet("Hello")("Anmol");

const greetArrow = (greeting) => (name) => console.log(`${greeting} ${name}`);
greetArrow("Hei")("Anmol");
*/

/*
/////////////////////////////////////////////////////////
const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(585, "Anmol");

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book;
// book(23, "Anmol"); // throws error

// Call Method
book.call(eurowings, 211, "Anmol");
book.call(lufthansa, 321, "Blah");

const swiss = {
  airline: "Swiss Airlines",
  iataCode: "LX",
  bookings: [],
};
book.call(swiss, 932, "huh");

console.log(swiss, eurowings, lufthansa);

// Apply Method
const flightData = [232, "John"];
book.apply(swiss, flightData);
book.call(swiss, ...flightData);

// Bind Method
//book.call(eurowings, 291, "huh");
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
const bookEW = book.bind(eurowings);
bookEW(291, "huh");

const bookEW23 = book.bind(eurowings, 23);
bookEW23("heh");

// with events listeners
lufthansa.planes = 200;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane();

document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addGST = addTax.bind(null, 0.18);
console.log(addGST(16949));


const addTaxRate = function (rate) {
  return function (value) {
    return (value + value * rate);
  }
}
console.log(addTaxRate(0.10)(200));
*/

/*
/////////////////////////////////////////////////////////
const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0), // generates [0, 0, 0, 0]
  registerNewAnswer() {
    const input = Number(
      prompt(
        `${this.question}\n${this.options.join("\n")}\n(Write option number)`
      )
    );

    typeof input === "number" &&
      input < this.answers.length &&
      this.answers[input]++;

    this.displayResults();
    this.displayResults("string");
  },
  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`Poll results are ${this.answers.join(", ")}`);
    }
  },
};

document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, "string");
*/

/*
/////////////////////////////////////////////////////////
const runOnce = function () {
  console.log("this will NOT run only once");
};
runOnce();
runOnce();

(function () {
  console.log("this will never run again");
})();

(() => console.log("this will also never run again"))();
*/

/*
/////////////////////////////////////////////////////////
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(passengerCount);
  }
}

const booker = secureBooking();
booker();
booker();
booker();

console.dir(booker);
*/

/*
/////////////////////////////////////////////////////////
// example 1
let f;

const g = function () {
  let a = 23;
  f = function () {
    console.log(a * 2);
  }
}

const h = function () {
  let b = 777;
  f = function () {
    console.log(b * 2);
  }
}

g();
f();
console.dir(f);

// reassigning f function
h();
f();
console.dir(f);


// example 2
const boardPassangers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passangers`);
    console.log(`There are 3 groups, each with ${perGroup} passangers`);
  }, wait * 1000);
  
  console.log(`Will start boarding in ${wait} seconds`);
}

boardPassangers(300, 3);
*/

/*
/////////////////////////////////////////////////////////
(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";

  header.addEventListener("click", function () {
    header.style.color = "blue"
  })
})();
*/
