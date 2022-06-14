import Validator from "../helpers/Validator.js";
import getFormValues from "../helpers/get-form-values.js";

const createProductForm = document.querySelector('.js-product-create-form');

const fields = Array.from(createProductForm.querySelectorAll('[name]'))
  .reduce((prevFields, field) => {
    if (field.name in prevFields) {
      if (prevFields[field.name] instanceof Array) {
        prevFields[field.name].push(field);
      } else {
        prevFields[field.name] = [prevFields[field.name], field];
      }
    } else {
      prevFields[field.name] = field;
    }

    return {
      ...prevFields
    };
  }, {});

const errorElements = Array.from(createProductForm.querySelectorAll('[field-error]'))
  .reduce((prevErrorElements, errorElement) => ({
    ...prevErrorElements,
    [errorElement.getAttribute('field-error')]: errorElement,
  }), {});

const formatCreateProductErrors = ({
  title,
  category,
  price,
  amount,
  condition,
}) => {
  const errors = {};

  const titleValidator = new Validator(title)
    .required('privaloma')
    .min(2, 'min 2 raidės')
    .max(32, 'max 32 raidės');
  if (titleValidator.hasErrors) errors.title = titleValidator.HTMLError;

  const categoryValidator = new Validator(category)
    .required('privaloma');
  if (categoryValidator.hasErrors) errors.category = categoryValidator.HTMLError;

  const priceValidator = new Validator(price)
    .required('privaloma')
    .decimalPlaces(2, 'ne daugiau kaip 2 skaičiai po kablelio')
    .positive('negali būt neigiamas skaičius')
  if (priceValidator.hasErrors) errors.price = priceValidator.HTMLError;

  const amountValidator = new Validator(amount)
    .required('privaloma')
    .decimalPlaces(0, 'turi būti sveikas skaičius')
    .positive('negali būt neigiamas skaičius')
  if (amountValidator.hasErrors) errors.amount = amountValidator.HTMLError;

  const conditionValidator = new Validator(condition)
    .required('privaloma')
  if (conditionValidator.hasErrors) errors.condition = conditionValidator.HTMLError;

  return errors;
};

const hasErrors = (errors) => Object.keys(errors).length > 0;

const displayErrors = (errors) => {
  Object.entries(errors).forEach(([key, error]) => {
    const field = fields[key];
    const errorElement = errorElements[key];

    if (field instanceof Array) {
      field.forEach(option => option.classList.add('is-invalid'));
    } else {
      field.classList.add('is-invalid');
    }

    errorElement.innerHTML = error;
  });
};

const deletePrevErrors = () => {
  Object.values(fields).forEach(field => {
    if (field instanceof Array) {
      field.forEach(option => option.classList.remove('is-invalid'));
    } else {
      field.classList.remove('is-invalid');
    }
  });
  Object.values(errorElements).forEach(errorElement => errorElement.innerHTML = '');
};

const handleCreateProduct = (event) => {
  event.preventDefault();
  deletePrevErrors();

  const values = getFormValues(event.target);
  const errors = formatCreateProductErrors(values);
  const isValid = !hasErrors(errors);

  if (isValid) {
    console.log('Formos duomenys teisingi!');
  } else {
    displayErrors(errors);
  }
};

createProductForm.addEventListener('submit', handleCreateProduct);
