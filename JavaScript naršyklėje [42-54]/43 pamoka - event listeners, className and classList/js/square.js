const square = document.querySelector('.js-square');
const btnChangeToRed = document.querySelector('.js-btn-change-to-red');

const changeSquareColorToRed = () => {
  square.classList.add('bg-red');
};

btnChangeToRed.addEventListener('click', changeSquareColorToRed);
