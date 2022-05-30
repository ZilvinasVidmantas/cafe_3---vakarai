import Buisiness from './entities/Business.js';
import Person from './entities/Person.js';

const person1 = new Person('35248795684', 'Valiuras', 'Santjaga');
const person2 = new Person('35248795683', 'Formanas', 'Kėglis');
const person3 = new Person('35248795682', 'Šiupija', 'Šluotaitė');
const person4 = new Person('35248795681', 'Vangardas', 'Levijosas');

const zvc = new Buisiness('Žiaurių varkių centras', person1, 10000);

zvc.singContract(person2, 'IA', {
  position: 'Copy writer',
  hourPay: 8,
});

zvc.singContract(person3, 'EC', {
  position: 'Manager',
  salary: 1200,
});

zvc.singContract(person4, 'BL', {
  title: 'Marketing',
  jobs: [
    { title: 'Google ads', pay: 400 },
    { title: 'FB ads', pay: 100 },
    { title: 'Twiter Bots', pay: 200 },
    { title: 'Instagram Bots', pay: 100 },
    { title: 'Instagram Videos', pay: 100 },
  ]
});

console.log(zvc);
console.log(person4);

/*
  Aprašyti skirtingą kontraktų sukūrimo logiką ir  pagal tai implementuoti Business.singContract metodą:
    EmploymentContract
      savybės:
        salary: mėnesinis atlyginimas

    IndividualActivityContract
      savybės:
        hourPay: valandinis atlyginimas

    BusinessLicenseContract - DONE
      savybės:
        jobs: darbas už kuriuos bus sumokama

*/