import {
  getFormFields,
  getFormErrorElements,
  handleFormSubmit,
} from "../helpers/form-helpers.js";

const registrationForm = document.querySelector('.js-registration-form');
const fields = getFormFields(registrationForm);
const errorElements = getFormErrorElements(registrationForm);

registrationForm.addEventListener('submit',
  (event) => handleFormSubmit(
    {
      event,
      fields,
      errorElements,
      formatErrors: formatRegistionErrors,
    },
    registerUser
  )
);
