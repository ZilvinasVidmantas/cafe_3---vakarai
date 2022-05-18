import studyPrograms from '../data/study-programs.js';
import StudentModule from '../entities/student-module.js';

class Student {
  static count = 0;

  id;
  name;
  surname;
  course;
  studyProgramId;
  semesters;

  constructor(name, surname, studyProgramId) {
    this.id = `stud_${++Student.count}`;
    this.name = name;
    this.surname = surname;
    this.course = 1;
    this.studyProgramId = studyProgramId;
    this.semesters = [];
    this.assingStudyProgram();
  }

  assingStudyProgram() {
    const studyProgram = studyPrograms.find(x => x.id === this.studyProgramId);
    studyProgram.semesters.forEach(semester => {
      const studentSemester = {
        modules: []
      }
      semester.modules.forEach(moduleId => {
        studentSemester.modules.push(new StudentModule(moduleId));
      })
      this.semesters.push(studentSemester);
    })
  }
}

export default Student;
