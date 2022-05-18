import softwareSystems from '../data/info/software-systems.js'
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
    softwareSystems.semesters.forEach(semester => {
      const studentSemester = {
        studentModules: []
      }
      // Parašyti logiką, jog su kiekviena <semester> reikšme būtų sukurtas <StudentModule> objektas

      this.semesters.push(studentSemester);

    })
    // Pagal studijų programas suformuokite semestrus su ActiveModule objektais
  }
}

export default Student;
