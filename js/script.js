// Swiper js
var swiper = new Swiper(".mySwiper", {
    autoplay: {
        delay: 2000,
        disableonInteraction: false,
    },
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
    },
    mousewheel: true,
    keyboard: true,
});








// Nav open close
let hamburger = document.querySelector('.hamburger');
let hamLogo = document.querySelector('.hamburger i');
let nav = document.querySelector('nav');
let navAnchor = document.querySelectorAll('.nav-anchor');

hamburger.addEventListener('click', () => {
    hamLogo.classList.toggle('bx-menu-alt-right');
    hamLogo.classList.toggle('bx-x');
    nav.classList.toggle('nav-open');
});






// Nav close after link click
let navRemove = () => {
    nav.classList.remove('nav-open');
    hamLogo.classList.add('bx-menu-alt-right');
    hamLogo.classList.remove('bx-x');
};

navAnchor.forEach (n => {
    n.addEventListener('click', navRemove);
})






let header = document.querySelector('header');
let mainLogo = document.querySelector('.header-logo');
let phone = document.querySelector('.header-phone');
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY; 
        let Offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= Offset && top < Offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('nav-active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('nav-active');
            });
        }
    });

    // Change header bg color
    header.classList.toggle('header-active', window.scrollY > 100);
    // Change header logo color
    mainLogo.classList.toggle('nav-color', window.scrollY > 100);
    // Change header links color
    navAnchor.forEach(n => {
        n.classList.toggle('nav-color', window.scrollY > 100);
    });
    // Change header phone no. color
    phone.classList.toggle('nav-color', window.scrollY > 100);
    // Change Hamburger color
    hamburger.classList.toggle('nav-color', window.scrollY > 100);
}

// Scroll Reveal Animation
  