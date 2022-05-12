/*
  Skirtas apsukti masyvą

  PASTABA: metodas keičią pradinį masyvą, todėl reikėtų naudoti kopiją

  grąžinimas:
    * atvirkščias masyvas
*/
console.group('Veikimo pavyzdys');
{
  const sortedNumbersASC = [1, 1, 2, 3, 4, 5, 5, 6, 6, 6];
  const sortedNumbersDESC = sortedNumbersASC.slice().reverse();

  console.log({
    sortedNumbersASC,
    sortedNumbersDESC
  });
}
console.groupEnd();


console.group('Praktinis pavyzdys');
{
  const isPalyndrome = function (word) {
    const letterArray = Array.from(word);
    const wordReversed = letterArray.reverse().join('');

    return word === wordReversed;
  }

  console.table({
    "isPalyndrome('civic')": isPalyndrome('civic'),
    "isPalyndrome('rotor')": isPalyndrome('rotor'),
    "isPalyndrome('tree')": isPalyndrome('tree'),
    "isPalyndrome('JavaScript')": isPalyndrome('JavaScript'),
  });
}
console.groupEnd();