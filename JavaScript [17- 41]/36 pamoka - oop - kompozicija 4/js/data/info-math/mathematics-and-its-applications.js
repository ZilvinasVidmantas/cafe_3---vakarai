import StudyProgram from '../../entities/study-program.js';
import StudyProgramSemester from '../../entities/study-program-semester.js';
import Module from '../../entities/module.js';
import { infoAndMathFaculty } from '../faculties.js';

const mathematicsAndItsApplications = new StudyProgram('Matematika ir matematikos taikymai', infoAndMathFaculty.id);

const mathematicsAndItsApplicationsSemester1 = new StudyProgramSemester();
const mathematicsAndItsApplicationsSemester1module1 = new Module('Akademinė ir mokslinė anglų kalba C1 I/II d.', 5);
const mathematicsAndItsApplicationsSemester1module2 = new Module('Diskrečiosios matematikos pagrindai', 5);
const mathematicsAndItsApplicationsSemester1module3 = new Module('Informatika I/II d.', 5);
const mathematicsAndItsApplicationsSemester1module4 = new Module('Matematinė analizė I/III d.', 10);
const mathematicsAndItsApplicationsSemester1module5 = new Module('Tiesinė algebra ir geometrija', 5);
mathematicsAndItsApplicationsSemester1.addModule(mathematicsAndItsApplicationsSemester1module1.id);
mathematicsAndItsApplicationsSemester1.addModule(mathematicsAndItsApplicationsSemester1module2.id);
mathematicsAndItsApplicationsSemester1.addModule(mathematicsAndItsApplicationsSemester1module3.id);
mathematicsAndItsApplicationsSemester1.addModule(mathematicsAndItsApplicationsSemester1module4.id);
mathematicsAndItsApplicationsSemester1.addModule(mathematicsAndItsApplicationsSemester1module5.id);

const mathematicsAndItsApplicationsSemester2 = new StudyProgramSemester();
const mathematicsAndItsApplicationsSemester2module1 = new Module('Akademinė ir mokslinė anglų kalba C1 II/II d.', 5)
const mathematicsAndItsApplicationsSemester2module2 = new Module('Algebra I/II d.', 5)
const mathematicsAndItsApplicationsSemester2module3 = new Module('Informatika II/II d.', 5)
const mathematicsAndItsApplicationsSemester2module4 = new Module('Matematinė analizė II/III d.', 10)
const mathematicsAndItsApplicationsSemester2module5 = new Module('Bendrųjų universitetinių studijų dalykai', 5)
mathematicsAndItsApplicationsSemester2.addModule(mathematicsAndItsApplicationsSemester2module1.id);
mathematicsAndItsApplicationsSemester2.addModule(mathematicsAndItsApplicationsSemester2module2.id);
mathematicsAndItsApplicationsSemester2.addModule(mathematicsAndItsApplicationsSemester2module3.id);
mathematicsAndItsApplicationsSemester2.addModule(mathematicsAndItsApplicationsSemester2module4.id);
mathematicsAndItsApplicationsSemester2.addModule(mathematicsAndItsApplicationsSemester2module5.id);

const mathematicsAndItsApplicationsSemester3 = new StudyProgramSemester();
const mathematicsAndItsApplicationsSemester3module1 = new Module('Algebra II/II d.', 5)
const mathematicsAndItsApplicationsSemester3module2 = new Module('Diferencialinės lygtys I/II d.', 5)
const mathematicsAndItsApplicationsSemester3module3 = new Module('Geometrija', 5)
const mathematicsAndItsApplicationsSemester3module4 = new Module('Kombinatorika ir grafų teorija', 5)
const mathematicsAndItsApplicationsSemester3module5 = new Module('Matematinė analizė III/III d.', 10)
mathematicsAndItsApplicationsSemester3.addModule(mathematicsAndItsApplicationsSemester3module1.id);
mathematicsAndItsApplicationsSemester3.addModule(mathematicsAndItsApplicationsSemester3module2.id);
mathematicsAndItsApplicationsSemester3.addModule(mathematicsAndItsApplicationsSemester3module3.id);
mathematicsAndItsApplicationsSemester3.addModule(mathematicsAndItsApplicationsSemester3module4.id);
mathematicsAndItsApplicationsSemester3.addModule(mathematicsAndItsApplicationsSemester3module5.id);

