/*
Array.prototype.filter iteracinis metodas yra skirtas kurti naują masyvą, ATRENKANT REIKŠMES PAGAL SALYGĄ iš iteruojamų masyvo elementų.
Iteruodamas per kiekvieną masyvo elementą, jis vykdo parametru perduotą funkciją, perduodant jai einamajį elementą, jo indeksą ir 
iteruojamajį masyvą. Jeigu perduotos funkcijos grąžinimo reikšmė yra 'truthy', einamasis elementas įdedamas į naujai formuojamą masyvą.
Priešingu atveju, jeigu parametru perduotos funkcijos grąžinimo rezultatas su einamuoju elementu yra 'falsy', tuomet einamasis elementas NĖRA įdedamas į naujai formuojamą masyvą.
 
Kaip ir Array.prototype.forEach atveju, perduodamoji (tikrinimo) funkcija gali priimti 3 parametrus:
  1. einamasis elementas
  2. einamojo elemento indeksas
  3. iteruojamas masyvas
Perduodamoji funkcija PRI-VA-LO grąžinti BOOLEAN, kur priklausomai nuo jos grąžinimo:
  * true - elementas bus pridedamas į naujai formuojamą masyvą.
  * false - elementas NEBUS pridedamas į naujai formuojamą masyvą.
*/

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

console.groupCollapsed('Veikimo pavyzdys - atrikti lyginius skaičius');
{
  const numbers = [1, 2, 3, 4];

  console.group('Naudojant iš anksto aprašytą funkciją');
  {
    const isEven = function (el) {
      return el % 2 === 0;
    }

    const numbersEven = numbers.filter(isEven);
    console.log(numbersEven);
  }
  console.groupEnd();
  console.group('Naudojant anoniminę funkciją');
  {
    const numbersEven = numbers.filter(function (el) {
      return el % 2 === 0;
    });
    console.log(numbersEven);
  }
  console.groupEnd();
  console.group('Naudojant iš anksto aprašytą lambda išraišką');
  {
    const isEven = el => el % 2 === 0;

    const numbersEven = numbers.filter(isEven);
    console.log(numbersEven);
  }
  console.groupEnd();
  console.group('Naudojant anoniminę lambda išraišką');
  {
    const numbersEven = numbers.filter(el => el % 2 === 0);
    console.log(numbersEven);
  }
  console.groupEnd();
}
console.groupEnd();

console.group('1. Atrinkite žmones, kurie yra vyresni nei 30 metų');
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

console.groupCollapsed('2. Atrinkite žmones, kurie yra susituokę');
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

console.groupCollapsed('3. Atrinkite žmones, kurie uždirba daugiau nei 1100');
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