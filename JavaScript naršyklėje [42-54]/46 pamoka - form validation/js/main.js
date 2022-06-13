'use strict';

import Validator from "./Validator.js";

const exampleForm = document.querySelector('.js-example-form');
const exampleFormResultContainer = document.querySelector('.js-example-form-result');
const registrationForm = document.querySelector('.js-registration-form');

const UPPER_CASE_LETTER_REGEX = /[A-ZĄČĘĖĮŠŲŪŽ]/;
const LOWER_CASE_LETTER_REGEX = /[a-ząčęėįšųūž]/;
const ONLY_LETTERS_REGEX = /^[A-ZĄČĘĖĮŠŲŪŽa-ząčęėįšųūž]*$/;
const NUMBER_REGEX = /\d/;

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
  const errors = {
    password: [],
    passwordConfirmation: [],
    name: [],
    surname: [],
    sex: [],
    city: [],
    message: []
  };

  const emailValidator = new Validator(email)
    .required('privaloma')
    .email('neteisingas el. pašto formatas');
  if (emailValidator.hasErrors) errors.email = emailValidator.errors;

  // password
  if (password === undefined || password === '') {
    errors.password.push('privaloma');
  }
  if (password.length < 8) {
    errors.password.push('bent 8 simboliai');
  }
  if (!UPPER_CASE_LETTER_REGEX.test(password)) {
    errors.password.push('bent 1 didžioji raidė');
  }
  if (!LOWER_CASE_LETTER_REGEX.test(password)) {
    errors.password.push('bent 1 mažoji raidė');
  }
  if (!NUMBER_REGEX.test(password)) {
    errors.password.push('bent 1 skaičius');
  }

  // passwordConfirmation
  if (passwordConfirmation === undefined || passwordConfirmation === '') {
    errors.passwordConfirmation.push('privaloma');
  }
  if (passwordConfirmation.length < 8) {
    errors.passwordConfirmation.push('bent 8 simboliai');
  }
  if (!UPPER_CASE_LETTER_REGEX.test(passwordConfirmation)) {
    errors.passwordConfirmation.push('bent 1 didžioji raidė');
  }
  if (!LOWER_CASE_LETTER_REGEX.test(passwordConfirmation)) {
    errors.passwordConfirmation.push('bent 1 mažoji raidė');
  }
  if (!NUMBER_REGEX.test(passwordConfirmation)) {
    errors.passwordConfirmation.push('bent 1 skaičius');
  }
  if (password !== passwordConfirmation) {
    errors.passwordConfirmation.push('slaptažodžiai nesutampa');
  }

  // name
  if (name === undefined || name === '') {
    errors.name.push('privaloma');
  }
  if (name.length < 2) {
    errors.name.push('bent 2 raidės');
  }
  if (name.length > 32) {
    errors.name.push('daugiausiai 32 raidės');
  }
  if (!ONLY_LETTERS_REGEX.test(name)) {
    errors.name.push('yra neleistinų simbolių');
  }

  // surname
  if (surname === undefined || surname === '') {
    errors.surname.push('privaloma');
  }
  if (surname.length < 2) {
    errors.surname.push('bent 2 raidės');
  }
  if (surname.length > 32) {
    errors.surname.push('daugiausiai 32 raidės');
  }
  if (!ONLY_LETTERS_REGEX.test(surname)) {
    errors.surname.push('yra neleistinų simbolių');
  }

  // city
  if (city === undefined || city === '') {
    errors.city.push('privaloma');
  }

  // sex
  if (sex === undefined || sex === '') {
    errors.sex.push('privaloma');
  }

  // message
  if (message && message.length > 400) {
    errors.message.push(' max 400 simbolių');
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
  const errors = formatRegistionErrors(values);
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

/*
  funkcijoje 'formatRegistionErrors' įvesties laukų validaciją naudojant salyginius sakinius pakeiskite
  Validator klasės objektais. Tam Validator klasėje reikės sukurti paildomų validacijos metodų.
  Validacijos metodai privalo grąžinti 'this', tam kad būtų galima taikyti 'chaining' metodologiją
*/

