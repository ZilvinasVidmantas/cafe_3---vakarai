import FormComponent from './components/form-component.js';
import formatRegistionErrors from './helpers/error-formatters/format-registration-errors.js';
import formatProductCreationErrors from './helpers/error-formatters/format-product-creation-errors.js';

const registerUser = (values) => {
  //  Naudosime, kad įgalinti apjungima su kityais programos moduiliais (Serveriu, kuriame bus užregistruotas vartotojas)
};

const registerForm = new FormComponent(
  '.js-registration-form',
  formatRegistionErrors,
  registerUser,
);

const addProduct = (values) => {
  console.log('addProduct');
  console.log(values);
};

const createProductForm = new FormComponent(
  '.js-product-create-form',
  formatProductCreationErrors,
  addProduct,
);

/*
  ~10 pertrauka
  ~10 metodo įsigilinimas
  ~10 iliustracija
  21:35 Pristatymai
  
  Paaiškinkite FormComponent klasės metodus, naudodami savo sukurtą iliustraciją.
    Nupieškite iliustraciją, su bet kokia programa ir per 2-4 minutes paaiškinkite 
    funkcijų veikimą, nuadojant iliustraciją
      constructor
        2, 11, 21
      get values();
        3, 12
      initFields
        4, 13
      initErrorHtmlElements
        5, 15
      initEventListener
        7, 16
      clearFieldsErrors
        8, 18
      displayFormErrors
        10, 20

      2.	CAFE3	Amanda Pakalniškytė
      3.	CAFE3	Andrius Mikalauskas
      4.	CAFE3	Artūras Gečas
      5.	CAFE3	Danielius Zavackas
      7.	CAFE3	Dovilė Brazinskė
      8.	CAFE3	Gediminas Kubilius
      10	CAFE3	Ivona Skliutaitė
      11.	CAFE3	Juozas Snieška
      12.	CAFE3	Karolis Jonaitis
      13.	CAFE3	Karolis Makselis
      15.	CAFE3	Laura Vidmantaitė
      16.	CAFE3	Mažvydas Vaicekauskas
      18.	CAFE3	Tatjana Sibik
      20.	CAFE3	Vytautas Palubinskas
      21.	CAFE3	Žilvinas Dvareckas
*/