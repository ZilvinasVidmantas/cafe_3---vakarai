const getFormValues = (form) => {
  const formData = new FormData(form);
  const formValues = {};

  for (const key of formData.keys()) {
    const values = formData.getAll(key);
    if (key in formValues) continue;
    formValues[key] = values.length > 1 ? values : values[0];
  }

  return formValues;
};

export default getFormValues;
