const square = document.querySelector('.js-square');
const btnChangeToRed = document.querySelector('.js-btn-change-to-red');
const btnChangeToBlue = document.querySelector('.js-btn-change-to-blue');
const btnChangeToGreen = document.querySelector('.js-btn-change-to-green');
const btnIncWidth = document.querySelector('.js-btn-inc-width');
const btnDecWidth = document.querySelector('.js-btn-dec-width');
const btnIncHeight = document.querySelector('.js-btn-inc-height');
const btnDecHeight = document.querySelector('.js-btn-dec-height');
const colorInput = document.querySelector('.js-color-input');

// color handlers
{
  const bgClasses = ['bg-blue', 'bg-red', 'bg-green'];

  const removeBgColor = () => {
    square.style.removeProperty('background-color');
    colorInput.value = '';
    bgClasses.forEach(cls => {
      if (square.classList.contains(cls)) {
        square.classList.remove(cls);
      }
    });
  };

  const changeSquareColorToRed = () => {
    removeBgColor();
    square.classList.add('bg-red');
  };

  const changeSquareColorToBlue = () => {
    removeBgColor();
    square.classList.add('bg-blue');
  };

  const changeSquareColorToGreen = () => {
    removeBgColor();
    square.classList.add('bg-green');
  };

  const changeSquareColor = (event) => {
    square.style.backgroundColor = event.target.value;
  };

  btnChangeToRed.addEventListener('click', changeSquareColorToRed);
  btnChangeToBlue.addEventListener('click', changeSquareColorToBlue);
  btnChangeToGreen.addEventListener('click', changeSquareColorToGreen);
  colorInput.addEventListener('change', changeSquareColor)
}

// size handlers
{
  let { width, height } = square.getBoundingClientRect();
  const MAX_WIDTH = 300;
  const MIN_WIDTH = 50;
  const MAX_HEIGHT = 300;
  const MIN_HEIGHT = 50;

  const increaseSquareWidth = () => {
    if (width + 50 <= MAX_WIDTH) {
      width += 50;
      square.style.width = width + 'px';
    }
  }

  const decreaseSquareWidth = () => {
    if (width - 50 >= MIN_WIDTH) {
      width -= 50;
      square.style.width = width + 'px';
    }
  }

  const increaseSquareHeight = () => {
    if (height + 50 <= MAX_HEIGHT) {
      height += 50;
      square.style.height = height + 'px';
    }
  }

  const decreaseSquareHeight = () => {
    if (height - 50 >= MIN_HEIGHT) {
      height -= 50;
      square.style.height = height + 'px';
    }
  }

  btnIncWidth.addEventListener('click', increaseSquareWidth);
  btnDecWidth.addEventListener('click', decreaseSquareWidth);
  btnIncHeight.addEventListener('click', increaseSquareHeight);
  btnDecHeight.addEventListener('click', decreaseSquareHeight);
}