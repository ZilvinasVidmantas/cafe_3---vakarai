class Contract {
  static counter = 0;

  id;
  title;
  person;
  business;

  constructor(person, business, title) {
    this.id = `${business.title}-${person.identityCode}-${++Contract.counter}`;
    this.title = title;
    this.person = person;
    this.business = business;
  }
}

export default Contract;