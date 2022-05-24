const expandableMenus = document.querySelectorAll('.expandable');
expandableMenus.forEach((menu) => {
  menu.style.cursor = 'auto';
  menu.addEventListener('mouseenter', () => {
    window.setTimeout(
      () => (menu.firstElementChild.style.display = 'block'),
      200
    );
  });
  menu.addEventListener('mouseleave', () => {
    menu.firstElementChild.style.display = 'none';
  });
});
