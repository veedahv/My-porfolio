const hamburger = document.querySelector('#hamburger'),
 hamburgerBtn = document.querySelector('#hamburger-btn'),
  hamburgerClass = document.querySelector('.hamburger'),
  mobileNavLinks = document.querySelectorAll('.mobile-nav-link'),
  header = document.querySelector('header'),
  mobileNav = document.querySelector('.mobile-nav');
hamburgerBtn.addEventListener('click', function (event) {
  console.log('working');
  hamburgerClass.classList.toggle('close');
  mobileNav.classList.toggle('show');
})
mobileNavLinks.forEach(function (mobileNavLink) {
  mobileNavLink.addEventListener('click', function (event) {
    let checkShow = mobileNav.classList.contains('show');
    console.log(checkShow)
    if (checkShow) {
      hamburgerClass.classList.toggle('close');
      mobileNav.classList.remove('show');
    }
  })
})
