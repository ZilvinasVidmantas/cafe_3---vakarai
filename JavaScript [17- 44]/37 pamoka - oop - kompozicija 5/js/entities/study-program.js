class StudyProgram {
  static count = 0;

  id;
  title;
  semesters;
  facultyId;

  constructor(title, facultyId) {
    this.id = `stud_prog_${++StudyProgram.count}`;
    this.title = title;
    this.facultyId = facultyId
    this.semesters = [];
  }

  addSemester(semesterNumber, semester) {
    this.semesters[semesterNumber - 1] = semester;
  }
}

export default StudyProgram;