import StudyProgram from '../../entities/study-program.js';
import StudyProgramSemester from '../../entities/study-program-semester.js';
import Module from '../../entities/module.js';
import { philosophyFaculty } from '../faculties.js';

const philosophy = new StudyProgram('Filosofija', philosophyFaculty.id);

const philosophySemester1 = new StudyProgramSemester();
const philosophySemester1module1 = new Module('Filosofijos įvadas', 5);
const philosophySemester1module2 = new Module('Logika', 5);
const philosophySemester1module3 = new Module('Lotynų kalba', 5);
const philosophySemester1module4 = new Module('Užsienio kalba(anglų) C1', 5);
philosophySemester1.addModule(philosophySemester1module1.id);
philosophySemester1.addModule(philosophySemester1module2.id);
philosophySemester1.addModule(philosophySemester1module3.id);
philosophySemester1.addModule(philosophySemester1module4.id);

const philosophySemester2 = new StudyProgramSemester();
const philosophySemester2module1 = new Module('Antikos filosofija', 10);
const philosophySemester2module2 = new Module('Senoji graikų kalba', 5);
const philosophySemester2module3 = new Module('Socialinė filosofija', 5);
const philosophySemester2module4 = new Module('Logikos klasikai', 5);
philosophySemester2.addModule(philosophySemester2module1.id);
philosophySemester2.addModule(philosophySemester2module2.id);
philosophySemester2.addModule(philosophySemester2module3.id);
philosophySemester2.addModule(philosophySemester2module4.id);

const philosophySemester3 = new StudyProgramSemester();
const philosophySemester3module1 = new Module('Etika', 5);
const philosophySemester3module2 = new Module('Politikos filosofija', 5);
const philosophySemester3module3 = new Module('Viduramžių filosofija', 10);
const philosophySemester3module4 = new Module('Graikų kalba.Filosofiniai tekstai', 5);
philosophySemester3.addModule(philosophySemester3module1.id);
philosophySemester3.addModule(philosophySemester3module2.id);
philosophySemester3.addModule(philosophySemester3module3.id);
philosophySemester3.addModule(philosophySemester3module4.id);

const philosophySemester4 = new StudyProgramSemester();
const philosophySemester4module1 = new Module('Akademinis raštingumas', 5);
const philosophySemester4module2 = new Module('Naujųjų amžių filosofija', 5);
const philosophySemester4module3 = new Module('Bioetika', 5);
const philosophySemester4module4 = new Module('Ikonologija ir vaizdo teorijos', 5);
philosophySemester4.addModule(philosophySemester4module1.id);
philosophySemester4.addModule(philosophySemester4module2.id);
philosophySemester4.addModule(philosophySemester4module3.id);
philosophySemester4.addModule(philosophySemester4module4.id);

const philosophySemester5 = new StudyProgramSemester();
const philosophySemester5module1 = new Module('Egzistencinė ir gyvenimo filosofija', 5);
const philosophySemester5module2 = new Module('Estetika ir meno filosofija', 5);
const philosophySemester5module3 = new Module('Fenomenologija', 5);
const philosophySemester5module4 = new Module('Istorijos filosofija', 5);
const philosophySemester5module5 = new Module('Argumentacijos teorija ir praktika', 5);
const philosophySemester5module6 = new Module('Ekonomikos filosofija', 5);
philosophySemester5.addModule(philosophySemester5module1.id);
philosophySemester5.addModule(philosophySemester5module2.id);
philosophySemester5.addModule(philosophySemester5module3.id);
philosophySemester5.addModule(philosophySemester5module4.id);
philosophySemester5.addModule(philosophySemester5module5.id);
philosophySemester5.addModule(philosophySemester5module6.id);

