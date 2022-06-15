import Validator from "../helpers/Validator.js";
import {
  getFormFields,
  getFormErrorElements,
  handleFormSubmit
} from "../helpers/form-helpers.js";

const createProductForm = document.querySelector('.js-product-create-form');
const fields = getFormFields(createProductForm);
const errorElements = getFormErrorElements(createProductForm);

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

const addProduct = (values) => {
  console.log('addProduct');
  console.log(values);
};

createProductForm.addEventListener('submit',
  (event) => handleFormSubmit(
    {
      event,
      fields,
      errorElements,
      formatErrors: formatCreateProductErrors,
    },
    addProduct
  )
);
