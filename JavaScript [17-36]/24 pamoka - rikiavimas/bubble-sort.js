const arr = [1, -5, 6, 1, 2, 5, 6, 9, -2, -17, 5];
//              [-17, -5, -2, 1, 1, 2, 5, 5, 6, 6, 9]

function bubbleSortNumbers(numbers) {
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = 1; j < numbers.length - i; j++) {
      if (numbers[j - 1] > numbers[j]) {
        let temp = numbers[j - 1];
        numbers[j - 1] = numbers[j];
        numbers[j] = temp;
      }
    }
  }

  return numbers;
}

console.log({
  'bubbleSortNumbers(arr)': bubbleSortNumbers(arr)
})