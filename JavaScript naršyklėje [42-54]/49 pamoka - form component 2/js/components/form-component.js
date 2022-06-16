class FormComponent {
  #htmlElement;       // HTMLFormElement
  #values;            // {} - užpildytų įvesties laukų reikšmės pagal 'name' atributus
  #errors;            // {} - klaidų objektas pagal 'name' atributus
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
    this.#values = this.getFormValues();


    /*
      2. Sukurkite kuriamo instance'o savybes(properties):
        // * #htmlElement;        HTMLFormElement
        // * #values;             {} - užpildytų įvesties laukų reikšmės pagal 'name' atributus
        * #errors;             {} - klaidų objektas pagal 'name' atributus
        * #fields;             {} - įvesties laukų HTML elementų objektas pagal 'name' atributus
        * #errorHtmlElements;  {} - klaidų HTML elementų objektas pagal 'name' atributus
        * #formatErrors;       Function - funkcija kuri priima #values ir grąžina #errors tipo obejktą 
        * #onSuccess;          Function - funkcija kuri kviečiama pasubmit'inus formą su teisingais duomenimis
    */
  }

  getFormValues() {
    const formData = new FormData(this.#htmlElement);
    const formValues = {};

    for (const key of formData.keys()) {
      const values = formData.getAll(key);
      if (key in formValues) continue;
      formValues[key] = values.length > 1 ? values : values[0];
    }

    return formValues;
  }
}

export default FormComponent;