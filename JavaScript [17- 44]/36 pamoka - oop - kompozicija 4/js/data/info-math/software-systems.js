import StudyProgram from '../../entities/study-program.js';
import StudyProgramSemester from '../../entities/study-program-semester.js';
import Module from '../../entities/module.js';
import { infoAndMathFaculty } from '../faculties.js';

const softwareSystems = new StudyProgram('Programų sistemos', infoAndMathFaculty.id);

const softwareSystemsSemester1 = new StudyProgramSemester();
const softwareSystemsSemester1module1 = new Module('Akademinė ir mokslinė anglų kalba C1 I/II d.', 5)
const softwareSystemsSemester1module2 = new Module('Diskrečioji matematika', 5)
const softwareSystemsSemester1module3 = new Module('IT ir komunikacijos įgūdžiai', 5)
const softwareSystemsSemester1module4 = new Module('Kompiuterių architektūra', 5)
const softwareSystemsSemester1module5 = new Module('Matematika programų sistemoms I/III d.', 5)
const softwareSystemsSemester1module6 = new Module('Procedūrinis programavimas', 5)
softwareSystemsSemester1.addModule(softwareSystemsSemester1module1.id);
softwareSystemsSemester1.addModule(softwareSystemsSemester1module2.id);
softwareSystemsSemester1.addModule(softwareSystemsSemester1module3.id);
softwareSystemsSemester1.addModule(softwareSystemsSemester1module4.id);
softwareSystemsSemester1.addModule(softwareSystemsSemester1module5.id);
softwareSystemsSemester1.addModule(softwareSystemsSemester1module6.id);

const softwareSystemsSemester2 = new StudyProgramSemester();
const softwareSystemsSemester2module1 = new Module('Akademinė ir mokslinė anglų kalba C1 II/II d.', 5)
const softwareSystemsSemester2module2 = new Module('Algoritmai ir duomenų struktūros', 5)
const softwareSystemsSemester2module3 = new Module('Algoritmų teorija', 10)
const softwareSystemsSemester2module4 = new Module('Matematika programų sistemoms II/III d.', 5)
const softwareSystemsSemester2module5 = new Module('Objektinis programavimas', 5)
softwareSystemsSemester2.addModule(softwareSystemsSemester2module1.id);
softwareSystemsSemester2.addModule(softwareSystemsSemester2module2.id);
softwareSystemsSemester2.addModule(softwareSystemsSemester2module3.id);
softwareSystemsSemester2.addModule(softwareSystemsSemester2module4.id);
softwareSystemsSemester2.addModule(softwareSystemsSemester2module5.id);

const softwareSystemsSemester3 = new StudyProgramSemester();
const softwareSystemsSemester3module1 = new Module('Duomenų bazių valdymo sistemos', 10)
const softwareSystemsSemester3module2 = new Module('Funkcinis programavimas', 5)
const softwareSystemsSemester3module3 = new Module('Matematinė logika', 5)
const softwareSystemsSemester3module4 = new Module('Programų sistemų inžinerija I/II d.', 10)
softwareSystemsSemester3.addModule(softwareSystemsSemester3module1.id);
softwareSystemsSemester3.addModule(softwareSystemsSemester3module2.id);
softwareSystemsSemester3.addModule(softwareSystemsSemester3module3.id);
softwareSystemsSemester3.addModule(softwareSystemsSemester3module4.id);

const softwareSystemsSemester4 = new StudyProgramSemester();
const softwareSystemsSemester4module1 = new Module('Kompiuterių tinklai', 5)
const softwareSystemsSemester4module2 = new Module('Matematika programų sistemoms III/III d.', 10)
const softwareSystemsSemester4module3 = new Module('Programų sistemų inžinerija II/II d.', 5)
const softwareSystemsSemester4module4 = new Module('Buhalterinė apskaita', 5)
const softwareSystemsSemester4module5 = new Module('Fizika informatikams', 5)
softwareSystemsSemester4.addModule(softwareSystemsSemester4module1.id);
softwareSystemsSemester4.addModule(softwareSystemsSemester4module2.id);
softwareSystemsSemester4.addModule(softwareSystemsSemester4module3.id);
softwareSystemsSemester4.addModule(softwareSystemsSemester4module4.id);
softwareSystemsSemester4.addModule(softwareSystemsSemester4module5.id);

const softwareSystemsSemester5 = new StudyProgramSemester();
const softwareSystemsSemester5module1 = new Module('Interneto technologijos', 10)
const softwareSystemsSemester5module2 = new Module('Programų sistemų projektavimas', 10)
const softwareSystemsSemester5module3 = new Module('Programų sistemų testavimas', 5)
const softwareSystemsSemester5module4 = new Module('Žmogaus-kompiuterio sąveika', 5)
softwareSystemsSemester5.addModule(softwareSystemsSemester5module1.id);
softwareSystemsSemester5.addModule(softwareSystemsSemester5module2.id);
softwareSystemsSemester5.addModule(softwareSystemsSemester5module3.id);
softwareSystemsSemester5.addModule(softwareSystemsSemester5module4.id);

