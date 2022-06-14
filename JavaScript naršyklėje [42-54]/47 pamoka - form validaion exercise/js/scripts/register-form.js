import Validator from "../helpers/Validator.js";
import getFormValues from "../helpers/get-form-values.js";

const registrationForm = document.querySelector('.js-registration-form');

const fields = Array.from(registrationForm.querySelectorAll('[name]'))
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

const errorElements = Array.from(registrationForm.querySelectorAll('[field-error]'))
  .reduce((prevErrorElements, errorElement) => ({
    ...prevErrorElements,
    [errorElement.getAttribute('field-error')]: errorElement,
  }), {});

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
  if (emailValidator.hasErrors) errors.email = emailValidator.HTMLError;

  const passwordValidator = new Validator(password)
    .required('privaloma')
    .min(8, 'bent 8 simboliai')
    .hasUpperCase('bent 1 didžioji raidė')
    .hasLowerCase('bent 1 mažoji raidė')
    .hasNumber('bent 1 skaičius');
  if (passwordValidator.hasErrors) errors.password = passwordValidator.HTMLError;

  const passwordConfirmationValidator = new Validator(passwordConfirmation)
    .required('privaloma')
    .min(8, 'bent 8 simboliai')
    .hasUpperCase('bent 1 didžioji raidė')
    .hasLowerCase('bent 1 mažoji raidė')
    .hasNumber('bent 1 skaičius')
    .equal(password, 'Slapažodžiai nesutampa');
  if (passwordConfirmationValidator.hasErrors) errors.passwordConfirmation = passwordConfirmationValidator.HTMLError;

  const nameValidator = new Validator(name)
    .required('privaloma')
    .alpha('yra neleistinų simbolių')
    .min(2, 'bent 2 raidės')
    .max(32, 'daugiausiai 32 raidės');
  if (nameValidator.hasErrors) errors.name = nameValidator.HTMLError;

  const surnameValidator = new Validator(surname)
    .required('privaloma')
    .alpha('yra neleistinų simbolių')
    .min(2, 'bent 2 raidės')
    .max(32, 'daugiausiai 32 raidės');
  if (surnameValidator.hasErrors) errors.surname = surnameValidator.HTMLError;

  const cityValidator = new Validator(city)
    .required('privaloma');
  if (cityValidator.hasErrors) errors.city = cityValidator.HTMLError;

  const sexValidator = new Validator(sex)
    .required('privaloma');
  if (sexValidator.hasErrors) errors.sex = sexValidator.HTMLError;

  const messageValidator = new Validator(message)
    .max(400, 'daugiausiai 400 simbolių');
  if (messageValidator.hasErrors) errors.message = messageValidator.HTMLError;

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

const handleRegister = (event) => {
  event.preventDefault();
  deletePrevErrors();

  const values = getFormValues(event.target);
  const errors = formatRegistionErrors(values);
  const isValid = !hasErrors(errors);

  if (isValid) {
    console.log('Formos duomenys teisingi!');
  } else {
    displayErrors(errors);
  }
};

registrationForm.addEventListener('submit', handleRegister);
