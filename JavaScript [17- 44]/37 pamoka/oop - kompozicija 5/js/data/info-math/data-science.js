import StudyProgram from '../../entities/study-program.js';
import StudyProgramSemester from '../../entities/study-program-semester.js';
import Module from '../../entities/module.js';
import { infoAndMathFaculty } from '../faculties.js';

const dataScience = new StudyProgram('Duomenų mokslas', infoAndMathFaculty.id);

const dataScienceSemester1 = new StudyProgramSemester();
const dataScienceSemester1module1 = new Module('Akademinė ir mokslinė anglų kalba C1', 5);
const dataScienceSemester1module2 = new Module('Algebra I/II d.', 5);
const dataScienceSemester1module3 = new Module('Informatika', 10);
const dataScienceSemester1module4 = new Module('Įvadas į specialybę', 5);
const dataScienceSemester1module5 = new Module('Matematikos pagrindai', 5);
dataScienceSemester1.addModule(dataScienceSemester1module1.id);
dataScienceSemester1.addModule(dataScienceSemester1module2.id);
dataScienceSemester1.addModule(dataScienceSemester1module3.id);
dataScienceSemester1.addModule(dataScienceSemester1module4.id);
dataScienceSemester1.addModule(dataScienceSemester1module5.id);

const dataScienceSemester2 = new StudyProgramSemester();
const dataScienceSemester2module1 = new Module('Algebra II/II d.', 5);
const dataScienceSemester2module2 = new Module('Duomenų bazių valdymo sistemų pagrindai', 5);
const dataScienceSemester2module3 = new Module('Duomenų struktūros ir algoritmai', 5);
const dataScienceSemester2module4 = new Module('Matematinė analizė I/II d.', 10);
const dataScienceSemester2module5 = new Module('Tiriamoji duomenų analizė', 5);
dataScienceSemester2.addModule(dataScienceSemester2module1.id);
dataScienceSemester2.addModule(dataScienceSemester2module2.id);
dataScienceSemester2.addModule(dataScienceSemester2module3.id);
dataScienceSemester2.addModule(dataScienceSemester2module4.id);
dataScienceSemester2.addModule(dataScienceSemester2module5.id);

const dataScienceSemester3 = new StudyProgramSemester();
const dataScienceSemester3module1 = new Module('Algoritmų teorija', 5);
const dataScienceSemester3module2 = new Module('Matematinė analizė II/II d.', 10);
const dataScienceSemester3module3 = new Module('Objektinis programavimas', 5);
const dataScienceSemester3module4 = new Module('Tikimybių teorija', 5);
dataScienceSemester3.addModule(dataScienceSemester3module1.id);
dataScienceSemester3.addModule(dataScienceSemester3module2.id);
dataScienceSemester3.addModule(dataScienceSemester3module3.id);
dataScienceSemester3.addModule(dataScienceSemester3module4.id);

const dataScienceSemester4 = new StudyProgramSemester();
const dataScienceSemester4module1 = new Module('Atsitiktiniai procesai', 5);
const dataScienceSemester4module2 = new Module('Duomenų vizualizavimas', 5);
const dataScienceSemester4module3 = new Module('Parametrinė statistika', 5);
dataScienceSemester4.addModule(dataScienceSemester4module1.id);
dataScienceSemester4.addModule(dataScienceSemester4module2.id);
dataScienceSemester4.addModule(dataScienceSemester4module3.id);

const dataScienceSemester5 = new StudyProgramSemester();
const dataScienceSemester5module1 = new Module('Didžiųjų duomenų programiniai įrankiai', 5);
const dataScienceSemester5module2 = new Module('Neparametrinė statistika', 5);
const dataScienceSemester5module3 = new Module('Tiesiniai modeliai', 5);
dataScienceSemester5.addModule(dataScienceSemester5module1.id);
dataScienceSemester5.addModule(dataScienceSemester5module2.id);
dataScienceSemester5.addModule(dataScienceSemester5module3.id);

const dataScienceSemester6 = new StudyProgramSemester();
const dataScienceSemester6module1 = new Module('Laiko eilutės', 5);
const dataScienceSemester6module2 = new Module('Projektinis darbas', 10);
const dataScienceSemester6module3 = new Module('Regresinė analizė', 5);
const dataScienceSemester6module4 = new Module('Tikimybiniai mašininio mokymosi algoritmai I/II d.', 5);
dataScienceSemester6.addModule(dataScienceSemester6module1.id);
dataScienceSemester6.addModule(dataScienceSemester6module2.id);
dataScienceSemester6.addModule(dataScienceSemester6module3.id);
dataScienceSemester6.addModule(dataScienceSemester6module4.id);

const dataScienceSemester7 = new StudyProgramSemester();
const dataScienceSemester7module1 = new Module('Taikomoji daugiamatė analizė', 5);
const dataScienceSemester7module2 = new Module('Tikimybiniai mašininio mokymosi algoritmai II/II d.', 5);
dataScienceSemester7.addModule(dataScienceSemester7module1.id);
dataScienceSemester7.addModule(dataScienceSemester7module2.id);

const dataScienceSemester8 = new StudyProgramSemester();
const dataScienceSemester8module1 = new Module('Bakalauro baigiamasis darbas (kryptis: statistika)', 15);
const dataScienceSemester8module2 = new Module('Profesinė praktika', 15);
dataScienceSemester8.addModule(dataScienceSemester8module1.id);
dataScienceSemester8.addModule(dataScienceSemester8module2.id);

dataScience.addSemester(1, dataScienceSemester1);
dataScience.addSemester(2, dataScienceSemester2);
dataScience.addSemester(3, dataScienceSemester3);
dataScience.addSemester(4, dataScienceSemester4);
dataScience.addSemester(5, dataScienceSemester5);
dataScience.addSemester(6, dataScienceSemester6);
dataScience.addSemester(7, dataScienceSemester7);
dataScience.addSemester(8, dataScienceSemester8);

export const dataScienceModules = [
    dataScienceSemester1module1,
    dataScienceSemester1module2,
    dataScienceSemester1module3,
    dataScienceSemester1module4,
    dataScienceSemester1module5,
    dataScienceSemester2module1,
    dataScienceSemester2module2,
    dataScienceSemester2module3,
    dataScienceSemester2module4,
    dataScienceSemester2module5,
    dataScienceSemester3module1,
    dataScienceSemester3module2,
    dataScienceSemester3module3,
    dataScienceSemester3module4,
    dataScienceSemester4module1,
    dataScienceSemester4module2,
    dataScienceSemester4module3,
    dataScienceSemester5module1,
    dataScienceSemester5module2,
    dataScienceSemester5module3,
    dataScienceSemester6module1,
    dataScienceSemester6module2,
    dataScienceSemester6module3,
    dataScienceSemester6module4,
    dataScienceSemester7module1,
    dataScienceSemester7module2,
    dataScienceSemester8module1,
    dataScienceSemester8module2,
];

export default dataScience;