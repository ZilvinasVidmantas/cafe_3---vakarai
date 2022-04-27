function convertToBinary(dec) {
  return dec.toString(2);
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
    const num1 = bin1[i];
    const num2 = bin2[i];
    if (num1 === '1' && num2 === '1') {
      result = '1' + result;
    } else {
      result = '0' + result;
    }
  }

  return result;
}

function trimBinary(bin) {
  while (bin[0] === '0') {
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
console.groupEnd();
