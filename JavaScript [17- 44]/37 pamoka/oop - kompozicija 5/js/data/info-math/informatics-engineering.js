import StudyProgram from '../../entities/study-program.js';
import StudyProgramSemester from '../../entities/study-program-semester.js';
import Module from '../../entities/module.js';
import { infoAndMathFaculty } from '../faculties.js';

const informaticsSystems = new StudyProgram(
  'Informacinių sistemų inžinerija',
  infoAndMathFaculty.id
);

const informaticsSystemsSemester1 = new StudyProgramSemester();
const informaticsSystemsSemester1module1 = new Module('Akademinė ir mokslinė anglų kalba C1', 5);
const informaticsSystemsSemester1module2 = new Module('Informacinės ir grupinio darbo sistemos', 5);
const informaticsSystemsSemester1module3 = new Module('Kompiuterių architektūra', 5);
const informaticsSystemsSemester1module4 = new Module('Matematika informacinėms sistemoms', 10);
const informaticsSystemsSemester1module5 = new Module('Procedūrinis programavimas', 5);
informaticsSystemsSemester1.addModule(informaticsSystemsSemester1module1.id);
informaticsSystemsSemester1.addModule(informaticsSystemsSemester1module2.id);
informaticsSystemsSemester1.addModule(informaticsSystemsSemester1module3.id);
informaticsSystemsSemester1.addModule(informaticsSystemsSemester1module4.id);
informaticsSystemsSemester1.addModule(informaticsSystemsSemester1module5.id);

const informaticsSystemsSemester2 = new StudyProgramSemester();
const informaticsSystemsSemester2module1 = new Module('Algoritmai ir duomenų struktūros', 5);
const informaticsSystemsSemester2module2 = new Module('Diskrečioji matematika informacinėms sistemoms', 5);
const informaticsSystemsSemester2module3 = new Module('Duomenų bazių valdymo sistemos', 5);
const informaticsSystemsSemester2module4 = new Module('Objektinis programavimas', 10);
const informaticsSystemsSemester2module5 = new Module('Bendrųjų universitetinių studijų dalykai (moduliai)', 5);
informaticsSystemsSemester2.addModule(informaticsSystemsSemester2module1.id);
informaticsSystemsSemester2.addModule(informaticsSystemsSemester2module2.id);
informaticsSystemsSemester2.addModule(informaticsSystemsSemester2module3.id);
informaticsSystemsSemester2.addModule(informaticsSystemsSemester2module4.id);
informaticsSystemsSemester2.addModule(informaticsSystemsSemester2module5.id);

const informaticsSystemsSemester3 = new StudyProgramSemester();
const informaticsSystemsSemester3module1 = new Module('Naudotojo sąsajos kūrimas', 10);
const informaticsSystemsSemester3module2 = new Module('Reikalavimų inžinerijos pagrindai', 5);
const informaticsSystemsSemester3module3 = new Module('Verslo procesų modeliavimas', 5);
const informaticsSystemsSemester3module4 = new Module('Blokų grandinių technologijos', 5);
const informaticsSystemsSemester3module5 = new Module('Duomenų bazių projektavimas', 5);
informaticsSystemsSemester3.addModule(informaticsSystemsSemester3module1.id);
informaticsSystemsSemester3.addModule(informaticsSystemsSemester3module2.id);
informaticsSystemsSemester3.addModule(informaticsSystemsSemester3module3.id);
informaticsSystemsSemester3.addModule(informaticsSystemsSemester3module4.id);
informaticsSystemsSemester3.addModule(informaticsSystemsSemester3module5.id);

const informaticsSystemsSemester4 = new StudyProgramSemester();
const informaticsSystemsSemester4module1 = new Module('Operacinės sistemos', 10);
const informaticsSystemsSemester4module2 = new Module('Optimizavimo metodai', 5);
const informaticsSystemsSemester4module3 = new Module('Statistiniai duomenų analizės metodai', 5);
const informaticsSystemsSemester4module4 = new Module('Projektų valdymas', 5);
const informaticsSystemsSemester4module5 = new Module('Rinkodara', 5);
informaticsSystemsSemester4.addModule(informaticsSystemsSemester4module1.id);
informaticsSystemsSemester4.addModule(informaticsSystemsSemester4module2.id);
informaticsSystemsSemester4.addModule(informaticsSystemsSemester4module3.id);
informaticsSystemsSemester4.addModule(informaticsSystemsSemester4module4.id);
informaticsSystemsSemester4.addModule(informaticsSystemsSemester4module5.id);

const informaticsSystemsSemester5 = new StudyProgramSemester();
const informaticsSystemsSemester5module1 = new Module('Informacinių sistemų kūrimo projektų valdymo metodikos', 5);
const informaticsSystemsSemester5module2 = new Module('Kompiuterių tinklai ir našieji skaičiavimai', 5);
const informaticsSystemsSemester5module3 = new Module('Dirbtinio intelekto pagrindai', 10);
const informaticsSystemsSemester5module4 = new Module('Finansų inžinerija ir modeliavimas', 5);
const informaticsSystemsSemester5module5 = new Module('Įvadas į duomenų tyrybą ir mašininį mokymąsi', 5);
informaticsSystemsSemester5.addModule(informaticsSystemsSemester5module1.id);
informaticsSystemsSemester5.addModule(informaticsSystemsSemester5module2.id);
informaticsSystemsSemester5.addModule(informaticsSystemsSemester5module3.id);
informaticsSystemsSemester5.addModule(informaticsSystemsSemester5module4.id);
informaticsSystemsSemester5.addModule(informaticsSystemsSemester5module5.id);

