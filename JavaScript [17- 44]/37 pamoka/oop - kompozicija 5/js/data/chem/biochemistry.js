import StudyProgram from '../../entities/study-program.js';
import StudyProgramSemester from '../../entities/study-program-semester.js';
import Module from '../../entities/module.js';
import { chemistryAndGeoSciencesFaculty } from '../faculties.js';

const biochemistry = new StudyProgram('Biochemija', chemistryAndGeoSciencesFaculty.id);

const biochemistrySemester1 = new StudyProgramSemester();
const biochemistrySemester1module1 = new Module('Akademinė ir mokslinė anglų kalba C1', 5);
const biochemistrySemester1module2 = new Module('Bendroji biologija', 5);
const biochemistrySemester1module3 = new Module('Bendroji chemija', 10);
const biochemistrySemester1module4 = new Module('Matematika I/II d', 10);
biochemistrySemester1.addModule(biochemistrySemester1module1.id);
biochemistrySemester1.addModule(biochemistrySemester1module2.id);
biochemistrySemester1.addModule(biochemistrySemester1module3.id);
biochemistrySemester1.addModule(biochemistrySemester1module4.id);

const biochemistrySemester2 = new StudyProgramSemester();
const biochemistrySemester2module1 = new Module('Analizinė chemija I/II d', 5);
const biochemistrySemester2module2 = new Module('Fizika I/II d', 5);
const biochemistrySemester2module3 = new Module('Matematika II/II d', 10);
const biochemistrySemester2module4 = new Module('Organinė chemija I/II d', 10);
biochemistrySemester2.addModule(biochemistrySemester2module1.id);
biochemistrySemester2.addModule(biochemistrySemester2module2.id);
biochemistrySemester2.addModule(biochemistrySemester2module3.id);
biochemistrySemester2.addModule(biochemistrySemester2module4.id);

const biochemistrySemester3 = new StudyProgramSemester();
const biochemistrySemester3module1 = new Module('Bioorganinė chemija', 5);
const biochemistrySemester3module2 = new Module('Fizika II/II d.', 5);
const biochemistrySemester3module3 = new Module('Fiziologija', 5);
const biochemistrySemester3module4 = new Module('Kvantinė chemija', 5);
const biochemistrySemester3module5 = new Module('rganinė chemija II/II d.', 5);
biochemistrySemester3.addModule(biochemistrySemester3module1.id);
biochemistrySemester3.addModule(biochemistrySemester3module2.id);
biochemistrySemester3.addModule(biochemistrySemester3module3.id);
biochemistrySemester3.addModule(biochemistrySemester3module4.id);
biochemistrySemester3.addModule(biochemistrySemester3module5.id);

const biochemistrySemester4 = new StudyProgramSemester();
const biochemistrySemester4module1 = new Module('Analizinė chemija II/II d.', 5);
const biochemistrySemester4module2 = new Module('Biochemija I/II d.', 5);
const biochemistrySemester4module3 = new Module('Biomolekulių stereochemija', 10);
const biochemistrySemester4module4 = new Module('Fizikinė chemija', 5);
const biochemistrySemester4module5 = new Module('Mikrobiologija', 5);
const biochemistrySemester4module6 = new Module('Spektroskopija', 5);
biochemistrySemester4.addModule(biochemistrySemester4module1.id);
biochemistrySemester4.addModule(biochemistrySemester4module2.id);
biochemistrySemester4.addModule(biochemistrySemester4module3.id);
biochemistrySemester4.addModule(biochemistrySemester4module4.id);
biochemistrySemester4.addModule(biochemistrySemester4module5.id);
biochemistrySemester4.addModule(biochemistrySemester4module6.id);

const biochemistrySemester5 = new StudyProgramSemester();
const biochemistrySemester5module1 = new Module('Biochemija II/II d.', 15);
const biochemistrySemester5module2 = new Module('Bioneorganinė chemija', 5);
const biochemistrySemester5module3 = new Module('Genų inžinerija', 5);
biochemistrySemester5.addModule(biochemistrySemester5module1.id);
biochemistrySemester5.addModule(biochemistrySemester5module2.id);
biochemistrySemester5.addModule(biochemistrySemester5module3.id);

