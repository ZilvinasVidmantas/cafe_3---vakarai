/*
  Array.prototype.map iteracinis metodas yra skirtas kurti naują masyvą, iš iteruojamo masyvo elementų. Iteruodamas per kiekvieną masyvo elementą,
  jis vykdo argumentu perduotą funkciją, su kiekvienu masyvo elmentu, jo indeksu ir iteruojamu masyvu. Tos funkcijos grąžintas rezultatas 
  dedamas į naują masyvą. Praiteravus per visus iteruojamo masyvo elementus iteracinis metodas 'map' grąžina suformuotą masyvą į iškvietimo vietą.
  
  Suformavus naują masyvą, jis visada turės tiek pat elementų kaip ir pradinis masyvas.
  Šis metodas dažniausiai naudojamas pradinio masyvo reikšmėms:
    * redaguoti
    * papildyti
    * sumažinti
    * keisti struktūrą, formą
  
  Kaip ir Array.prototype.forEach atveju, perduodamoji funkcija gali priimti 3 parametrus:
    1. einamasis elementas
    2. einamojo elemento indeksas
    3. iteruojamas masyvas
  Perduodamoji funkcija PRI-VA-LO grąžinti reikšmę, kuri bus dedama į naujai formuojamą masyvą.
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

// this -> masyvas su kuriuo bus iškviestas metodas <map>
// Array.prototype.map = function (callback) {
//   const newArray = [];
//   for (let i = 0; i < this.length; i++) {
//     const returnedResult = callback(this[i], i, this);
//     newArray.push(returnedResult);
//   }

//   return newArray;
// }

const selectAddress = function (flat) {
  return flat.address;
}

const addresses = flats.map(selectAddress);
const addresses2 = flats.map(function (flat) {
  return flat.address;
});
// console.log(addresses);
// console.log(addresses2);

console.group('1. Suformuokite kainų masyvą');
{
  console.group('Naudojant iš anksto aprašytą funkciją');
  {
    const selectPrice = function (flat) {
      return flat.price
    }

    const priceArray = flats.map(selectPrice);
    console.log(priceArray);
  }
  console.groupEnd();
  console.group('Naudojant anoniminę funkciją');
  {
    const priceArray = flats.map(function (flat) {
      return flat.price
    });
    console.log(priceArray);
  }
  console.groupEnd();
}
console.groupEnd();

console.group('2. Suformuokite butų masyvą, su 10% padidintomis kainomis');
{
  console.group('Naudojant iš anksto aprašytą funkciją');
  {
    const increaseFlatPrice = function (flat) {
      flat.price *= 1.1;

      return flat;
    }

    const flatsAfterInflation = flats.map(increaseFlatPrice);
    console.table(flatsAfterInflation);
  }
  console.groupEnd();
  console.group('Naudojant anoniminę funkciją');
  {
    const flatsAfterInflation = flats.map(function (flat) {
      flat.price = flat.price * 1.1;

      return flat;
    });
    console.table(flatsAfterInflation);
  }
  console.groupEnd();
}
console.groupEnd();

console.group('3. Suformuokite butų masyvą, su papildomomis savybėmis: area, roomCount');
{
  const sumNumbers = function (numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }

    return sum;
  }
  console.group('Naudojant iš anksto aprašytą funkciją');
  {
    const addAreaAndRoomCount = function (flat) {
      flat.area = sumNumbers(flat.rooms);
      flat.roomCount = flat.rooms.length;

      return flat;
    }

    const flatsWithAreaAndRoomCount = flats.map(addAreaAndRoomCount);
    console.table(flatsWithAreaAndRoomCount);
  }
  console.groupEnd();
  console.group('Naudojant anoniminę funkciją');
  {
    const flatsWithAreaAndRoomCount = flats.map(function (flat) {
      flat.area = sumNumbers(flat.rooms);
      flat.roomCount = flat.rooms.length;

      return flat;
    });
    console.table(flatsWithAreaAndRoomCount);
  }
  console.groupEnd();
}
console.groupEnd();