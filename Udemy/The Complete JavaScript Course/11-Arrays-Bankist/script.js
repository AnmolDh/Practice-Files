"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const displayMovements = function (movements) {
  containerMovements.innerHTML = "";
  movements.forEach((mov, i) => {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}</div>
      </div>
    `;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};
displayMovements(account1.movements);

const createUsername = function (accs) {
  accs.forEach((acc) => {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name.slice(0, 1))
      .join("");
  });
};
createUsername(accounts);

const calcDisplayBalance = function (movements) {
  const bal = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${bal} EUR`;
}
calcDisplayBalance(account1.movements);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound sterling"],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/*
let arr = ["a", "b", "c", "d", "e"];

// SLICE
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(1, -2));

// Shallow Copy
console.log(arr.slice());
console.log([...arr]);


// SPLICE
// console.log(arr.splice(2));
arr.splice(-1);
arr.splice(1, 2)
console.log(arr);


// REVERSE
arr = ["a", "b", "c", "d", "e"];
const arr2 = ["j", "i", "h", "g", "f"];

console.log(arr2.reverse());
console.log(arr2);


// CONCAT
const letters = arr.concat(arr2);
console.log(letters);

console.log([...arr, ...arr2]);


// JOIN
console.log(letters.join(" - "));
*/

/*
const arr = [23, 11, 64];

console.log(arr[0]);
console.log(arr.at(0));

// getting last element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

console.log("Anmol".at(0));
*/

/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
for (const [index, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`movement ${index+1}, you deposited ${movement}`);
  } else {
    console.log(`movement ${index+1}, you withdrew ${Math.abs(movement)}`);
  }
}
movements.forEach((movement, index, array) => {
  if (movement > 0) {
    console.log(`movement ${index + 1}, you deposited ${movement}`);
  } else {
    console.log(`movement ${index + 1}, you withdrew ${Math.abs(movement)}`);
  }
});
*/

/*
const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

currencies.forEach((value, key, map) => {
  console.log(`${key}: ${value}`);
});

const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
currenciesUnique.forEach((value, _, map) => {
  console.log(`${value}: ${value}`);
});
*/

/////////////////////////////////////////////////

/*
const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCopy = dogsJulia.slice();
  dogsJuliaCopy.splice(0, 1);
  dogsJuliaCopy.splice(-2);
  const allDogs = dogsJuliaCopy.concat(dogsKate);

  allDogs.forEach((age, i) => {
    if (age >= 3) {
      console.log(`Dog Number ${i + 1} is an adult, and is ${age} years old.`);
    } else {
      console.log(`Dog Number ${i + 1} is a puppy, and is ${age} years old.`);
    }
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
*/

/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const euroToUsd = 1.1;

const movementsUSD = movements.map((mov) => mov * euroToUsd);
console.log(movementsUSD);

const movementsDes = movements.map(
  (mov, i, arr) =>
    `movement ${i + 1}, you ${mov > 0 ? "deposited" : "withdrew"} ${Math.abs(
      mov
    )}`
);
console.log(movementsDes);
*/

/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const depositMov = movements.filter((mov) => mov > 0);
console.log(depositMov);

const withdrawalMov = movements.filter((mov) => mov < 0);
console.log(withdrawalMov);
*/

/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const balance = movements.reduce((acc, mov, i, arr) => acc + mov, 0);
console.log(balance);

const max = movements.reduce((acc, mov) => {
  return acc = Math.max(acc, mov);
}, movements[0]);
console.log(max);
*/

/*
const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map((age) => {
    if (age <= 2) {
      return 2 * age;
    } else if (age >= 2) {
      return 16 + age * 4;
    }
  })
  console.log(humanAges);

  const adults = humanAges.filter((age) => age >= 18);
  console.log(adults);

  const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
  console.log(average);
}

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
*/