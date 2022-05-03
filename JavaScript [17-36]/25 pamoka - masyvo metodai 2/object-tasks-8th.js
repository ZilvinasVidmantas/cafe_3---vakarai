// const calculateLosses = function (obj) {
//   const valuesArr = Object.values(obj);
//   if (valuesArr.length === 0) return 'Lucky you!';

//   let sum = 0;
//   for (let i = 0; i < valuesArr.length; i++) {
//     sum += valuesArr[i];
//   }

//   return sum;
// }

// Kad naudoti persiskaitykite: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// const calculateLosses = function (obj) {
//   const valuesArr = Object.values(obj);
//   if (valuesArr.length === 0) return 'Lucky you!';

//   return valuesArr.reduce((prev, value) => prev + value);
// }

const calculateLosses = function (obj) {
  let sum = 0;
  for (const key in obj) {
    sum += obj[key]
  }
  if (sum === 0) return 'Lucky you!';
  return sum;
}

const stolenItems1 = {
  tv: 30,
  skate: 20,
  stereo: 50,
};

const stolenItems2 = {
  painting: 20000,
};

const stolenItems3 = { picture: 0 };

console.table({
  'calculateLosses(stolenItems1)': calculateLosses(stolenItems1), // 100
  'calculateLosses(stolenItems2)': calculateLosses(stolenItems2), // 20 000
  'calculateLosses(stolenItems3)': calculateLosses(stolenItems3), // "Lucky you!"
})