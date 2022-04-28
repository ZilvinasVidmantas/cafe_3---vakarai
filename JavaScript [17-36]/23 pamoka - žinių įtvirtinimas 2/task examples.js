console.group('array.js example');
{
  let nouns = ['apple', 'sister', 'hammer', 'sun', 'table', 'sky', 'lake'];
  // indeksai:    0       1         2        3       4        5       6    
  let helpers = ['in', 'with', 'on', 'my', 'is', 'a', 'the', ' '];
  // indeksai:    0       1     2      3     4    5     6     7

  // 2. hammer is on the table
  const res2 = nouns[2] + helpers[7] + helpers[4] + helpers[7] + helpers[2] + helpers[7]
    + helpers[7] + helpers[6] + helpers[7] + nouns[4];
  console.log(res2);
}
console.groupEnd();


console.group('functions-tasks-1.js example');
{
  let nouns = ['apple', 'sister', 'hammer', 'sun', 'table', 'sky', 'lake'];
  console.group('7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus eilutėmis');
  {
    function printIndexesInRows(arr) {
      for (let i = 0; i < arr.length; i++) {
        console.log(i);
      }
    }

    printIndexesInRows(nouns);
  }
  console.groupEnd();
}
console.groupEnd();