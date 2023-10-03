// Hamburger Menu
const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

//  Js for About Section
let tablink = document.getElementsByClassName("tab-link");
let tabcontent = document.getElementsByClassName("tab-content");

function openTab(tabname) {
  for (tab of tablink) {
    tab.classList.remove("active-link");
  }
  for (tabcont of tabcontent) {
    tabcont.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}