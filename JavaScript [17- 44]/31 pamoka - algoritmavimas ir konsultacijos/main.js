console.group("27. Sukurkite funkciją, kuri pirmu parametru priima sakinį, ir kiekvieno žodžio pirmają raidę padaro didžiąja");
{
  // function capitalize(str) {
  //   const words = str.split(' ');
  //   const capitalizedWords = words.map(word => word[0].toUpperCase() + word.slice(1));
  //   const capitalizedWordsStr = capitalizedWords.join(' ');

  //   return capitalizedWordsStr;
  // }

  const capitalize = str => str
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ');


  console.log('---');
  console.table({
    'viens du trys': capitalize('viens du trys'),
    'as tave myliu': capitalize('as tave myliu'),
    'Bairis seniuk': capitalize('Bairis seniuk'),
  })
  console.log('---');
}
console.groupEnd();
console.log();