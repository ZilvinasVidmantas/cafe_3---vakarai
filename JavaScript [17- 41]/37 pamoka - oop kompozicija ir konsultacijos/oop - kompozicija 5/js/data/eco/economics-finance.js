import StudyProgram from '../../entities/study-program.js';
import StudyProgramSemester from '../../entities/study-program-semester.js';
import Module from '../../entities/module.js';
import { economicsAndBusinessFaculty } from '../faculties.js';

const economicsFinance = new StudyProgram('Ekonomika ir finansai' , economicsAndBusinessFaculty.id);

const economicsFinanceSemester1 = new StudyProgramSemester();
const economicsFinanceSemester1module1 = new Module('Dalykinė anglų kalba (C1)', 5);
const economicsFinanceSemester1module2 = new Module('Duomenų analizės įvadas', 5);
const economicsFinanceSemester1module3 = new Module('Finansinės apskaitos pagrindai', 5);
const economicsFinanceSemester1module4 = new Module('Ekonomikos pagrindai', 10);
const economicsFinanceSemester1module5 = new Module('Matematiniai metodai I/II d.', 5);
economicsFinanceSemester1.addModule(economicsFinanceSemester1module1.id);
economicsFinanceSemester1.addModule(economicsFinanceSemester1module2.id);
economicsFinanceSemester1.addModule(economicsFinanceSemester1module3.id);
economicsFinanceSemester1.addModule(economicsFinanceSemester1module4.id);
economicsFinanceSemester1.addModule(economicsFinanceSemester1module5.id);

const economicsFinanceSemester2 = new StudyProgramSemester();
const economicsFinanceSemester2module1 = new Module('Finansų pagrindai', 10);
const economicsFinanceSemester2module2 = new Module('Makroekonomika I/III d.', 5);
const economicsFinanceSemester2module3 = new Module('Matematiniai metodai II/II d.', 5);
const economicsFinanceSemester2module4 = new Module('Mikroekonomika I/III d.', 5);
const economicsFinanceSemester2module5 = new Module('Statistika', 5);
economicsFinanceSemester2.addModule(economicsFinanceSemester2module1.id);
economicsFinanceSemester2.addModule(economicsFinanceSemester2module2.id);
economicsFinanceSemester2.addModule(economicsFinanceSemester2module3.id);
economicsFinanceSemester2.addModule(economicsFinanceSemester2module4.id);
economicsFinanceSemester2.addModule(economicsFinanceSemester2module5.id);

const economicsFinanceSemester3 = new StudyProgramSemester();
const economicsFinanceSemester3module1 = new Module('Ekonometrija I/III d.', 5);
const economicsFinanceSemester3module2 = new Module('Finansų rinkos', 5);
const economicsFinanceSemester3module3 = new Module('Įmonių finansai', 5);
const economicsFinanceSemester3module4 = new Module('Makroekonomika II/III d.', 5);
const economicsFinanceSemester3module5 = new Module('Mikroekonomika II/III d.', 10);
economicsFinanceSemester3.addModule(economicsFinanceSemester3module1.id);
economicsFinanceSemester3.addModule(economicsFinanceSemester3module2.id);
economicsFinanceSemester3.addModule(economicsFinanceSemester3module3.id);
economicsFinanceSemester3.addModule(economicsFinanceSemester3module4.id);
economicsFinanceSemester3.addModule(economicsFinanceSemester3module5.id);

const economicsFinanceSemester4 = new StudyProgramSemester();
const economicsFinanceSemester4module1 = new Module('Aplinkos ekonomika', 5);
const economicsFinanceSemester4module2 = new Module('Bankininkystė', 10);
const economicsFinanceSemester4module3 = new Module('Ekonometrija II/III d.', 5);
const economicsFinanceSemester4module4 = new Module('Tarptautinė ekonomika', 5);
const economicsFinanceSemester4module5 = new Module('Viešieji finansai', 5);
economicsFinanceSemester4.addModule(economicsFinanceSemester4module1.id);
economicsFinanceSemester4.addModule(economicsFinanceSemester4module2.id);
economicsFinanceSemester4.addModule(economicsFinanceSemester4module3.id);
economicsFinanceSemester4.addModule(economicsFinanceSemester4module4.id);
economicsFinanceSemester4.addModule(economicsFinanceSemester4module5.id);

