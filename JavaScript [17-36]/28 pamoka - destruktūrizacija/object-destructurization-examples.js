const printPersonFullName = ({ name, surname }) => console.log(`${name} ${surname}`);
const printPersonItemsTitles = ({ items }) => {
  console.log(items.map(({ title }) => title).join(', '))
}

const person = {
  name: 'Serbentautas',
  surname: 'Bordiūras',
  age: 18,
  items: [{
    title: 'Task panner',
    price: 0
  }, {
    title: 'Gum',
    price: 0.49
  }, {
    title: 'Apple',
    price: 0.19
  }]
};

printPersonFullName(person);
printPersonItemsTitles(person);