import StudyProgram from '../../entities/study-program.js';
import StudyProgramSemester from '../../entities/study-program-semester.js';
import Module from '../../entities/module.js';
import { chemistryAndGeoSciencesFaculty } from '../faculties.js';

const nanoChemistry = new StudyProgram('Nanomedžiagų chemija', chemistryAndGeoSciencesFaculty.id);

const nanoChemistrySemester1 = new StudyProgramSemester();
const nanoChemistrySemester1module1 = new Module('Akademinė ir mokslinė anglų kalba C1', 5);
const nanoChemistrySemester1module2 = new Module('Bendroji chemija', 10);
const nanoChemistrySemester1module3 = new Module('Matematika I/II d.', 10);
const nanoChemistrySemester1module4 = new Module('Nanomedžiagų chemijos studijų įvadas', 5);
nanoChemistrySemester1.addModule(nanoChemistrySemester1module1.id);
nanoChemistrySemester1.addModule(nanoChemistrySemester1module2.id);
nanoChemistrySemester1.addModule(nanoChemistrySemester1module3.id);
nanoChemistrySemester1.addModule(nanoChemistrySemester1module4.id);

const nanoChemistrySemester2 = new StudyProgramSemester();
const nanoChemistrySemester2module1 = new Module('Analizinė chemija', 10);
const nanoChemistrySemester2module2 = new Module('Fizika I/II d.', 10);
const nanoChemistrySemester2module3 = new Module('Matematika II/II d.', 10);
nanoChemistrySemester2.addModule(nanoChemistrySemester2module1.id);
nanoChemistrySemester2.addModule(nanoChemistrySemester2module2.id);
nanoChemistrySemester2.addModule(nanoChemistrySemester2module3.id);

const nanoChemistrySemester3 = new StudyProgramSemester();
const nanoChemistrySemester3module1 = new Module('Fizika II/II d.', 10);
const nanoChemistrySemester3module2 = new Module('Kvantinė chemija', 5);
const nanoChemistrySemester3module3 = new Module('Organinė chemija I/II d.', 10);
const nanoChemistrySemester3module4 = new Module('Programavimo ir duomenų analizės įvadas', 5);
nanoChemistrySemester3.addModule(nanoChemistrySemester3module1.id);
nanoChemistrySemester3.addModule(nanoChemistrySemester3module2.id);
nanoChemistrySemester3.addModule(nanoChemistrySemester3module3.id);
nanoChemistrySemester3.addModule(nanoChemistrySemester3module4.id);

const nanoChemistrySemester4 = new StudyProgramSemester();
const nanoChemistrySemester4module1 = new Module('Bioaktyvios medžiagos', 5);
const nanoChemistrySemester4module2 = new Module('Cheminė termodinamika nanotechnologijose', 10);
const nanoChemistrySemester4module3 = new Module('Neorganinė chemija ir nanomedžiagos', 10);
const nanoChemistrySemester4module4 = new Module('Organinė chemija II/II d.', 5);
nanoChemistrySemester4.addModule(nanoChemistrySemester4module1.id);
nanoChemistrySemester4.addModule(nanoChemistrySemester4module2.id);
nanoChemistrySemester4.addModule(nanoChemistrySemester4module3.id);
nanoChemistrySemester4.addModule(nanoChemistrySemester4module4.id);

const nanoChemistrySemester5 = new StudyProgramSemester();
const nanoChemistrySemester5module1 = new Module('Biochemija', 5);
const nanoChemistrySemester5module2 = new Module('Fizikinė chemija', 10);
const nanoChemistrySemester5module3 = new Module('Kristalų chemija', 5);
const nanoChemistrySemester5module4 = new Module('Nanomedžiagų analizės metodai', 10);
nanoChemistrySemester5.addModule(nanoChemistrySemester5module1.id);
nanoChemistrySemester5.addModule(nanoChemistrySemester5module2.id);
nanoChemistrySemester5.addModule(nanoChemistrySemester5module3.id);
nanoChemistrySemester5.addModule(nanoChemistrySemester5module4.id);

