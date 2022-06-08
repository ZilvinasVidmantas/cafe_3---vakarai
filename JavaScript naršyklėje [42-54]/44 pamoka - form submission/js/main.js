'use strict';
const exampleForm = document.querySelector('.js-example-form');
const exampleFormResultContainer = document.querySelector('.js-example-form-result');
const registrationForm = document.querySelector('.js-registration-form');

const getFormValues = (form) => {
  const formData = new FormData(form);
  const formValues = {};

  for (const key of formData.keys()) {
    const values = formData.getAll(key);
    formValues[key] = values.length > 1 ? values : values[0];
  }

  return formValues;
};

const handleExampleFormSubmit = (event) => {
  event.preventDefault();
  const values = getFormValues(event.target);
  exampleFormResultContainer.innerHTML = JSON.stringify(values, null, 4);
};

const handleRegister = (event) => {
  event.preventDefault();
  const values = getFormValues(event.target);
  console.log(JSON.stringify(values, null, 4));
};

exampleForm.addEventListener('submit', handleExampleFormSubmit);
registrationForm.addEventListener('submit', handleRegister);

/*
    Sukurkite formos vaizdą
      * formos laukai
        * paštas -                    input,   type="email"
        * slaptažodis -               input,   type="password"
        * slaptažodžio pakartojimas - input,   type="password"
        * vardas -                    input,   type="text"
        * pavardė -                   input,   type="text"
        * miestas -                   select,  5 pasirinkimai
        * lytis -                     3 input, type="radio":    vyras, moteris ir kita
        * esami įgūdžiai -            5 input, type="checkbox": HTML, CSS, JS, React, Node
        * žinutė -                    textarea 
    
    Patarimai:
      Vaizdą pradėkite kurti nuo mažiausio ekrano dydžio
      Naudokite Bootsrap formos pavyzdžius: https://getbootstrap.com/docs/5.0/forms/overview/
      Pritaikykite formos vaizdą visiems ekrano dydžiams: https://getbootstrap.com/docs/5.0/layout/grid/
      Nepamirškite įvesties laukams pridėti ANGLIŠKAS name(atributo) reikšmes

    Sudarę formos vaizdą, suraskite ją main.js faile, ir įgalinkite šios formos duomenų atspausdinimą
    konsolėje, kuome ši forma yra submit'inama
*/
