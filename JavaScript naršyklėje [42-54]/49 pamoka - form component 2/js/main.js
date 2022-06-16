import FormComponent from './components/form-component.js';
import formatRegistionErrors from './helpers/error-formatters/format-registration-errors.js';

const registerUser = (values) => {
  //  Naudosime, kad įgalinti apjungima su kityais programos moduiliais (Serveriu, kuriame bus užregistruotas vartotojas)
};


const registerFormComponent = new FormComponent(
  '.js-registration-form',
  formatRegistionErrors,
  registerUser,
);

const addProduct = (values) => {
  console.log('addProduct');
  console.log(values);
};

/*
  Turime Funkciją addProduct, kuri ateityje pridės produktą į localStorage.
  Duomenis turime įvesti į formą kurios selektorius yra 'js-product-create-form'.
  Šios formos validacijos funkcija yra išsaugota './helpers/error-formatters/format-produt-cretion-errrors.js' faile.
  Sėkmingu formos duomenų įvedimo ir submit atveju turi vykdyti funkciją 'addProduct'.

  Užduotis:
    Panaudokite FormComponent klasę, kad įgalinti aukščiau aprašyti funkcionalumą.
*/