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
)