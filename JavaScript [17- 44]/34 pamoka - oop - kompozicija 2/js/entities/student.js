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
    console.group(`${this.name} ${this.surname}`);
    const studyProgram = studyPrograms.find(x => x.id === this.studyProgramId);
    // 10min, pertraukia
    // tęskite užduotį
    studyProgram.semesters.forEach(semester => {
      console.log(semester);
      const studentSemester = {
        studentModules: []
      }
      semester.modules.forEach(moduleId => {
        // naudojant moduleId, sukurti <StudentModule> ir įdėti į studentSemester.studnetModules
        console.log(moduleId);
      })


      this.semesters.push(studentSemester);

    })
    console.groupEnd();
  }
}

export default Student;
