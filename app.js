const toggleMenu = document.querySelector(".toggle-menu");
const nav = document.querySelector(".navbar");


toggleMenu.addEventListener("click", ()=>{
    nav.classList.toggle("open-nav");
    toggleMenu.classList.toggle("close-btn");
})