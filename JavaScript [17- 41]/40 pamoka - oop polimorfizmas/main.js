import Buisiness from './entities/Business.js';
import Person from './entities/Person.js';
import Employee from './entities/Employee.js';

const person1 = new Person('35248795684', 'Valiuras', 'Santjaga');
const person2 = new Person('35248795683', 'Formanas', 'Kėglis');
const person3 = new Person('35248795682', 'Šiupija', 'Šluotaitė');
const person4 = new Person('35248795681', 'Vangardas', 'Levijosas');

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


const emp = new Employee('35248795684', 'Valiuras', 'Santjaga', 2100, new Date('2022-02-07'));
emp.setDayOff(2022, 2, 19);
emp.setDayOff(2022, 3, 9);
emp.setDayOff(2022, 4, 4);
emp.setDayOff(2022, 4, 5);

console.log(emp);

console.table({
  'emp.calcPay(2022, 2)': emp.calcPay(2022, 2),
  'emp.calcPay(2022, 3)': emp.calcPay(2022, 3),
  'emp.calcPay(2022, 4)': emp.calcPay(2022, 4),
  'emp.calcPay(2022, 5)': emp.calcPay(2022, 5),
})
