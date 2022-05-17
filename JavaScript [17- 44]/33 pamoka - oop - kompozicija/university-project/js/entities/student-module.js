class StudentModule {
  static count = 0;

  id;
  moduleId;
  marks;

  constructor(moduleId) {
    this.id = `act_mod_${++StudentModule.count}`;
    this.moduleId = moduleId;
    this.marks = [];
  }
}

export default StudentModule;