const biochemistrySemester6 = new StudyProgramSemester();
const biochemistrySemester6module1 = new Module('Enzimologija', 5);
const biochemistrySemester6module2 = new Module('Fizikinė biochemija', 5);
const biochemistrySemester6module3 = new Module('Genetika', 5);
const biochemistrySemester6module4 = new Module('Ląstelės biologija', 5);
const biochemistrySemester6module5 = new Module('Funkcinė ląstelės biologija', 5);
const biochemistrySemester6module6 = new Module('Imunologija', 5);
biochemistrySemester6.addModule(biochemistrySemester6module1.id);
biochemistrySemester6.addModule(biochemistrySemester6module2.id);
biochemistrySemester6.addModule(biochemistrySemester6module3.id);
biochemistrySemester6.addModule(biochemistrySemester6module4.id);
biochemistrySemester6.addModule(biochemistrySemester6module5.id);
biochemistrySemester6.addModule(biochemistrySemester6module6.id);

const biochemistrySemester7 = new StudyProgramSemester();
const biochemistrySemester7module1 = new Module('Bioinformatika', 5);
const biochemistrySemester7module2 = new Module('Biostatistika', 5);
const biochemistrySemester7module3 = new Module('Biotechnologija', 5);
const biochemistrySemester7module4 = new Module('Molekulinė biologija', 5);
const biochemistrySemester7module5 = new Module('Profesinė praktika I/II d.', 5);
const biochemistrySemester7module6 = new Module('Biofizika', 5);
biochemistrySemester7.addModule(biochemistrySemester7module1.id);
biochemistrySemester7.addModule(biochemistrySemester7module2.id);
biochemistrySemester7.addModule(biochemistrySemester7module3.id);
biochemistrySemester7.addModule(biochemistrySemester7module4.id);
biochemistrySemester7.addModule(biochemistrySemester7module5.id);
biochemistrySemester7.addModule(biochemistrySemester7module6.id);

const biochemistrySemester8 = new StudyProgramSemester();
const biochemistrySemester8module1 = new Module('Bakalauro baigiamasis darbas (kryptis: biochemija)', 15);
const biochemistrySemester8module2 = new Module('Profesinė praktika II/II d.', 15);
biochemistrySemester8.addModule(biochemistrySemester8module1.id);
biochemistrySemester8.addModule(biochemistrySemester8module2.id);

biochemistry.addSemester(1, biochemistrySemester1);
biochemistry.addSemester(2, biochemistrySemester2);
biochemistry.addSemester(3, biochemistrySemester3);
biochemistry.addSemester(4, biochemistrySemester4);
biochemistry.addSemester(5, biochemistrySemester5);
biochemistry.addSemester(6, biochemistrySemester6);
biochemistry.addSemester(7, biochemistrySemester7);
biochemistry.addSemester(8, biochemistrySemester8);

export const biochemistryModules = [
  biochemistrySemester1module1,
  biochemistrySemester1module2,
  biochemistrySemester1module3,
  biochemistrySemester1module4,
  biochemistrySemester2module1,
  biochemistrySemester2module2,
  biochemistrySemester2module3,
  biochemistrySemester2module4,
  biochemistrySemester3module1,
  biochemistrySemester3module2,
  biochemistrySemester3module3,
  biochemistrySemester3module4,
  biochemistrySemester3module5,
  biochemistrySemester4module1,
  biochemistrySemester4module2,
  biochemistrySemester4module3,
  biochemistrySemester4module4,
  biochemistrySemester4module5,
  biochemistrySemester4module6,
  biochemistrySemester5module1,
  biochemistrySemester5module2,
  biochemistrySemester5module3,
  biochemistrySemester6module1,
  biochemistrySemester6module2,
  biochemistrySemester6module3,
  biochemistrySemester6module4,
  biochemistrySemester6module5,
  biochemistrySemester6module6,
  biochemistrySemester7module1,
  biochemistrySemester7module2,
  biochemistrySemester7module3,
  biochemistrySemester7module4,
  biochemistrySemester7module5,
  biochemistrySemester7module6,
  biochemistrySemester8module1,
  biochemistrySemester8module2,
];

export default biochemistry;