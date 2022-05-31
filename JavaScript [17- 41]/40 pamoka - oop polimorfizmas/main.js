import Buisiness from './entities/Business.js';
import Person from './entities/Person.js';

const EMPLOYEE_EC_ID = '35248795682';
const EMPLOYEE_IA_ID = '35248795683';
const EMPLOYEE_BL_ID = '35248795681';

const person1 = new Person('35248795684', 'Valiuras', 'Santjaga');
const person2 = new Person(EMPLOYEE_IA_ID, 'Formanas', 'Kėglis');
const person3 = new Person(EMPLOYEE_EC_ID, 'Šiupija', 'Šluotaitė');
const person4 = new Person(EMPLOYEE_BL_ID, 'Vangardas', 'Levijosas');

const business = new Buisiness('Žiaurių varkių centras', person1, 10000);

business.singContract(person2, 'IA', {
  position: 'Copy writer',
  hourPay: 8,
});

business.singContract(person3, 'EC', {
  position: 'Manager',
  salary: 1200,
  startDate: new Date('2022-02-07'),
});

business.singContract(person4, 'BL', {
  title: 'Marketing',
  jobs: [
    { id: 'job_1', title: 'Google ads', pay: 400, done: false, payed: false },
    { id: 'job_2', title: 'FB ads', pay: 100, done: false, payed: false },
    { id: 'job_3', title: 'Twiter Bots', pay: 200, done: false, payed: false },
    { id: 'job_4', title: 'Instagram Bots', pay: 100, done: false, payed: false },
    { id: 'job_5', title: 'Instagram Videos', pay: 100, done: false, payed: false },
  ]
});

// Pildo adimintratorius/buhalteris arba patys darbuotojai per Turinio valdymo sistemą
const employeeEC = business.employees.find(x => x.identityCode === EMPLOYEE_EC_ID);
const employeeIA = business.employees.find(x => x.identityCode === EMPLOYEE_IA_ID);
const employeeBL = business.employees.find(x => x.identityCode === EMPLOYEE_BL_ID);

// Pildo adimintratorius/buhalteris arba patys darbuotojai per Turinio valdymo sistemą
employeeEC.setDayOff(2022, 5, 5);
employeeEC.setDayOff(2022, 5, 13);

employeeIA.addHours(124);

employeeBL.doJob('job_2');
employeeBL.doJob('job_5');

console.log(business);
