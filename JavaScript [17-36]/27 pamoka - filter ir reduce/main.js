/*
Array.prototype.filter iteracinis metodas yra skirtas kurti naują masyvą, ATRENKANT REIKŠMES PAGAL SALYGĄ iš iteruojamų masyvo elementų.
Iteruodamas per kiekvieną masyvo elementą, jis vykdo parametru perduotą funkciją, perduodant jai einamajį elementą, jo indeksą ir 
iteruojamajį masyvą. Jeigu perduotos funkcijos grąžinimo reikšmė yra 'truthy', einamasis elementas įdedamas į naujai formuojamą masyvą.
Priešingu atveju, jeigu parametru perduotos funkcijos grąžinimo rezultatas su einamuoju elementu yra 'falsy', tuomet einamasis elementas NĖRA įdedamas į naujai formuojamą masyvą.
 
Kaip ir Array.prototype.forEach atveju, perduodamoji (tikrinimo) funkcija gali priimti 3 parametrus:
  1. einamasis elementas
  2. einamojo elemento indeksas
  3. iteruojamas masyvas
Perduodamoji funkcija PRI-VA-LO grąžinti BOOLEAN, kur priklausomai nuo jos grąžinimo:
  * true - elementas bus pridedamas į naujai formuojamą masyvą.
  * false - elementas NEBUS pridedamas į naujai formuojamą masyvą.
*/

// 19:15
console.group('Veikimo pavyzdys - atrikti lyginius skaičius');
{
  const numbers = [1, 2, 3, 4];

  console.group('Naudojant iš anksto aprašytą funkciją');
  {
    const isEven = function (el) {
      return el % 2 === 0;
    }

    const numbersEven = numbers.filter(isEven);
    console.log(numbersEven);
  }
  console.groupEnd();
  console.group('Naudojant anoniminę funkciją');
  {
    const numbersEven = numbers.filter(function (el) {
      return el % 2 === 0;
    });
    console.log(numbersEven);
  }
  console.groupEnd();
  console.group('Naudojant iš anksto aprašytą lambda išraišką');
  {
    const isEven = el => el % 2 === 0;

    const numbersEven = numbers.filter(isEven);
    console.log(numbersEven);
  }
  console.groupEnd();
  console.group('Naudojant anoniminę lambda išraišką');
  {
    const numbersEven = numbers.filter(el => el % 2 === 0);
    console.log(numbersEven);
  }
  console.groupEnd();
}
console.groupEnd();

console.group();
{
  console.group('Naudojant iš anksto aprašytą funkciją');
  {

  }
  console.groupEnd();
  console.group('Naudojant anoniminę funkciją');
  {

  }
  console.groupEnd();
  console.group('Naudojant iš anksto aprašytą lambda išraišką');
  {

  }
  console.groupEnd();
  console.group('Naudojant anoniminę lambda išraišką');
  {

  }
  console.groupEnd();
}
console.groupEnd();