// TIK SUSIPAŽINIMUI SU KALBOS GALIMYBĖMIS IR TAKTIKOMIS
// const sexes = {
//   f: ['mother', 'me!', 'daugther'],
//   m: ['father', 'me!', 'son']
// }

// function generation(gen, sex) {
//   return (['grand', 'great grand'][Math.abs(gen) - 2] ?? '') + sexes[sex][Math.sign(gen) + 1];
// }

const generationData = {
  '-3': { f: 'great grandmother', m: 'great grandfather' },
  '-2': { f: 'grandmother', m: 'grandfather' },
  '-1': { f: 'mother', m: 'father' },
  0: { f: 'me!', m: 'me!' },
  1: { f: 'daughter', m: 'son' },
  2: { f: 'granddaughther', m: 'grandson' },
  3: { f: 'great granddaughter', m: 'great grandson' },
}

function generation(gen, sex) {
  return generationData[gen][sex];
}

console.table({
  'generation(-3, "f")': generation(-3, "f"),
  'generation(-2, "f")': generation(-2, "f"),
  'generation(-1, "f")': generation(-1, "f"),
  'generation(0, "f")': generation(0, "f"),
  'generation(1, "f")': generation(1, "f"),
  'generation(2, "f")': generation(2, "f"),
  'generation(3, "f")': generation(3, "f"),
  'generation(-3, "m")': generation(-3, "m"),
  'generation(-2, "m")': generation(-2, "m"),
  'generation(-1, "m")': generation(-1, "m"),
  'generation(0, "m")': generation(0, "m"),
  'generation(1, "m")': generation(1, "m"),
  'generation(2, "m")': generation(2, "m"),
  'generation(3, "m")': generation(3, "m"),
})