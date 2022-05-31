function degreesToRadians(degrees) {
  return degrees * Math.PI / 180;
}

function calcTriangleArea(b, c, angleAInDegrees) {
  const angleAInRadians = degreesToRadians(angleAInDegrees);

  return 0.5 * b * c * Math.sin(angleAInRadians);
}

function calcTrianglePerimeter(b, c, angleAInDegrees) {
  const angleAInRadians = degreesToRadians(angleAInDegrees);

  const a = (b ** 2 + c ** 2 - 2 * b * c * Math.cos(angleAInRadians)) ** (1 / 2);

  return a + b + c;
}

function calcCircleArea(r) {
  return Math.PI * r ** 2;
}

function calcCirclePerimerter(r) {
  return Math.PI * r * 2;
}

function calcSquareArea(a) {
  return a ** 2
}

function calcSquarePerimeter(a) {
  return 4 * a;
}

function calcRectangleArea(a, b) {
  return a * b;
}

function calcRectanglePerimeter(a, b) {
  return 2 * (a + b);
}

const triangleEdgeB = 3;
const triangleEdgeC = 4;
const angleAInDegrees = 90;

const radius = 5;

const squareEdge = 5;

const rectEdgeA = 5;
const rectEdgeB = 10;

const triangleArea = calcTriangleArea(triangleEdgeB, triangleEdgeC, angleAInDegrees);
const trianglePerimeter = calcTrianglePerimeter(triangleEdgeB, triangleEdgeC, angleAInDegrees);

const circleArea = calcCircleArea(radius);
const circlePerimeter = calcCirclePerimerter(radius);

const squareArea = calcSquareArea(squareEdge);
const squarePerimeter = calcSquarePerimeter(squareEdge);

const rectangleArea = calcRectangleArea(rectEdgeA, rectEdgeB);
const rectanglePerimeter = calcRectanglePerimeter(rectEdgeA, rectEdgeB);

console.groupCollapsed('Triangle calculations');
console.table({
  b: triangleEdgeB,
  c: triangleEdgeC,
  A: angleAInDegrees,
  '------': '-------------------',
  area: triangleArea,
  perimeter: trianglePerimeter,
});
console.groupEnd();

console.groupCollapsed('Circle calculations');
console.table({
  radius,
  '------': '-------------------',
  circleArea,
  circlePerimeter,
});
console.groupEnd();

console.groupCollapsed('Square calculations');
console.table({
  edge: squareEdge,
  '------': '-------------------',
  squareArea,
  squarePerimeter,
});
console.groupEnd();
console.groupCollapsed('Rectangle calculations');

console.table({
  edge11: rectEdgeA,
  edge12: rectEdgeB,
  '------': '-------------------',
  rectangleArea,
  rectanglePerimeter,
});
console.groupEnd();
