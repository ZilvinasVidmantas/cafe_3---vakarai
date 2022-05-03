const person1 = {
  name: 'Serbentautas',
  surname: 'Bordiūras',
  age: 18,
  height: 186,
  weight: 70,
};
const person2 = {
  name: 'Luva',
  surname: 'Nivauskaitė',
  age: 12,
  height: 160,
  weight: 40,
};
const person3 = {
  name: 'Samonis',
  surname: 'Veiveris',
  age: 32,
  height: 175,
  weight: 80,
};
const person4 = {
  name: 'Čierka',
  surname: 'Stiklė',
  age: 31,
  height: 170,
  weight: 60,
};

const people = [person1, person2, person3, person4];
const temperatures = [5, 6, 2, -10, 1, -5, -6, -10, 4, 2, 5, 4];
const tags = ['JavaScript', 'Arrays', 'Algorythms', 'Array methods'];

/*
  Jau žinomi masyvo metodai:
    * push
    * shift
    * unshift
    * pop
    * slice
    * splice
    * sort
  
  Kiti neiteraciniai masyvo metodai
    * indexOf
    * lastIndexOf
    * includes 
    * concat
    * fill
    * flat
    * join
    * reverse
    * value
*/

console.groupCollapsed('indexOf');
{
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
  */

  // Veikimo pavyzdys
  console.group('Veikimo pavyzdys');
  {
    const indexOfMinus10 = temperatures.indexOf(-10 /*, 4 */);
    if (indexOfMinus10 === -1) {
      console.error('-10 nerastas');
    } else {
      console.log('elementas rastas indeksu:', indexOfMinus10);
    }
  }
  console.groupEnd();

  // Praktinis pavyzdys
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
}
console.groupEnd();