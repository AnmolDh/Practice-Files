"use strict";

// Data needed for first part of the section
const restaurant = {
  rName: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `order recieved ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(ing1, ing2, ing3);
  },
  orderPizza: function (mainIng, ...otherIng) {
    console.log(mainIng, otherIng);
  },
};

/*
////////////////////////////////////////////////////////////
const arr = [1, 2, 3];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

const [x, y, z] = arr; // destructuring array
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories; // skip inbetween elements
console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main]; // swap
console.log(main, secondary);

// recieve 2 return values from function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// nested destructuring
const nested = [2, 3, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

// default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/

/*
////////////////////////////////////////////////////////////
const { rName, openingHours, categories } = restaurant;
console.log(rName, openingHours, categories);

// rename
const {
  rName: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// default
const { menu = [], starterMenu: starter = [] } = restaurant;
console.log(menu, starter);

// mutating
let a = 111;
let b = 222;
const obj = { a: 699, b: 999 };
// { a, b } = obj; error
({ a, b } = obj);
console.log(a, b);

// nested
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

restaurant.orderDelivery({
  time: "19:00",
  address: "blah",
  starterIndex: 2,
  mainIndex: 2,
});

restaurant.orderDelivery({
  starterIndex: 2,
  address: "blah",
});
*/

/*
////////////////////////////////////////////////////////////
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const NewArr = [1, 2, ...arr];
console.log(NewArr);

console.log(...NewArr);

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

// copy array
const mainMenuCopy = [...newMenu];

// join arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// iterables: arrays, strings, maps, sets, NOT objects
const str = "Anmol";
const letters = [...str, " ", "D."];
console.log(letters);
console.log(str);
// console.log(`${...str} Dhiman`);

// const ingredients = [
//   prompt("Lets's make pasta! Ingredient 1?"),
//   prompt("Lets's make pasta! Ingredient 2?"),
//   prompt("Lets's make pasta! Ingredient 3?"),
// ];

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

// objects spread
const newRestaurant = { foundedIn: 1991, ...restaurant, founder: "adolf" };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.rName = "Ristoroma";
console.log(restaurant.rName, restaurantCopy.rName);
*/

/*
////////////////////////////////////////////////////////////
// 1) Destructuring
// SPREAD, because on RHS
const arr = [1, 2, ...[4, 3]];

// REST, because on LHS
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// REST objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++){
    sum += numbers[i];
  }
  console.log(sum);
}
add(1, 2);
add(1, 3, 1, 5);
add(1, 3, 1, 5, 3);

const x = [2, 4, 45];
add(...x);

restaurant.orderPizza("cheese", "onions", "olives");
restaurant.orderPizza("cheese");
*/

/*
////////////////////////////////////////////////////////////
// use any data type, return any data type, short-circuiting
// OR
console.log(3 || "Anmol");
console.log("" || "Anmol");
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || "" || "Hello" || 23 || null);

// restaurant.numGuests = 23;
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);

const guest2 = restaurant.numGuests || 10;
console.log(guest2);

// AND
console.log(0 && "Anmol");
console.log(2 && "Anmol");
console.log("Hello" && 23 && null && "Anmol");

if (restaurant.orderPizza) {
  restaurant.orderPizza("cheese");
}

restaurant.orderPizza && restaurant.orderPizza("cheese");
*/

/*
////////////////////////////////////////////////////////////
restaurant.numGuests = 0;
const guest = restaurant.numGuests || 10;
console.log(guest);

// Nullish: null and undefined (NOT 0 or "")
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
*/

/*
const rest1 = {
  name: "RioDe",
  // numGuests: 20,
  numGuests: 0
}

const rest2 = {
  name: "La Pizzarea",
  owner: "Adolf French"
}

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;


// AND assignment operator
// rest1.owner = rest1.owner && "<ANONYMOUS>";
// rest2.owner = rest2.owner && "<ANONYMOUS>";

rest1.owner &&= "<ANONYMOUS>";
rest2.owner &&= "<ANONYMOUS>";

console.log(rest1, rest2);
*/

/*
////////////////////////////////////////////////////////////
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;

const [gk, ...fieldPlayers] = players1;

const allPlayers = [...players1, ...players2];

const players1Final = [...players1, "Thiago", "Coutino", "Perisic"];

const { odds: {team1, x: draw, team2 } } = game;

const printGoals = function (...players) {
  console.log(players.length);
}
printGoals(...game.scored);

team1 < team2 && console.log("team 1");
team1 > team2 && console.log("team 2");
*/

/*
////////////////////////////////////////////////////////////
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item);

// for (const item of menu.entries()) {
//   console.log(`${item + 1}: ${item[]}`);
// }
for (const [i, el] of menu.entries()) {
  console.log(`${i}: ${el}`);
}

// console.log(...menu.entries());
*/

/*
////////////////////////////////////////////////////////////
// ES6 enhanced object literals
const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const openingHours = {
  [weekdays[2]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0,
    close: 12 + 12,
  },
};

const newRestaurant = {
  rName: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours,
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
    console.log(
      `order recieved ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(ing1, ing2, ing3);
  },
  orderPizza(mainIng, ...otherIng) {
    console.log(mainIng, otherIng);
  },
};
*/

