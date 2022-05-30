import Person from './Person.js';

class Employee extends Person {
  salary;
  daysOff;

  constructor(identityCode, name, surname, salary, startDate) {
    super(identityCode, name, surname)
    this.salary = salary;
    this.startDate = startDate;
    this.daysOff = [];
  }

  setDayOff(yaer, month, day) {
    // Sukurkite Date objektą, ir įdėkite jį į this.daysOff masyvą

  }

  calcPay(year, month) {
    // Parašykite logiką, kad apskaičiuoti Mėnesio atlyginimą
    // Sukaičiuoti laisvas dienas pagal mėnesį
    // Iš atlyginimo atimti praleistų dienų skaičių padauginta iš 1/21 atlyginimo.
    // grąžinti sumą
  }
}

export default Employee;

