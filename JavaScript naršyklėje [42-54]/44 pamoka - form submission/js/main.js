'use strict';

const registerForm = document.querySelector('.js-register-form');

const getFormValues = (form) => {
  const formData = new FormData(form);
  const values = {};
  formData.forEach((value, key) => values[key] = value);

  return values;
}

const handleRegisterFormSubmit = (event) => {
  event.preventDefault();
  const values = getFormValues(event.target);
  console.log(values);
}

registerForm.addEventListener('submit', handleRegisterFormSubmit);


// 5min
// 10min

// 20:10
