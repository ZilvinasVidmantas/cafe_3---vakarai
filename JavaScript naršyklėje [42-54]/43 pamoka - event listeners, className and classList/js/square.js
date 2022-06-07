const square = document.querySelector('.js-square');
const btnChangeToRed = document.querySelector('.js-btn-change-to-red');
const btnChangeToBlue = document.querySelector('.js-btn-change-to-blue');

const changeSquareColorToRed = () => {
  if (square.classList.contains('bg-blue')) {
    square.classList.remove('bg-blue');
  }
  square.classList.add('bg-red');
};

const changeSquareColorToBlue = () => {
  if (square.classList.contains('bg-red')) {
    square.classList.remove('bg-red');
  }
  square.classList.add('bg-blue');
};

btnChangeToRed.addEventListener('click', changeSquareColorToRed);
btnChangeToBlue.addEventListener('click', changeSquareColorToBlue);

// Sukurkite papildomą mygtuką, kuris pakeistų kvadračiuko spalvą į žalią
