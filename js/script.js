const mobileNavLinks = document.querySelectorAll('.mobile-nav-link'),
  navLinks = document.querySelectorAll('.nav-link'),
  sections = document.querySelectorAll('section'),
  header = document.querySelector('header'),
  form = document.querySelector('form'),
  loader = document.querySelector('.loader'),
  email = document.querySelector('#email'),
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
  // document.body.style.position = 'fixed';
}
// preLoadAdd();
const preLoadRemove = () => {
  loader.style.visibility = 'hidden';
  containAll.style.visibility = 'visible';
  // document.body.style.position = 'relative';
}

setTimeout(preLoadRemove, 2000);

const resizeHeight = () => {
  aboutCards.forEach(aboutCard => {
    aboutCard.style.height = getComputedStyle(aboutCard).width;
  });
}
resizeHeight();
// window.onresize = resizeHeight();
window.onresize = function() {
          aboutCards.forEach(aboutCard => {
            aboutCard.style.height = getComputedStyle(aboutCard).width;
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
    viewCertificate.src = getImg.src;
    viewCertificate.alt = getImg.alt;
    certificateShow.style.display = 'flex';
    if (certificateBtn.disabled === true) {
      document.querySelector('.no-certificate-toast').style.animation = `inOut 5s ease-in-out`;
      setTimeout(() => {
        document.querySelector('.no-certificate-toast').style.animation = `none`;        
      }, 5000);
      console.log('lalala yaya');
    } else {
      console.log('lalala');
    }
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
});
document.addEventListener('scroll', () => {
  sections.forEach((section) => {
    isInViewport(section);
  })
});

// Show error message
const showError = (message) => {
  const formGroup = email.parentElement.closest('.input-wrap');
  formGroup.querySelector('small').innerText = message;
};

function validateEmail(emailValid) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let emailValidTest = re.test(String(emailValid).toLowerCase());
  if (emailValidTest === true) {
    showError('');
  email.style.marginBottom = "12px";
  form.querySelectorAll('input').forEach(inputTag => {
    inputTag.value = '';
  });
  form.querySelector('textarea').value = '';
} else {
  showError('Email invalid');
  email.style.marginBottom = "0px";
  }
}

form.addEventListener('submit', function (event) {
  event.preventDefault();
  if (email.value !== '') {
    validateEmail(email.value);
  }
});