import Validator from "./Validator.js";

const exampleForm = document.querySelector('.js-example-form');
const exampleFormResultContainer = document.querySelector('.js-example-form-result');
const registrationForm = document.querySelector('.js-registration-form');

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

const formatRegistionErrors = ({
  email,
  password,
  passwordConfirmation,
  name,
  surname,
  sex,
  city,
  message
}) => {
  const errors = {};

  const emailValidator = new Validator(email)
    .required('privaloma')
    .email('neteisingas el. pašto formatas');
  if (emailValidator.hasErrors) errors.email = emailValidator.errors;

  const passwordValidator = new Validator(password)
    .required('privaloma')
    .min(8, 'bent 8 simboliai')
    .hasUpperCase('bent 1 didžioji raidė')
    .hasLowerCase('bent 1 mažoji raidė')
    .hasNumber('bent 1 skaičius');
  if (passwordValidator.hasErrors) errors.password = passwordValidator.errors;

  const passwordConfirmationValidator = new Validator(passwordConfirmation)
    .required('privaloma')
    .min(8, 'bent 8 simboliai')
    .hasUpperCase('bent 1 didžioji raidė')
    .hasLowerCase('bent 1 mažoji raidė')
    .hasNumber('bent 1 skaičius')
    .equal(password, 'Slapažodžiai nesutampa');
  if (passwordConfirmationValidator.hasErrors) errors.passwordConfirmation = passwordConfirmationValidator.errors;

  const nameValidator = new Validator(name)
    .required('privaloma')
    .alpha('yra neleistinų simbolių')
    .min(2, 'bent 2 raidės')
    .max(32, 'daugiausiai 32 raidės');
  if (nameValidator.hasErrors) errors.name = nameValidator.errors;

  const surnameValidator = new Validator(surname)
    .required('privaloma')
    .alpha('yra neleistinų simbolių')
    .min(2, 'bent 2 raidės')
    .max(32, 'daugiausiai 32 raidės');
  if (surnameValidator.hasErrors) errors.surname = surnameValidator.errors;

  const cityValidator = new Validator(city)
    .required('privaloma');
  if (cityValidator.hasErrors) errors.city = cityValidator.errors;

  const sexValidator = new Validator(sex)
    .required('privaloma');
  if (sexValidator.hasErrors) errors.sex = sexValidator.errors;


  const messageValidator = new Validator(message)
    .max(400, 'daugiausiai 400 simbolių');
  if (messageValidator.hasErrors) errors.message = messageValidator.errors;

  return errors;
}

const hasErrors = (errors) => Object.keys(errors).length > 0;

const displayErrors = (form, errors) => {
  Object.entries(errors).forEach(([name, fieldErrors]) => {
    const fields = form.querySelectorAll(`[name=${name}]`);
    fields.forEach(field => field.classList.add('is-invalid'));
    const [firstField] = fields;

    const errorElement = document.createElement('div');
    errorElement.className = 'invalid-feedback';

    if (fieldErrors instanceof Array) {
      errorElement.innerHTML = fieldErrors.join('<br>');
    } else {
      errorElement.innerText = fieldErrors;
    }
    if (firstField.type === 'check' || firstField.type === 'radio') {
      firstField.parentElement.parentElement.insertAdjacentElement('afterend', errorElement);
      errorElement.classList.add('d-block');
    } else {
      firstField.insertAdjacentElement('afterend', errorElement);
    }
  })
}

const handleRegister = (event) => {
  event.preventDefault();
  const values = getFormValues(event.target);
  const errors = formatRegistionErrors(values);
  const isValid = !hasErrors(errors);

  if (isValid) {
    console.log('Formos duomenys teisingi!');
  } else {
    displayErrors(event.target, errors);
  }
};

exampleForm.addEventListener('submit', handleExampleFormSubmit);
registrationForm.addEventListener('submit', handleRegister);
