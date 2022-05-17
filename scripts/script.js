'use strict';

const items = document.querySelectorAll('.portfolio__project');

items.forEach((item) => {
  item.addEventListener('click', () => {
    const link = item.querySelector('.portfolio__project__link');
    window.open(link.href);
  });
});
