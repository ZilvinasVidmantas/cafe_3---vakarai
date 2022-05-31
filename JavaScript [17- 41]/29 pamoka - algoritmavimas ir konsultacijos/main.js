console.group('17. Sukurti funkciją, kuri ima masyvą ir grąžina didžiausią skaičių masyve.');
console.log('---');
{
  const numbers = [1, 2, -2, 6, -5, 9, 1.02, 45, -69, 77, -12, 2, 8, -2, -4, 59, 7, -3];
  const arrMax = (arr) => Math.max(...arr);

  console.log({
    numbers,
    result: arrMax(numbers)
  });
}
console.log('---');