const numbers = [1, 2, 3, 4, 5, 4, 4];
const numbers2 = [5, 4, 6, 7, 3, 4];

console.log('numbers:', numbers);
console.log('numbers2:', numbers2);

console.groupCollapsed('1. Sukurkite funkciją, kuri surastų mažiausią skaičių masyve');
{
  function findSmallestNumber(array) {
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] < min) {
        min = array[i];
      }
    }

    return min;
  }

  console.log({
    'findSmallestNumber(numbers)': findSmallestNumber(numbers),
    'findSmallestNumber(numbers2)': findSmallestNumber(numbers2),
  });
}
console.groupEnd();

console.groupCollapsed('2. Sukurkite funkcija, kuri suskaičiuotų visų masyvo elementų vidurkį');
{
  function calculateAverage(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }

    const avg = sum / array.length;

    return avg;
  }

  console.log({
    'calculateAverage(numbers)': calculateAverage(numbers),
    'calculateAverage(numbers2)': calculateAverage(numbers2),
  });
}
console.groupEnd();

console.group('3. Sukurkite funkciją kuri surastų elemento indeksą masyve, jeigu jis nėra randamas, tuomet funkcija turi grąžinti -1. Pridėkite dar vieną parametrą, kuris paskytų nuo kurio masyvo indekso pradėti paiešką.');
{
  function indexOf(arr, el, from = 0) {
    for (let i = from; i < arr.length; i++) {
      if (arr[i] === el) {
        return i;
      }
    }
    return -1;
  }

  console.table({
    'indexOf(numbers, 4)': indexOf(numbers, 4),
    'indexOf(numbers, 4, 4)': indexOf(numbers, 4, 4),
    'indexOf(numbers, -7)': indexOf(numbers, -7),
  });
  console.table({
    'indexOf(numbers2, 4)': indexOf(numbers2, 4),
    'indexOf(numbers2, 7)': indexOf(numbers2, -7),
  })
}
console.groupEnd();