const mathematicsAndItsApplicationsSemester4 = new StudyProgramSemester();
const mathematicsAndItsApplicationsSemester4module1 = new Module('Diferencialinės lygtys II/II d.', 5)
const mathematicsAndItsApplicationsSemester4module2 = new Module('Duomenų bazių valdymo sistemos', 5)
const mathematicsAndItsApplicationsSemester4module3 = new Module('Kompleksinio kintamojo funkcijų teorija', 5)
const mathematicsAndItsApplicationsSemester4module4 = new Module('Mato ir integralo teorija', 5)
const mathematicsAndItsApplicationsSemester4module5 = new Module('Skaitiniai metodai I/II d.', 5)
const mathematicsAndItsApplicationsSemester4module6 = new Module('Tikimybių teorija ir matematinė statistika I/II d.', 5)
mathematicsAndItsApplicationsSemester4.addModule(mathematicsAndItsApplicationsSemester4module1.id);
mathematicsAndItsApplicationsSemester4.addModule(mathematicsAndItsApplicationsSemester4module2.id);
mathematicsAndItsApplicationsSemester4.addModule(mathematicsAndItsApplicationsSemester4module3.id);
mathematicsAndItsApplicationsSemester4.addModule(mathematicsAndItsApplicationsSemester4module4.id);
mathematicsAndItsApplicationsSemester4.addModule(mathematicsAndItsApplicationsSemester4module5.id);
mathematicsAndItsApplicationsSemester4.addModule(mathematicsAndItsApplicationsSemester4module6.id);

const mathematicsAndItsApplicationsSemester5 = new StudyProgramSemester();
const mathematicsAndItsApplicationsSemester5module1 = new Module('Funkcinė analizė', 5)
const mathematicsAndItsApplicationsSemester5module2 = new Module('Skaitiniai metodai II/II d.', 5)
const mathematicsAndItsApplicationsSemester5module3 = new Module('Tikimybių teorija ir matematinė statistika II/II d.', 5)
const mathematicsAndItsApplicationsSemester5module4 = new Module('JAVA technologijos', 5)
const mathematicsAndItsApplicationsSemester5module5 = new Module('Vizualus programavimas', 5)
mathematicsAndItsApplicationsSemester5.addModule(mathematicsAndItsApplicationsSemester5module1.id);
mathematicsAndItsApplicationsSemester5.addModule(mathematicsAndItsApplicationsSemester5module2.id);
mathematicsAndItsApplicationsSemester5.addModule(mathematicsAndItsApplicationsSemester5module3.id);
mathematicsAndItsApplicationsSemester5.addModule(mathematicsAndItsApplicationsSemester5module4.id);
mathematicsAndItsApplicationsSemester5.addModule(mathematicsAndItsApplicationsSemester5module5.id);

const mathematicsAndItsApplicationsSemester6 = new StudyProgramSemester();
const mathematicsAndItsApplicationsSemester6module1 = new Module('Fizika', 5)
const mathematicsAndItsApplicationsSemester6module2 = new Module('Matematinės fizikos lygtys', 5)
const mathematicsAndItsApplicationsSemester6module3 = new Module('Skaičių teorija', 5)
const mathematicsAndItsApplicationsSemester6module4 = new Module('Taikomoji statistika', 5)
const mathematicsAndItsApplicationsSemester6module5 = new Module('Operatorių teorijos pagrindai', 5)
const mathematicsAndItsApplicationsSemester6module6 = new Module('Variacinis skaičiavimas ir optimalus valdymas', 5)
mathematicsAndItsApplicationsSemester6.addModule(mathematicsAndItsApplicationsSemester6module1.id);
mathematicsAndItsApplicationsSemester6.addModule(mathematicsAndItsApplicationsSemester6module2.id);
mathematicsAndItsApplicationsSemester6.addModule(mathematicsAndItsApplicationsSemester6module3.id);
mathematicsAndItsApplicationsSemester6.addModule(mathematicsAndItsApplicationsSemester6module4.id);
mathematicsAndItsApplicationsSemester6.addModule(mathematicsAndItsApplicationsSemester6module5.id);
mathematicsAndItsApplicationsSemester6.addModule(mathematicsAndItsApplicationsSemester6module6.id);

