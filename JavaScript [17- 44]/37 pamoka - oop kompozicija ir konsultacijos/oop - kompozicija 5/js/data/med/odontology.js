import StudyProgram from '../../entities/study-program.js';
import StudyProgramSemester from '../../entities/study-program-semester.js';
import Module from '../../entities/module.js';
import { medicineFaculty } from '../faculties.js';

const odontology = new StudyProgram('Odontologija', medicineFaculty.id);

const odontologySemester1 = new StudyProgramSemester();
const odontologySemester1Module1 = new Module('Biochemija', 5);
const odontologySemester1Module2 = new Module('Lotynų kalba ir specialybės kalba', 5);
const odontologySemester1Module3 = new Module('Žmogaus anatomija I/II d.', 5);
const odontologySemester1Module4 = new Module('Žmogaus biologija ir genetikos pagrindai odontologijoje', 10);
const odontologySemester1Module5 = new Module('Žmogaus histologija', 5);
odontologySemester1.addModule(odontologySemester1Module1.id);
odontologySemester1.addModule(odontologySemester1Module2.id);
odontologySemester1.addModule(odontologySemester1Module3.id);
odontologySemester1.addModule(odontologySemester1Module4.id);
odontologySemester1.addModule(odontologySemester1Module5.id);

const odontologySemester2 = new StudyProgramSemester();
const odontologySemester2Module1 = new Module('Mikrobiologijos pagrindai. Burnos ekosistema', 10);
const odontologySemester2Module2 = new Module('Odontologijos raida. Odontologinės priežiūros teisė, vadyba. Etika', 5);
const odontologySemester2Module3 = new Module('Visuomenės ir burnos sveikata', 5);
const odontologySemester2Module4 = new Module('Žmogaus anatomija II/II d.', 5);
const odontologySemester2Module5 = new Module('Žmogaus fiziologija', 5);
odontologySemester2.addModule(odontologySemester2Module1.id);
odontologySemester2.addModule(odontologySemester2Module2.id);
odontologySemester2.addModule(odontologySemester2Module3.id);
odontologySemester2.addModule(odontologySemester2Module4.id);
odontologySemester2.addModule(odontologySemester2Module5.id);

const odontologySemester3 = new StudyProgramSemester();
const odontologySemester3Module1 = new Module('Dantų ir burnos ligų diagnostikos ir gydymo pagrindai I/VI d.', 15);
const odontologySemester3Module2 = new Module('Patologijos pagrindai', 10);
const odontologySemester3Module3 = new Module('Profesinio bendravimo ir psichosomatikos pagrindai. Psichiatrija.', 5);
odontologySemester3.addModule(odontologySemester3Module1.id);
odontologySemester3.addModule(odontologySemester3Module2.id);
odontologySemester3.addModule(odontologySemester3Module3.id);

const odontologySemester4 = new StudyProgramSemester();
const odontologySemester4Module1 = new Module('Dantų ir burnos ligų diagnostikos ir gydymo pagrindai II/VI d.', 15);
const odontologySemester4Module2 = new Module('Farmakologija. Klinikinė farmakologija. Laboratorinė medicina', 5);
const odontologySemester4Module3 = new Module('Radiologijos pagrindai: bendroji ir odontologinė radiologija', 5);
const odontologySemester4Module4 = new Module('Užkrečiamos ligos ir dermatologija', 5);
odontologySemester4.addModule(odontologySemester4Module1.id);
odontologySemester4.addModule(odontologySemester4Module2.id);
odontologySemester4.addModule(odontologySemester4Module3.id);
odontologySemester4.addModule(odontologySemester4Module4.id);

const odontologySemester5 = new StudyProgramSemester();
const odontologySemester5Module1 = new Module('Anesteziologijos ir reanimatologijos pagrindai. Pirmoji pagalba.', 5);
const odontologySemester5Module2 = new Module('Burnos chirurgija I/III d.', 5);
const odontologySemester5Module3 = new Module('Dantų ir burnos ligų diagnostikos ir gydymo pagrindai III/VI d.', 10);
const odontologySemester5Module4 = new Module('Ortopedinė odontologija I/IV d.', 5);
const odontologySemester5Module5 = new Module('Vaikų ligų diagnostikos ir gydymo pagrindai', 5);
odontologySemester5.addModule(odontologySemester5Module1.id);
odontologySemester5.addModule(odontologySemester5Module2.id);
odontologySemester5.addModule(odontologySemester5Module3.id);
odontologySemester5.addModule(odontologySemester5Module4.id);
odontologySemester5.addModule(odontologySemester5Module5.id);

const odontologySemester6 = new StudyProgramSemester();
const odontologySemester6Module1 = new Module('Burnos chirurgija II/III d.', 5);
const odontologySemester6Module2 = new Module('Dantų ir burnos ligų diagnostikos ir gydymo pagrindai IV/VI d.', 10);
const odontologySemester6Module3 = new Module('Neurologijos pagrindai', 5);
const odontologySemester6Module4 = new Module('Ortopedinė odontologija II/IV d.', 5);
const odontologySemester6Module5 = new Module('Vidaus ligų propedeutika ir vidaus ligos', 5);
odontologySemester6.addModule(odontologySemester6Module1.id);
odontologySemester6.addModule(odontologySemester6Module2.id);
odontologySemester6.addModule(odontologySemester6Module3.id);
odontologySemester6.addModule(odontologySemester6Module4.id);
odontologySemester6.addModule(odontologySemester6Module5.id);

