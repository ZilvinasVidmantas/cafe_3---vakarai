import Validator from './Validator.js';
class Person {
  #name;
  #surname;
  #marks;

  constructor(name, surname, marks) {
    this.name = name;
    this.surname = surname;
    this.marks = marks;
  }

  set name(value) {
    // Method Chaining
    // Builder Design Pattern
    const nameValidator = new Validator(value)
      .isString('Asmens vardas turi būti simbolių darinys')
      .minLength(2, 'Asmens vardas turi būti nors iš 2 simbolių')
      .maxLength(16, 'Asmens vardas turi turėti ne daugiau kaip 16 simbolių')
      .hasNoNumbers('Asmens vardas negali turėti skaičių')
      .hasNoSpecialSymbols('Asmens vardas negali turėti specialių simbolių')
      .isEmpty('Asmens vardas negali būti tuščias');

    if (nameValidator.hasErrors) {
      throw new Error(nameValidator.errorsString);
    }

    this.#name = value;
  }

  set surname(value) {
    if (typeof value !== 'string') {
      throw new Error('Asmens pavardė turi būti simbolių darinys');
    }

    if (value === '') {
      throw new Error('Asmens pavardė negali būti tuščia');
    }

    this.#surname = value;
  }
  set marks(value) {
    // Jei value nėra masyvas, mesti klaidą
    const isArray = value instanceof Array;
    if (!isArray) {
      throw new Error('Pažymiai turi būti masyvas');
    }

    // Jei nors viena masyvo reikšmė nėra skaičius nuo 1-10, mesti klaidą
    const marksAreValid = value.every((mark) => typeof mark === 'number' && mark >= 1 && mark <= 10);
    if (!marksAreValid) {
      throw new Error('Masyvo elementai turi būti skaičiai tarp 1 ir 10.');
    }

    this.#marks = [...value];
  }

  get name() {
    return this.#name;
  }
  get surname() {
    return this.#surname;
  }
  get marks() {
    return [...this.#marks];
  }

  print() {
    console.log('-------------------------');
    console.log(this.#name, this.#surname);
    console.log('-------------------------');
  }

  calcAvg() {
    return this.#marks.reduce((sum, x) => sum + x) / this.#marks.length;
  }
}

const person1 = new Person('as', 'Bordiūras', [7, 4, 8]);

console.log(person1.name);

/*
  1. Pagal Person.name pavyzdį, sukurkite validaciją pavardei
  2. Validator klasėje aprašykite validaciją, kuri patikrintų, ar pirmoji raidėji didžioji
    * pritaikykite šį patikrinimą Person.name ir Person.surname savybėms
  3. Validator klasėje sukurkite skaičiams skirtų validacijų
    * isNumber(errMsg) 
    * inWhole(errMsg) 
    * minValue(min, errMsg) 
    * maxValue(max, errMsg) 
  4. Validator klasėje sukurkite masyvams skirtų validacijų
    * isArray(errMsg)
    * isOfType(type, errMsg) 
  5. Panaudokite sukurtus validatorius (3-4), kad validuoti Person.marks savybę
    

*/