const philosophySemester6 = new StudyProgramSemester();
const philosophySemester6module1 = new Module('Analitinė filosofija', 5);
const philosophySemester6module2 = new Module('Hermeneutika', 5);
const philosophySemester6module3 = new Module('Kultūros filosofija', 5);
const philosophySemester6module4 = new Module('Kursinis darbas', 5);
const philosophySemester6module5 = new Module('Antropocenas ir vizualumas', 5);
const philosophySemester6module6 = new Module('Bioetika', 5);
philosophySemester6.addModule(philosophySemester6module1.id);
philosophySemester6.addModule(philosophySemester6module2.id);
philosophySemester6.addModule(philosophySemester6module3.id);
philosophySemester6.addModule(philosophySemester6module4.id);
philosophySemester6.addModule(philosophySemester6module5.id);
philosophySemester6.addModule(philosophySemester6module6.id);

const philosophySemester7 = new StudyProgramSemester();
const philosophySemester7module1 = new Module('Bakalauro darbo projektas', 5);
const philosophySemester7module2 = new Module('Mokslo filosofija', 5);
const philosophySemester7module3 = new Module('Religijos filosofija', 5);
const philosophySemester7module4 = new Module('Šiuolaikinė kontinentinė filosofija', 5);
const philosophySemester7module5 = new Module('Argumentacijos teorija ir praktika', 5);
const philosophySemester7module6 = new Module('Ekonomikos filosofija', 5);
philosophySemester7.addModule(philosophySemester7module1.id);
philosophySemester7.addModule(philosophySemester7module2.id);
philosophySemester7.addModule(philosophySemester7module3.id);
philosophySemester7.addModule(philosophySemester7module4.id);
philosophySemester7.addModule(philosophySemester7module5.id);
philosophySemester7.addModule(philosophySemester7module6.id);

const philosophySemester8 = new StudyProgramSemester();
const philosophySemester8module1 = new Module('Bakalauro baigiamasis darbas (kryptis: filosofija)', 10);
const philosophySemester8module2 = new Module('Lietuvos filosofija', 5);
const philosophySemester8module3 = new Module('Antropocenas ir vizualumas', 5);
const philosophySemester8module4 = new Module('Eksperimentinė filosofija', 5);
const philosophySemester8module5 = new Module('Formalioji semantika', 5);

philosophySemester8.addModule(philosophySemester8module1.id);
philosophySemester8.addModule(philosophySemester8module2.id);
philosophySemester8.addModule(philosophySemester8module3.id);
philosophySemester8.addModule(philosophySemester8module4.id);
philosophySemester8.addModule(philosophySemester8module5.id);

philosophy.addSemester(1, philosophySemester1);
philosophy.addSemester(2, philosophySemester2);
philosophy.addSemester(3, philosophySemester3);
philosophy.addSemester(4, philosophySemester4);
philosophy.addSemester(5, philosophySemester5);
philosophy.addSemester(6, philosophySemester6);
philosophy.addSemester(7, philosophySemester7);
philosophy.addSemester(8, philosophySemester8);


export const philosophyModules = [
  philosophySemester1module1,
  philosophySemester1module2,
  philosophySemester1module3,
  philosophySemester1module4,
  philosophySemester2module1,
  philosophySemester2module2,
  philosophySemester2module3,
  philosophySemester2module4,
  philosophySemester3module1,
  philosophySemester3module2,
  philosophySemester3module3,
  philosophySemester3module4,
  philosophySemester4module1,
  philosophySemester4module2,
  philosophySemester4module3,
  philosophySemester4module4,
  philosophySemester5module1,
  philosophySemester5module2,
  philosophySemester5module3,
  philosophySemester5module4,
  philosophySemester5module5,
  philosophySemester5module6,
  philosophySemester6module1,
  philosophySemester6module2,
  philosophySemester6module3,
  philosophySemester6module4,
  philosophySemester6module5,
  philosophySemester6module6,
  philosophySemester7module1,
  philosophySemester7module2,
  philosophySemester7module3,
  philosophySemester7module4,
  philosophySemester7module5,
  philosophySemester7module6,
  philosophySemester8module1,
  philosophySemester8module2,
  philosophySemester8module3,
  philosophySemester8module4,
  philosophySemester8module5
];

export default philosophy;
