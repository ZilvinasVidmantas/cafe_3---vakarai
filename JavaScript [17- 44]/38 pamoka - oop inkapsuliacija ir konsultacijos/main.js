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
    if (typeof value !== 'string') {
      throw new Error('Asmens vardas turi būti simbolių darinys');
    }

    if (value === '') {
      throw new Error('Asmens vardas negali būti tuščias');
    }

    this.#name = value;
  }
  set surname(value) {
    if (typeof value !== 'string') {
      throw new Error('Asmens vardas turi būti simbolių darinys');
    }

    if (value === '') {
      throw new Error('Asmens vardas negali būti tuščias');
    }

    this.#name = value;
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

const person1 = new Person('Serbentautas', 'Bordiūras', [7, 4, 8]);
