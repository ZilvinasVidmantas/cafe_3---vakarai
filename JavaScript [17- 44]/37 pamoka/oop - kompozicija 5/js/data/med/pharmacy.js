import StudyProgram from '../../entities/study-program.js';
import StudyProgramSemester from '../../entities/study-program-semester.js';
import Module from '../../entities/module.js';
import { medicineFaculty } from '../faculties.js';

const pharmacy = new StudyProgram('Farmacija', medicineFaculty.id);

const pharmacySemester1 = new StudyProgramSemester();
const pharmacySemester1module1 = new Module('Augalų ir gyvūnų biologijos pagrindai',	5);
const pharmacySemester1module2 = new Module('Bendrosios ir neorganinės chemijos pagrindai', 5);
const pharmacySemester1module3 = new Module('Įvadas į farmaciją', 5);
const pharmacySemester1module4 = new Module('Profesinė lotynų kalba ir terminija',	5);
const pharmacySemester1module5 = new Module('Taikomosios fizikos pagrindai',	5);
const pharmacySemester1module6 = new Module('Žmogaus anatomijos ir histologijos pagrindai',	5);
pharmacySemester1.addModule(pharmacySemester1module1.id);
pharmacySemester1.addModule(pharmacySemester1module2.id);
pharmacySemester1.addModule(pharmacySemester1module3.id);
pharmacySemester1.addModule(pharmacySemester1module4.id);
pharmacySemester1.addModule(pharmacySemester1module5.id);
pharmacySemester1.addModule(pharmacySemester1module6.id);

const pharmacySemester2 = new StudyProgramSemester();
const pharmacySemester2module1 = new Module('Žmogaus fiziologijos pagrindai',	5);
const pharmacySemester2module2 = new Module('Biochemijos pagrindai I/II d.', 5);
const pharmacySemester2module3 = new Module('Dalykinė anglų kalba C1', 5);
const pharmacySemester2module4 = new Module('Fizikinės chemijos pagrindai',	5);
const pharmacySemester2module5 = new Module('Organinės chemijos pagrindai I/II d.',	5);
pharmacySemester2.addModule(pharmacySemester2module1.id);
pharmacySemester2.addModule(pharmacySemester2module2.id);
pharmacySemester2.addModule(pharmacySemester2module3.id);
pharmacySemester2.addModule(pharmacySemester2module4.id);
pharmacySemester2.addModule(pharmacySemester2module5.id);

const pharmacySemester3 = new StudyProgramSemester();
const pharmacySemester3module1 = new Module('Analizinės chemijos pagrindai',	5);
const pharmacySemester3module2 = new Module('Biochemijos pagrindai II/II d.', 5);
const pharmacySemester3module3 = new Module('Farmakognozija ir fitoterapija I/II d.', 5);
const pharmacySemester3module4 = new Module('Mikrobiologijos pagrindai',	5);
const pharmacySemester3module5 = new Module('Organinės chemijos pagrindai II/II d.',	5);
pharmacySemester3.addModule(pharmacySemester3module1.id);
pharmacySemester3.addModule(pharmacySemester3module2.id);
pharmacySemester3.addModule(pharmacySemester3module3.id);
pharmacySemester3.addModule(pharmacySemester3module4.id);
pharmacySemester3.addModule(pharmacySemester3module5.id);

const pharmacySemester4 = new StudyProgramSemester();
const pharmacySemester4module1 = new Module('Farmacijos teisė ir profesinė etika',	5);
const pharmacySemester4module2 = new Module('Farmakognozija ir fitoterapija II/II d.', 5);
const pharmacySemester4module3 = new Module('Patologinė fiziologija ir imunologija', 5);
const pharmacySemester4module4 = new Module('Sveikatos ekonomika ir vadyba',	5);
const pharmacySemester4module5 = new Module('Vaistų technologijos I/II d.',	5);
pharmacySemester4.addModule(pharmacySemester4module1.id);
pharmacySemester4.addModule(pharmacySemester4module2.id);
pharmacySemester4.addModule(pharmacySemester4module3.id);
pharmacySemester4.addModule(pharmacySemester4module4.id);
pharmacySemester4.addModule(pharmacySemester4module5.id);

const pharmacySemester5 = new StudyProgramSemester();
const pharmacySemester5module1 = new Module('Farmacinė chemija I/II d.',	5);
const pharmacySemester5module2 = new Module('Farmakologija I/II d.', 5);
const pharmacySemester5module3 = new Module('Klinikinės medicinos pagrindai I/II d.', 10);
const pharmacySemester5module4 = new Module('Vaistų technologijos II/II d.',	5);
const pharmacySemester5module5 = new Module('Žmogaus bei medicinos genetikos pagrindai ir laboratorinė medicina',	5);
pharmacySemester5.addModule(pharmacySemester5module1.id);
pharmacySemester5.addModule(pharmacySemester5module2.id);
pharmacySemester5.addModule(pharmacySemester5module3.id);
pharmacySemester5.addModule(pharmacySemester5module4.id);
pharmacySemester5.addModule(pharmacySemester5module5.id);

