import StudyProgram from '../../entities/study-program.js';
import StudyProgramSemester from '../../entities/study-program-semester.js';
import Module from '../../entities/module.js';
import { medicineFaculty } from '../faculties.js';

const medicine = new StudyProgram('Programų sistemos', medicineFaculty.id);

const medicineSemester1 = new StudyProgramSemester();
const medicineSemester1module1 = new Module('Įvadas į medicinos studijas', 5);
const medicineSemester1module2 = new Module('Lotynų kalba ir specialybės kalba', 5);
const medicineSemester1module3 = new Module('Žmogaus anatomija I/II', 10);
const medicineSemester1module4 = new Module('Žmogaus biologija ir genetika', 5);
const medicineSemester1module5 = new Module('Žmogaus histologija I/II', 5);
medicineSemester1.addModule(medicineSemester1module1.id);
medicineSemester1.addModule(medicineSemester1module2.id);
medicineSemester1.addModule(medicineSemester1module3.id);
medicineSemester1.addModule(medicineSemester1module4.id);
medicineSemester1.addModule(medicineSemester1module5.id);

const medicineSemester2 = new StudyProgramSemester();
const medicineSemester2module1 = new Module('Biochemija', 5);
const medicineSemester2module2 = new Module('Psichologija, profesinio bendravimo pagrindai ir psichosomatika', 5);
const medicineSemester2module3 = new Module('Laboratorinė medicina', 5);
const medicineSemester2module4 = new Module('Žmogaus anatomija II/II', 5);
const medicineSemester2module5 = new Module('Fiziologija I/II', 5);
const medicineSemester2module6 = new Module('Žmogaus histologija II/II', 5);
medicineSemester2.addModule(medicineSemester2module1.id);
medicineSemester2.addModule(medicineSemester2module2.id);
medicineSemester2.addModule(medicineSemester2module3.id);
medicineSemester2.addModule(medicineSemester2module4.id);
medicineSemester2.addModule(medicineSemester2module5.id);
medicineSemester2.addModule(medicineSemester2module6.id);

const medicineSemester3 = new StudyProgramSemester();
const medicineSemester3module1 = new Module('Klinikinių praktinių įgūdžių formavimas I/II', 5);
const medicineSemester3module2 = new Module('Mikrobiologija I/II', 5);
const medicineSemester3module3 = new Module('Vidaus ligų propedeutika ir klinikinės onkologijos pagrindai I/II', 5);
const medicineSemester3module4 = new Module('Visuomenės sveikata; mokslinio darbo metodologija ir biostatistika', 5);
const medicineSemester3module5 = new Module('Fiziologija II/II', 5);
medicineSemester3.addModule(medicineSemester3module1.id);
medicineSemester3.addModule(medicineSemester3module2.id);
medicineSemester3.addModule(medicineSemester3module3.id);
medicineSemester3.addModule(medicineSemester3module4.id);
medicineSemester3.addModule(medicineSemester3module5.id);

const medicineSemester4 = new StudyProgramSemester();
const medicineSemester4module1 = new Module('Farmakologija I/II', 5);
const medicineSemester4module2 = new Module('Mikrobiologija II/II', 5);
const medicineSemester4module3 = new Module('Patologija I/II', 5);
const medicineSemester4module4 = new Module('Taikomoji anatomija, radiologijos pagrindai', 5);
const medicineSemester4module5 = new Module('Vidaus ligų propedeutika ir klinikinės onkologijos pagrindai II/II', 5);
medicineSemester4.addModule(medicineSemester4module1.id);
medicineSemester4.addModule(medicineSemester4module2.id);
medicineSemester4.addModule(medicineSemester4module3.id);
medicineSemester4.addModule(medicineSemester4module4.id);
medicineSemester4.addModule(medicineSemester4module5.id);

