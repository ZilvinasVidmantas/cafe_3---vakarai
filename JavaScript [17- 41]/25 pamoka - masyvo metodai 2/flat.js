/*
  Skirtas išrašyti reikšmes į vienmattį masyvą (išplokštinti)

  parametrai:
    * depth - išploksštinimo gylis

  grąžinimas:
    * modifikuotas masyvas
*/
console.group('Veikimo pavyzdys');
{
  const numbersAndArrayOfNumbers = [1, 2, [45, 7, [7, 8]]];

  console.log({
    'numbersAndArrayOfNumbers.flat()': numbersAndArrayOfNumbers.flat(),
    'numbersAndArrayOfNumbers.flat(2)': numbersAndArrayOfNumbers.flat(2),
  });

}
console.groupEnd();


console.group('Praktinis pavyzdys');
{
  const sumNumbersArray = function (numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }

    return sum;
  }

  const createPropertyArray = function (arr, property) {
    const values = [];
    for (let i = 0; i < arr.length; i++) {
      const value = arr[i][property];
      values.push(value);
    }

    return values;
  }

  const calcAvgSquarePrice = function (flats) {
    const flatsRooms = createPropertyArray(flats, 'rooms');
    const prices = createPropertyArray(flats, 'price');

    const rooms = flatsRooms.flat();
    const squares = sumNumbersArray(rooms);
    const price = sumNumbersArray(prices);
    const avgSquarePrice = price / squares;

    return avgSquarePrice;
  }

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

  console.log({
    'calcAvgSquarePrice(flats)': calcAvgSquarePrice(flats),
  })

}
console.groupEnd();