'use strict';

console.group('12. Sukurkite funkciją, kuri grąžina balsių kiekį žodyje');
{
  // const vowels = ['a', 'ą', 'e', 'ę', 'ė', 'i', 'į', 'y', 'o', 'u', 'ų', 'ū'];

  // const countVowels = (word) => {
  //   let vowelCount = 0;
  //   for (let i = 0; i < word.length; i++) {
  //     const letter = word[i];
  //     if (vowels.includes(letter)) {
  //       vowelCount++;
  //     }
  //   }

  //   return vowelCount;
  // }

  const countVowels = (word) => [...word.matchAll(/[aeiyuoąęėįų]/gi)].length

  console.table({
    'vowelCount(\'labas\')': countVowels('labas'),
    'vowelCount(\'vonia\')': countVowels('vonia'),
  })
}
console.groupEnd();


console.group('10. Atrinkti tik natūralių skaičių masyvą');
{
  const numbers = [1, 2, -2, 6, -5, 9, 1.02, 45, -69, 77, -12, 2, 8, -2, -4, 59, 7, -3];

  const isNatural = (number) => {
    if (number < 1) return false;
    return number % 1 === 0;
  }

  const numbersNatural = numbers.filter(isNatural);
  console.log(numbersNatural);
}
console.groupEnd();