const medicineSemester5 = new StudyProgramSemester();
const medicineSemester5module1 = new Module('Akušerija', 5);
const medicineSemester5module2 = new Module('Anesteziologija ir reanimatologija; bendroji chrurgija', 5);;
const medicineSemester5module3 = new Module('Farmakologija II/II', 5);
const medicineSemester5module4 = new Module('Patologija II/II', 5);
const medicineSemester5module5 = new Module('Pulmonologija, alergologija ir klinikinė imunologija, krūtinės chirurgija I/II', 5);
const medicineSemester5module6 = new Module('Radiologij', 5);
medicineSemester5.addModule(medicineSemester5module1.id);
medicineSemester5.addModule(medicineSemester5module2.id);
medicineSemester5.addModule(medicineSemester5module3.id);
medicineSemester5.addModule(medicineSemester5module4.id);
medicineSemester5.addModule(medicineSemester5module5.id);
medicineSemester5.addModule(medicineSemester5module6.id);

const medicineSemester6 = new StudyProgramSemester();
const medicineSemester6module1 = new Module('Akių ligos', 5);
const medicineSemester6module2 = new Module('Ausų, nosies ir gerklės ligos', 5);
const medicineSemester6module3 = new Module('Bendroji pediatrija ir neonatologija I/II', 5);
const medicineSemester6module4 = new Module('Ginekologija', 5);
const medicineSemester6module5 = new Module('Pulmonologija, alergologija ir klinikinė imunologija, krūtinės chirurgija II/II', 5);
const medicineSemester6module6 = new Module('Užkrečiamos ligos ir dermatologija I/II', 5);
medicineSemester6.addModule(medicineSemester6module1.id);
medicineSemester6.addModule(medicineSemester6module2.id);
medicineSemester6.addModule(medicineSemester6module3.id);
medicineSemester6.addModule(medicineSemester6module4.id);
medicineSemester6.addModule(medicineSemester6module5.id);
medicineSemester6.addModule(medicineSemester6module6.id);

const medicineSemester7 = new StudyProgramSemester();
const medicineSemester7module1 = new Module('Bendroji pediatrija ir neonatologija II/II', 5);
const medicineSemester7module2 = new Module('Gastroenterologija ir abdominalinė chirurgija', 10);
const medicineSemester7module3 = new Module('Laboratorinė medicina', 5);
const medicineSemester7module4 = new Module('Neurologija ir neurochirurgija I/II', 5);
const medicineSemester7module5 = new Module('Užkrečiamos ligos ir dermatologija II/II', 5);
medicineSemester7.addModule(medicineSemester7module1.id);
medicineSemester7.addModule(medicineSemester7module2.id);
medicineSemester7.addModule(medicineSemester7module3.id);
medicineSemester7.addModule(medicineSemester7module4.id);
medicineSemester7.addModule(medicineSemester7module5.id);

const medicineSemester8 = new StudyProgramSemester();
const medicineSemester8module1 = new Module('Klinikinių praktinių įgūdžių formavimas II/II', 10);;
const medicineSemester8module2 = new Module('Neurologija ir neurochirurgija II/II', 5);
const medicineSemester8module3 = new Module('Širdies ir kraujagyslių ligos', 10);
const medicineSemester8module4 = new Module('Traumatologija, fizinė medicina ir reabilitacija', 5);
medicineSemester8.addModule(medicineSemester8module1.id);
medicineSemester8.addModule(medicineSemester8module2.id);
medicineSemester8.addModule(medicineSemester8module3.id);
medicineSemester8.addModule(medicineSemester8module4.id);

const medicineSemester9 = new StudyProgramSemester();
const medicineSemester9module1 = new Module('Klinikinė genetika ir bioinformatika', 5);
const medicineSemester9module2 = new Module('Nefrologija, urologija', 5);
const medicineSemester9module3 = new Module('Reumatologija, endokrinologija', 5);
const medicineSemester9module4 = new Module('Suaugusių, vaikų ir paauglių psichiatrija ir psichoterapija', 10);
const medicineSemester9module5 = new Module('Vaikų ligos ir chirurgija I/II', 5);
medicineSemester9.addModule(medicineSemester9module1.id);
medicineSemester9.addModule(medicineSemester9module2.id);
medicineSemester9.addModule(medicineSemester9module3.id);
medicineSemester9.addModule(medicineSemester9module4.id);
medicineSemester9.addModule(medicineSemester9module5.id);

