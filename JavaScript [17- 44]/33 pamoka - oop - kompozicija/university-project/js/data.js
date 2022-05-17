import Faculty from './entities/faculty.js';
import StudyProgram from './entities/study-program.js';
import StudyProgramSemester from './entities/study-program-semester.js';
import Module from './entities/module.js';

export const faculties = [];
export const studyPrograms = [];
export const modules = [];

const informaticsFaculty = new Faculty('Informatikos fakultetas');
faculties.push(informaticsFaculty);

const computerSystems = new StudyProgram('Programų sistemos', informaticsFaculty.id);
studyPrograms.push(computerSystems);

const computerSystemsSemester1 = new StudyProgramSemester();
const moduleInfo11 = new Module('Akademinė ir mokslinė anglų kalba C1 I/II d.', 5)
const moduleInfo12 = new Module('Diskrečioji matematika', 5)
const moduleInfo13 = new Module('IT ir komunikacijos įgūdžiai', 5)
const moduleInfo14 = new Module('Kompiuterių architektūra', 5)
const moduleInfo15 = new Module('Matematika programų sistemoms I/III d.', 5)
const moduleInfo16 = new Module('Procedūrinis programavimas', 5)
computerSystemsSemester1.addModule(moduleInfo11.id);
computerSystemsSemester1.addModule(moduleInfo12.id);
computerSystemsSemester1.addModule(moduleInfo13.id);
computerSystemsSemester1.addModule(moduleInfo14.id);
computerSystemsSemester1.addModule(moduleInfo15.id);
computerSystemsSemester1.addModule(moduleInfo16.id);

const computerSystemsSemester2 = new StudyProgramSemester();
const moduleInfo21 = new Module('Akademinė ir mokslinė anglų kalba C1 II/II d.', 5)
const moduleInfo22 = new Module('Algoritmai ir duomenų struktūros', 5)
const moduleInfo23 = new Module('Algoritmų teorija', 10)
const moduleInfo24 = new Module('Matematika programų sistemoms II/III d.', 5)
const moduleInfo25 = new Module('Objektinis programavimas', 5)
computerSystemsSemester2.addModule(moduleInfo21.id);
computerSystemsSemester2.addModule(moduleInfo22.id);
computerSystemsSemester2.addModule(moduleInfo23.id);
computerSystemsSemester2.addModule(moduleInfo24.id);
computerSystemsSemester2.addModule(moduleInfo25.id);

const computerSystemsSemester3 = new StudyProgramSemester();
const moduleInfo31 = new Module('Duomenų bazių valdymo sistemos', 10)
const moduleInfo32 = new Module('Funkcinis programavimas', 5)
const moduleInfo33 = new Module('Matematinė logika', 5)
const moduleInfo34 = new Module('Programų sistemų inžinerija I/II d.', 10)
computerSystemsSemester3.addModule(moduleInfo31.id);
computerSystemsSemester3.addModule(moduleInfo32.id);
computerSystemsSemester3.addModule(moduleInfo33.id);
computerSystemsSemester3.addModule(moduleInfo34.id);

const computerSystemsSemester4 = new StudyProgramSemester();
const moduleInfo41 = new Module('Kompiuterių tinklai', 5)
const moduleInfo42 = new Module('Matematika programų sistemoms III/III d.', 10)
const moduleInfo43 = new Module('Programų sistemų inžinerija II/II d.', 5)
const moduleInfo44 = new Module('Buhalterinė apskaita', 5)
const moduleInfo45 = new Module('Fizika informatikams', 5)
computerSystemsSemester4.addModule(moduleInfo41.id);
computerSystemsSemester4.addModule(moduleInfo42.id);
computerSystemsSemester4.addModule(moduleInfo43.id);
computerSystemsSemester4.addModule(moduleInfo44.id);
computerSystemsSemester4.addModule(moduleInfo45.id);

