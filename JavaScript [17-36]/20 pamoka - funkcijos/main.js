function calcTriangleArea(b, c, angleA) {
  return 0.5 * b * c * Math.sin(angleA * Math.PI / 180);
}

function calcTrianglePerimeter(b, c, angleA) {
  const a = (b ** 2 + c ** 2 - 2 * b * c * Math.cos(angleA * Math.PI / 180)) ** (1 / 2);

  return a + b + c;
}

console.group('Triangle props');
const edge1 = 3;
const edge2 = 4;
const angleBetween = 90;

const triangleArea = calcTriangleArea(edge1, edge2, angleBetween);
const trianglePerimeter = calcTrianglePerimeter(edge1, edge2, angleBetween);

console.table({
  edge1,
  edge2,
  angleBetween,
  '------': '-------------------',
  triangleArea,
  trianglePerimeter,
});

function calcCircleArea(r) {

}

function calcCirclePerimerter(r) {

}

function calcSquareArea(a) {

}

function calcSquarePerimeter(a) {

}

function calcRectangleArea(a, b) {

}

function calcRectanglePerimeter(a, b) {

}
