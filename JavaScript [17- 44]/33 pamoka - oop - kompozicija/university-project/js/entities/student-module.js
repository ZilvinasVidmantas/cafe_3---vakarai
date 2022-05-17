class StudentModule {
  static count = 0;

  id;
  moduleId;
  marks;

  constructor(moduleId) {
    this.id = `act_mod_${++Faculty.count}`;
    this.moduleId = moduleId;
    this.marks = [];
  }
}