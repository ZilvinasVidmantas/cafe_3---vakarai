class Person {
  identityCode;
  name;
  surname;
  contracts;

  constructor(identityCode, name, surname) {
    this.identityCode = identityCode;
    this.name = name;
    this.surname = surname;
    this.contracts = [];
  }

  get fullname() {
    return this.name + ' ' + this.surname;
  }

  signContract(contract) {
    this.contracts.push(contract);
  }
}

export default Person;