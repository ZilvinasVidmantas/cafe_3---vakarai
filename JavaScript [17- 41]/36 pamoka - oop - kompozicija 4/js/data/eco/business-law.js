import StudyProgram from "../../entities/study-program.js";
import StudyProgramSemester from "../../entities/study-program-semester.js";
import Module from "../../entities/module.js";
import { economicsAndBusinessFaculty } from "../faculties.js";

const businessAndLaw = new StudyProgram(
  "Verslas ir teisė",
  economicsAndBusinessFaculty.id
);

const businessAndLawSemester1 = new StudyProgramSemester();
const businessAndLawSemester1module1 = new Module("Dalykinė anglų kalba C1", 5);
const businessAndLawSemester1module2 = new Module("Ekonomikos teorija", 5);
const businessAndLawSemester1module3 = new Module("Įvadas į teisinę sistemą", 5);
const businessAndLawSemester1module4 = new Module("Vadyba", 5);
const businessAndLawSemester1module5 = new Module(
  "Valstybės valdžios institucijų veiklos teisiniai pagrindai",
  5
);

businessAndLawSemester1.addModule(businessAndLawSemester1module1.id);
businessAndLawSemester1.addModule(businessAndLawSemester1module2.id);
businessAndLawSemester1.addModule(businessAndLawSemester1module3.id);
businessAndLawSemester1.addModule(businessAndLawSemester1module4.id);
businessAndLawSemester1.addModule(businessAndLawSemester1module5.id);

const businessAndLawSemester2 = new StudyProgramSemester();
const businessAndLawSemester2module1 = new Module("Apskaitos pagrindai", 5);
const businessAndLawSemester2module2 = new Module(
  "Civilinės teisės bendroji dalis",
  5
);
const businessAndLawSemester2module3 = new Module("Informacinės technologijos", 5);
const businessAndLawSemester2module4 = new Module("Rinkodara", 5);
const businessAndLawSemester2module5 = new Module("Verslo statistika", 5);
businessAndLawSemester2.addModule(businessAndLawSemester2module1.id);
businessAndLawSemester2.addModule(businessAndLawSemester2module2.id);
businessAndLawSemester2.addModule(businessAndLawSemester2module3.id);
businessAndLawSemester2.addModule(businessAndLawSemester2module4.id);
businessAndLawSemester2.addModule(businessAndLawSemester2module5.id);

const businessAndLawSemester3 = new StudyProgramSemester();
const businessAndLawSemester3module1 = new Module(
  "Įmonių finansų pagrindai",
  5
);
const businessAndLawSemester3module2 = new Module("Naujo verslo kūrimas", 5);
const businessAndLawSemester3module3 = new Module(
  "Organizacijų socialinė atsakomybė ir etika",
  5
);
const businessAndLawSemester3module4 = new Module(
  "Prievolių teisė: bendroji dalis",
  5
);
const businessAndLawSemester3module5 = new Module(
  "Sumani ekonomika ir naujos vertės kūrimas",
  5
);
businessAndLawSemester3.addModule(businessAndLawSemester3module1.id);
businessAndLawSemester3.addModule(businessAndLawSemester3module2.id);
businessAndLawSemester3.addModule(businessAndLawSemester3module3.id);
businessAndLawSemester3.addModule(businessAndLawSemester3module4.id);
businessAndLawSemester3.addModule(businessAndLawSemester3module5.id);

const businessAndLawSemester4 = new StudyProgramSemester();
const businessAndLawSemester4module1 = new Module("Globalus verslas", 5);
const businessAndLawSemester4module2 = new Module("Inovacijų valdymas", 5);
const businessAndLawSemester4module3 = new Module("Logistika", 5);
const businessAndLawSemester4module4 = new Module("Personalo vadyba", 5);
const businessAndLawSemester4module5 = new Module(
  "Prievolių teisė: sutarčių ir deliktų teisė",
  5
);
businessAndLawSemester4.addModule(businessAndLawSemester4module1.id);
businessAndLawSemester4.addModule(businessAndLawSemester4module2.id);
businessAndLawSemester4.addModule(businessAndLawSemester4module3.id);
businessAndLawSemester4.addModule(businessAndLawSemester4module4.id);
businessAndLawSemester4.addModule(businessAndLawSemester4module5.id);

const businessAndLawSemester5 = new StudyProgramSemester();
const businessAndLawSemester5module1 = new Module(
  "Ekonominės veiklos teisinės formos ir bendrovių teisė",
  5
);
const businessAndLawSemester5module2 = new Module("Mokesčių teisė", 5);
const businessAndLawSemester5module3 = new Module("Projektų valdymas", 5);
const businessAndLawSemester5module4 = new Module("Valdymo apskaita", 5);
const businessAndLawSemester5module5 = new Module("Verslo strategijos", 5);
businessAndLawSemester5.addModule(businessAndLawSemester5module1.id);
businessAndLawSemester5.addModule(businessAndLawSemester5module2.id);
businessAndLawSemester5.addModule(businessAndLawSemester5module3.id);
businessAndLawSemester5.addModule(businessAndLawSemester5module4.id);
businessAndLawSemester5.addModule(businessAndLawSemester5module5.id);

