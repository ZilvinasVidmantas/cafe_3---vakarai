import Validator from './Validator.js';
class Student {
  #name;
  #surname;
  #marks;

  constructor(name, surname, marks) {
    this.name = name;
    this.surname = surname;
    this.marks = marks;
  }

  set name(value) {
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
    const surnameValidator = new Validator(value)
      .isString('Asmens pavardė turi būti simbolių darinys')
      .minLength(2, 'Asmens pavardė turi būti nors iš 2 simbolių')
      .maxLength(16, 'Asmens pavardė turi turėti ne daugiau kaip 16 simbolių')
      .hasNoNumbers('Asmens pavardė negali turėti skaičių')
      .hasNoSpecialSymbols('Asmens pavardė negali turėti specialių simbolių')
      .isEmpty('Asmens pavardė negali būti tuščia');

    if (surnameValidator.hasErrors) {
      throw new Error(surnameValidator.errorsString);
    }

    this.#surname = value;
  }

  set marks(value) {
    const marksValidator = new Validator(value)
      .isArray('Pažymiai turi būti masyvas.')
      .consistsOf('number', 'Pažymių masyvas turi būti sudarytas iš skaičių');

    if (marksValidator.hasErrors) {
      throw new Error(marksValidator.errorsString);
    }

    const marksErrors = value
      .map(mark => new Validator(mark)
        .isWhole(`Pažymys ${mark} turi būti sveikas skaičius`)
        .minValue(1, `Pažymys ${mark} negali būti mažesnis už 1`)
        .maxValue(10, `Pažymys ${mark} negali būti didenis už 10`)
        .errors)
      .flat();

    if (marksErrors.length > 0) {
      throw new Error(marksErrors.join('\n'))
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

  get avg() {
    return this.#marks.reduce((sum, x) => sum + x) / this.#marks.length;
  }
}

const stud1 = new Student('as', 'Bordiūras', [7, 10, 2]);

console.log(stud1.avg);

