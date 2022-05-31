class Circle {
  radius;

  constructor(radius) {
    this.radius = radius;
  }

  get perimeter() {
    return Math.PI * this.radius ** 2
  }
}

export default Circle;