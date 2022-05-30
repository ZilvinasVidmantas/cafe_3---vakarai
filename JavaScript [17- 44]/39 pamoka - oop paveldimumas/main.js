import Buisiness from './entities/Business.js';
import Person from './entities/Person.js';

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
    { title: 'Google ads', pay: 400 },
    { title: 'FB ads', pay: 100 },
    { title: 'Twiter Bots', pay: 200 },
    { title: 'Instagram Bots', pay: 100 },
    { title: 'Instagram Videos', pay: 100 },
  ]
});

/*
  Sukurkite Employee,
  Apskaičiuokite atlyginimą be laisvadienių

  Darbuotojui nustatykite 2 lasivas dienas mėnesyje ir apskaičiuokite atlyginimą tą mėnesį.

  Palyginkite atlyginimus, ar jie skiriasi?

  21:13

  

*/