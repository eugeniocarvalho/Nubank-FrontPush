function scrollHeader() {
  const nav = document.getElementById("header");

  if (this.scrollY >= 50)
    nav.classList.add("active-header");
  else
    nav.classList.remove("active-header");
}

window.addEventListener("scroll", scrollHeader);


const dropdownMenu1 = document.getElementById("dropdown-item-1");
const dropdownMenu2 = document.getElementById("dropdown-item-2");
const dropdownMenu3 = document.getElementById("dropdown-item-3");

const menuItem1 = document.getElementById("menu-item-1");
const menuItem2 = document.getElementById("menu-item-2");
const menuItem3 = document.getElementById("menu-item-3");

function showDropdown1(event) {
  event.preventDefault();
  dropdownMenu1.classList.toggle("active-dropdown-menu");
  dropdownMenu2.classList.remove("active-dropdown-menu")
  dropdownMenu3.classList.remove("active-dropdown-menu")
}

function showDropdown2(event) {
  event.preventDefault();
  dropdownMenu1.classList.remove("active-dropdown-menu");
  dropdownMenu2.classList.toggle("active-dropdown-menu")
  dropdownMenu3.classList.remove("active-dropdown-menu")
}

function showDropdown3(event) {
  event.preventDefault();
  dropdownMenu1.classList.remove("active-dropdown-menu");
  dropdownMenu2.classList.remove("active-dropdown-menu")
  dropdownMenu3.classList.toggle("active-dropdown-menu")
}

function RemoveDropdown1() {
  dropdownMenu1.classList.remove("active-dropdown-menu")
}

function RemoveDropdown2() {
  dropdownMenu2.classList.remove("active-dropdown-menu")
}


function RemoveDropdown3() {
  dropdownMenu3.classList.remove("active-dropdown-menu")
}

menuItem1.addEventListener("click", showDropdown1);
menuItem2.addEventListener("click", showDropdown2);
menuItem3.addEventListener("click", showDropdown3);

dropdownMenu1.addEventListener("mouseleave", RemoveDropdown1);
dropdownMenu2.addEventListener("mouseleave", RemoveDropdown2);
dropdownMenu3.addEventListener("mouseleave", RemoveDropdown3);