const economicsFinanceSemester5 = new StudyProgramSemester();
const economicsFinanceSemester5module1 = new Module('Ekonometrija III/III d.', 10);
const economicsFinanceSemester5module2 = new Module('Mikroekonomika III/III d', 10);
const economicsFinanceSemester5module3 = new Module('Tarptautiniai finansai', 10);
economicsFinanceSemester5.addModule(economicsFinanceSemester5module1.id);
economicsFinanceSemester5.addModule(economicsFinanceSemester5module2.id);
economicsFinanceSemester5.addModule(economicsFinanceSemester5module3.id);

const economicsFinanceSemester6 = new StudyProgramSemester();
const economicsFinanceSemester6module1 = new Module('Investicijų portfelio valdymas', 5);
const economicsFinanceSemester6module2 = new Module('Makroekonomika III/III d.', 5);
const economicsFinanceSemester6module3 = new Module('Finansinės technologijos', 10);
const economicsFinanceSemester6module4 = new Module('Industrinė organizacija', 5);
const economicsFinanceSemester6module5 = new Module('Sveikatos ekonomika', 5);
economicsFinanceSemester6.addModule(economicsFinanceSemester6module1.id);
economicsFinanceSemester6.addModule(economicsFinanceSemester6module2.id);
economicsFinanceSemester6.addModule(economicsFinanceSemester6module3.id);
economicsFinanceSemester6.addModule(economicsFinanceSemester6module4.id);
economicsFinanceSemester6.addModule(economicsFinanceSemester6module5.id);

const economicsFinanceSemester7 = new StudyProgramSemester();
const economicsFinanceSemester7module1 = new Module('Kursinis darbas', 10);
const economicsFinanceSemester7module2 = new Module('Pinigų ir finansinio stabilumo politika', 5);
const economicsFinanceSemester7module3 = new Module('Taikomoji ekonomika', 5);
const economicsFinanceSemester7module4 = new Module('Darbo ekonomika', 5);
const economicsFinanceSemester7module5 = new Module('Ekonominės minties istorija', 5);
economicsFinanceSemester7.addModule(economicsFinanceSemester7module1.id);
economicsFinanceSemester7.addModule(economicsFinanceSemester7module2.id);
economicsFinanceSemester7.addModule(economicsFinanceSemester7module3.id);
economicsFinanceSemester7.addModule(economicsFinanceSemester7module4.id);
economicsFinanceSemester7.addModule(economicsFinanceSemester7module5.id);

const economicsFinanceSemester8 = new StudyProgramSemester();
const economicsFinanceSemester8module1 = new Module('Bakalauro baigiamasis darbas', 15);
const economicsFinanceSemester8module2 = new Module('Profesinė praktika', 15);
economicsFinanceSemester8.addModule(economicsFinanceSemester8module1.id);
economicsFinanceSemester8.addModule(economicsFinanceSemester8module2.id);

economicsFinance.addSemester(1, economicsFinanceSemester1);
economicsFinance.addSemester(2, economicsFinanceSemester2);
economicsFinance.addSemester(3, economicsFinanceSemester3);
economicsFinance.addSemester(4, economicsFinanceSemester4);
economicsFinance.addSemester(5, economicsFinanceSemester5);
economicsFinance.addSemester(6, economicsFinanceSemester6);
economicsFinance.addSemester(7, economicsFinanceSemester7);
economicsFinance.addSemester(8, economicsFinanceSemester8);

export const economicsFinanceModules = [
  economicsFinanceSemester1module1,
  economicsFinanceSemester1module2,
  economicsFinanceSemester1module3,
  economicsFinanceSemester1module4,
  economicsFinanceSemester1module5,
  economicsFinanceSemester2module1,
  economicsFinanceSemester2module2,
  economicsFinanceSemester2module3,
  economicsFinanceSemester2module4,
  economicsFinanceSemester2module5,
  economicsFinanceSemester3module1,
  economicsFinanceSemester3module2,
  economicsFinanceSemester3module3,
  economicsFinanceSemester3module4,
  economicsFinanceSemester4module1,
  economicsFinanceSemester4module2,
  economicsFinanceSemester4module3,
  economicsFinanceSemester4module4,
  economicsFinanceSemester4module5,
  economicsFinanceSemester5module1,
  economicsFinanceSemester5module2,
  economicsFinanceSemester5module3,
  economicsFinanceSemester6module1,
  economicsFinanceSemester6module2,
  economicsFinanceSemester6module3,
  economicsFinanceSemester6module4,
  economicsFinanceSemester6module5,
  economicsFinanceSemester7module1,
  economicsFinanceSemester7module2,
  economicsFinanceSemester7module3,
  economicsFinanceSemester7module4,
  economicsFinanceSemester7module5,
  economicsFinanceSemester8module1,
  economicsFinanceSemester8module2,
];

export default economicsFinance;