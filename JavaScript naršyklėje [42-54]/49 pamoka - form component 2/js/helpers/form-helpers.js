
export const getFormErrorElements = (form) => Array.from(form.querySelectorAll('[field-error]'))
  .reduce((prevErrorElements, errorElement) => ({
    ...prevErrorElements,
    [errorElement.getAttribute('field-error')]: errorElement,
  }), {});

export const hasErrors = (errors) => Object.keys(errors).length > 0;

export const displayFormErrors = (errors, fields, errorElements) => {
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

export const clearFieldsErrors = (fields, errorElements) => {
  Object.values(fields).forEach(field => {
    if (field instanceof Array) {
      field.forEach(option => option.classList.remove('is-invalid'));
    } else {
      field.classList.remove('is-invalid');
    }
  });
  Object.values(errorElements).forEach(errorElement => errorElement.innerHTML = '');
};

export const handleFormSubmit = ({ event, fields, errorElements, formatErrors }, onSuccess) => {
  event.preventDefault();
  clearFieldsErrors(fields, errorElements);

  const values = getFormValues(event.target);
  const errors = formatErrors(values);
  const isValid = !hasErrors(errors);

  if (isValid) {
    onSuccess(values);
  } else {
    displayFormErrors(errors, fields, errorElements);
  }
};