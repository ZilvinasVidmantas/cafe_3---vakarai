import Contract from './Contract.js';

class EmploymentContract extends Contract {
  salary;
  startDate;

  constructor(person, business, title, salary, startDate) {
    super(person, business, title);
    this.salary = salary;
    this.startDate = startDate;
  }
}

export default EmploymentContract;