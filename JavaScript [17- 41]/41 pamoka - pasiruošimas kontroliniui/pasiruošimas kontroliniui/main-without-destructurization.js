// ------------------------------------------------------------------------------------------------------
// ---------------------------------------------- 1 dalis -----------------------------------------------
// ------------------------------------------------------------------------------------------------------

// --------------------------------------------- FUNKCIJOS ----------------------------------------------
const calcPersonBMI = (person) => person.weight / (person.height / 100) ** 2;

// ---------------------------------------------- DUOMENYS ----------------------------------------------
const people = [
  { name: 'Serbentautas', surname: 'Bordiūras', age: 19, height: 180, weight: 80, sex: 'male' },
  { name: 'Severija', surname: 'Veganytė', age: 19, height: 170, weight: 75, sex: 'female' },
  { name: 'Kepas', surname: 'Jūreivis', age: 5, height: 150, weight: 80, sex: 'male' },
  { name: 'Juronas', surname: 'Žiūronas', age: 70, height: 164, weight: 45, sex: 'male' },
  { name: 'Veilokas', surname: 'Baronas', age: 30, height: 171, weight: 50, sex: 'male' },
  { name: 'Kida', surname: 'Mindzė', age: 25, height: 192, weight: 78, sex: 'female' },
  { name: 'Varundijus', surname: 'Byla', age: 36, height: 158, weight: 65, sex: 'male' },
  { name: 'Salyra', surname: 'Dyzelka', age: 47, height: 202, weight: 85, sex: 'female' },
  { name: 'Senelyzas', surname: 'Šachmatas', age: 72, height: 164, weight: 145, sex: 'male' },
];

// -------------------------------------------- SPAUSDINIMAS --------------------------------------------
console.group('1 dalis');
{
  console.groupCollapsed('1. Sukurti objektų(žmonių) masyvą su 8 elementais');
  {
    console.table(people);
  }
  console.groupEnd();

  console.groupCollapsed('2. Panaudojant array.forEach');
  {
    console.group('Atspausdinti kiekvieną elementą');
    {
      people.forEach(p => console.log(p));
    }
    console.groupEnd();

    console.group('Atspausdinti kiekvieno elemento pilną vardą');
    {
      people.forEach(p => console.log(p.name, p.surname));
    }
    console.groupEnd();

    console.group('Atspausdinti kiekvieno elemento kūno masės indeksą');
    {
      people.forEach(p => console.log(calcPersonBMI(p)));
    }
    console.groupEnd();
  }
  console.groupEnd();

  console.groupCollapsed('3. Panaudojant array.filter atrinkti į naują masyvą ir po to atspausdinti žmones');
  {
    console.group('kurių vardas ilgesnis nei 6 simboliai');
    {
      const peopleWithLongNames = people.filter(p => p.name.length > 6);
      console.table(peopleWithLongNames);
    }
    console.groupEnd();

    console.group('kurių svoris didesnis nei 80kg');
    {
      const positivePeople = people.filter(p => p.weight > 80);
      console.table(positivePeople);
    }
    console.groupEnd();

    console.group('kurie aukštesni nei 185cm');
    {
      const bigPeople = people.filter(p => p.height > 185);
      console.table(bigPeople);
    }
    console.groupEnd();
  }
  console.groupEnd();

  console.groupCollapsed('4. Panaudojant array.map atrinkti į naują masyvą ir po to atspausdinti');
  {
    console.group('ūgius');
    {
      const peopleHeights = people.map(p => p.height);
      console.log(peopleHeights);
    }
    console.groupEnd();

    console.group('svorius');
    {
      const peopleWeights = people.map(p => p.weight);
      console.log(peopleWeights);
    }
    console.groupEnd();

    console.group('ūgius, svorius ir amžius : [{height, weight, age}, ...]');
    {
      const peopleDimensions = people.map(p => ({ height: p.height, weight: p.weight, age: p.age }));
      console.table(peopleDimensions);
    }
    console.groupEnd();

    console.group('KMI indeksus');
    {
      const peopleBMI = people.map(p => calcPersonBMI(p));
      console.log(peopleBMI);
    }
    console.groupEnd();

    console.group('KMI indeksus ir amžius');
    {
      const peopleBMIAndAge = people.map(p => ({ bmi: calcPersonBMI(p), age: p.age }));
      console.table(peopleBMIAndAge);
    }
    console.groupEnd();
  }
  console.groupEnd();

  console.groupCollapsed('5. Panaudojant array.reduce suskaičiuoti ir po to atspausdinti');
  {
    console.group('svorių vidurkį');
    {
      const weightAvg = people.reduce((avg, p, i, arr) => avg + p.weight / arr.length, 0);
      console.log(weightAvg);
    }
    console.groupEnd();

    console.group('ūgio vidurkį');
    {
      const heightAvg = people.reduce((sum, p) => sum + p.height, 0) / people.length;
      console.log(heightAvg);
    }
    console.groupEnd();
  }
  console.groupEnd();

}
console.groupEnd();

