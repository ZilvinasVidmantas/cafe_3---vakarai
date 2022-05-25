class Faculty {
  static count = 0;

  id;
  title;

  constructor(title) {
    this.id = `fac_${++Faculty.count}`;
    this.title = title;
  }
}

export default Faculty;