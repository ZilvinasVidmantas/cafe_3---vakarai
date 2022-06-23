import Validator from '../validator.js';

const todoValidator = ({ title }) => {
  const errors = {};

  const titleValidator = new Validator(title)
    .required('Privalomas pavadinimas')
    .min(4, 'Mažiausiai 4 simboliai')
    .max(32, 'Daugiausiai 32 simboliai');
  if (titleValidator.hasErrors) errors.title = titleValidator.HTMLError;

  return errors;
}

export default todoValidator;
