/*
  Skirtas sujungti masyvo elementu skyrikliu

  parametrai:
    * separator - skyriklis

  grąžinimas:
    * masyvo elementai susjungti skyrikliu (STRING)
*/
console.group('Veikimo pavyzdys');
{
  const words = ['Don\'t', 'come', 'easy', 'to', 'me'];
  console.log(words.join(' '));
}
console.groupEnd();


console.group('Praktinis pavyzdys');
{
  const createQueryParams = function (params) {
    const keyValuePairs = Object.entries(params);
    const paramArr = [];
    for (let i = 0; i < keyValuePairs.length; i++) {
      paramArr.push(keyValuePairs[i].join('='));
    }

    return '?' + paramArr.join('&');
  }

  // ?priceFrom=20&price_to=60&color=blue
  const params = {
    priceFrom: 20,
    priceTo: 60,
    color: 'blue',
    size: 'L'
  };

  console.log({
    'createQueryParams(params)': createQueryParams(params)
  })
}
console.groupEnd();