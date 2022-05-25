import StudyProgram from '../../entities/study-program.js';
import StudyProgramSemester from '../../entities/study-program-semester.js';
import Module from '../../entities/module.js';
import { medicineFaculty } from '../faculties.js';

const nursingProgram = new StudyProgram('Slauga', medicineFaculty.id);

const nursingProgramSemester1 = new StudyProgramSemester();
const nursingProgramSemester1module1 = new Module('Anatomijos pagrindai', 5);
const nursingProgramSemester1module2 = new Module('Bazinių slaugos įgūdžių formavimas', 5);
const nursingProgramSemester1module3 = new Module('Įvadas į slaugą ir profesinė etika', 5);
const nursingProgramSemester1module4 = new Module('Psichologijos ir edukologijos pagrindai', 5);
const nursingProgramSemester1module5 = new Module('Sociologija, vadyba ir sveikatos teisė', 5);
const nursingProgramSemester1module6 = new Module('Visuomenės sveikatos pagrindai ir dietetika', 5);
nursingProgramSemester1.addModule(nursingProgramSemester1module1.id);
nursingProgramSemester1.addModule(nursingProgramSemester1module2.id);
nursingProgramSemester1.addModule(nursingProgramSemester1module3.id);
nursingProgramSemester1.addModule(nursingProgramSemester1module4.id);
nursingProgramSemester1.addModule(nursingProgramSemester1module5.id);
nursingProgramSemester1.addModule(nursingProgramSemester1module6.id);

const nursingProgramSemester2 = new StudyProgramSemester();
const nursingProgramSemester2module1 = new Module('Bendroji slauga ir praktinių įgūdžių formavimas', 10);
const nursingProgramSemester2module2 = new Module('Farmakologija', 5);
const nursingProgramSemester2module3 = new Module('Gyvybės mokslai I/II d.', 10);
const nursingProgramSemester2module4 = new Module('Bendrųjų universitetinių studijų dalykai (moduliai)', 5);
nursingProgramSemester2.addModule(nursingProgramSemester2module1.id);
nursingProgramSemester2.addModule(nursingProgramSemester2module2.id);
nursingProgramSemester2.addModule(nursingProgramSemester2module3.id);
nursingProgramSemester2.addModule(nursingProgramSemester2module4.id);

const nursingProgramSemester3 = new StudyProgramSemester();
const nursingProgramSemester3module1 = new Module('Akušerinė, ginekologinė ir vaikų slauga', 10);
const nursingProgramSemester3module2 = new Module('Bendroji ir specialioji chirurginė slauga', 5);
const nursingProgramSemester3module3 = new Module('Bendroji ir specialioji terapinė slauga', 10);
const nursingProgramSemester3module4 = new Module('Gyvybės mokslai II/II d.', 5);
nursingProgramSemester3.addModule(nursingProgramSemester3module1.id);
nursingProgramSemester3.addModule(nursingProgramSemester3module2.id);
nursingProgramSemester3.addModule(nursingProgramSemester3module3.id);
nursingProgramSemester3.addModule(nursingProgramSemester3module4.id);

const nursingProgramSemester4 = new StudyProgramSemester();
const nursingProgramSemester4module1 = new Module('Chirurginės slaugos praktinių įgūdžių formavimas', 10);
const nursingProgramSemester4module2 = new Module('Ginekologinės slaugos praktinių įgūdžių formavimas ir akušerinė priežiūra', 5);
const nursingProgramSemester4module3 = new Module('Terapinės slaugos praktinių įgūdžių formavimas', 10);
const nursingProgramSemester4module4 = new Module('Bendrųjų universitetinių studijų dalykai (moduliai)', 5);
nursingProgramSemester4.addModule(nursingProgramSemester4module1.id);
nursingProgramSemester4.addModule(nursingProgramSemester4module2.id);
nursingProgramSemester4.addModule(nursingProgramSemester4module3.id);
nursingProgramSemester4.addModule(nursingProgramSemester4module4.id);