/*
////////////////////////////////////////////////////////////
if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}
// console.log(restaurant.openingHours.mon.open);

// with optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(day, open);
}

console.log(restaurant.order?.(0, 1) ?? "method does not exist");
console.log(restaurant.brr?.() ?? "method does not exist");

// const user = [{
//   name: "Anmol",
//   email: "io@pikapika.com"
// }]
const user = [];
console.log(user[0]?.name || "array empty");
*/

/*
////////////////////////////////////////////////////////////
const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const openingHours = {
  [weekdays[2]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0,
    close: 12 + 12,
  },
};

//  property names
const prop = Object.keys(openingHours);
console.log(prop);

let openStr = `we are open on ${prop.length} days: `;
for (const day of prop) {
  openStr += `${day}, `;
}

console.log(openStr);

// property values
const values = Object.values(openingHours);
console.log(values);

// entire object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`on ${key} we open at ${open} and close at ${close}`);
}
*/

/*
////////////////////////////////////////////////////////////
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const { scored } = game;
for (const [goalNum, goalName] of scored.entries()) {
  console.log(`Goal ${goalNum + 1}: ${goalName}`);
}

const gameOdds = Object.values(game.odds);
let avg = 0;
for (const x of gameOdds) avg += x;
avg /= gameOdds.length;
console.log(avg);

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "draw" : `victory ${game[team]}`
  console.log(`Odd of ${teamStr} ${odd}`);
}

const scorers = {};
for (const player of scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1)
}
console.log(scorers);
*/

/*
////////////////////////////////////////////////////////////
const orderSet = new Set(["Pizza", "Pasta", "Pizza", "Dumplings"]);
console.log(orderSet);

console.log(new Set("Anmol"));

console.log(orderSet.size);
console.log(orderSet.has("Pizza"));
console.log(orderSet.has("Bread"));

orderSet.add("Garlic Bread");
orderSet.add("Garlic Bread");
orderSet.delete("Dumplings");
// orderSet.clear();
console.log(orderSet);

for (const order of orderSet) console.log(order);

const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(new Set(staff).size);
*/

/*
////////////////////////////////////////////////////////////
const rest = new Map();
rest.set("name", "Classic Italy");
rest.set(1, "Vico, Italy");
console.log(rest.set(2, "Lisbon, Portugal"));

rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "we are open")
  .set(false, "we are closed");

console.log(rest.get("name"));
console.log(rest.get(1));

const time = 15;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

console.log(rest.has("categories"));
rest.delete(2);

rest.set(document.querySelector("h1"), "Heading")
const arr = [1, 2];
rest.set(arr, "test");
console.log(rest.get(arr));
console.log(rest);
console.log(rest.size);
// rest.clear();
*/

/*
////////////////////////////////////////////////////////////
const ques = new Map([
  ["question", "Which language is this?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "correct"],
  [false, "wrong"]
])
console.log(ques);

// convert object to map
const me = {
  "name": "Anmol",
  "age": 19,
  "city": "Chandigarh"
}
console.log(Object.entries(me));

const meMap = new Map(Object.entries(me));
console.log(meMap);

// quiz app 
console.log(ques.get("question"));
for (const [key, value] of ques) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt("enter your answer"));
// console.log(ques.get(ques.get("correct") === answer));

// convert map to array
console.log([...ques]);
// console.log(ques.entries());
console.log(...ques.values());
console.log(...ques.keys());
*/

/*
////////////////////////////////////////////////////////////
const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

const events = [...new Set(gameEvents.values())];
// console.log(events);

// gameEvents.delete(64);
// console.log(gameEvents);

const time = [...gameEvents.keys()].pop();
// console.log(time);

// console.log(
//   `An event happened, on average, every ${time / gameEvents.size} minutes`
// );

for (const [key, value] of gameEvents) {
  // if (key <= 45) console.log(`[FIRST HALF] ${key}: ${value}`);
  // if (key > 45) console.log(`[SECOND HALF] ${key}: ${value}`);
  const half = key <= 45 ? "FIRST" : "SECOND";
  console.log(`[${half} HALF] ${key}: ${value}`);
}
*/

