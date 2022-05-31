import Person from './Person.js';

class EmployeeIA extends Person {

  hourPay;
  hoursWorked;

  constructor(identityCode, name, surname, hourPay) {
    super(identityCode, name, surname);
    this.hourPay = hourPay;
    this.hoursWorked = 0;
  }

  addHours(hours) {
    this.hoursWorked += hours;
  }

  calcPay() {
    const pay = this.hoursWorked * this.hourPay;
    this.hoursWorked = 0;

    return pay;
  }
}

export default EmployeeIA;