const nursingProgramSemester5 = new StudyProgramSemester();
const nursingProgramSemester5module1 = new Module('Bendruomenės, namų ir paliatyviosios slaugos praktika', 5);
const nursingProgramSemester5module2 = new Module('Gerontologija ir geriatrinė slauga', 5);
const nursingProgramSemester5module3 = new Module('Kritinių būklių medicina, anesteziologija ir intensyvi slauga', 5);
const nursingProgramSemester5module4 = new Module('Mokslinio tyrimo metodologija ir bakalauro baigiamojo darbo rengimas', 5);
const nursingProgramSemester5module5 = new Module('Psichikos sveikatos slauga', 5);
const nursingProgramSemester5module6 = new Module('Bendrųjų universitetinių studijų dalykai (moduliai)', 5);
nursingProgramSemester5.addModule(nursingProgramSemester5module1.id);
nursingProgramSemester5.addModule(nursingProgramSemester5module2.id);
nursingProgramSemester5.addModule(nursingProgramSemester5module3.id);
nursingProgramSemester5.addModule(nursingProgramSemester5module4.id);
nursingProgramSemester5.addModule(nursingProgramSemester5module5.id);
nursingProgramSemester5.addModule(nursingProgramSemester5module6.id);

const nursingProgramSemester6 = new StudyProgramSemester();
const nursingProgramSemester6module1 = new Module('Anestezijos ir intensyviosios terapijos slaugos praktinių įgūdžių formavimas', 5);
const nursingProgramSemester6module2 = new Module('Bendruomenės, namų ir paliatyviosios slaugos praktinių įgūdžių formavimas', 5);
const nursingProgramSemester6module3 = new Module('Geriatrinės ir neįgaliųjų slaugos praktinių įgūdžių formavimas', 5);
const nursingProgramSemester6module4 = new Module('Psichikos sveikatos slaugos praktinių įgūdžių formavimas', 5);
const nursingProgramSemester6module5 = new Module('Vaikų slaugos praktinių įgūdžių formavimas', 10);
nursingProgramSemester6.addModule(nursingProgramSemester6module1.id);
nursingProgramSemester6.addModule(nursingProgramSemester6module2.id);
nursingProgramSemester6.addModule(nursingProgramSemester6module3.id);
nursingProgramSemester6.addModule(nursingProgramSemester6module4.id);
nursingProgramSemester6.addModule(nursingProgramSemester6module5.id);

const nursingProgramSemester7 = new StudyProgramSemester();
const nursingProgramSemester7module1 = new Module('Profesinė klinikinė praktika I/II d.', 30);
nursingProgramSemester7.addModule(nursingProgramSemester7module1.id);

const nursingProgramSemester8 = new StudyProgramSemester();
const nursingProgramSemester8module1 = new Module('Bakalauro baigiamasis darbas (kryptis: slauga ir akušerija)', 5);
const nursingProgramSemester8module2 = new Module('Profesinė klinikinė praktika II/II d.', 25);
nursingProgramSemester8.addModule(nursingProgramSemester8module1.id);
nursingProgramSemester8.addModule(nursingProgramSemester8module2.id);

nursingProgram.addSemester(1, nursingProgramSemester1);
nursingProgram.addSemester(2, nursingProgramSemester2);
nursingProgram.addSemester(3, nursingProgramSemester3);
nursingProgram.addSemester(4, nursingProgramSemester4);
nursingProgram.addSemester(5, nursingProgramSemester5);
nursingProgram.addSemester(6, nursingProgramSemester6);
nursingProgram.addSemester(7, nursingProgramSemester7);
nursingProgram.addSemester(8, nursingProgramSemester8);

export const nursingProgramModules = [
  nursingProgramSemester1module1,
  nursingProgramSemester1module2,
  nursingProgramSemester1module3,
  nursingProgramSemester1module4,
  nursingProgramSemester1module5,
  nursingProgramSemester1module6,
  nursingProgramSemester2module1,
  nursingProgramSemester2module2,
  nursingProgramSemester2module3,
  nursingProgramSemester2module4,
  nursingProgramSemester3module1,
  nursingProgramSemester3module2,
  nursingProgramSemester3module3,
  nursingProgramSemester3module4,
  nursingProgramSemester4module1,
  nursingProgramSemester4module2,
  nursingProgramSemester4module3,
  nursingProgramSemester4module4,
  nursingProgramSemester5module1,
  nursingProgramSemester5module2,
  nursingProgramSemester5module3,
  nursingProgramSemester5module4,
  nursingProgramSemester5module5,
  nursingProgramSemester5module6,
  nursingProgramSemester6module1,
  nursingProgramSemester6module2,
  nursingProgramSemester6module3,
  nursingProgramSemester6module4,
  nursingProgramSemester6module5,
  nursingProgramSemester7module1,
  nursingProgramSemester8module1,
  nursingProgramSemester8module2
];

export default nursingProgram;
