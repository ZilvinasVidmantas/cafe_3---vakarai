import Square from './Square.js';
import Circle from './Circle.js';

const shapes = [
  new Square(4),
  new Square(5),
  new Circle(9),
  new Square(2),
  new Circle(5),
  new Circle(4),
  new Circle(3),
  new Square(4),
];

//                                   Polimorfizmas
shapes.forEach(shape => console.log(shape.perimeter));