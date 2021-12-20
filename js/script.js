"use strict";
const modalWindow = document.querySelector("#modal-window");
const openAccBtns = document.querySelectorAll(".open-acc");
const closeModalBtn = document.querySelector(".close-btn");

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
