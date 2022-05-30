import BusinessLicenseContract from './BusinessLicenseContract.js';

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
    this.employees = []
  }

  singContract(person, contractType, props) {
    // Sukurti kontraktą pagal contractType
    let contract;
    switch (contractType) {
      case 'BL':
        // Perduoti kuriamam kontraktui reikiamas savybes
        contract = new BusinessLicenseContract(person, this, props.title, props.jobs);
        break;

      default:
        break;
    }
    // Sukūrus kontraktą išsaugoti jį įmonės klasėje
    this.contracts.push(contract);
    this.employees.push(person);
    // Sukurtą kontraktą priskirti žmogui
    person.signContract(contract);
  }
}

export default Buisiness;