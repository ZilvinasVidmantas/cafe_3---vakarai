/*
  Array.prototype.reduce iteracinis metodas yra skirtas masyvo reikšmes sukaupti/sutraukti/perfomuoti į vieną reikšmę.
  Iteruodamas per kiekvieną masyvo elementą, jis vykdo argumentu perduotą funkciją, kviečiant ją su tokiais argumentais:
    1. kaupiamasis kintamasis
    2. einamasis elementas
    3. einamojo elemento indeksas
    4. iteruojamas masyvas
  Kaupiamojo kintamojo reikšmė yra tokia, kokią grąžina praeitos iteracijos argumentu perduota funkcija.
  Antruoju 'Array.prototype.reduce' metodo argumentu, galima perduoti pradinę kaupiamojo kintamojo reikšmę. Jeigu pradinė, kaupiamojo kintamojo reikšmė nėra perduota, tuomet ji bus lygi pirmajam masyvo elementui ir pradedama iteruoti nuo antrojo masyvo elemento.
  
  Perduodamosios funkcijos aprašas:
    1. kaupiamasis kintamasis
    2. einamasis elementas
    3. einamojo elemento indeksas
    4. iteruojamas masyvas
  Perduodamoji funkcija PRI-VA-LO grąžinti kaupiamojo kintamojo reikšmę.
*/

console.groupCollapsed('Veikimo pavyzdys - seka ir iteracijos');
{
  const numbers = [1, 2, 3, 4];
  const kaupiamojiFunkcija = function (prevValue, element, index, array) {
    console.log(`%c${index + 1} iteracija`, 'font-size: 16px')
    console.table({
      prevValue,
      element,
      index,
      array: JSON.stringify(array)
    });

    return `${index + 1} iteracijos grąžinta reikšmė`;
  }

  const rezultatas = numbers.reduce(kaupiamojiFunkcija, 'pradinė reikšmė');
  console.log({ rezultatas });
}
console.groupEnd();

console.groupCollapsed('Veikimo pavyzdys - skaičių suma');
{
  const numbers = [4, 3, 2, 1];

  console.group('Naudojant iš anksto aprašytą funkciją');
  {
    const sumReducer = function (prevSum, number) {
      return prevSum + number;
    }

    const sum = numbers.reduce(sumReducer);
    console.log({ sum });
  }
  console.groupEnd();
  console.group('Naudojant anoniminę funkciją');
  {
    const sum = numbers.reduce(function (prevSum, number) {
      return prevSum + number;
    });
    console.log({ sum });
  }
  console.groupEnd();
  console.group('Naudojant iš anksto aprašytą lambda išraišką');
  {
    const sumReducer = (prevSum, number) => prevSum + number;

    const sum = numbers.reduce(sumReducer);
    console.log({ sum });
  }
  console.groupEnd();
  console.group('Naudojant anoniminę lambda išraišką');
  {
    const sum = numbers.reduce((s, x) => s + x);
    console.log({ sum });
  }
  console.groupEnd();
}
console.groupEnd();

