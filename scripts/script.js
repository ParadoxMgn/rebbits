'use strict';

const wrapper = document.querySelector('.wrapper');
const startPage = wrapper.innerHTML;

const swapElements = (e, arrow, className, block, index, diff) => {
  if (block[index + diff]) {
    if (e.target.closest(`${className}`) === arrow[index]) {
      console.log(e.target.closest(`${className}`));
      const box = block[index].innerHTML;
      block[index].innerHTML = block[index + diff].innerHTML;
      block[index + diff].innerHTML = box;
    }
  }
};

document.title = 'Rebbits';

wrapper.addEventListener('click', e => {
  const block = document.querySelectorAll('.block');
  const leftArrow = document.querySelectorAll('.left');
  const rightArrow = document.querySelectorAll('.right');
  const topArrow = document.querySelectorAll('.top');
  const bottomArrow = document.querySelectorAll('.bottom');

  block.forEach((item, index) => {
    swapElements(e, rightArrow, '.right', block, index, 1);
    swapElements(e, leftArrow, '.left', block, index, -1);
    swapElements(e, bottomArrow, '.bottom', block, index, 5);
    swapElements(e, topArrow, '.top', block, index, -5);
  });

  if (e.target.closest('.btn-reset')) {
    wrapper.innerHTML = startPage;
  }
});