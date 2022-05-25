// TODO: make responsive for mobile devices

// FIXME: bug when moving between expandable menu items very quickly (ie, under 200ms)

// EXPANDABLE MENUS
const expandableMenus = document.querySelectorAll('.expandable');
expandableMenus.forEach((menu) => {
  menu.style.cursor = 'auto';
  menu.addEventListener('mouseenter', () => {
    expandableMenus.forEach((item) => {
      item.firstElementChild.style.display = 'none';
    });
    window.setTimeout(
      () => (menu.firstElementChild.style.display = 'block'),
      200
    );
  });
  menu.addEventListener('mouseleave', () => {
    expandableMenus.forEach((item) => {
      item.firstElementChild.style.display = 'none';
    });
    menu.firstElementChild.style.display = 'none';
  });
});

// IMAGE SLIDER
let currentImgNum = 1;
const currentImg = document.getElementById('displayed-img');

const rightArrow = document.getElementById('right-arrow');
rightArrow.addEventListener('click', () => {
  if (currentImgNum === 4) {
    currentImgNum = 1;
  } else {
    currentImgNum++;
  }
  currentImg.style.opacity = 0;
  window.setTimeout(() => {
    currentImg.style.opacity = 1;
    currentImg.setAttribute('src', `img/slider/${currentImgNum}.jpg`);
  }, 1000);
});

const leftArrow = document.getElementById('left-arrow');
leftArrow.addEventListener('click', () => {
  if (currentImgNum === 1) {
    currentImgNum = 4;
  } else {
    currentImgNum--;
  }
  currentImg.style.opacity = 0;
  window.setTimeout(() => {
    currentImg.style.opacity = 1;
    currentImg.setAttribute('src', `img/slider/${currentImgNum}.jpg`);
  }, 1000);
});

window.setInterval(() => {
  rightArrow.click();
}, 5000);
