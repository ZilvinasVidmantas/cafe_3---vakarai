'use strict';
const exampleForm = document.querySelector('.js-example-form');
const exampleFormResultContainer = document.querySelector('.js-example-form-result');
const registrationForm = document.querySelector('.js-registration-form');

const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const UPPER_CASE_LETTER_REGEX = /[A-ZĄČĘĖĮŠŲŪŽ]/;
const LOWER_CASE_LETTER_REGEX = /[a-ząčęėįšųūž]/;
const ONLY_LETTERS_REGEX = /^[A-ZĄČĘĖĮŠŲŪŽa-ząčęėįšųūž]*$/
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

const formatRegistionErrors = (values) => {
  const errors = {
    email: [],
    password: [],
    passwordConfirmation: []
  };

  // email - baigta, niekuom papildyti nereikia
  if (values.email === undefined || values.email === '') {
    errors.email.push('privaloma');
  }
  if (!EMAIL_REGEX.test(values.email)) {
    errors.email.push('neteisingas el. pašto formatas');
  }

  // password
  /*
    // privaloma
    // bent 8 simboliai
    // bent 1 didžioji raidė
    bent 1 mažoji raidė
    bent 1 skaičius
  */
  if (values.password === undefined || values.password === '') {
    errors.password.push('privaloma');
  }
  if (values.password.length < 8) {
    errors.password.push('bent 8 simboliai');
  }
  if (!UPPER_CASE_LETTER_REGEX.test(values.password)) {
    errors.password.push('bent 1 didžioji raidė');
  }

  // passwordConfirmation
  /*
    // privaloma
    bent 8 simboliai
    bent 1 didžioji raidė
    bent 1 mažoji raidė
    bent 1 skaičius
    slaptažodžiai nesutampa
  */
  if (values.passwordConfirmation === undefined || values.passwordConfirmation === '') {
    errors.passwordConfirmation.push('privaloma');
  }
  // name
  /*
    privaloma
    bent 2 raidės
    daugiausiai 32 raidės
    yra neleistinų simbolių (negali būti skaičių ir specialių simbolių - !?>, naudokite Regex)
  */

  // surname
  /*
    privaloma
    bent 2 raidės
    daugiausiai 32 raidės
    yra neleistinų simbolių (negali būti skaičių ir specialių simbolių - !?>, naudokite Regex)
  */

  // city
  /*
    privaloma
  */

  // sex
  /*
    privaloma
  */

  // skills - validacijos nereikia, nereik nieko rašyti

  // message
  /*
    max 400 simbolių
  */


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
