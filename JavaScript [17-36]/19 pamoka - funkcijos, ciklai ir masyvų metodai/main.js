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


/*
  1. Parašykite ciklą, kuris atspausdintų (naudodami WHILE)
    10
    9
    8
    7
    6
    5
    4
    3
    2
    1

  2. Parašykite ciklą, kuris atspausdintų (naudodami FOR)
    10
    9
    8
    7
    6
    5
    4
    3
    2
    1
  
  3. Peržiūrėkite 11-47 eilutės kodą, suformuokite klausimus, jeigu nėra aišku

  Perskaitykite failą 'functions.js', jeigu neturit ką veikt. Arba ilsėkitės

  Tęsiame: 19:40


*/