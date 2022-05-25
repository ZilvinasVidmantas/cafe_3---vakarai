// 25. Sukurkite funkciją, kuri pirmu parametru priimtų žodį, o antruoju - masyvą su raidėmis.
//  Ši funkcija turi žodyje ištrinti visas raides, kurios perduotos antruoju parametru.
//  Atlikus veiksmus, grąžinti pakeistą žodį
console.group("25. Sukurkite funkciją, kuri pirmu parametru priimtų žodį, o antruoju - masyvą su raidėmis.");
{
  const filterLetters = (str, lettersToRemove) => lettersToRemove.reduce(
    (prevStr, letter) => prevStr.replaceAll(letter, ''),
    str
  );

  const str = filterLetters('Brangaakmienio paveikslas', ['a', 'i']);
  console.log(str);
}
console.groupEnd();
