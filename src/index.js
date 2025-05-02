const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const menu = document.getElementById("menu");
const body = document.body;

function showMenu() {
  menu.classList.remove("hidden");
  menu.classList.add("flex", "fixed", "inset-0");
  body.classList.add("overflow-hidden");
}

function hideMenu() {
  menu.classList.remove("flex", "fixed", "inset-0");
  menu.classList.add("hidden");
  body.classList.remove("overflow-hidden");
}

menuBtn.addEventListener("click", showMenu);
closeBtn.addEventListener("click", hideMenu);
