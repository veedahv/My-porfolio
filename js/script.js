const hamburger = document.querySelector('#hamburger'),
 hamburgerBtn = document.querySelector('#hamburger-btn'),
  hamburgerClass = document.querySelector('.hamburger'),
  mobileNavLinks = document.querySelectorAll('.mobile-nav-link'),
  navLinks = document.querySelectorAll('.nav-link'),
  sections = document.querySelectorAll('section'),
  header = document.querySelector('header'),
  mobileNav = document.querySelector('.mobile-nav');
// hamburgerBtn.addEventListener('click', function (event) {
//   console.log('working');
//   hamburgerClass.classList.toggle('close');
//   mobileNav.classList.toggle('show');
// })
// mobileNavLinks.forEach(function (mobileNavLink) {
//   mobileNavLink.addEventListener('click', function (event) {
//     let checkShow = mobileNav.classList.contains('show');
//     console.log(checkShow)
//     if (checkShow) {
//       hamburgerClass.classList.toggle('close');
//       mobileNav.classList.remove('show');
//     }
//   })
// })

// const starBtn = document.createElement('button');
// const starIcon = document.createElement('span');
// const starTxt = document.createElement('span');

// // copy and paste that star svg inplace of where i wrote starSvgHere

// starIcon.innerHTML = `starSvgHere`;
// starTxt.innerText = 'Star';

// starBtn.appendChild(starIcon);
// starBtn.appendChild(starTxt);
// repo.appendChild(starBtn);

function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    let elId = el.id;
      console.log(rect.top);
      console.log(rect.bottom);
      console.log(elId);
    if (
      // rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= 100
      // rect.top <= document.documentElement.scrollTop || document.body.scrollTop

    ) {
    navLinks.forEach( (navLink) => {
      navLink.classList.contains(el.id) ? navLink.classList.add('active') : navLink.classList.remove('active');
    })
    }
}
document.addEventListener('scroll', () => {
  sections.forEach( (section) => {
    isInViewport(section);
  })
});