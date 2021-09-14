// Selectors
let headerMenu = document.querySelector('.header');
let headerAlt = document.querySelector('#headerAlt')
let hamburgerMenu = document.querySelector('.hamburger-menu');

window.addEventListener('scroll', function() {
    let windowPosition = window.scrollY > 500;
    headerMenu.classList.toggle('active', windowPosition)
})

hamburgerMenu.addEventListener('click', function() {
    headerMenu.classList.toggle('menu-open');
})

hamburgerMenu.addEventListener('click', function() {
    headerAlt.classList.toggle('menu-open');
})