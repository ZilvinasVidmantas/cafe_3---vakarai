const arr1 = [
  'country',
  'personality',
  'INFF',
  'age',
  {
    p: 'Falafelis',
    kin: 22,
    zumbra: ['Lithuania']
  }
];
const obj1 = {
  abc: 'Type',
  ggg: ['Bankokas', 'Alytus'],
  l: {
    a: 'name',
    b: 'surname',
    c: 'city'
  }
};

const person = {
  name: 'Bankokas',
  surname: 'Falafelis',
  age: 22,
  country: 'Lithuania',
  city: 'Alytus',
  personalityType: 'INFF',
};
console.table(person);

const personBuilded = {
  [arr1[0]]: arr1[4].zumbra[0],
}
console.table(personBuilded);

// 


