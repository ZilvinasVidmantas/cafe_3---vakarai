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
  Aprašyti skirtingą kontraktų logiką:
    EmploymentContract
      savybės:
        salary: mėnesinis atlyginimas

    IndividualActivityContract
      savybės:
        hourPay: valandinis atlyginimas

    BusinessLicenseContract
      savybės:
        jobs: darbas už kurį sumokama

  Bendrą logiką Kontraktams aprašykite Contract klasėje, konstruktorių parametrus
  gali keisti ir pervadinti, taip kaip jums tinka.

  1. Sukurkite 4 Asmenis
  2. Sukurkite Verslą
  3. Parašykite po kiekvieno tipo Sutartį tarp verslo ir asmnes
    * Pasirašant sutartį, turi būti išsaugota sutarties kopija, tiek verslui, tiek asmeniui
*/