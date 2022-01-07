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
const toggleMargin = function () {
  hamburgerLines.forEach((line) => line.classList.toggle("margin-changing"));
};
const navMenuDisplay = function (displayType) {
  navMenu.style.display = displayType;
};

HamburgerMenu.addEventListener("click", () => {
  if (hamburgerMiddleLine.classList.contains("hidden")) {
    toggleHamburger();
    toggleMargin();
    navMenuDisplay("none");
  } else {
    toggleHamburger();
    toggleMargin();
    navMenuDisplay("flex");
  }
});

// Adding smooth scrolling
navMenu.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.classList.contains("nav-link")) {
    const hrefAsID = event.target.getAttribute("href");
    document.querySelector(hrefAsID).scrollIntoView({ behavior: "smooth" });
  }
});

// Adding tabbed component
const tabs = document.querySelectorAll(".btn-oc");
const tabsContainer = document.querySelector(".oc-btns");
const tabsContent = document.querySelectorAll(".oc-content");

tabsContainer.addEventListener("click", (event) => {
  const clicked = event.target.closest(".btn-oc");

  if (!clicked) return; // When clicked is not btn

  // Removing Active classes
  tabs.forEach((tab) => tab.classList.remove("btn-oc--active"));
  tabsContent.forEach((content) =>
    content.classList.remove("oc-content--active")
  );

  // Activate the clicked tab
  clicked.classList.add("btn-oc--active");

  console.log(clicked.dataset.tab);
  // Activate the content that related to clicked btn
  document
    .querySelector(`.oc-content--${clicked.dataset.tab}`)
    .classList.add("oc-content--active");
});

// Adding mouse over/out menu bar (Passing argument to EventListener)

const handleHover = function (event) {
  if (event.target.classList.contains("nav-link")) {
    const navLink = event.target;
    const navLinkSiblings = navLink
      .closest(".nav-menu")
      .querySelectorAll(".nav-link");
    navLinkSiblings.forEach((sibling) => {
      if (sibling !== navLink) sibling.style.opacity = this;
    });
  }
};

navMenu.addEventListener("mouseover", handleHover.bind(0.3));
navMenu.addEventListener("mouseout", handleHover.bind(1));

// Sticky navbar menu when first section reaches
const showCase = document.querySelector("#show-case");
const navMenuContainer = document.querySelector("nav");
const navbarHeight = navMenuContainer.getBoundingClientRect().height;
showCase.style.paddingBottom = "";

const stickyNavbar = (entries) => {
  const [entry] = entries;
  if (!entry.isIntersecting) navMenuContainer.classList.add("sticky");
  else navMenuContainer.classList.remove("sticky");
};

const showCaseOption = {
  root: null,
  threshold: 0,
  rootMargin: `-${navbarHeight}px`,
};

const showCaseObserver = new IntersectionObserver(stickyNavbar, showCaseOption);

showCaseObserver.observe(showCase);
