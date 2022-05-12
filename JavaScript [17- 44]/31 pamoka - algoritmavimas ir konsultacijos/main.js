console.group("17. Sukurkite funkciją, kuri grąžina pirmos (nuo kairės pusės) 'a' raidės vietą žodyje");
{
  // const firstIndexOfLetterA = str => {
  //   for (let i = 0; i < str.length; i++) {
  //     if (str[i] === 'a') {
  //       return i;
  //     }
  //   }

  //   return -1;
  // }
  const firstIndexOfLetterA = str => str.indexOf('a')

  console.log('---');
  console.log({
    'labas': firstIndexOfLetterA('labas'),
    'kempės': firstIndexOfLetterA('kempės'),
    '123123': firstIndexOfLetterA('123123'),
  })
  console.log('---');
}