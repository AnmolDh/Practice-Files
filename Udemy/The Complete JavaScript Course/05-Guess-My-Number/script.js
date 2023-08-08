"use strict";

/*
////////////////////////////////////////////////////////////
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "Correct Number";

document.querySelector(".number").textContent = "11";
document.querySelector(".score").textContent = "10";

document.querySelector(".guess").value = 20;
console.log(document.querySelector(".guess").value);
*/

/*
let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", () => {
  const guessValue = Number(document.querySelector(".guess").value);

  if (!guessValue) {
    document.querySelector(".message").textContent = "No Number";
  }
  if (score > 1) {
    if (guessValue === randomNumber) {
      document.querySelector(".message").textContent = "Correct Number";
      document.querySelector(".number").textContent = randomNumber;
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";
      if (score > highscore) {
        highscore = score;
        document.querySelector(".highscore").textContent = highscore;
      }
    } else if (guessValue > randomNumber) {
      document.querySelector(".message").textContent = "Too High";
      score--;
      document.querySelector(".score").textContent = score;
    } else if (guessValue < randomNumber) {
      document.querySelector(".message").textContent = "Too Low";
      score--;
      document.querySelector(".score").textContent = score;
    }
  } else {
    document.querySelector(".message").textContent = "You Lost";
    document.querySelector(".score").textContent = 0;
  }
});

document.querySelector(".again").addEventListener("click", () => {
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
});
*/

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", () => {
  const guessValue = Number(document.querySelector(".guess").value);

  if (!guessValue) {
    displayMessage("No Number");
  } else if (guessValue === randomNumber) {
    displayMessage("Correct Number");
    document.querySelector(".number").textContent = randomNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guessValue !== randomNumber) {
    displayMessage(guessValue > randomNumber ? "Too High" : "Too Low");
    score--;
    document.querySelector(".score").textContent = score;
  } else {
    displayMessage("You Lost");
    document.querySelector(".score").textContent = 0;
  }
});

document.querySelector(".again").addEventListener("click", () => {
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
});