const softwareSystemsSemester6 = new StudyProgramSemester();
const softwareSystemsSemester6module1 = new Module('Giliojo mokymosi metodai', 5)
const softwareSystemsSemester6module2 = new Module('Profesionalumas ir etika', 5)
const softwareSystemsSemester6module3 = new Module('Programų sistemų kūrimas', 10)
const softwareSystemsSemester6module4 = new Module('Statistinė duomenų analizė', 5)
const softwareSystemsSemester6module5 = new Module('Lygiagretusis programavimas', 5)
softwareSystemsSemester6.addModule(softwareSystemsSemester6module1.id);
softwareSystemsSemester6.addModule(softwareSystemsSemester6module2.id);
softwareSystemsSemester6.addModule(softwareSystemsSemester6module3.id);
softwareSystemsSemester6.addModule(softwareSystemsSemester6module4.id);
softwareSystemsSemester6.addModule(softwareSystemsSemester6module5.id);

const softwareSystemsSemester7 = new StudyProgramSemester();
const softwareSystemsSemester7module1 = new Module('Kursinis darbas', 10)
const softwareSystemsSemester7module2 = new Module('Programų kūrimo procesas', 5)
const softwareSystemsSemester7module3 = new Module('Programų sistemų projektų ir kokybės valdymas', 5)
const softwareSystemsSemester7module4 = new Module('Dirbtinis intelektas', 5)
const softwareSystemsSemester7module5 = new Module('Skaitmeninis intelektas ir sprendimų priėmimas', 5)
softwareSystemsSemester7.addModule(softwareSystemsSemester7module1.id);
softwareSystemsSemester7.addModule(softwareSystemsSemester7module2.id);
softwareSystemsSemester7.addModule(softwareSystemsSemester7module3.id);
softwareSystemsSemester7.addModule(softwareSystemsSemester7module4.id);
softwareSystemsSemester7.addModule(softwareSystemsSemester7module5.id);

const softwareSystemsSemester8 = new StudyProgramSemester();
const softwareSystemsSemester8module1 = new Module('Bakalauro baigiamasis darbas', 15)
const softwareSystemsSemester8module2 = new Module('Profesinė praktika', 15)
softwareSystemsSemester8.addModule(softwareSystemsSemester8module1.id);
softwareSystemsSemester8.addModule(softwareSystemsSemester8module2.id);

softwareSystems.addSemester(1, softwareSystemsSemester1);
softwareSystems.addSemester(2, softwareSystemsSemester2);
softwareSystems.addSemester(3, softwareSystemsSemester3);
softwareSystems.addSemester(4, softwareSystemsSemester4);
softwareSystems.addSemester(5, softwareSystemsSemester5);
softwareSystems.addSemester(6, softwareSystemsSemester6);
softwareSystems.addSemester(7, softwareSystemsSemester7);
softwareSystems.addSemester(8, softwareSystemsSemester8);

export const softwareSystemsModules = [
  softwareSystemsSemester1module1,
  softwareSystemsSemester1module2,
  softwareSystemsSemester1module3,
  softwareSystemsSemester1module4,
  softwareSystemsSemester1module5,
  softwareSystemsSemester1module6,
  softwareSystemsSemester2module1,
  softwareSystemsSemester2module2,
  softwareSystemsSemester2module3,
  softwareSystemsSemester2module4,
  softwareSystemsSemester2module5,
  softwareSystemsSemester3module1,
  softwareSystemsSemester3module2,
  softwareSystemsSemester3module3,
  softwareSystemsSemester3module4,
  softwareSystemsSemester4module1,
  softwareSystemsSemester4module2,
  softwareSystemsSemester4module3,
  softwareSystemsSemester4module4,
  softwareSystemsSemester4module5,
  softwareSystemsSemester5module1,
  softwareSystemsSemester5module2,
  softwareSystemsSemester5module3,
  softwareSystemsSemester5module4,
  softwareSystemsSemester6module1,
  softwareSystemsSemester6module2,
  softwareSystemsSemester6module3,
  softwareSystemsSemester6module4,
  softwareSystemsSemester6module5,
  softwareSystemsSemester7module1,
  softwareSystemsSemester7module2,
  softwareSystemsSemester7module3,
  softwareSystemsSemester7module4,
  softwareSystemsSemester7module5,
  softwareSystemsSemester8module1,
  softwareSystemsSemester8module2,
];

export default softwareSystems;
