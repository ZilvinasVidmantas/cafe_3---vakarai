console.group('3. Atspausdinti failu struktūrą naudojant rekursiją')
{
  const myFolder = {
    type: 'folder',
    name: 'Javascript kursai',
    files: [
      {
        type: 'file',
        name: 'komandos.txt'
      },
      {
        type: 'folder',
        name: '1 savaitė',
        files: [
          {
            type: 'folder',
            name: '1 pamoka',
            files: [
              {
                type: 'file',
                name: 'index.html'
              },
              {
                type: 'file',
                name: 'main.css'
              },
            ]
          },
          {
            type: 'folder',
            name: '2 pamoka',
            files: [
              {
                type: 'file',
                name: 'index.html'
              }
            ]
          }
        ]
      }
    ]
  }
  function printFiles(file, prefix = '') {
    const isFolder = file.type === 'folder';
    const formattedFileName = `${prefix}${file.name}${(isFolder ? ' /' : '')}`;
    console.log(formattedFileName);
    if (isFolder) {
      file.files.forEach(childFile => printFiles(childFile, prefix + '--'));
    }
  }
  printFiles(myFolder);
  // Javascript kursai
  // --file
  // --folder /
  // ----1 pamoka /
  // ------index.html
  // ------main.css
  // ----2 pamoka /
  // ------index.html
}
console.groupEnd();

console.group('4. Parašyti funkciją, kuri surastų objektuose arba masyvuose visas skaitines reikšmes, ir jas sudėtų');
{
  const calcSum = (numberStructure) => {
    console.group('function called with: ' + numberStructure);
    let returnValue;
    if (numberStructure instanceof Array) {
      returnValue = numberStructure.reduce((sum, el) => sum + calcSum(el), 0)
    } else if (numberStructure instanceof Object) {
      const arr = Object.values(numberStructure);
      returnValue = arr.reduce((sum, el) => sum + calcSum(el), 0)
    } else {
      returnValue = numberStructure
    }
    console.log('returned:', returnValue);
    console.groupEnd()
    return returnValue;
  }

  const data = [
    1,
    5,
    [
      4,
      5,
      9,
      {
        q: 7,
        z: [4, 8, 9]
      }
    ],
    8,
    {
      a: 7,
      b: 9,
      h: [
        4,
        5,
        {
          j: 7,
          p: 8,
          z: [7, 7, 7]
        }
      ]
    }
  ];

  console.log(calcSum(data));
}
console.groupEnd();