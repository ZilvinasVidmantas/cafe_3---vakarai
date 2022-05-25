class StudyProgramSemester {
  static count = 0;

  id;
  modules;

  constructor() {
    this.id = `mod_${++StudyProgramSemester.count}`;
    this.modules = [];
  }

  addModule(moduleId) {
    this.modules.push(moduleId);
  }
}

export default StudyProgramSemester;
