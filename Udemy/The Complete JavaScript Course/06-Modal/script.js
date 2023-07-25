"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModalBtn = document.querySelector(".close-modal");
const showModalBtn = document.querySelectorAll(".show-modal");

const showModal = () => {
  overlay.classList.remove("hidden");
  modal.classList.remove("hidden");
  // modal.style.display = "block";
};

const closeModal = () => {
  overlay.classList.add("hidden");
  modal.classList.add("hidden");
};

for (let i = 0; i < showModalBtn.length; i++) {
  showModalBtn[i].addEventListener("click", showModal);
}

closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
