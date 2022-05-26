// TODO: make responsive for mobile devices

// FIXME: bug when moving between expandable menu items very quickly (ie, under 200ms)

// EXPANDABLE MENUS
const expandableMenus = document.querySelectorAll('.expandable');
expandableMenus.forEach((menu) => {
  menu.style.cursor = 'auto';
  menu.addEventListener('mouseenter', () => {
    window.setTimeout(() => {
      menu.firstElementChild.classList.toggle('shown');
    }, 200);
  });
  menu.addEventListener('mouseleave', () => {
    menu.firstElementChild.classList.toggle('shown');
  });
});

// IMAGE SLIDER
let currentImgNum = 1;
const currentImg = document.getElementById('displayed-img');

const rightArrow = document.getElementById('right-arrow');
const leftArrow = document.getElementById('left-arrow');

let scroll;
resetScroll();

function resetScroll() {
  window.clearInterval(scroll);
  scroll = window.setInterval(() => {
    rightArrow.click();
  }, 5000);
}

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
  setSelectedDot(currentImgNum);
  resetScroll();
});

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
  setSelectedDot(currentImgNum);
  resetScroll();
});

const dots = document.querySelectorAll('.dot');
dots.forEach((dot) => {
  dot.addEventListener('click', () => {
    currentImg.style.opacity = 0;
    window.setTimeout(() => {
      currentImg.style.opacity = 1;
      currentImg.setAttribute(
        'src',
        `img/slider/${dot.getAttribute('value')}.jpg`
      );
    }, 1000);
    setSelectedDot(dot.getAttribute('value'));
    currentImgNum = Number(dot.getAttribute('value'));
    resetScroll();
  });
});

function setSelectedDot(num) {
  let counter = 1;
  dots.forEach((dot) => {
    if (counter == num) {
      dot.classList.add('selectedDot');
    } else {
      dot.classList.remove('selectedDot');
    }
    counter++;
  });
}