const pharmacySemester6 = new StudyProgramSemester();
const pharmacySemester6module1 = new Module('Farmacinė chemija II/II d.',	5);
const pharmacySemester6module2 = new Module('Farmakologija II/II d.', 10);
const pharmacySemester6module3 = new Module('Įrodymais pagrįsta ir papildoma medicina', 10);
const pharmacySemester6module4 = new Module('Klinikinės medicinos pagrindai II/II d.',	5);
const pharmacySemester6module5 = new Module('Mokslinių darbų rengimo metodologija ir statistinis modeliavimas',	5);
pharmacySemester6.addModule(pharmacySemester6module1.id);
pharmacySemester6.addModule(pharmacySemester6module2.id);
pharmacySemester6.addModule(pharmacySemester6module3.id);
pharmacySemester6.addModule(pharmacySemester6module4.id);
pharmacySemester6.addModule(pharmacySemester6module5.id);

const pharmacySemester7 = new StudyProgramSemester();
const pharmacySemester7module1 = new Module('Analitinės toksikologijos pagrindai',	5);
const pharmacySemester7module2 = new Module('Socialinė farmacija', 10);
const pharmacySemester7module3 = new Module('Vaistų chemija ir naujų vaistinių medžiagų paieška', 10);
pharmacySemester7.addModule(pharmacySemester7module1.id);
pharmacySemester7.addModule(pharmacySemester7module2.id);
pharmacySemester7.addModule(pharmacySemester7module3.id);

const pharmacySemester8 = new StudyProgramSemester();
const pharmacySemester8module1 = new Module('Farmacinė rūpyba ir komunikacija',	10);
const pharmacySemester8module2 = new Module('Farmakoterapija ir racionalus vaistų vartojimas', 5);
const pharmacySemester8module3 = new Module('Inovatyvios technologijos medicinoje', 10);
pharmacySemester8.addModule(pharmacySemester8module1.id);
pharmacySemester8.addModule(pharmacySemester8module2.id);
pharmacySemester8.addModule(pharmacySemester8module3.id);

const pharmacySemester9 = new StudyProgramSemester();
const pharmacySemester9module1 = new Module('Magistro baigiamojo darbo rengimas', 15);
const pharmacySemester9module2 = new Module('Profesinė praktika (farmacinė analizė; vaistų technologija, socialinė farmacija)', 10);
const pharmacySemester9module3 = new Module('Valdymo ir rūpybos įgūdžių įgijimas (GIMMICS)', 5);
pharmacySemester9.addModule(pharmacySemester9module1.id);
pharmacySemester9.addModule(pharmacySemester9module2.id);
pharmacySemester9.addModule(pharmacySemester9module3.id);

const pharmacySemester10 = new StudyProgramSemester();
const pharmacySemester10module1 = new Module('Baigiamasis egzaminas', 5);
const pharmacySemester10module2 = new Module('Magistro baigiamasis darbas (kryptis: farmacija)', 15);
const pharmacySemester10module3 = new Module('Profesinė praktika (farmacinės veiklos organizavimas)', 10);
pharmacySemester10.addModule(pharmacySemester10module1.id);
pharmacySemester10.addModule(pharmacySemester10module2.id);
pharmacySemester10.addModule(pharmacySemester10module3.id);

pharmacy.addSemester(1, pharmacySemester1);
pharmacy.addSemester(2, pharmacySemester2);
pharmacy.addSemester(3, pharmacySemester3);
pharmacy.addSemester(4, pharmacySemester4);
pharmacy.addSemester(5, pharmacySemester5);
pharmacy.addSemester(6, pharmacySemester6);
pharmacy.addSemester(7, pharmacySemester7);
pharmacy.addSemester(8, pharmacySemester8);
pharmacy.addSemester(9, pharmacySemester9);
pharmacy.addSemester(10, pharmacySemester10);

export const pharmacyModules = [
  pharmacySemester1module1,
  pharmacySemester1module2,
  pharmacySemester1module3,
  pharmacySemester1module4,
  pharmacySemester1module5,
  pharmacySemester1module6,
  pharmacySemester2module1,
  pharmacySemester2module2,  
  pharmacySemester2module3,
  pharmacySemester2module4,
  pharmacySemester2module5,
  pharmacySemester3module1,
  pharmacySemester3module2,  
  pharmacySemester3module3,
  pharmacySemester3module4,
  pharmacySemester3module5,
  pharmacySemester4module1,
  pharmacySemester4module2,  
  pharmacySemester4module3,
  pharmacySemester4module4,
  pharmacySemester4module5,
  pharmacySemester5module1,
  pharmacySemester5module2,  
  pharmacySemester5module3,
  pharmacySemester5module4,
  pharmacySemester5module5,
  pharmacySemester6module1,
  pharmacySemester6module2,  
  pharmacySemester6module3,
  pharmacySemester6module4,
  pharmacySemester6module5,
  pharmacySemester7module1,
  pharmacySemester7module2,  
  pharmacySemester7module3,
  pharmacySemester8module1,
  pharmacySemester8module2,  
  pharmacySemester8module3,
  pharmacySemester9module1,
  pharmacySemester9module2,  
  pharmacySemester9module3,
  pharmacySemester10module1,
  pharmacySemester10module2,  
  pharmacySemester10module3,
];

export default pharmacy;
