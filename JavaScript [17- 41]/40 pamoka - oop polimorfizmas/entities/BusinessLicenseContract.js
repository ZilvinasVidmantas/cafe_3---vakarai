import Contract from './Contract.js';

class BusinessLicenseContract extends Contract {
  jobs;

  constructor(person, business, title, jobs) {
    super(person, business, title);
    this.jobs = jobs;
  }
}

export default BusinessLicenseContract;