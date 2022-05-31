import Contract from './Contract.js';

class IndividualActivityContract extends Contract {
  hourPay;

  constructor(person, business, title, hourPay) {
    super(person, business, title);
    this.hourPay = hourPay;
  }
}

export default IndividualActivityContract;