const businessAndLawSemester6 = new StudyProgramSemester();
const businessAndLawSemester6module1 = new Module(
  "Darbo ir socialinės apsaugos teisė",
  5
);
const businessAndLawSemester6module2 = new Module(
  "Finansų rinkos ir vertybiniai popieriai",
  5
);
const businessAndLawSemester6module3 = new Module(
  "Lyderystė ir komunikacija",
  5
);
const businessAndLawSemester6module4 = new Module(
  "Teisinė atsakomybė už ekonominės veiklos pažeidimus",
  5
);
const businessAndLawSemester6module5 = new Module("Verslo rizikos valdymas", 5);
businessAndLawSemester6.addModule(businessAndLawSemester6module1.id);
businessAndLawSemester6.addModule(businessAndLawSemester6module2.id);
businessAndLawSemester6.addModule(businessAndLawSemester6module3.id);
businessAndLawSemester6.addModule(businessAndLawSemester6module4.id);
businessAndLawSemester6.addModule(businessAndLawSemester6module5.id);

const businessAndLawSemester7 = new StudyProgramSemester();
const businessAndLawSemester7module1 = new Module(
  "Finansų rinkų teisinis reguliavimas",
  5
);
const businessAndLawSemester7module2 = new Module("Intelektinė nuosavybė", 5);
const businessAndLawSemester7module3 = new Module("Kursinis darbas", 5);
const businessAndLawSemester7module4 = new Module(
  "Teisiniai ginčų sprendimo būdai",
  5
);
const businessAndLawSemester7module5 = new Module("Verslo tyrimai", 5);
businessAndLawSemester7.addModule(businessAndLawSemester7module1.id);
businessAndLawSemester7.addModule(businessAndLawSemester7module2.id);
businessAndLawSemester7.addModule(businessAndLawSemester7module3.id);
businessAndLawSemester7.addModule(businessAndLawSemester7module4.id);
businessAndLawSemester7.addModule(businessAndLawSemester7module5.id);

const businessAndLawSemester8 = new StudyProgramSemester();
const businessAndLawSemester8module1 = new Module(
  "Bakalauro baigiamasis darbas (kryptis: verslas)",
  15
);
const businessAndLawSemester8module2 = new Module("Profesinė praktika", 15);
businessAndLawSemester8.addModule(businessAndLawSemester8module1.id);
businessAndLawSemester8.addModule(businessAndLawSemester8module2.id);

businessAndLaw.addSemester(1, businessAndLawSemester1);
businessAndLaw.addSemester(2, businessAndLawSemester2);
businessAndLaw.addSemester(3, businessAndLawSemester3);
businessAndLaw.addSemester(4, businessAndLawSemester4);
businessAndLaw.addSemester(5, businessAndLawSemester5);
businessAndLaw.addSemester(6, businessAndLawSemester6);
businessAndLaw.addSemester(7, businessAndLawSemester7);
businessAndLaw.addSemester(8, businessAndLawSemester8);

export const economicsAndBusinessModules = [
  businessAndLawSemester1module1,
  businessAndLawSemester1module2,
  businessAndLawSemester1module3,
  businessAndLawSemester1module4,
  businessAndLawSemester1module5,
  businessAndLawSemester2module1,
  businessAndLawSemester2module2,
  businessAndLawSemester2module3,
  businessAndLawSemester2module4,
  businessAndLawSemester2module5,
  businessAndLawSemester3module1,
  businessAndLawSemester3module2,
  businessAndLawSemester3module3,
  businessAndLawSemester3module4,
  businessAndLawSemester3module5,
  businessAndLawSemester4module1,
  businessAndLawSemester4module2,
  businessAndLawSemester4module3,
  businessAndLawSemester4module4,
  businessAndLawSemester4module5,
  businessAndLawSemester5module1,
  businessAndLawSemester5module2,
  businessAndLawSemester5module3,
  businessAndLawSemester5module4,
  businessAndLawSemester5module5,
  businessAndLawSemester6module1,
  businessAndLawSemester6module2,
  businessAndLawSemester6module3,
  businessAndLawSemester6module4,
  businessAndLawSemester6module5,
  businessAndLawSemester7module1,
  businessAndLawSemester7module2,
  businessAndLawSemester7module3,
  businessAndLawSemester7module4,
  businessAndLawSemester7module5,
  businessAndLawSemester8module1,
  businessAndLawSemester8module2,
];

export default businessAndLaw;
