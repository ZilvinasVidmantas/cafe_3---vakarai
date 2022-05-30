import Contract from './Contract.js';

class EmploymentContract extends Contract {
  salary;

  constructor(person, business, title, salary) {
    super(person, business, title);
    this.salary = salary;
  }
}

export default EmploymentContract;