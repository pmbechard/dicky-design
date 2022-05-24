const expandableMenus = document.querySelectorAll('.expandable');
expandableMenus.forEach((menu) => {
  menu.style.cursor = 'auto';
  menu.addEventListener(
    'mouseover',
    () => (menu.firstElementChild.style.display = 'block')
  );
  menu.addEventListener(
    'mouseleave',
    () => (menu.firstElementChild.style.display = 'none')
  );
});
