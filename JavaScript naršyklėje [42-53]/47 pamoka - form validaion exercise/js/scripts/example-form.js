import { getFormValues } from "../helpers/form-helpers.js";

const exampleForm = document.querySelector('.js-example-form');
const exampleFormResultContainer = document.querySelector('.js-example-form-result');

const handleExampleFormSubmit = (event) => {
  event.preventDefault();
  const values = getFormValues(event.target);
  exampleFormResultContainer.innerHTML = JSON.stringify(values, null, 4);
};

exampleForm.addEventListener('submit', handleExampleFormSubmit);
