const menu = document.querySelector("#menu");
const nav = document.querySelector("#nav");

const toogleMenu = () => nav.classList.toggle("hidden");

menu.addEventListener("click", (event) => toogleMenu());
