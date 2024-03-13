// Hambarger js implement...............................
let menuIcon = document.querySelector("#menu-icon");
let navList = document.querySelector("#navContain");
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navList.classList.toggle("open");
  };