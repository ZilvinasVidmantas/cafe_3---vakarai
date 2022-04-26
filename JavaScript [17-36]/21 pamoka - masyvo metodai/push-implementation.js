/*
  * aprašome funkcijas
  * kuriame duomemis patikrinti funkcijoms
  * kviečiame funkcijas su duomenimis (ir išsaugome rezultatus į kintamuosius)
  * spausdiname rezultatus
*/

console.group('1. Sukurkite funkciją kuri pridėtų naują elementą į masyvo galą, ir grąžintų elementų kiekį masyve');
{
  // aprašome funkcijas
  function push(arr, ...newElementsArr) {
    for (let i = 0; i < newElementsArr.length; i++) {
      arr[arr.length] = newElementsArr[i];
    }

    return arr.length;
  }

  // kuriame duomemis patikrinti funkcijoms
  const numbers = [1, 2, 3];
  const numbers2 = [0, 0];

  // kviečiame funkcijas su duomenimis (ir išsaugome rezultatus į kintamuosius)
  const numbersElementCount = push(numbers, 7, 8, 9);
  const numbers2ElementCount = push(numbers2, 1);

  // spausdiname rezultatus
  console.table({
    numbers,
    numbers2,
    numbersElementCount,
    numbers2ElementCount,
  });
}
console.groupEnd(); 