const odontologySemester7 = new StudyProgramSemester();
const odontologySemester7Module1 = new Module('Burnos chirurgija III/III d.', 5);
const odontologySemester7Module2 = new Module('Dantų ir burnos ligų diagnostikos ir gydymo pagrindai V/VI d.', 10);
const odontologySemester7Module3 = new Module('Mokslo tiriamojo darbo pagrindai ir rengimas I/III d.', 5);
const odontologySemester7Module4 = new Module('Ortopedinė odontologija III/IV d.', 5);
odontologySemester7.addModule(odontologySemester7Module1.id);
odontologySemester7.addModule(odontologySemester7Module2.id);
odontologySemester7.addModule(odontologySemester7Module3.id);
odontologySemester7.addModule(odontologySemester7Module4.id);

const odontologySemester8 = new StudyProgramSemester();
const odontologySemester8Module1 = new Module('Dantų ir burnos ligų diagnostikos ir gydymo pagrindai VI/VI d.', 10);
const odontologySemester8Module2 = new Module('Mokslo tiriamojo darbo pagrindai ir rengimas II/III d.', 5);
const odontologySemester8Module3 = new Module('Ortodontija', 5);
const odontologySemester8Module4 = new Module('Ortopedinė odontologija IV/IV d.', 5);
const odontologySemester8Module5 = new Module('Veido ir žandikaulių chirurgijos pagrindai. Ausų, nosies ir gerklės ligos.', 5);
odontologySemester8.addModule(odontologySemester8Module1.id);
odontologySemester8.addModule(odontologySemester8Module2.id);
odontologySemester8.addModule(odontologySemester8Module3.id);
odontologySemester8.addModule(odontologySemester8Module4.id);
odontologySemester8.addModule(odontologySemester8Module5.id);

const odontologySemester9 = new StudyProgramSemester();
const odontologySemester9Module1 = new Module('Mokslo tiriamojo darbo pagrindai ir rengimas III/III d.', 5);
const odontologySemester9Module2 = new Module('Stomatognatinės sistemos ligų kompleksinio gydymo planavimas', 25);
odontologySemester9.addModule(odontologySemester9Module1.id);
odontologySemester9.addModule(odontologySemester9Module2.id);

const odontologySemester10 = new StudyProgramSemester();
const odontologySemester10Module1 = new Module('Baigiamasis egzaminas', 5);
const odontologySemester10Module2 = new Module('Internatūra', 20);
const odontologySemester10Module3 = new Module('Magistro baigiamasis darbas (kryptis: odontologija)', 5);
odontologySemester10.addModule(odontologySemester10Module1.id);
odontologySemester10.addModule(odontologySemester10Module2.id);
odontologySemester10.addModule(odontologySemester10Module3.id);

odontology.addSemester(1, odontologySemester1);
odontology.addSemester(2, odontologySemester2);
odontology.addSemester(3, odontologySemester3);
odontology.addSemester(4, odontologySemester4);
odontology.addSemester(5, odontologySemester5);
odontology.addSemester(6, odontologySemester6);
odontology.addSemester(7, odontologySemester7);
odontology.addSemester(8, odontologySemester8);
odontology.addSemester(9, odontologySemester9);
odontology.addSemester(10, odontologySemester10);

export const odontologyModules = [
  odontologySemester1Module1,
  odontologySemester1Module2,
  odontologySemester1Module3,
  odontologySemester1Module4,
  odontologySemester1Module5,
  odontologySemester2Module1,
  odontologySemester2Module2,
  odontologySemester2Module3,
  odontologySemester2Module4,
  odontologySemester2Module5,
  odontologySemester3Module1,
  odontologySemester3Module2,
  odontologySemester3Module3,
  odontologySemester4Module1,
  odontologySemester4Module2,
  odontologySemester4Module3,
  odontologySemester4Module4,
  odontologySemester5Module1,
  odontologySemester5Module2,
  odontologySemester5Module3,
  odontologySemester5Module4,
  odontologySemester5Module5,
  odontologySemester6Module1,
  odontologySemester6Module2,
  odontologySemester6Module3,
  odontologySemester6Module4,
  odontologySemester6Module5,
  odontologySemester7Module1,
  odontologySemester7Module2,
  odontologySemester7Module3,
  odontologySemester7Module4,
  odontologySemester8Module1,
  odontologySemester8Module2,
  odontologySemester8Module3,
  odontologySemester8Module4,
  odontologySemester8Module5,
  odontologySemester9Module1,
  odontologySemester9Module2,
  odontologySemester10Module1,
  odontologySemester10Module2,
  odontologySemester10Module3,
];

export default odontology;
