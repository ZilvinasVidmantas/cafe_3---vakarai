'use strict';
const exampleForm = document.querySelector('.js-example-form');
const exampleFormResultContainer = document.querySelector('.js-example-form-result');
const registrationForm = document.querySelector('.js-registration-form');

const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const getFormValues = (form) => {
  const formData = new FormData(form);
  const formValues = {};

  for (const key of formData.keys()) {
    const values = formData.getAll(key);
    if (key in formValues) break;
    formValues[key] = values.length > 1 ? values : values[0];
  }

  return formValues;
};

const handleExampleFormSubmit = (event) => {
  event.preventDefault();
  const values = getFormValues(event.target);
  exampleFormResultContainer.innerHTML = JSON.stringify(values, null, 4);
};

const formatRegisterErrors = (values) => {
  const errors = {
    email: [],
    password: [],
    passwordConfirmation: []
  };

  // email
  if (values.email === undefined || values.email === '') {
    errors.email.push('laukas negali būti tuščias');
  }
  if (!EMAIL_REGEX.test(values.email)) {
    errors.email.push('neteisingas el. pašto formatas');
  }

  // password
  if (values.password === undefined || values.password === '') {
    errors.password.push('laukas negali būti tuščias');
  }

  // passwordConfirmation
  if (values.passwordConfirmation === undefined || values.passwordConfirmation === '') {
    errors.passwordConfirmation.push('laukas negali būti tuščias');
  }

  return errors;
}

const validateRegisterErrors = (errors) => {
  const errorValues = Object.values(errors);

  for (let i = 0; i < errorValues.length; i++) {
    if (errorValues[i].length > 0) return false;
  }

  return true;
}

const handleRegister = (event) => {
  event.preventDefault();
  const values = getFormValues(event.target);
  const errors = formatRegisterErrors(values);
  const isValid = validateRegisterErrors(errors);

  if (isValid) {
    console.log('Formos duomenys teisingi!');
  } else {
    console.log('Formoje yra klaidų');
    console.log(JSON.stringify(errors, null, 4))
  }

};

exampleForm.addEventListener('submit', handleExampleFormSubmit);
registrationForm.addEventListener('submit', handleRegister);
