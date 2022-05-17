import Faculty from './entities/faculty.js';
import StudyProgram from './entities/study-program.js';

export const faculties = [];
export const studyPrograms = [];
export const studyProgramSemesters = []
export const modules = [];

const informaticsFaculty = new Faculty('Informatikos fakultetas');
faculties.push(informaticsFaculty);

const multimediaProgram = new StudyProgram('Multimedijos technologijos', informaticsFaculty.id);

console.log(multimediaProgram);


const data = {
  faculties,
  studyPrograms,
  studyProgramSemesters,
  modules,
}

export default data;
