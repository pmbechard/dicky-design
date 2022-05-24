// TODO: add picture scrolling functionality and auto-scroll
// TODO: make responsive for mobile devices

// FIXME: bug when moving between expandable menu items very quickly (ie, under 200ms)
// FIXME: fix gap at bottom of img container

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
