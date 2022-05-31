import Person from './Person.js';

class EmployeeBL extends Person {

  jobs;

  constructor(identityCode, name, surname, jobs) {
    super(identityCode, name, surname);
    this.jobs = jobs;
  }

  doJob(jobId) {
    const job = this.jobs.find(x => x.id === jobId);
    if (jobId === undefined) return;

    job.done = true;
  }

  calcPay() {
    const doneJobs = this.jobs.filter(x => x.done && !x.payed);
    const pay = this.doneJobs.reduce((sum, { pay }) => sum + pay, 0);
    doneJobs.forEach(job => job.payed = true);

    return pay;
  }
}

export default EmployeeBL;