const informaticsSystemsSemester6 = new StudyProgramSemester();
const informaticsSystemsSemester6module1 = new Module('Didžiųjų duomenų analitika', 10);
const informaticsSystemsSemester6module2 = new Module('Dirbtinio intelekto pagrindai', 5);
const informaticsSystemsSemester6module3 = new Module('Architektūriniai programų sistemų stiliai', 5);
const informaticsSystemsSemester6module4 = new Module('Humanoidų robotikos pagrindai', 5);
const informaticsSystemsSemester6module5 = new Module('Išmaniųjų įrenginių programavimas', 5);
informaticsSystemsSemester6.addModule(informaticsSystemsSemester6module1.id);
informaticsSystemsSemester6.addModule(informaticsSystemsSemester6module2.id);
informaticsSystemsSemester6.addModule(informaticsSystemsSemester6module3.id);
informaticsSystemsSemester6.addModule(informaticsSystemsSemester6module4.id);
informaticsSystemsSemester6.addModule(informaticsSystemsSemester6module5.id);

const informaticsSystemsSemester7 = new StudyProgramSemester();
const informaticsSystemsSemester7module1 = new Module('Informacinės saugos pagrindai', 5);
const informaticsSystemsSemester7module2 = new Module('Mokomoji praktika (Informacinių sistemų inžinerija)', 10);
const informaticsSystemsSemester7module3 = new Module('Programų sistemų kokybė', 5);
const informaticsSystemsSemester7module4 = new Module('Garso signalų apdorojimas', 5);
const informaticsSystemsSemester7module5 = new Module('Vaizdo signalų apdorojimas', 5);
informaticsSystemsSemester7.addModule(informaticsSystemsSemester7module1.id);
informaticsSystemsSemester7.addModule(informaticsSystemsSemester7module2.id);
informaticsSystemsSemester7.addModule(informaticsSystemsSemester7module3.id);
informaticsSystemsSemester7.addModule(informaticsSystemsSemester7module4.id);
informaticsSystemsSemester7.addModule(informaticsSystemsSemester7module5.id);

const informaticsSystemsSemester8 = new StudyProgramSemester();
const informaticsSystemsSemester8module1 = new Module('Bakalauro baigiamasis darbas (kryptis: informatikos inžinerija)', 15);
const informaticsSystemsSemester8module2 = new Module('Profesinė praktika (Informacinių sistemų inžinerija)', 15);
informaticsSystemsSemester8.addModule(informaticsSystemsSemester8module1.id);
informaticsSystemsSemester8.addModule(informaticsSystemsSemester8module2.id);

informaticsSystems.addSemester(1, informaticsSystemsSemester1);
informaticsSystems.addSemester(2, informaticsSystemsSemester2);
informaticsSystems.addSemester(3, informaticsSystemsSemester3);
informaticsSystems.addSemester(4, informaticsSystemsSemester4);
informaticsSystems.addSemester(5, informaticsSystemsSemester5);
informaticsSystems.addSemester(6, informaticsSystemsSemester6);
informaticsSystems.addSemester(7, informaticsSystemsSemester7);
informaticsSystems.addSemester(8, informaticsSystemsSemester8);

export const informaticsSystemsModules = [
  informaticsSystemsSemester1module1,
  informaticsSystemsSemester1module2,
  informaticsSystemsSemester1module3,
  informaticsSystemsSemester1module4,
  informaticsSystemsSemester1module5,
  informaticsSystemsSemester2module1,
  informaticsSystemsSemester2module2,
  informaticsSystemsSemester2module3,
  informaticsSystemsSemester2module4,
  informaticsSystemsSemester2module5,
  informaticsSystemsSemester3module1,
  informaticsSystemsSemester3module2,
  informaticsSystemsSemester3module3,
  informaticsSystemsSemester3module4,
  informaticsSystemsSemester3module5,
  informaticsSystemsSemester4module1,
  informaticsSystemsSemester4module2,
  informaticsSystemsSemester4module3,
  informaticsSystemsSemester4module4,
  informaticsSystemsSemester4module5,
  informaticsSystemsSemester5module1,
  informaticsSystemsSemester5module2,
  informaticsSystemsSemester5module3,
  informaticsSystemsSemester5module4,
  informaticsSystemsSemester5module5,
  informaticsSystemsSemester6module1,
  informaticsSystemsSemester6module2,
  informaticsSystemsSemester6module3,
  informaticsSystemsSemester6module4,
  informaticsSystemsSemester6module5,
  informaticsSystemsSemester7module1,
  informaticsSystemsSemester7module2,
  informaticsSystemsSemester7module3,
  informaticsSystemsSemester7module4,
  informaticsSystemsSemester7module5,
  informaticsSystemsSemester8module1,
  informaticsSystemsSemester8module2,
];

export default informaticsSystems;