const mathematicsAndItsApplicationsSemester7 = new StudyProgramSemester();
const mathematicsAndItsApplicationsSemester7module1 = new Module('Matematinio modeliavimo pagrindai', 5)
const mathematicsAndItsApplicationsSemester7module2 = new Module('Patikimumo teorija', 5)
const mathematicsAndItsApplicationsSemester7module3 = new Module('Finansų rinkų matematika', 5)
const mathematicsAndItsApplicationsSemester7module4 = new Module('Kodavimas ir kriptografija', 5)
const mathematicsAndItsApplicationsSemester7module5 = new Module('Algoritminė skaičių teorija', 5)
mathematicsAndItsApplicationsSemester7.addModule(mathematicsAndItsApplicationsSemester7module1.id);
mathematicsAndItsApplicationsSemester7.addModule(mathematicsAndItsApplicationsSemester7module2.id);
mathematicsAndItsApplicationsSemester7.addModule(mathematicsAndItsApplicationsSemester7module3.id);
mathematicsAndItsApplicationsSemester7.addModule(mathematicsAndItsApplicationsSemester7module4.id);
mathematicsAndItsApplicationsSemester7.addModule(mathematicsAndItsApplicationsSemester7module5.id);

const mathematicsAndItsApplicationsSemester8 = new StudyProgramSemester();
const mathematicsAndItsApplicationsSemester8module1 = new Module('Bakalauro baigiamasis darbas', 15)
const mathematicsAndItsApplicationsSemester8module2 = new Module('Profesinė praktika', 15)
mathematicsAndItsApplicationsSemester8.addModule(mathematicsAndItsApplicationsSemester8module1.id);
mathematicsAndItsApplicationsSemester8.addModule(mathematicsAndItsApplicationsSemester8module2.id);

mathematicsAndItsApplications.addSemester(1, mathematicsAndItsApplicationsSemester1);
mathematicsAndItsApplications.addSemester(2, mathematicsAndItsApplicationsSemester2);
mathematicsAndItsApplications.addSemester(3, mathematicsAndItsApplicationsSemester3);
mathematicsAndItsApplications.addSemester(4, mathematicsAndItsApplicationsSemester4);
mathematicsAndItsApplications.addSemester(5, mathematicsAndItsApplicationsSemester5);
mathematicsAndItsApplications.addSemester(6, mathematicsAndItsApplicationsSemester6);
mathematicsAndItsApplications.addSemester(7, mathematicsAndItsApplicationsSemester7);
mathematicsAndItsApplications.addSemester(8, mathematicsAndItsApplicationsSemester8);

export const mathematicsAndItsApplicationsModules = [
    mathematicsAndItsApplicationsSemester1module1,
    mathematicsAndItsApplicationsSemester1module2,
    mathematicsAndItsApplicationsSemester1module3,
    mathematicsAndItsApplicationsSemester1module4,
    mathematicsAndItsApplicationsSemester1module5,
    mathematicsAndItsApplicationsSemester2module1,
    mathematicsAndItsApplicationsSemester2module2,
    mathematicsAndItsApplicationsSemester2module3,
    mathematicsAndItsApplicationsSemester2module4,
    mathematicsAndItsApplicationsSemester2module5,
    mathematicsAndItsApplicationsSemester3module1,
    mathematicsAndItsApplicationsSemester3module2,
    mathematicsAndItsApplicationsSemester3module3,
    mathematicsAndItsApplicationsSemester3module4,
    mathematicsAndItsApplicationsSemester3module5,
    mathematicsAndItsApplicationsSemester4module1,
    mathematicsAndItsApplicationsSemester4module2,
    mathematicsAndItsApplicationsSemester4module3,
    mathematicsAndItsApplicationsSemester4module4,
    mathematicsAndItsApplicationsSemester4module5,
    mathematicsAndItsApplicationsSemester4module6,
    mathematicsAndItsApplicationsSemester5module1,
    mathematicsAndItsApplicationsSemester5module2,
    mathematicsAndItsApplicationsSemester5module3,
    mathematicsAndItsApplicationsSemester5module4,
    mathematicsAndItsApplicationsSemester5module5,
    mathematicsAndItsApplicationsSemester6module1,
    mathematicsAndItsApplicationsSemester6module2,
    mathematicsAndItsApplicationsSemester6module3,
    mathematicsAndItsApplicationsSemester6module4,
    mathematicsAndItsApplicationsSemester6module5,
    mathematicsAndItsApplicationsSemester6module6,
    mathematicsAndItsApplicationsSemester7module1,
    mathematicsAndItsApplicationsSemester7module2,
    mathematicsAndItsApplicationsSemester7module3,
    mathematicsAndItsApplicationsSemester7module4,
    mathematicsAndItsApplicationsSemester7module5,
    mathematicsAndItsApplicationsSemester8module1,
    mathematicsAndItsApplicationsSemester8module2,
];
export default mathematicsAndItsApplications;
