class FormComponent {
  #htmlElement;       // HTMLFormElement
  #fields;            // {} - įvesties laukų HTML elementų objektas pagal 'name' atributus
  #errorHtmlElements; // {} - klaidų HTML elementų objektas pagal 'name' atributus
  #formatErrors;      // Function - funkcija kuri priima #values ir grąžina #errors tipo obejktą 
  #onSuccess;         // Function - funkcija kuri kviečiama pasubmit'inus formą su teisingais duomenimis

  constructor(selector, formatErrors, onSuccess) {
    const htmlElement = document.querySelector(selector);
    if (htmlElement === null) {
      throw new Error(`failed FormComponent instance creation:\n'${selector}' is not valid selector.`);
    }
    if (!(htmlElement instanceof HTMLFormElement)) {
      throw new Error(`failed FormComponent instance creation:\nElement found by selector '${selector}' is not instance of HTMLFormElement.`);
    }
    if (typeof formatErrors !== 'function') {
      throw new Error(`failed FormComponent instance creation:\n'formatErrors' is not a function.`);
    }
    if (!(onSuccess instanceof Function)) {
      throw new Error(`failed FormComponent instance creation:\n'onSuccess' is not a function.`);
    }

    this.#htmlElement = htmlElement;
    this.#formatErrors = formatErrors;
    this.#onSuccess = onSuccess;

    this.initFields();
    this.initErrorHtmlElements();
    this.initEventListener();
  }

  get values() {
    const formData = new FormData(this.#htmlElement);
    const formValues = {};

    for (const key of formData.keys()) {
      const values = formData.getAll(key);
      if (key in formValues) continue;
      formValues[key] = values.length > 1 ? values : values[0];
    }

    return formValues;
  }

  get errors() {
    return this.#formatErrors(this.values);
  }

  get isValid() {
    return Object.keys(this.errors).length === 0;
  }

  initFields() {
    this.#fields = Array.from(this.#htmlElement.querySelectorAll('[name]'))
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
  }

  initErrorHtmlElements() {
    this.#errorHtmlElements = Array.from(this.#htmlElement.querySelectorAll('[field-error]'))
      .reduce((prevErrorElements, errorElement) => ({
        ...prevErrorElements,
        [errorElement.getAttribute('field-error')]: errorElement,
      }), {});
  }

  initEventListener() {
    this.#htmlElement.addEventListener('submit', (event) => {
      event.preventDefault();
      this.clearFieldsErrors();

      if (this.isValid) {
        this.#onSuccess(this.values);
      } else {
        this.displayFormErrors();
      }
    });
  }

  clearFieldsErrors() {
    Object.values(this.#fields).forEach(field => {
      if (field instanceof Array) {
        field.forEach(option => option.classList.remove('is-invalid'));
      } else {
        field.classList.remove('is-invalid');
      }
    });
    Object.values(this.#errorHtmlElements).forEach(element => element.innerHTML = '');
  };

  displayFormErrors() {
    Object.entries(this.errors).forEach(([key, error]) => {
      const field = this.#fields[key];
      const errorHtmlElement = this.#errorHtmlElements[key];

      if (field) {
        if (field instanceof Array) {
          field.forEach(option => option.classList.add('is-invalid'));
        } else {
          field.classList.add('is-invalid');
        }
      }

      if (errorHtmlElement) {
        errorHtmlElement.innerHTML = error;
      }
    });
  };
}

export default FormComponent;