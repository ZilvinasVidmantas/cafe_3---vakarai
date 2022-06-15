import Validator from "../validator.js";

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

export default formatRegistionErrors;