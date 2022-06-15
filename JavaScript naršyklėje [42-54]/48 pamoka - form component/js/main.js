import FormComponent from './components/form-component.js';
import formatRegistionErrors from './helpers/error-formatters/format-registration-errors.js';

const registerUser = (values) => {
  console.log('registerUser');
  console.log(values);
};

const registerFormComponent = new FormComponent(
  '.js-registration-form',
  formatRegistionErrors,
  registerUser,
);

console.log('VO! 👍');
