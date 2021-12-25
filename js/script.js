"use strict";
const modalWindow = document.querySelector("#modal-window");
const openAccBtns = document.querySelectorAll(".open-acc");
const closeModalBtn = document.querySelector(".close-btn");
const HamburgerMenu = document.querySelector(".hamburger-menu");
const hamburgerLines = document.querySelectorAll(".line");
const hamburgerTopLine = document.querySelector(".top-line");
const hamburgerMiddleLine = document.querySelector(".middle-line");
const hamburgerBottomLine = document.querySelector(".bottom-line");
const navMenu = document.querySelector(".nav-menu");

// Opening Modal Functionality
const openModal = function (e) {
  e.preventDefault();
  modalWindow.classList.remove("hidden");
};
const closeModal = function (e) {
  e.preventDefault();
  modalWindow.classList.add("hidden");
};

openAccBtns.forEach((btn) => {
  btn.addEventListener("click", openModal);
});

closeModalBtn.addEventListener("click", closeModal);

// Humberger Menu functionality
const toggleHamburger = function () {
  hamburgerMiddleLine.classList.toggle("move-middle-line");
  hamburgerMiddleLine.classList.toggle("hidden");
  hamburgerTopLine.classList.toggle("rotate-top-line");
  hamburgerBottomLine.classList.toggle("rotate-bottom-line");
};
const navMenuDisplay = function (displayType) {
  navMenu.style.display = displayType;
};

HamburgerMenu.addEventListener("click", () => {
  if (hamburgerMiddleLine.classList.contains("hidden")) {
    toggleHamburger();
    navMenuDisplay("none");
  } else {
    toggleHamburger();
    hamburgerLines.forEach((line) => line.classList.toggle("margin-changing"));
    navMenuDisplay("flex");
  }
});
