const loader = document.querySelector('.loader'),
  containAll = document.querySelector('.contain-all');



const preLoadAdd = () => {
  loader.style.visibility = 'visible';
  containAll.style.visibility = 'hidden';
    // loader.style.display = 'flex';
    // containAll.style.display = 'none';
}
// preLoadAdd();
const preLoadRemove = () => {
  loader.style.visibility = 'hidden';
  containAll.style.visibility = 'visible';
    //   loader.style.display = 'none';
    //   containAll.style.display = 'contents';
}

setTimeout(preLoadRemove, 50);


