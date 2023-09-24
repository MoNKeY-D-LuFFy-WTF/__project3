const headerNavContent = document.querySelector(".header__nav-content");
const body = document.body;
const headerNav = document.querySelector(".header__nav");
const headerList = document.querySelector(".header__nav-list");
const headerBurger = document.querySelector(".header__nav-burger");

headerBurger.addEventListener("click", () => {
    headerList.classList.toggle("active");
    headerBurger.classList.toggle("active");
    body.classList.toggle("active");
})
console.log(headerNav)
window.addEventListener("scroll", () => {
    if (Math.floor(window.scrollY) > 450) {
        headerNavContent.classList.add("header__nav-scroll")
    }
    if (Math.floor(window.scrollY) < 450) {
        headerNavContent.classList.remove("header__nav-scroll")
    }
})