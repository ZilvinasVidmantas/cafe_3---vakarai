/*
  Palyginimo funkcija lygina 2 masyvo elementus.

  Parametrai palyginimo funkcijai yra perduodami automatiškai, kuomet
  kviečiame Array.prototype.sort metodą perduodant palyginimo funkciją

  Turite aprašyti funkciją taip:
    * grąžinus teigiamą skaičių pasakote, kad pirmasis parametras yra aukštesnio prioriteto
    * grąžinus neigiamą skaičių pasakote, kad antrasis parametras yra aukštesnio prioriteto
    * grąžinus 0 pasakote, kad elementų prioritetai yra lygūs
*/

const byPersonAgeASC = function (person1, person2) {
  return person1.age - person2.age;
}

const byPersonAgeDESC = function (person1, person2) {
  return person2.age - person1.age;
}

const byPersonHeightASC = function (person1, person2) {
  return person1.height - person2.height;
}

const byPersonHeightDESC = function (person1, person2) {
  return person2.height - person1.height;
}

const byPersonWeightASC = function (person1, person2) {
  return person1.weight - person2.weight;
}

const byPersonWeightDESC = function (person1, person2) {
  return person2.weight - person1.weight;
}

const byPersonNameAZ = function (person1, person2) {
  return person1.name.localeCompare(person2.name, 'lt');
}

const byPersonNameZA = function (person1, person2) {
  return person2.name.localeCompare(person1.name, 'lt');
}

const charCodesLT = {
  'Ą': 65.5,
  'Č': 67.5,
  'Ę': 69.3,
  'Ė': 69.6,
  'Į': 73.3,
  'Y': 73.6,
  'Š': 83.5,
  'Ų': 85.3,
  'Ū': 85.6,
  'Ž': 90.5,
  'ą': 97.5,
  'č': 98.5,
  'ę': 101.3,
  'ė': 101.6,
  'į': 105.3,
  'y': 105.6,
  'š': 115.5,
  'ų': 117.3,
  'ū': 117.6,
  'ž': 122.5,
};

String.prototype.charCodeAtLT = function (index = 0) {
  const letter = this[index];
  if (letter in charCodesLT) {
    return charCodesLT[letter];
  }

  return letter.charCodeAt();
}

const byPersonNameLTAZ = function (person1, person2) {
  for (let i = 0; i < person1.name.length; i++) {
    if (person1.name[i].charCodeAtLT() > person2.name[i].charCodeAtLT()) {
      return 1;
    }
    if (person1.name[i].charCodeAtLT() < person2.name[i].charCodeAtLT()) {
      return -1;
    }
  }

  return 0;
}

const calcBMI = function (kg, m) {
  return kg / m ** 2;
}

const byBMIASC = function (p1, p2) {
  const bmi1 = calcBMI(p1.weight, p1.height / 100);
  const bmi2 = calcBMI(p2.weight, p2.height / 100);

  return bmi1 - bmi2;
}

const people = [{
  name: 'Yerbentautas',
  surname: 'Bordiūras',
  age: 18,
  height: 186,
  weight: 70,
}, {
  name: 'Iuva',
  surname: 'Nivauskaitė',
  age: 12,
  height: 160,
  weight: 40,
}, {
  name: 'Samonis',
  surname: 'Veiveris',
  age: 32,
  height: 175,
  weight: 80,
}, {
  name: 'Čierka',
  surname: 'Stiklė',
  age: 31,
  height: 170,
  weight: 60,
}];

const peopleSortedByAgeASC = people.slice().sort(byPersonAgeASC);
const peopleSortedByAgeDESC = people.slice().sort(byPersonAgeDESC);
const peopleSortedByHeightASC = people.slice().sort(byPersonHeightASC);
const peopleSortedByHeightDESC = people.slice().sort(byPersonHeightDESC);
const peopleSortedByWeightASC = people.slice().sort(byPersonWeightASC);
const peopleSortedByWeightDESC = people.slice().sort(byPersonWeightDESC);
const peopleSortedByNameAZ = people.slice().sort(byPersonNameAZ);
const peopleSortedByNameZA = people.slice().sort(byPersonNameZA);
const peopleSortedByNameLTAZ = people.slice().sort(byPersonNameLTAZ);
const peopleSortedByBMIASC = people.slice().sort(byBMIASC);

console.log('%cUnsorted people', 'font-size: 20px');
console.table(people);

console.log('%cPeople sorted by age ascending', 'font-size: 20px');
console.table(peopleSortedByAgeASC);

console.log('%cPeople sorted by age descending', 'font-size: 20px');
console.table(peopleSortedByAgeDESC);

console.log('%cPeople sorted by height ascending', 'font-size: 20px');
console.table(peopleSortedByHeightASC);

console.log('%cPeople sorted by height descending', 'font-size: 20px');
console.table(peopleSortedByHeightDESC);

console.log('%cPeople sorted by height ascending', 'font-size: 20px');
console.table(peopleSortedByWeightASC);

console.log('%cPeople sorted by height descending', 'font-size: 20px');
console.table(peopleSortedByWeightDESC);

console.log('%cPeople sorted by name A-Z', 'font-size: 20px');
console.table(peopleSortedByNameAZ);

console.log('%cPeople sorted by name Z-A', 'font-size: 20px');
console.table(peopleSortedByNameZA);

console.log('%cPeople sorted by name A-Ž LT', 'font-size: 20px');
console.table(peopleSortedByNameLTAZ);

console.log('%cPeople sorted by name BMI ASC', 'font-size: 20px');
console.table(peopleSortedByBMIASC);
