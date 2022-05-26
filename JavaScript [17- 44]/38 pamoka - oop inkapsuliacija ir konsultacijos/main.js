class Person {
  // Private
  #name;
  #surname;
  // Public
  marks;

  constructor(name, surname, marks) {
    this.name = name;
    this.#surname = surname;
    this.marks = marks;
  }

  // išsikviečia, kuomet rašote student1.name = 'Vargas';
  // išsikviečia, kuomet rašote this.name = 'Vargas';
  // value -> 'Vargas'
  set name(value) {

    if (typeof value !== 'string') {
      throw new Error('Asmens vardas turi būti simbolių darinys');
    }

    if (value === '') {
      throw new Error('Asmens vardas negali būti tuščias');
    }

    this.#name = value;
  }

  get name() {
    return this.#name;
  }

  print() {
    console.log('-------------------------');
    console.log(this.#name, this.#surname);
    console.log('-------------------------');
  }

  calcAvg() {
    return this.marks.reduce((sum, x) => sum + x) / this.marks.length;
  }
}


/*
  1. Sukurkite apsaugą surname savybei, tokią pat kaip name
  2. Sukurkite apsaugą marks saybei, (marks savybė privalo būti masyvas sudarytas iš skaičių nuo 1 iki 10)
*/

const person1 = new Person('Serbentautas', 'Bordiūras', ['5', 10, 8]);


console.log(person1.name)
console.log(person1.name)
console.log(person1.name)
console.log(person1.name)
console.log(person1.calcAvg());



