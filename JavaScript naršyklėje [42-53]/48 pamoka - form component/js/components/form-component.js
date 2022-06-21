class FormComponent {
  #htmlElement;       // HTMLFormElement
  #values;            // {} - užpildytų įvesties laukų reikšmės pagal 'name' atributus
  #errors;            // {} - klaidų objektas pagal 'name' atributus
  #fields;            // {} - įvesties laukų HTML elementų objektas pagal 'name' atributus
  #errorHtmlElements; // {} - klaidų HTML elementų objektas pagal 'name' atributus
  #formatErrors;      // Function - funkcija kuri priima #values ir grąžina #errors tipo obejktą 
  #onSuccess;         // Function - funkcija kuri kviečiama pasubmit'inus formą su teisingais duomenimis

  constructor(selector, formatErrors, onSuccess) {
    const element = document.querySelector(selector);
    if (element === null) {
      throw new Error(`failed FormComponent instance creation:\n'${selector}' is not valid selector`);
    }
    if (!(element instanceof HTMLFormElement)) {
      throw new Error(`failed FormComponent instance creation:\nElement found by selector '${selector}' is not instance of HTMLFormElement`);
    }
    /*
      1. Patikrinti formatErrors ir onSuccess parametrus
        1.1 formatErrors turi būti funkcija
        1.2 onSuccess turi būti funkcija
        Jeigu parametrais gautos reikšmės neatitinka standartų, 'meskite' gražiai suformuotą klaidą

      2. Sukurkite kuriamo instance'o savybes(properties):
        * #htmlElement;        HTMLFormElement
        * #values;             {} - užpildytų įvesties laukų reikšmės pagal 'name' atributus
        * #errors;             {} - klaidų objektas pagal 'name' atributus
        * #fields;             {} - įvesties laukų HTML elementų objektas pagal 'name' atributus
        * #errorHtmlElements;  {} - klaidų HTML elementų objektas pagal 'name' atributus
        * #formatErrors;       Function - funkcija kuri priima #values ir grąžina #errors tipo obejktą 
        * #onSuccess;          Function - funkcija kuri kviečiama pasubmit'inus formą su teisingais duomenimis
    */
  }
}

export default FormComponent;