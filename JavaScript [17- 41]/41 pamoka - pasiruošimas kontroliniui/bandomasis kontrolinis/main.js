// ------------------------------------------- Classes and function -------------------------------------------
// 1.
class Car {
  brand;
  model;
  year;
  color;
  fuelTypes;
  price;

  constructor({ brand, model, year, color, fuelTypes, price }) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;
    this.fuelTypes = fuelTypes;
    this.price = price;
  }

  getFuelType() {
    return this.fuelTypes.join('/');
  }
}

// ------------------------------------------------ Variables ------------------------------------------------

// 10.
const EUR_USD = 1.06;

// 2.
const cars = [
  new Car({ brand: 'Opel', model: 'Astra', year: 2001, color: 'red', fuelTypes: ['diesel'], price: 10000 }),
  new Car({ brand: 'Opel', model: 'Astra', year: 2018, color: 'black', fuelTypes: ['petrol'], price: 9000 }),
  new Car({ brand: 'Audi', model: 'A6', year: 2013, color: 'blue', fuelTypes: ['electric'], price: 3000 }),
  new Car({ brand: 'audi', model: 'A5', year: 2015, color: 'black', fuelTypes: ['petrol', 'electric'], price: 1000 }),
  new Car({ brand: 'BMW', model: 'X1', year: 2001, color: 'red', fuelTypes: ['diesel'], price: 2000 }),
  new Car({ brand: 'BMW', model: 'X2', year: 2017, color: 'black', fuelTypes: ['electric'], price: 4000 }),
  new Car({ brand: 'BMW', model: 'X3', year: 2015, color: 'blue', fuelTypes: ['petrol'], price: 4000 }),
  new Car({ brand: 'BMW', model: 'X4', year: 2020, color: 'red', fuelTypes: ['gas', 'petrol'], price: 7000 }),
];

// 5. & 8.
let electricCars;
// 6. & 9.
let newPetrolCars;

// -------------------------------------------------- Results -------------------------------------------------

console.group('1. Sukurkite klasę Car, kuri turėtų savybes ir priskirtų jas naudojant konstruktorių');
{
  console.log('Klasė');
  console.dir(Car);
  console.log('Klasės objektas');
  console.dir(cars[0]);
}
console.groupEnd();

console.group('2. Sukurkite masyvą sudarytą iš 8 Car klasės mašinų');
{
  console.table(cars);
}
console.groupEnd();

console.group('3. Klasėje Car sukurkite metodą getFuelType, kuris grąžintų mašinos kurų tipus (fuelTypes)');
{
  cars.forEach(car => console.log(car.getFuelType()));
}
console.groupEnd();

console.group('4. Atspausdinkite kiekvieno automobilio pavadinimą ir 3 punktu sukurto metodo rezultatą');
{
  cars.forEach(car => console.log(`${car.brand} ${car.model} - ${car.getFuelType()}`));
}
console.groupEnd();

console.group('5. Atrinkite tik elektrinius automobilius');
{
  electricCars = cars.filter(car => car.getFuelType() === 'electric');
  console.table(electricCars);
}
console.groupEnd();

console.group('6. Atrinkite tik benzininius automobilius, naujesnius nei 2016 metai');
{
  newPetrolCars = cars.filter(car => car.getFuelType() === 'petrol' && car.year > 2016);
  console.table(newPetrolCars);
}
console.groupEnd();

console.group('7. Atrinkite audi tipo automobilius nuo 2012 iki 2016, kurie nėra dyzeliniai');
{
  const greenishAudiCars = cars.filter(car =>
    car.brand.toLowerCase() === 'audi' &&
    car.year > 2012 &&
    car.year < 2016 &&
    !car.fuelTypes.includes('diesel')
  );
  console.table(greenishAudiCars);
}
console.groupEnd();

console.group('8. Suskaičiuokite 5 punkte gautų automobilių kainos vidurkį');
{
  const electricCarsPriceAvg = electricCars.reduce((sum, car) => sum + car.price, 0) / electricCars.length;
  console.log(electricCarsPriceAvg);
}
console.groupEnd();

console.group('9. Suskaičiuokite 6 punkte gautų automobilių bendrą vertę');
{
  const newPetrolCarsTotalPrice = newPetrolCars.reduce((sum, car) => sum + car.price, 0);
  console.log(newPetrolCarsTotalPrice);
}
console.groupEnd();

console.group('10. Panaudokite pradinį Car objektų masyvą performuoti duomenis į tokių objektų masyvą:');
{
  const formattedCars = cars.map(car => ({
    brand: car.brand,
    model: car.model,
    price: car.price * EUR_USD,
    fuelType: car.getFuelType(),
  }));
  console.table(formattedCars);
}
console.groupEnd();