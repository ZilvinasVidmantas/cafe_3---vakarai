/*
   Laura
   Tatjana
   Mažvydas
   Titas
   Juozas
   Radoslav
*/


const numbers = [7, 8, 9, 7, 4, 'nesamone', 5, 4, 1, 8, 4];

console.group('Break pvz:');
{
  let i = 0;
  let sum = 0;

  while (i < numbers.length) {
    if (typeof numbers[i] !== 'number') {
      console.error('Blogai duomenys', numbers);
      break;
    }
    sum += numbers[i];
    i++;
  }

  console.log('suma:', sum);
}
console.groupEnd();

console.group('Continue pvz:');
{
  let i = 0;
  let sum = 0;

  while (i < numbers.length) {
    if (typeof numbers[i] !== 'number') {
      i++;
      continue;
    }
    sum += numbers[i];
    i++;
  }

  console.log('suma:', sum);
}
console.groupEnd();
