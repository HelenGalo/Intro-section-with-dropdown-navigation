import '../assets/style/style.css';

const lista = document.querySelectorAll(".sub-menu");
const burger = document.getElementById("burger-menu");
const close = document.querySelector(".close-menu");
let nav = document.getElementById("nav");
const active = document.querySelector(".submenu.active");

function activeSubMenu (event) {
  event.preventDefault();

  const actual = event.currentTarget;
  const subMenu = actual.querySelector(".submenu");
  const arrowImg= actual.querySelector("a .arrow");

  subMenu.classList.toggle("active");
  arrowImg.setAttribute("src", "./assets/images/icon-arrow-up.svg");



  if (!active)
    arrowImg.setAttribute("src", "./assets/images/icon-arrow-down.svg");
}

lista.forEach((menuItem) => {
  menuItem.addEventListener("click", activeSubMenu);
});

function openMenu() {
  nav.classList.add("active");
}

burger.addEventListener("click", openMenu);

function closeMenu() {
  nav.classList.remove("active");
} 

close.addEventListener("click", closeMenu);
