class Module {
  static count = 0;

  id
  title;
  credits;

  constructor(title, credits) {
    this.id = `mod_${++Module.count}`;
    this.title = title;
    this.credits = credits;
  }
}

export default Module;