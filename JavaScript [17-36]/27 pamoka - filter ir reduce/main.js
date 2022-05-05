const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const words = ['labas', 'vakaras', 'saulius', 'kūdra'];
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
const EUR_USD = 1.06;

const double = function (num) {
  return num * 2;
}

const doubledNumbers = numbers.map(double);
console.log(doubledNumbers);

// Sukurkite naują masyvą, pagal masyvą words, kad kiekviena reikšmė būtų didžiosiomis raidėmis
const toUpperCase = function (word) {
  return word.toUpperCase();
}
const wordsInCapital = words.map(toUpperCase);
console.log(wordsInCapital);

// Sukurkite naują masyvą, pagal masyvą words, kad kiekviena reikšmė prasidėtų iš didžiosios raidės

const capitalize = function (word) {
  return word[0].toUpperCase() + word.slice(1);
}
const wordsCapitalized = words.map(capitalize);
console.log(wordsCapitalized);

// Sukurkite naują masyvą, pagal masyvą numbers, kad kiekviena reikšmė būtų pakeista lieka dalinant iš 2
const remainderOf2 = function (number) {
  return number % 2;
}

const remaindersOf2 = numbers.map(remainderOf2);
console.log(remaindersOf2);

// Sukurkite kainų masyvą ,pagal masyvą flats, panaudodami butų kainas eurais ir paversdami į dolerius
const convertFlatPrice = function (flat) {
  return flat.price * EUR_USD;
}

const pricesUSD = flats.map(convertFlatPrice);
console.log(pricesUSD);

// Sukurkite butų masyvą, pagal masyvą flats, paversdami kainas doleriais, 
// NEPAKEIČIANT ITERUOJAMO MASYVO OBJEKTŲ
const changeFlatPrice = function (flat) {
  const flatCopy = { ...flat };
  flatCopy.price *= EUR_USD;

  return flatCopy;
}

const flatsUS = flats.map(changeFlatPrice);
console.table(flatsUS);
console.table(flats);



