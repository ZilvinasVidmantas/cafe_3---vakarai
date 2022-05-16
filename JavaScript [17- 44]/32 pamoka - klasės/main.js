console.group('1. Sukurkite Person klasę, kuri priimtų vardą, pavardę, metus, mėnesį, dieną');
/*
Sukurkite Person klasę, kuri priimtų vardą, pavardę, metus, mėnesį, dieną.
  * Konstruktoriuje sukurkite logiką, išsaugokite vardą ir pavardę kaip kuriamo objekto savybes
  * panaudokite metus, mėnesį ir dieną, kad sukurti Date prototipo objektą, ir priskirkite jį į savybę birthDate:
    *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
  * Sukurkite metodą<printName>, kurs atspausdintų žmogaus pilną vardą
  * Sukurkite metodą<getAge>, kurs apskaičiuotų dabartinį žmogaus amžių
*/
{
  class Person {
    constructor(name, surname, year, month, day) {
      this.name = name;
      this.surname = surname;
      this.birthDate = new Date(year, month - 1, day);
    }

    printName() {
      console.log(this.name, this.surname);
    }

    getAge() {
      const now = new Date();
      const yearBasis = now.getFullYear() - this.birthDate.getFullYear() - 1;

      const monthNow = now.getMonth() + 1;
      const monthBirth = this.birthDate.getMonth() + 1;
      if (monthNow > monthBirth) {
        return yearBasis + 1;
      }

      const dayNow = now.getDate();
      const dayBirth = this.birthDate.getDate();
      if (monthNow === monthBirth && dayNow > dayBirth) {
        return yearBasis + 1;
      }

      return yearBasis;
    }
  }

  const person = new Person('Jubis', 'Dalbajovas', 2002, 5, 16);
  person.printName();
  console.log(person.getAge())

}
console.groupEnd();

console.group('2. Sukurkite klasę Flat, kuri priimtų: miestą, gatvę, numerį, šalį');
/*
  Išsaugokite visas parametrais gautas savybes kuriamam objektui ir papildomai sukurkite savybę:
    * rooms: Array<number>
  Sukurkite metodus
    * printAddress: atspausdinta adresą vienoje eilutėje
    * buildRoom: Prideda kambarį į this.rooms masyvą
    * getArea: Suskaičiuoja visų kambarių plotą
    * getNumberCount: suskaičiuoja visų kambarių kiekį
*/
{


}
console.groupEnd();