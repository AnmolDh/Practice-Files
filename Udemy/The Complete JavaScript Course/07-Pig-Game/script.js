"use strict";

const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const diceImgEl = document.querySelector(".dice");
const newBtnEl = document.querySelector(".btn--new");
const rollBtnEl = document.querySelector(".btn--roll");
const holdBtnEl = document.querySelector(".btn--hold");
const currentScoresEl = document.querySelectorAll(".current-score");

let playing, activePlayer, currentScore, scores;

const init = () => {
  playing = true;
  activePlayer = 0;
  currentScore = 0;
  scores = [0, 0];
  playing = true;
  currentScore = 0;
  diceImgEl.classList.add("hidden");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");

  for (let i = 0; i < currentScoresEl.length; i++) {
    currentScoresEl[i].textContent = 0;
    document.getElementById(`score--${i}`).textContent = 0;
  }
};
init();

// diceImgEl.style.display = "none";
diceImgEl.classList.add("hidden");

const switchPlayer = () => {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

rollBtnEl.addEventListener("click", () => {
  if (playing) {
    const randomNumber = Math.trunc(Math.random() * 6) + 1;
    diceImgEl.classList.remove("hidden");
    diceImgEl.src = `dice-${randomNumber}.png`;

    if (randomNumber !== 1) {
      currentScore += randomNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

holdBtnEl.addEventListener("click", () => {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 10) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--active");
    } else {
      switchPlayer();
    }
  }
});

newBtnEl.addEventListener("click", init);
