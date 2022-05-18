class Student {
  static count = 0;

  id;
  name;
  surname;
  course;
  studyProgramId;
  semesters;

  constructor(name, surname, course, studyProgramId) {
    this.id = `stud_${++Student.count}`;
    this.name = name;
    this.surname = surname;
    this.course = course;
    this.studyProgramId = studyProgramId;
    this.semesters = [];
    this.assignSemesters();
  }

  assignSemesters() {
    // Pagal studijų programas suformuokite semestrus su ActiveModule objektais
  }
}

export default Student;
