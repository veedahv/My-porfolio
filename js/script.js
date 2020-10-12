const hamburger = document.querySelector('.hamburger'),
    header = document.querySelector('header'),
    mobileNav = document.querySelector('.mobile-nav');
hamburger.addEventListener('click', function (event) {
          hamburger.classList.toggle("is-active");
          mobileNav.classList.toggle("show");
})
