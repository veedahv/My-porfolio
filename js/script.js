const hamburger = document.querySelector('#hamburger'),
  hamburgerBtn = document.querySelector('#hamburger-btn'),
  hamburgerClass = document.querySelector('.hamburger'),
  mobileNavLinks = document.querySelectorAll('.mobile-nav-link'),
  navLinks = document.querySelectorAll('.nav-link'),
  sections = document.querySelectorAll('section'),
  header = document.querySelector('header'),
  aboutCards = document.querySelectorAll('.about-page-card'),
  certificateShow = document.querySelector('.certificate-img-contain'),
  certificateShowImg = document.querySelector('.certificate-img'),
  viewCertificate = document.querySelector('.view-certificate'),
  certificateBtns = document.querySelectorAll('.certificate-btn'),
  mobileNav = document.querySelector('.mobile-nav');
// let viewCertificate = document.querySelector('.view-certificate');
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

// node.isFork ? parentForkCount = node.parent.forkCount : parentForkCount = 0;

// forkCountLi.innerText = forkCount + parentForkCount;

const resizeHeight = () => {
  aboutCards.forEach(aboutCard => {
    aboutCard.style.height = getComputedStyle(aboutCard).width;
    console.log(getComputedStyle(aboutCard).width);  
  });
}
resizeHeight();
// window.onresize = resizeHeight();
window.onresize = function() {
          aboutCards.forEach(aboutCard => {
            aboutCard.style.height = getComputedStyle(aboutCard).width;
            console.log(getComputedStyle(aboutCard).width);  
          });
}

function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  let elId = el.id;
  // console.log(rect.top);
  // console.log(rect.bottom);
  // console.log(elId);
  if (
    // rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.top <= 100
    // rect.top <= document.documentElement.scrollTop || document.body.scrollTop

  ) {
    navLinks.forEach((navLink) => {
      navLink.classList.contains(el.id) ? navLink.classList.add('active') : navLink.classList.remove('active');
    })
  }
}
certificateBtns.forEach(certificateBtn => {
  certificateBtn.addEventListener('click', () => {
    let getImg = certificateBtn.closest('.card-body').querySelector('img');
    console.log(certificateBtn.closest('.card-body').querySelector('img'));
    viewCertificate.src = getImg.src;
    viewCertificate.alt = getImg.alt;
    certificateShow.style.display = 'flex';
    console.log(certificateShow);
  })
})
document.addEventListener('click', (event) => {
    let isClickInside0 = certificateBtns[0].contains(event.target);
    let isClickInside1 = certificateBtns[1].contains(event.target);
    let isClickInside2 = certificateBtns[2].contains(event.target);
    let isClickInside3 = certificateBtns[3].contains(event.target);
    let isClickInside4 = certificateBtns[4].contains(event.target);
    let isClickInsideCertificate = certificateShowImg.contains(event.target);
  
      
      if (!isClickInside0 && !isClickInside1 && !isClickInside2 && !isClickInside3 && !isClickInside4 && !isClickInsideCertificate) {
        certificateShow.style.display = 'none';   
      }
    
  // certificateBtns.forEach(certificateBtn => {
  //   let isClickInside = certificateBtn.contains(event.target);
  //   let isClickInsideCertificate = certificateShowImg.contains(event.target);
  
      
  //     if (!isClickInside && !isClickInsideCertificate) {
  //       certificateShow.style.display = 'none';
  //       console.log(isClickInside);
  //       console.log(isClickInsideLi);
  //       console.log(event.target);      
  //     }
    
  // })
});
document.addEventListener('scroll', () => {
  sections.forEach((section) => {
    isInViewport(section);
  })
});