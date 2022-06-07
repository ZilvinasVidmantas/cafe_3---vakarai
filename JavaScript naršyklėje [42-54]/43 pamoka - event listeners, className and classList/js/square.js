const square = document.querySelector('.js-square');
const btnChangeToRed = document.querySelector('.js-btn-change-to-red');
const btnChangeToBlue = document.querySelector('.js-btn-change-to-blue');
const btnChangeToGreen = document.querySelector('.js-btn-change-to-green');

const bgClasses = ['bg-blue', 'bg-red', 'bg-green'];

const removeBgClasses = () => {
  bgClasses.forEach(cls => {
    if (square.classList.contains(cls)) {
      square.classList.remove(cls);
    }
  });
};

const changeSquareColorToRed = () => {
  removeBgClasses();
  square.classList.add('bg-red');
};

const changeSquareColorToBlue = () => {
  removeBgClasses();
  square.classList.add('bg-blue');
};

const changeSquareColorToGreen = () => {
  removeBgClasses();
  square.classList.add('bg-green');
};

btnChangeToRed.addEventListener('click', changeSquareColorToRed);
btnChangeToBlue.addEventListener('click', changeSquareColorToBlue);
btnChangeToGreen.addEventListener('click', changeSquareColorToGreen);

// Sukurkite papildomą mygtuką, kuris pakeistų kvadračiuko spalvą į žalią
