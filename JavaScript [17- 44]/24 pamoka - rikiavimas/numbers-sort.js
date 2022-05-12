const byNumbericASC = function (a, b) {
  return a - b;
}

const byNumbericDESC = function (a, b) {
  return b - a;
}

const arr = [1, -5, 6, 1, 2, 5, 6, 9, -2, -17, 5];

console.log({
  arr,
  arrASC,
  arrDESC
});