console.groupCollapsed('Veikimo pavyzdys - objectų savybių naudojimas su pradine reikšme');
{
  const people = [{
    name: 'Jonas',
    surname: 'Jonaitis',
    sex: 'male',
    age: 26,
    income: 1200,
    married: false,
    hasCar: false
  }, {
    name: 'Severija',
    surname: 'Piktutytė',
    sex: 'female',
    age: 26,
    income: 1300,
    married: false,
    hasCar: true
  }, {
    name: 'Valdas',
    surname: 'Vilktorinas',
    sex: 'male',
    age: 16,
    income: 0,
    married: false,
    hasCar: false
  }, {
    name: 'Virginijus',
    surname: 'Uostauskas',
    sex: 'male',
    age: 32,
    income: 2400,
    married: true,
    hasCar: true
  }, {
    name: 'Samanta',
    surname: 'Uostauskienė',
    sex: 'female',
    age: 28,
    income: 1200,
    married: true,
    hasCar: true
  }, {
    name: 'Janina',
    surname: 'Stalautinskienė',
    sex: 'female',
    age: 72,
    income: 364,
    married: false,
    hasCar: false
  }];
  console.group('Naudojant iš anksto aprašytą funkciją');
  {
    const peopleIncomeReducer = function (prevIncome, person) {
      return prevIncome + person.income;
    }

    const incomeOfPeople = people.reduce(peopleIncomeReducer, 0);
    console.log(incomeOfPeople)
  }
  console.groupEnd();
  console.group('Naudojant anoniminę funkciją');
  {
    const incomeOfPeople = people.reduce(function (prevIncome, person) {
      return prevIncome + person.income;
    }, 0);
    console.log(incomeOfPeople)
  }
  console.groupEnd();
  console.group('Naudojant iš anksto aprašytą lambda išraišką');
  {
    const peopleIncomeReducer = (prevIncome, person) => prevIncome + person.income;

    const incomeOfPeople = people.reduce(peopleIncomeReducer, 0);
    console.log(incomeOfPeople)
  }
  console.groupEnd();
  console.group('Naudojant anoniminę lambda išraišką');
  {
    const incomeOfPeople = people.reduce((sum, p) => sum + p.income, 0);
    console.log(incomeOfPeople)
  }
  console.groupEnd();
}
console.groupEnd();

// ------------------------------------------- Užduotys -------------------------------------------
const flats = [{
  address: 'Kunigų g. 7',
  rooms: [20, 16, 14], // 50
  price: 50000,
}, {
  address: 'Sargėnų vieta 5',
  rooms: [20, 16, 14, 20], // 70
  price: 70000,
}, {
  address: 'Jūros pr. 12',
  rooms: [50, 40], // 90
  price: 90000,
}, {
  address: 'Fantazijo al. 77',
  rooms: [15, 12, 13, 15, 14], // 69
  price: 65000,
}];

// 21:20
console.groupCollapsed('1. Suskaičiuokite visų butų bendrą kainą');
{
  console.group('Naudojant iš anksto aprašytą funkciją');
  {

  }
  console.groupEnd();
  console.group('Naudojant anoniminę funkciją');
  {

  }
  console.groupEnd();
  console.group('Naudojant iš anksto aprašytą lambda išraišką');
  {

  }
  console.groupEnd();
  console.group('Naudojant anoniminę lambda išraišką');
  {

  }
  console.groupEnd();
}
console.groupEnd();

console.groupCollapsed('2. Suskaičiuokite visų butų bendrą plotą');
{
  console.group('Naudojant iš anksto aprašytą funkciją');
  {

  }
  console.groupEnd();
  console.group('Naudojant anoniminę funkciją');
  {

  }
  console.groupEnd();
  console.group('Naudojant iš anksto aprašytą lambda išraišką');
  {

  }
  console.groupEnd();
  console.group('Naudojant anoniminę lambda išraišką');
  {

  }
  console.groupEnd();
}
console.groupEnd();

console.groupCollapsed('3. Suskaičiuokite visų butų vidutinę kainą');
{
  console.group('Naudojant iš anksto aprašytą funkciją');
  {

  }
  console.groupEnd();
  console.group('Naudojant anoniminę funkciją');
  {

  }
  console.groupEnd();
  console.group('Naudojant iš anksto aprašytą lambda išraišką');
  {

  }
  console.groupEnd();
  console.group('Naudojant anoniminę lambda išraišką');
  {

  }
  console.groupEnd();
}
console.groupEnd();

console.groupCollapsed('4. Suskaičiuokite visų butų bendrą kambarių skaičių');
{
  console.group('Naudojant iš anksto aprašytą funkciją');
  {

  }
  console.groupEnd();
  console.group('Naudojant anoniminę funkciją');
  {

  }
  console.groupEnd();
  console.group('Naudojant iš anksto aprašytą lambda išraišką');
  {

  }
  console.groupEnd();
  console.group('Naudojant anoniminę lambda išraišką');
  {

  }
  console.groupEnd();
}
console.groupEnd();
