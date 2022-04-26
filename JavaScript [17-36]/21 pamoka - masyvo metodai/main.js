function degreesToRadians(degrees) {
  return degrees * Math.PI / 180;
}

function calcTriangleArea(b, c, angleAInDegrees) {
  const angleAInRadians = degreesToRadians(angleAInDegrees);

  return 0.5 * b * c * Math.sin(angleAInRadians);
}

const triangleArray = [
  /* triangleArray[0] */ { a: 3, b: 4, angleCDeg: 90 },
  /* triangleArray[1] */ { a: 4, b: 5, angleCDeg: 40 },
  /* triangleArray[2] */ { a: 1, b: 6, angleCDeg: 120 },
  /* triangleArray[3] */ { a: 2, b: 4, angleCDeg: 30 },
  /* triangleArray[4] */ { a: 4, b: 3, angleCDeg: 7 },
  /* triangleArray[5] */ { a: 4, b: 4, angleCDeg: 15 },
  /* triangleArray[6] */ { a: 4, b: 3, angleCDeg: 17 },
  /* triangleArray[7] */ { a: 9, b: 5, angleCDeg: 16 },
  /* triangleArray[8] */ { a: 5, b: 6, angleCDeg: 160 },
];

console.groupCollapsed('1. Suskaičiuokite visų figūrų užimamą plotą');
{
  let sumTriangleArea = 0;
  for (let i = 0; i < triangleArray.length; i++) {
    const triangle = triangleArray[i];
    const triangleArea = calcTriangleArea(triangle.a, triangle.b, triangle.angleCDeg);
    sumTriangleArea += triangleArea;
  }
  console.log('Result:', sumTriangleArea);
}
console.groupEnd();


console.groupCollapsed('2. Suskaičiuokite vienos figūros ploto vidurkį');
{
  let sumTriangleArea = 0;
  for (let i = 0; i < triangleArray.length; i++) {
    const triangle = triangleArray[i];
    const triangleArea = calcTriangleArea(triangle.a, triangle.b, triangle.angleCDeg);
    sumTriangleArea += triangleArea;
  }
  const triangleAreaAvg = sumTriangleArea / triangleArray.length;
  console.log('Result:', triangleAreaAvg);
}
console.groupEnd();


console.group('3. Atspausdinkite figūrą su didžiausiu plotu');
{
  let largetTringleIndex = 0;
  const initialTriangle = triangleArray[largetTringleIndex];
  let largetsTriangleArea = calcTriangleArea(initialTriangle.a, initialTriangle.b, initialTriangle.angleCDeg);

  for (let i = 1; i < triangleArray.length; i++) {
    const triangle = triangleArray[i];
    const triangleArea = calcTriangleArea(triangle.a, triangle.b, triangle.angleCDeg);
    if (triangleArea > largetsTriangleArea) {
      largetTringleIndex = i;
      largetsTriangleArea = triangleArea;
    }
  }

  const largentTriangle = triangleArray[largetTringleIndex];
  console.log({
    largentTriangle,
    largetsTriangleArea,
  })


}
console.groupEnd();


console.groupCollapsed('4. Atspausdinkite 3 mažiausio ploto figūras');
{

}
console.groupEnd();
