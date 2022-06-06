const firstSection = document.querySelector('section');
// firstSection.style.background = 'red';
firstSection.className = 'mano-klase'

const firstContainer = document.querySelector('.container');
firstContainer.classList.add('bg-success');

/*
  1. Suraskite pirmą h1 elementą puslapyje ir uždėkite 'primary' spalvos sienelę naudodami bootstrap
  klases.
*/
const firstHeading = document.querySelector('h1');
firstHeading.className = 'border border-primary';

/*
  2. Suraskite pirmą h2 elementą puslapyje ir uždėkite 'solid 2px magenta' sienelę, naudodami style 
  atributą.
*/
const firstH2Heading = document.querySelector('h2');
firstH2Heading.style.border = 'solid 2px red';

/*
  3. Suraskite pirmą h2 elementą firstSection'e ir uždėkite 'bg-info' klasę.
*/
const firstH2HeadingInSection = firstSection.querySelector('h2');
firstH2HeadingInSection.className = 'bg-info';