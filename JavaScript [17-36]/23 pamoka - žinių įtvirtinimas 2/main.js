
function calcSum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum;
}

function findMin(array) {
  let min = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }

  return min;
}

function calcAvg(array) {
  const sum = calcSum(array);
  const avg = sum / array.length;

  return avg;
}

function indexOf(arr, el, from = 0) {
  for (let i = from; i < arr.length; i++) {
    if (arr[i] === el) {
      return i;
    }
  }
  return -1;
}

function indexOfAll(array, element) {
  const foundIndexes = [];

  let foundIndex = indexOf(array, element);
  while (foundIndex >= 0) {
    foundIndexes.push(foundIndex);
    foundIndex = indexOf(array, element, foundIndex + 1);
  }

  return foundIndexes;
}

function printArrRow(array) {
  let arrString = '[';
  for (let i = 0; i < array.length; i++) {
    arrString += array[i] + ', ';
  }
  if (array.length > 0) {
    arrString = arrString.slice(0, -2);
  }

  return arrString + ']';
}

const numbers = [1, 2, 3, 4, 5, 4, 4];
const numbers2 = [5, 4, 6, 7, 3, 4];

console.log('numbers:', numbers);
console.log('numbers2:', numbers2);

console.groupCollapsed('1. Sukurkite funkciją, kuri surastų mažiausią skaičių masyve');
{
  console.table({
    'findSmallestNumber(numbers)': findMin(numbers),
    'findSmallestNumber(numbers2)': findMin(numbers2),
  });
}
console.groupEnd();

console.groupCollapsed('2. Sukurkite funkcija, kuri suskaičiuotų visų masyvo elementų vidurkį');
{
  console.table({
    'calculateAverage(numbers)': calcAvg(numbers),
    'calculateAverage(numbers2)': calcAvg(numbers2),
  });
}
console.groupEnd();

console.groupCollapsed('3. Sukurkite funkciją kuri surastų elemento indeksą masyve, jeigu jis nėra randamas, tuomet funkcija turi grąžinti -1. Pridėkite dar vieną parametrą, kuris nurodytų nuo kurio masyvo indekso pradėti paiešką.');
{
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

console.groupCollapsed('4. Sukurkite funkciją kuri surastų visus elemento indeksus masyve.');
{
  console.table({
    'findElementIndexes(numbers, 4)': printArrRow(indexOfAll(numbers, 4)),
    'findElementIndexes(numbers, 9)': printArrRow(indexOfAll(numbers, 9)),
  })
}
console.groupEnd();

console.groupCollapsed('5. Sukurkite funkciją kuri atspausdintų visus masyvo elementus vienas šalia kito');
{
  console.table({
    'printArrRow(numbers)': printArrRow(numbers),
    'printArrRow(numbers2)': printArrRow(numbers2),
  });
}
console.groupEnd();
