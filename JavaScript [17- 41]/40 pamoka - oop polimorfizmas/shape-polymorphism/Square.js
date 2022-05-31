class Square {
  edge;

  constructor(edge) {
    this.edge = edge
  }

  get perimeter() {
    return this.edge ** 2;
  }
}

export default Square;