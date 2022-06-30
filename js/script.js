const mobileNavLinks = document.querySelectorAll('.mobile-nav-link'),
  navLinks = document.querySelectorAll('.nav-link'),
  sections = document.querySelectorAll('section'),
  header = document.querySelector('header'),
  form = document.querySelector('form'),
  loader = document.querySelector('.loader'),
  name = document.querySelector('#name'),
  email = document.querySelector('#email'),
  subject = document.querySelector('#subject'),
  message = document.querySelector('#message'),
  containAll = document.querySelector('.contain-all'),
  navigationCheckbox = document.querySelector('.navigation-checkbox'),
  aboutCards = document.querySelectorAll('.about-page-card'),
  certificateShow = document.querySelector('.certificate-img-contain'),
  certificateShowImg = document.querySelector('.certificate-img'),
  showDetailsCheck = document.querySelectorAll('.show-details-check'),
  viewCertificate = document.querySelector('.view-certificate'),
  certificateBtns = document.querySelectorAll('.certificate-btn');


let certBtn;

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
window.onresize = function () {
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
const isCertInside = function (event) {
  if (certificateShow.style.display == 'flex') {
    if (event.target.classList.contains('certificate-btn')) {
      certBtn = event.target;
      // console.log(event.target);
      // console.log(event.target.classList);
    }
    let isClickInsideCertificate = certificateShowImg.contains(event.target);
    let isCertificateBtn = certBtn.contains(event.target);
    if (!isCertificateBtn && !isClickInsideCertificate) {
      certificateShow.style.display = 'none';
      // console.log('lalalayaya');
      document.removeEventListener('click', isCertInside);
    // } else {
      // console.log('ayayllayay');
    }
  // } else {
  //   console.log('llayayayayoooo');
  //   document.removeEventListener('click', isCertInside);
  }
}
const isProjectInside = function (event) {
  // if (certificateShow.style.display == 'flex') {
    // if (event.target.classList.contains('certificate-btn')) {
    //   certBtn = event.target;
    //   console.log(event.target);
    //   console.log(event.target.classList);
    // }
    // let isClickInsideCertificate = certificateShowImg.contains(event.target);
    // let isCertificateBtn = certBtn.contains(event.target);
    // if (!isCertificateBtn && !isClickInsideCertificate) {
      console.log(event.target.classList);
      console.log(!event.target.classList.contains('project-content'));
      if (!event.target.classList.contains('project-content')) {
      showDetailsCheck.forEach(showDetails => {
          showDetails.checked = false;
      });
      // console.log('lalalayaya');
      document.removeEventListener('click', isProjectInside);
    // } else {
      // console.log('ayayllayay');
    }
  // } else {
  //   console.log('llayayayayoooo');
  //   document.removeEventListener('click', isCertInside);
  // }
}
navLinks.forEach(navLink => {
  navLink.addEventListener('click', () => {
    navigationCheckbox.checked = false;
    // console.log(navigationCheckbox.checked);    
  })
})
// certificateBtns.forEach(certificateBtn => {
//   certificateBtn.addEventListener('click', () => {
//     let getImg = certificateBtn.closest('.card-body').querySelector('img');
//     viewCertificate.src = getImg.src;
//     viewCertificate.alt = getImg.alt;
//     certificateShow.style.display = 'flex';
//     document.addEventListener('click', isCertInside);
//   })
// });
showDetailsCheck.forEach(showDetails => {
  showDetails.addEventListener('change', () => {
    document.addEventListener('click', isProjectInside);
  })
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
const saveMessage = () => {
  //  fetch('http://localhost:8081/', {
  fetch('https://portfolio-message.herokuapp.com/', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name.value,
      email: email.value,
      subject: subject.value,
      message: message.value,
    })
  }).then((res) => {
    return res;
    //  console.log(res);
  }).then((res) => {
    console.log(res);
    if (res.status == 200) {
      
    } else {
      
    }
  }).catch(err => console.log(err))
};

function validateEmail(emailValid) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let emailValidTest = re.test(String(emailValid).toLowerCase());
  if (emailValidTest === true) {
    saveMessage();
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