const nanoChemistrySemester6 = new StudyProgramSemester();
const nanoChemistrySemester6module1 = new Module('Biochemija', 5);
const nanoChemistrySemester6module2 = new Module('Fizikinė chemija', 10);
const nanoChemistrySemester6module3 = new Module('Kristalų chemija', 5);
const nanoChemistrySemester6module4 = new Module('Nanomedžiagų analizės metodai', 10);
nanoChemistrySemester6.addModule(nanoChemistrySemester6module1.id);
nanoChemistrySemester6.addModule(nanoChemistrySemester6module2.id);
nanoChemistrySemester6.addModule(nanoChemistrySemester6module3.id);
nanoChemistrySemester6.addModule(nanoChemistrySemester6module4.id);

const nanoChemistrySemester7 = new StudyProgramSemester();
const nanoChemistrySemester7module1 = new Module('Baigiamojo darbo projektas', 5);
const nanoChemistrySemester7module2 = new Module('Nanobiotechnologija', 5);
const nanoChemistrySemester7module3 = new Module('Pagrindiniai nanodalelių sintezės principai I/II d.', 5);
const nanoChemistrySemester7module4 = new Module('Profesinė praktika', 15);
nanoChemistrySemester7.addModule(nanoChemistrySemester7module1.id);
nanoChemistrySemester7.addModule(nanoChemistrySemester7module2.id);
nanoChemistrySemester7.addModule(nanoChemistrySemester7module3.id);
nanoChemistrySemester7.addModule(nanoChemistrySemester7module4.id);

const nanoChemistrySemester8 = new StudyProgramSemester();
const nanoChemistrySemester8module1 = new Module('Bakalauro baigiamasis darbas (kryptis: chemija)', 15);
const nanoChemistrySemester8module2 = new Module('Pagrindiniai nanodalelių sintezės principai II/II d.', 5);
const nanoChemistrySemester8module3 = new Module('Neorganinės sintezės metodai', 5);
const nanoChemistrySemester8module4 = new Module('Pigmentai ir dažikliai', 5);
nanoChemistrySemester8.addModule(nanoChemistrySemester8module1.id);
nanoChemistrySemester8.addModule(nanoChemistrySemester8module2.id);
nanoChemistrySemester8.addModule(nanoChemistrySemester8module3.id);
nanoChemistrySemester8.addModule(nanoChemistrySemester8module4.id);

nanoChemistry.addSemester(1, nanoChemistrySemester1);
nanoChemistry.addSemester(2, nanoChemistrySemester2);
nanoChemistry.addSemester(3, nanoChemistrySemester3);
nanoChemistry.addSemester(4, nanoChemistrySemester4);
nanoChemistry.addSemester(5, nanoChemistrySemester5);
nanoChemistry.addSemester(6, nanoChemistrySemester6);
nanoChemistry.addSemester(7, nanoChemistrySemester7);
nanoChemistry.addSemester(8, nanoChemistrySemester8);

export const nanoChemistryModules = [
  nanoChemistrySemester1module1,
  nanoChemistrySemester1module2,
  nanoChemistrySemester1module3,
  nanoChemistrySemester1module4,
  nanoChemistrySemester2module1,
  nanoChemistrySemester2module2,
  nanoChemistrySemester2module3,
  nanoChemistrySemester3module1,
  nanoChemistrySemester3module2,
  nanoChemistrySemester3module3,
  nanoChemistrySemester3module4,
  nanoChemistrySemester4module1,
  nanoChemistrySemester4module2,
  nanoChemistrySemester4module3,
  nanoChemistrySemester4module4,
  nanoChemistrySemester5module1,
  nanoChemistrySemester5module2,
  nanoChemistrySemester5module3,
  nanoChemistrySemester5module4,
  nanoChemistrySemester6module1,
  nanoChemistrySemester6module2,
  nanoChemistrySemester6module3,
  nanoChemistrySemester6module4,
  nanoChemistrySemester7module1,
  nanoChemistrySemester7module2,
  nanoChemistrySemester7module3,
  nanoChemistrySemester7module4,
  nanoChemistrySemester8module1,
  nanoChemistrySemester8module2,
  nanoChemistrySemester8module3,
  nanoChemistrySemester8module4,
];

export default nanoChemistry;
