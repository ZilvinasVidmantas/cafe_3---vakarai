const arr = [1, -5, 6, 1, 2, 5, 6, 9, -2, -17, 5];
/*
  Palyginimo funkcija lygina 2 masyvo elementus.

  Parametrai palyginimo funkcijai yra perduodami automatiškai, kuomet
  kviečiame Array.prototype.sort metodą perduodant palyginimo funkciją

  Turite aprašyti funkciją taip:
    * grąžinus teigiamą skaičių pasakote, kad pirmasis parametras yra aukštesnio prioriteto
    * grąžinus neigiamą skaičių pasakote, kad antrasis parametras yra aukštesnio prioriteto
    * grąžinus 0 pasakote, kad elementų prioritetai yra lygūs
*/


const cmpNumbericASC = function (a, b) {
  return a - b;
}

const cmpNumbericDESC = function (a, b) {
  return b - a;
}

const arrASC = arr.slice().sort(cmpNumbericASC);
const arrDESC = arr.slice().sort(cmpNumbericDESC);
console.log({
  arr,
  arrASC,
  arrDESC
});
// 20:15
// Klausimai-atsakymai
