const flats = [{
  address: 'Kunigų g. 7',
  rooms: [20, 16, 14] // 50
}, {
  address: 'Sargėnų vieta 5',
  rooms: [20, 16, 14, 20] // 70
}, {
  address: 'Jūros pr. 12',
  rooms: [50, 40] // 90
}, {
  address: 'Fantazijo al. 77',
  rooms: [15, 12, 13, 15, 14] // 69
}];

const byRoomCount = function (f1, f2) {
  return f1.rooms.length - f2.rooms.length;
}

const calcRoomArea = function (rooms) {
  let sum = 0;
  for (let i = 0; i < rooms.length; i++) {
    sum += rooms[i];
  }

  return sum;
}

const byRoomsArea = function (f1, f2) {
  const area1 = calcRoomArea(f1.rooms);
  const area2 = calcRoomArea(f2.rooms);

  return area1 - area2;
}

const flatsByRoomCount = flats.slice().sort(byRoomCount);
const flatsByRoomsArea = flats.slice().sort(byRoomsArea);

console.log('%cflats', 'font-size: 20px');
console.table(flats);

console.log('%cflats by room count', 'font-size: 20px');
console.table(flatsByRoomCount);

console.log('%cflats by room area', 'font-size: 20px');
console.table(flatsByRoomsArea);