// ------------------------------------------------------------------------------------------------------
// ---------------------------------------------- 2 dalis -----------------------------------------------
// ------------------------------------------------------------------------------------------------------
// --------------------------------------------- FUNKCIJOS ----------------------------------------------
class Person {
  name;
  surname;
  age;
  height;
  weight;
  sex;

  constructor(name, surname, age, height, weight, sex) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.sex = sex;
  }

  getBMI() {
    return this.weight / (this.height / 100) ** 2;
  }

  toString() {
    const { name, surname, ...props } = this;
    // props -> {age, height, weight, sex};
    const fullname = `${name} ${surname}`;
    const propsKeyValuePairs = Object.entries(props);
    // propsKeyValuePairs -> [['name', val], ['height', val], ['weight', val], ['sex', val]]
    const rows = propsKeyValuePairs.map(([key, value]) => `\t${key}: ${value}`);
    const propsString = rows.join('\n');

    return `${fullname}:\n${propsString}\n`;
  }
}

// ---------------------------------------------- DUOMENYS ----------------------------------------------
const peopleInstances = people.map(p => new Person(p.name, p.surname, p.age, p.height, p.weight, p.sex));


// -------------------------------------------- SPAUSDINIMAS --------------------------------------------
console.group('2 dalis');
{
  console.groupCollapsed('0. Pasinaudojant 1 dalies elementų masyvu, sukurti Person prototipų(Class) masyvą');
  {
    console.table(peopleInstances);

    console.group('sukurti vidinį metodą: getBMI()');
    {
      peopleInstances.forEach(p => console.log(`p.calcBMI of ${p.name} ${p.surname}`, p.getBMI()));
    }
    console.groupEnd();

    console.group('sukurti vidinį metodą: toString()');
    {
      peopleInstances.forEach(p => console.log(p.toString()));
    }
    console.groupEnd();
  }
  console.groupEnd();

  console.groupCollapsed('1. Atrinkti moteris, kuriuos jaunesnės nei 20 metų ir svoris didesnis nei 70kg');
  {
    const youngAndPositiveFemales = peopleInstances.filter(p => p.sex === 'female' && p.weight > 70 && p.age < 20);
    console.table(youngAndPositiveFemales);
  }
  console.groupEnd();

  console.groupCollapsed('2. Atrinkti vyrus, kurie vyresni nei 25 metai ir KMI mažesnis nei 18,5');
  {
    const grownMaleSkeletons = peopleInstances.filter(p => p.sex === 'male' && p.getBMI() < 18.5 && p.age > 25);
    console.table(grownMaleSkeletons);
  }
  console.groupEnd();

  console.groupCollapsed('3. Atrinkti vaikus, su antsvoriu (KMI > 30)');
  {
    const positiveKids = peopleInstances.filter(p => p.getBMI() > 30 && p.age < 18);
    console.table(positiveKids);
  }
  console.groupEnd();

  console.groupCollapsed('4. Atrinkti pensininkus, su antsvoriu (KMI > 30)');
  {
    const positiveElders = peopleInstances.filter(p => p.getBMI() > 30 && p.age >= 65);
    console.table(positiveElders);
  }
  console.groupEnd();

  console.groupCollapsed('5. Atrinkti visus, kieno KMI nepatenka į rėžius [18.5; 25]');
  {
    const distinctivePeople = peopleInstances.filter(p => p.getBMI() < 18.5 || p.getBMI() > 25);
    console.table(distinctivePeople);
  }
  console.groupEnd();
}
console.groupEnd();
