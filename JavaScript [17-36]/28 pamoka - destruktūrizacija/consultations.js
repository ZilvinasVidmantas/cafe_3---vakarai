console.group('Sukurkite funkciją, kuri atspausdina pirmojo parametro viduriniają raidę');
{
  const printMiddleLetter = function (word) {
    const letterCount = word.length;
    if (letterCount % 2 === 1) {
      console.log(word[Math.floor(letterCount / 2)]);
    } else {
      console.warn('Žodis neturi vidurinės raidės');
    }
  }

  printMiddleLetter('Labas'); // b
  printMiddleLetter('Kepinys'); // b
  printMiddleLetter('pasaka'); // b
  printMiddleLetter('Mama'); // ''

}
console.groupEnd();

console.group('Pakeiskite income savybę į salary');
{
  const people = [
    {
      name: 'Jonas',
      surname: 'Jonaitis',
      sex: 'male',
      age: 26,
      income: 1200,
      married: false,
      hasCar: false
    },
    {
      name: 'Severija',
      surname: 'Piktutytė',
      sex: 'female',
      age: 26,
      income: 1300,
      married: false,
      hasCar: true
    }];

  const peopleBritish = people.map(person => ({
    name: person.name,
    surname: person.surname,
    sex: person.sex,
    age: person.age,
    salary: person.income,
    married: person.married,
    hasCar: person.hasCar,
  }));

  const peopleBritish2 = people.map(({ income, ...person }) => ({
    ...person,
    salary: income
  }));

  console.table(peopleBritish);
  console.table(peopleBritish2);

}
console.groupEnd();