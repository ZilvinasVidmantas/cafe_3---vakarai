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