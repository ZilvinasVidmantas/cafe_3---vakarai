import BusinessLicenseContract from './BusinessLicenseContract.js';
import IndividualActivityContract from './IndividualActivityContract.js';
import EmploymentContract from './EmploymentContract.js';
import EmployeeEC from './EmployeeEC.js';
import EmployeeIA from './EmployeeIA.js';
import EmployeeBL from './EmployeeBL.js';

class Buisiness {
  static count = 0;

  id;
  title;
  employees;
  money;
  director;
  contracts;

  constructor(title, director, money = 0) {
    this.id = `${title}_${++Buisiness.count}`;
    this.director = director;
    this.title = title;
    this.money = money;
    this.contracts = [];
    this.employees = [];
  }

  singContract(person, contractType, props) {
    // Sukurti kontraktą pagal contractType
    let contract;
    let employee;

    switch (contractType) {
      case 'BL':
        // Perduoti kuriamam kontraktui reikiamas savybes
        contract = new BusinessLicenseContract(person, this, props.title, props.jobs);
        employee = new EmployeeBL(person.identityCode, person.name, person.surname, props.jobs);
        break;
      case 'IA':
        contract = new IndividualActivityContract(person, this, props.position, props.hourPay);
        employee = new EmployeeIA(person.identityCode, person.name, person.surname, props.hourPay);
        break;
      case 'EC':
        contract = new EmploymentContract(person, this, props.position, props.salary, props.startDate);
        employee = new EmployeeEC(
          person.identityCode,
          person.name,
          person.surname,
          props.salary,
          props.startDate
        );
        break;
    }
    // Sukūrus kontraktą išsaugoti jį įmonės klasėje
    this.contracts.push(contract);
    this.employees.push(employee);
    // Sukurtą kontraktą priskirti žmogui
    person.signContract(contract);
  }

  makePayments(year, month) {
    this.employees.forEach(employee => {
      //             Polimorfizmu
      const pay = employee.calcPay(year, month);
      this.money -= pay;
      console.log(employee.fullname, pay);
    });
    console.log('Liko pinigų', this.money);
  }
}

export default Buisiness;