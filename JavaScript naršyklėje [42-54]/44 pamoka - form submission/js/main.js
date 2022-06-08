'use strict';

const registerForm = document.querySelector('.js-register-form');

const getFormValues = (form) => {
  const formData = new FormData(form);
  const values = {};
  formData.forEach((value, key) => values[key] = value);

  return values;
}

const handleRegisterFormSubmit = (event) => {
  event.preventDefault();
  const values = getFormValues(event.target);
  console.log(values);
}

registerForm.addEventListener('submit', handleRegisterFormSubmit);


const formData = new FormData(registerForm);
formData.delete('name');


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
