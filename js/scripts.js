const navbarToggle = document.querySelector('#navbar-toggle');
const menuClose = document.querySelector('#close-btn');
const mobileMenu = document.querySelector('#mobile-menu');
const overlayMobile = document.querySelector('#overlay-mobile-menu');

document.addEventListener("DOMContentLoaded", () => {

    navbarToggle.addEventListener("click", () => {
        mobileMenu.classList.add("show");
        overlayMobile.classList.add("show");
    });

    menuClose.addEventListener("click", () => {
        mobileMenu.classList.remove("show");
        overlayMobile.classList.remove("show");
    });

});