const computerSystemsSemester5 = new StudyProgramSemester();
const moduleInfo51 = new Module('Interneto technologijos', 10)
const moduleInfo52 = new Module('Programų sistemų projektavimas', 10)
const moduleInfo53 = new Module('Programų sistemų testavimas', 5)
const moduleInfo54 = new Module('Žmogaus-kompiuterio sąveika', 5)
computerSystemsSemester5.addModule(moduleInfo51.id);
computerSystemsSemester5.addModule(moduleInfo52.id);
computerSystemsSemester5.addModule(moduleInfo53.id);
computerSystemsSemester5.addModule(moduleInfo54.id);

const computerSystemsSemester6 = new StudyProgramSemester();
const moduleInfo61 = new Module('Giliojo mokymosi metodai', 5)
const moduleInfo62 = new Module('Profesionalumas ir etika', 5)
const moduleInfo63 = new Module('Programų sistemų kūrimas', 10)
const moduleInfo64 = new Module('Statistinė duomenų analizė', 5)
const moduleInfo65 = new Module('Lygiagretusis programavimas', 5)
computerSystemsSemester6.addModule(moduleInfo61.id);
computerSystemsSemester6.addModule(moduleInfo62.id);
computerSystemsSemester6.addModule(moduleInfo63.id);
computerSystemsSemester6.addModule(moduleInfo64.id);
computerSystemsSemester6.addModule(moduleInfo65.id);

const computerSystemsSemester7 = new StudyProgramSemester();
const moduleInfo71 = new Module('Kursinis darbas', 10)
const moduleInfo72 = new Module('Programų kūrimo procesas', 5)
const moduleInfo73 = new Module('Programų sistemų projektų ir kokybės valdymas', 5)
const moduleInfo74 = new Module('Dirbtinis intelektas', 5)
const moduleInfo75 = new Module('Skaitmeninis intelektas ir sprendimų priėmimas', 5)
computerSystemsSemester7.addModule(moduleInfo71.id);
computerSystemsSemester7.addModule(moduleInfo72.id);
computerSystemsSemester7.addModule(moduleInfo73.id);
computerSystemsSemester7.addModule(moduleInfo74.id);
computerSystemsSemester7.addModule(moduleInfo75.id);

const computerSystemsSemester8 = new StudyProgramSemester();
const moduleInfo81 = new Module('Bakalauro baigiamasis darbas', 15)
const moduleInfo82 = new Module('Profesinė praktika', 15)
computerSystemsSemester8.addModule(moduleInfo81.id);
computerSystemsSemester8.addModule(moduleInfo82.id);

computerSystems.addSemester(1, computerSystemsSemester1);
computerSystems.addSemester(2, computerSystemsSemester2);
computerSystems.addSemester(3, computerSystemsSemester3);
computerSystems.addSemester(4, computerSystemsSemester4);
computerSystems.addSemester(5, computerSystemsSemester5);
computerSystems.addSemester(6, computerSystemsSemester6);
computerSystems.addSemester(7, computerSystemsSemester7);
computerSystems.addSemester(8, computerSystemsSemester8);

modules.push(
  moduleInfo11,
  moduleInfo12,
  moduleInfo13,
  moduleInfo14,
  moduleInfo15,
  moduleInfo16,
  moduleInfo21,
  moduleInfo22,
  moduleInfo23,
  moduleInfo24,
  moduleInfo25,
  moduleInfo31,
  moduleInfo32,
  moduleInfo33,
  moduleInfo34,
  moduleInfo41,
  moduleInfo42,
  moduleInfo43,
  moduleInfo44,
  moduleInfo45,
  moduleInfo51,
  moduleInfo52,
  moduleInfo53,
  moduleInfo54,
  moduleInfo61,
  moduleInfo62,
  moduleInfo63,
  moduleInfo64,
  moduleInfo65,
  moduleInfo71,
  moduleInfo72,
  moduleInfo73,
  moduleInfo74,
  moduleInfo75,
  moduleInfo81,
  moduleInfo82,
);
