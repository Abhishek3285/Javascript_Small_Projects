const navbar = document.querySelector("nav")
const hamburgerMenu = document.querySelector(".hamburger-menu-container")
const closeIcon = document.querySelector(".close-icon")
const topBtn = document.querySelector(".go-to-top")
const mainContent = document.querySelector(".main-content")

hamburgerMenu.addEventListener("click", (e) => {
    e.stopPropagation();
    navbar.classList.add("open");
    hamburgerMenu.classList.add("hide-hamburger")
})
closeIcon.addEventListener('click', () => {
    navbar.classList.remove("open");
    hamburgerMenu.classList.remove("hide-hamburger")
})
topBtn.addEventListener('click', () => {
    mainContent.scrollTo(0, 0);
})
navbar.addEventListener('click', (e) => {
    e.stopPropagation();
})
window.addEventListener("click", (e) => {
    navbar.classList.remove("open");
    hamburgerMenu.classList.remove("hide-hamburger")

})