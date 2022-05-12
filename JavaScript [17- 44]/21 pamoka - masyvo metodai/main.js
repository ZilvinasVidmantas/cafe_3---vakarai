console.groupCollapsed('https://edabit.com/challenge/QaApgtePE6QrCZ64o');
{
  function getFirstValue(arr) {
    return arr[0];
  }

  console.table({
    'getFirstValue([1, 2, 3])': getFirstValue([1, 2, 3]),
    'getFirstValue([80, 5, 100])': getFirstValue([80, 5, 100]),
    'getFirstValue([-500, 0, 50])': getFirstValue([-500, 0, 50]),
  });
}
console.groupEnd();

console.groupCollapsed('https://edabit.com/challenge/3LpBLgNRyaHMvNb4j');
{
  function addition(a, b) {
    return a + b;
  }

  console.table({
    'addition(3, 2)': addition(3, 2),
    'addition(-3, -6) ': addition(-3, -6),
    'addition(7, 3) ': addition(7, 3),
  });
}
console.groupEnd();

console.groupCollapsed('https://edabit.com/challenge/8q54MKnRrm89pSLmW');
{
  function minutesToSeconds(minutes) {
    return minutes * 60;
  }

  console.table({
    'convert(5)': minutesToSeconds(5),
    'convert(3) ': minutesToSeconds(3),
    'convert(2) ': minutesToSeconds(2),
  });
}
console.groupEnd();

console.groupCollapsed('https://edabit.com/challenge/NAQhEoxbofPidLxm9');
{
  function addition(int) {
    return int + 1;
  }

  console.table({
    'addition(0)': addition(0),
    'addition(9) ': addition(9),
    'addition(-3) ': addition(-3),
  });
}
console.groupEnd();

console.groupCollapsed('https://edabit.com/challenge/3CaszbdZYGN4otQD8');
{
  function solution(base, height) {
    return base * height / 2
  }

  console.table({
    'solution(3, 2)': solution(3, 2),
    'solution(7, 4) ': solution(7, 4),
    'solution(10, 10) ': solution(10, 10),
  });
}
console.groupEnd();

console.groupCollapsed('https://edabit.com/challenge/bL7hSc6Zh4zZJzGmw');
{
  function solution(age) {
    return age * 365;
  }

  console.table({
    'solution(65)': solution(65),
    'solution(0) ': solution(0),
    'solution(20) ': solution(20),
  });
}
console.groupEnd();

console.groupCollapsed('https://edabit.com/challenge/j7yQbF3J3rToHsDBP');
{
  function solution(a) {
    return a ** 3;
  }

  console.table({
    'solution(3)': solution(3),
    'solution(5) ': solution(5),
    'solution(10) ': solution(10),
  });
}
console.groupEnd();

console.group('https://edabit.com/challenge/vvuAkYEAArrZvmp6X');
{
  function convertToBinary(decimal) {
    return decimal.toString(2);
  }

  function equalizeBinaryLength(bin1, bin2) {
    const numberDifference = bin1.length - bin2.length;
    const iterationCount = Math.abs(numberDifference);

    for (let i = 0; i < iterationCount; i++) {
      if (numberDifference < 0) {
        bin1 = '0' + bin1;
      } else {
        bin2 = '0' + bin2;
      }
    }

    return [bin1, bin2];
  }

  function bitwiseAnd2(bin1, bin2) {
    let result = '';
    for (let i = bin1.length - 1; i >= 0; i--) {
      const num1 = bin1[i] ?? '0';
      const num2 = bin2[i] ?? '0';
      if (num1 === '1' && num2 === '1') {
        result = '1' + result;
      } else {
        result = '0' + result;
      }
    }

    return result;
  }

  function trimBinary(bin) {
    let i = 0;
    while (bin[i] === '0') {
      bin = bin.slice(1);
    }
    return bin;
  }

  function bitwiseAnd10To2(dec1, dec2) {
    let bin1 = convertToBinary(dec1);
    let bin2 = convertToBinary(dec2);

    const equalizedBinaries = equalizeBinaryLength(bin1, bin2);

    bin1 = equalizedBinaries[0];
    bin2 = equalizedBinaries[1];

    const binaryAndResult = bitwiseAnd2(bin1, bin2);
    const binaryAndResultTrimmed = trimBinary(binaryAndResult);

    return binaryAndResultTrimmed;
  }
  function bitwiseORBinary(decimal1, decimal2) {

  }
  function bitwiseXORBinary(decimal1, decimal2) {

  }
  function bitwiseANDDecimal(decimal1, decimal2) {

  }
  function bitwiseORDecimal(decimal1, decimal2) {

  }
  function bitwiseXORDecimal(decimal1, decimal2) {

  }

  console.table({
    'bitwiseANDBinary(7, 12) ': bitwiseAnd10To2(7, 12), // 100
    'bitwiseORBinary(7, 12) ': bitwiseORBinary(7, 12), // 1111
    'bitwiseXORBinary(7, 12) ': bitwiseXORBinary(7, 12), // 1011
    'bitwiseANDDecimal(7, 12)': bitwiseANDDecimal(7, 12), // 4
    'bitwiseORDecimal(7, 12)': bitwiseORDecimal(7, 12), // 15
    'bitwiseXORDecimal(7, 12) ': bitwiseXORDecimal(7, 12), // 11
  });
}
console.groupEnd();

console.group('');
{
  function solution() {

  }

  console.table({
    'solution()': solution(),
    'solution() ': solution(),
    'solution() ': solution(),
  });
}
console.groupEnd();