/*
////////////////////////////////////////////////////////////
const airline = "Air India CAF";
const plane = "A380";

console.log(plane[0]);
console.log(plane[2]);
console.log("B777"[3]);

console.log(airline.length);

console.log(airline.indexOf("i"));
console.log(airline.lastIndexOf("i"));
console.log(airline.lastIndexOf("India"));

console.log(airline.slice(4, 9));

console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1)); // log everything after last encounter of " "

console.log(airline.slice(-3)); // logs last 3 letters
console.log(airline.slice(4, -3));

const checkMiddleSeat = function (seat) {
  const row = seat.slice(-1);
  if (row === "B" || row === "E") {
    console.log("Middle Seat");
  } else {
    console.log("Not a Middle Seat");
  }
};
checkMiddleSeat("11B");
checkMiddleSeat("2A");

console.log(new String("Anmol"));
console.log(typeof new String("Anmol"));
console.log(typeof new String("Anmol").slice(1));
*/

/*
////////////////////////////////////////////////////////////
const airline = "Air India";

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// fix capitalization
const passanger = "aNmoL";
const passangerLower = passanger.toLowerCase();
const passangerFinal =
  passangerLower[0].toUpperCase() + passangerLower.slice(1);
console.log(passangerFinal);

// compare email
const email = "email@hidethepain.live";
const loginEmail = "    Email@HideThePain.LIVE   ";
// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim(); // remove  whitespaces

const normalizeEmail = email.toLowerCase().trim();
console.log(normalizeEmail);
console.log(email === normalizeEmail);

// loginEmail.trimStart();
// loginEmail.trimEnd();

// replacing
const priceGB = "287,28£";
const priceUS = priceGB.replace("£", "$").replace(",", ".");
console.log(priceUS);

const announcement = "All Passengers come to bording door 24. Boarding door 24!";
console.log(announcement.replace("door", "gate"));
// console.log(announcement.replace(/door/g, "gate"));
console.log(announcement.replaceAll("door", "gate"));

// booleans
const plane = "Airbus A320neo";
console.log(plane.includes("320"));
console.log(plane.includes("Boeing"));
console.log(plane.startsWith("Airb"));
console.log(plane.endsWith("neo"));


const checkBaggage = function (items) {
  const normalize = items.toLowerCase();
  if (normalize.includes("knife") || items.includes("gun")) {
    console.log("you cannot take this luggage")
  } else {
    console.log("ok");
  }
}
checkBaggage("I have some Food and a Pocket Knife.");
*/

/*
////////////////////////////////////////////////////////////
// split and join
console.log("a+very+nice+string".split("+"));
const [firstName, lastName] = "Anmol Dhiman".split(" ");

const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

const capitalizeName = function (name) {
  const nameArr = name.split(" ");
  const nameUpper = [];
  for (const el of nameArr) {
    // nameUpper.push(el[0].toUpperCase() + el.slice(1));
    nameUpper.push(el.replace(el[0], el[0].toUpperCase()));
  }
  console.log(nameUpper.join(" "));
};
capitalizeName("jonnan ann amras");

// padding
const message = "Go to gate 23";
console.log(message.padStart(25, "+").padEnd(35, "+"));

const maskCC = function (cc) {
  // const strCC = String(cc);
  const strCC = cc + "";
  const maskedNo = strCC.slice(-4).padStart(strCC.length, "*");
  return maskedNo;
}
console.log(maskCC(1234567890123456));
console.log(maskCC("1234567890123456"));

// repeat
const message2 = "Bad weather... All flights delayed... ";
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${"✈️ ".repeat(n)}`);
}
planesInLine(5);
*/

/*
////////////////////////////////////////////////////////////
const toCamelCase = function (underscore_case) {
  const words = underscore_case.split("\n");

  for (const [i, el] of words.entries()) {
    const word = el.trim().split("_");
    const camelArr = [];
    for (const [index, element] of word.entries()) {
      if (index === 0) {
        camelArr.push(element.toLowerCase());
        continue;
      }
      const otherWords = element.toLowerCase().split("");
      otherWords[0] = otherWords[0].toUpperCase();
      camelArr.push(otherWords.join(""));
    }
    console.log(`${camelArr.join("").padEnd(20)} ${"✅ ".repeat(i + 1)}`);
  }
};

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

const btn = document.querySelector("button");
btn.innerText = "Convert";
btn.addEventListener("click", () => {
  const val = document.querySelector("textarea").value;
  toCamelCase(val);
});
*/

/*
////////////////////////////////////////////////////////////
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

for (const flight of flights.split("+")) {
  const [event, from, to, time] = flight.split(";");
  console.log(
    `${event.startsWith("_Delayed") ? "🔴" : ""}${event
      .padStart(20, " ")
      .replaceAll("_", " ")} from ${from.slice(0, 3).toUpperCase()} to ${to
      .slice(0, 3)
      .toUpperCase()} (${time.replace(":", "h")})`
  );
}
*/
