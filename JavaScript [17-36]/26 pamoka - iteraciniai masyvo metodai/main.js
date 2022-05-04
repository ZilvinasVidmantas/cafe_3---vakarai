/*
  Array.prototype.forEach
  Array.prototype.map
  Array.prototype.filter
  Array.prototype.reduce
*/

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

// 1. Atspausdinkite <flats> masyvo kainas
/*
  50000
  70000
  90000
  65000
*/
// 2. Atspausdinkite <flats> masyvo adresus ir kainas atskirtus kableliu ir tarpu
/* Console:
  Kunigų g. 7, 50000
  Sargėnų vieta 5, 70000
  Jūros pr. 12a 5, 90000
  Fantazijo al. 77, 65000
*/
// 3. Atspausdinkite <flat> masyvo butų kambarius vienas po kitus
/* Console:
  20
  16
  14
  20
  16
  14
  20
  50
  40
  15
  12
  13
  15
  14
*/

/*
  Kiekvieną užduotį atlikite naudodami forEach 2 būdais
    * naudojant išoriškai aprašytą funkciją
    * naudojant anoniminę funkciją
    
  Užduotys iki 19:00
  pertrauka iki 19:10
*/