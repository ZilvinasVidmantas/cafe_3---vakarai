import Validator from "../helpers/validator.js";
import {
  getFormFields,
  getFormErrorElements,
  handleFormSubmit
} from "../helpers/form-helpers.js";

const createProductForm = document.querySelector('.js-product-create-form');
const fields = getFormFields(createProductForm);
const errorElements = getFormErrorElements(createProductForm);

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
