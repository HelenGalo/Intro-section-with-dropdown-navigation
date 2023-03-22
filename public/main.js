import './style/style.css';
//Declaracion de variables
const lista = document.querySelectorAll(".sub-menu");
const burger = document.getElementById("burger-menu");
const close = document.querySelector(".close-menu");
let nav = document.getElementById("nav");
const active = document.querySelector(".submenu.active");


//funcion para mostrar los sub menus del dropdown
function activeSubMenu (event) {
  event.preventDefault();

  const actual = event.currentTarget; //
  const subMenu = actual.querySelector(".submenu");
  const arrowImg= actual.querySelector("a .arrow");

  subMenu.classList.toggle("active");
  arrowImg.setAttribute("src", "./images/icon-arrow-down.svg");



  if (!active)
    arrowImg.setAttribute("src", "./images/icon-arrow-down.svg");
}

lista.forEach((menuItem) => {
  menuItem.addEventListener("click", activeSubMenu);
});
//abre el menu y agrega la clase active
function openMenu() {
  nav.classList.add("active");
}

burger.addEventListener("click", openMenu);
//cierre el menu y agrega la clase active
function closeMenu() {
  nav.classList.remove("active");
} 
//Evento de escucha

close.addEventListener("click", closeMenu);
