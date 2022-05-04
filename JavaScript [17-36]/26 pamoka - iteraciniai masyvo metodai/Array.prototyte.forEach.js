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

// this -> masyvas su kuriuo bus iškviestas metodas <forEach>
Array.prototype.forEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
}

console.group('1. Atspausdinkite <flats> masyvo kainas');
{
  console.group('Naudojant iš anksto aprašytą funkciją');
  {
    const printPrice = function (flat) {
      console.log(flat.price);
    }
    flats.forEach(printPrice);
  }
  console.groupEnd();
  console.group('Naudojant anoniminę funkciją');
  {
    flats.forEach(function (flat) {
      console.log(flat.price);
    });
  }
  console.groupEnd();
}
console.groupEnd();

console.group('2. Atspausdinkite <flats> masyvo adresus ir kainas atskirtus kableliu ir tarpu');
{
  console.group('Naudojant iš anksto aprašytą funkciją');
  {
    const printAddressAndPrice = function (flat) {
      console.log(`${flat.address}, ${flat.price}`);
    }
    flats.forEach(printAddressAndPrice);
  }
  console.groupEnd();
  console.group('Naudojant anoniminę funkciją');
  {
    flats.forEach(function (flat) {
      console.log(`${flat.address}, ${flat.price}`);
    });
  }
  console.groupEnd();
}
console.groupEnd();

console.group('3. Atspausdinkite <flat> masyvo butų kambarius vienas po kitus');
{
  console.group('Naudojant iš anksto aprašytą funkciją');
  {
    const printRoom = function (room) {
      console.log(room);
    }
    const printFlatRoomsInColumns = function (flat) {
      flat.rooms.forEach(printRoom);
    }
    flats.forEach(printFlatRoomsInColumns);
  }
  console.groupEnd();
  console.group('Naudojant anoniminę funkciją');
  {
    flats.forEach(function (flat) {
      flat.rooms.forEach(function (room) {
        console.log(room);
      });
    });
  }
  console.groupEnd();
}
console.groupEnd();
