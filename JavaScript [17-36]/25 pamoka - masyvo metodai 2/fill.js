/*
  Skirtas užpildyti masyvą nurodytais elementais

  parametrai:
    * value - kuom užpildyti
    * start - nuo kurio elemento
    * end - iki kurio elemento

  grąžinimas:
    * modifikuotas masyvas
*/

console.group('Veikimo pavyzdys');
{
  const EMPTY_SYMBOL = '*';
  const BOMB_SYMBOL = '💣';

  const randomInt = function (max) {
    return Math.floor(Math.random() * max) + 1;
  }

  const createMap = function (rows, columns) {
    const mineSweeperMap = [];
    for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
      const emptyRow = new Array(columns).fill(EMPTY_SYMBOL);
      mineSweeperMap.push(emptyRow);
    }

    return mineSweeperMap;
  }

  const addBombs = function (map, bombCount) {
    const width = map[0].length;
    const height = map.length;
    const squares = width * height;
    if (bombCount > squares) {
      console.error('Žemėlapyje yra nepakankamai langelių');
      return;
    }
    let bombsCreated = 0;
    do {
      const x = randomInt(width) - 1;
      const y = randomInt(height) - 1;
      if (map[y][x] === EMPTY_SYMBOL) {
        map[y][x] = BOMB_SYMBOL;
        bombsCreated++;
      }
    } while (bombsCreated < bombCount);
  }

  const mineSweeperMap = createMap(10, 10);
  addBombs(mineSweeperMap, 10);

  console.log(mineSweeperMap);
}
console.groupEnd();