const medicineSemester10 = new StudyProgramSemester();
const medicineSemester10module1 = new Module('Klinikinė farmakologija, skubi medicina', 5);
const medicineSemester10module2 = new Module('Kritinių būklių medicina, transfuziologija ir toksikologija', 5);
const medicineSemester10module3 = new Module('Medicinos etika, medicinos teisė, teismo medicina', 5);
const medicineSemester10module4 = new Module('Vaikų ligos ir chirurgija II/II', 5);
const medicineSemester10module5 = new Module('Vidaus ligos, šeimos medicina, hematologija, geriatrija', 10);
medicineSemester10.addModule(medicineSemester10module1.id);
medicineSemester10.addModule(medicineSemester10module2.id);
medicineSemester10.addModule(medicineSemester10module3.id);
medicineSemester10.addModule(medicineSemester10module4.id);
medicineSemester10.addModule(medicineSemester10module5.id);

const medicineSemester11 = new StudyProgramSemester();
const medicineSemester11module1 = new Module('Internatūra ir baigiamojo darbo rengimas I/II', 30);
medicineSemester11.addModule(medicineSemester11module1.id);

const medicineSemester12 = new StudyProgramSemester();
const medicineSemester12module1 = new Module('Internatūra ir baigiamojo darbo rengimas II/II', 20);
const medicineSemester12module2 = new Module('nternatūros egzaminas ir baigiamojo darbo gynimas', 5);
const medicineSemester12module3 = new Module('Baigiamasis egzaminas', 5);
medicineSemester12.addModule(medicineSemester12module1.id);
medicineSemester12.addModule(medicineSemester12module2.id);
medicineSemester12.addModule(medicineSemester12module3.id);

medicine.addSemester(1, medicineSemester1);
medicine.addSemester(2, medicineSemester2);
medicine.addSemester(3, medicineSemester3);
medicine.addSemester(4, medicineSemester4);
medicine.addSemester(5, medicineSemester5);
medicine.addSemester(6, medicineSemester6);
medicine.addSemester(7, medicineSemester7);
medicine.addSemester(8, medicineSemester8);
medicine.addSemester(9, medicineSemester9);
medicine.addSemester(10, medicineSemester10);
medicine.addSemester(11, medicineSemester11);
medicine.addSemester(12, medicineSemester12);

export const medicinesModules = [
  medicineSemester1module1,
  medicineSemester1module2,
  medicineSemester1module2,
  medicineSemester1module4,
  medicineSemester1module5,
  medicineSemester2module1,
  medicineSemester2module2,
  medicineSemester2module3,
  medicineSemester2module4,
  medicineSemester2module5,
  medicineSemester2module6,
  medicineSemester3module1,
  medicineSemester3module2,
  medicineSemester3module3,
  medicineSemester3module4,
  medicineSemester3module5,
  medicineSemester4module1,
  medicineSemester4module2,
  medicineSemester4module3,
  medicineSemester4module4,
  medicineSemester4module5,  
  medicineSemester5module1,
  medicineSemester5module2,
  medicineSemester5module3,
  medicineSemester5module4,
  medicineSemester5module5,
  medicineSemester5module6,
  medicineSemester6module1,
  medicineSemester6module2,
  medicineSemester6module3,
  medicineSemester6module4,
  medicineSemester6module5,
  medicineSemester6module6,
  medicineSemester7module1,
  medicineSemester7module2,
  medicineSemester7module3,
  medicineSemester7module4,
  medicineSemester7module5,
  medicineSemester8module1,
  medicineSemester8module2,
  medicineSemester8module3,
  medicineSemester8module4,
  medicineSemester9module1,
  medicineSemester9module2,
  medicineSemester9module3,
  medicineSemester9module4,
  medicineSemester9module5,
  medicineSemester10module1,
  medicineSemester10module2,
  medicineSemester10module3,
  medicineSemester10module4,
  medicineSemester10module5,
  medicineSemester11module1,
  medicineSemester12module1,
  medicineSemester12module2,
  medicineSemester12module3,
];

export default medicine;