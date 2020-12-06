const mobileNavLinks = document.querySelectorAll('.mobile-nav-link'),
  navLinks = document.querySelectorAll('.nav-link'),
  sections = document.querySelectorAll('section'),
  header = document.querySelector('header'),
  loader = document.querySelector('.loader'),
  containAll = document.querySelector('.contain-all'),
  navigationCheckbox = document.querySelector('.navigation-checkbox'),
  aboutCards = document.querySelectorAll('.about-page-card'),
  certificateShow = document.querySelector('.certificate-img-contain'),
  certificateShowImg = document.querySelector('.certificate-img'),
  viewCertificate = document.querySelector('.view-certificate'),
  certificateBtns = document.querySelectorAll('.certificate-btn');


  


const preLoadAdd = () => {
  loader.style.visibility = 'visible';
  containAll.style.visibility = 'hidden';
}
const preLoadRemove = () => {
  loader.style.visibility = 'hidden';
  containAll.style.visibility = 'visible';
}

setTimeout(preLoadRemove, 1000);

const resizeHeight = () => {
  aboutCards.forEach(aboutCard => {
    aboutCard.style.height = getComputedStyle(aboutCard).width;
    // console.log(getComputedStyle(aboutCard).width);  
  });
}
resizeHeight();
// window.onresize = resizeHeight();
window.onresize = function() {
          aboutCards.forEach(aboutCard => {
            aboutCard.style.height = getComputedStyle(aboutCard).width;
            // console.log(getComputedStyle(aboutCard).width);
          });
}

const isInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  // let elId = el.id;
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
navLinks.forEach(navLink => {
  navLink.addEventListener('click', () => {
    navigationCheckbox.checked = false;
    // console.log(navigationCheckbox.checked);    
  })
})
certificateBtns.forEach(certificateBtn => {
  certificateBtn.addEventListener('click', () => {
    let getImg = certificateBtn.closest('.card-body').querySelector('img');
    // console.log(certificateBtn.closest('.card-body').querySelector('img'));
    viewCertificate.src = getImg.src;
    viewCertificate.alt = getImg.alt;
    certificateShow.style.display = 'flex';
    // console.log(certificateShow);
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