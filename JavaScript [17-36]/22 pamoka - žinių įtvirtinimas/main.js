const numbers = [1, 5, 4, 8, 6, 7, 8, 1, 1];
const binaryNumbers = [0, 1, 1, 1, 0, 0, 1, 0];

console.group('Sukurkite funkciją, kuri sudėtų visus skaičius masyve');
{
  function sumArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }

    return sum;
  }

  const numbersSum = sumArray(numbers);
  const binaryNumbersSum = sumArray(binaryNumbers);

  console.log({
    numbersSum,
    binaryNumbersSum,
  });
}
console.groupEnd();

console.group('Sukurkite funkciją, kuri grąžintų didžiausią skaičių masyve');
{
  function arrMax(array) {
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
      if (array[i] > max) {
        max = array[i];
      }
    }

    return max;
  }

  const numbersMax = arrMax(numbers);
  const binaryNumbersMax = arrMax(binaryNumbers);

  console.log({
    numbersMax,
    binaryNumbersMax,
  });

}
console.groupEnd();