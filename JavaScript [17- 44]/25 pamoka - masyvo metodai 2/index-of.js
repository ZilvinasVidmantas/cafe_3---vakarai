/*
   Skirtas surasti ieškomo elemento indeksą masyve.
   
   parametrai:
     * search - ko ieškoti
     * from - nuo kurio indekso pradėti paiešką
   
   grąžinimas:
     * jeigu elementas rastas, tuomet grąžinamas jo indeksas
     * jeigu elementas nerastas, grąžinamas -1
   
   veikimo principas:
     Elementas ieškomas pradedant nuo parametro <from>. Jeigu parametras
     <from> nėra duotas, tuomet paieška pradedama nuo 0.
     Paieška vykdoma nuo pradžios
 */

console.group('Veikimo pavyzdys');
{
  const temperatures = [5, 6, 2, -10, 1, -5, -6, -10, 4, 2, 5, 4];
  const indexOfMinus10 = temperatures.indexOf(-10 /*, 4 */);
  if (indexOfMinus10 === -1) {
    console.error('-10 nerastas');
  } else {
    console.log('elementas rastas indeksu:', indexOfMinus10);
  }
}
console.groupEnd();

console.group('Praktinis pavyzdys. Nurodyto elemento pasikartojimų pašalinimas');
{
  const numbers = [1, 1, 2, 5, 4, 5, 4, 1];
  // Sprendimas keičiant orginalų masyvą, be indexOf
  // const removeAll = function (arr, search) {
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] === search) {
  //       arr.splice(i--, 1);
  //     }
  //   }
  // }
  // Sprendimas keičiant orginalų masyvą, su indexOf
  const removeAll = function (arr, search) {
    let ii = arr.indexOf(search);
    while (ii !== -1) {
      arr.splice(ii, 1);
      ii = arr.indexOf(search, ii);
    }
  }

  removeAll(numbers, 1);

  console.log(numbers);
}
console.groupEnd();