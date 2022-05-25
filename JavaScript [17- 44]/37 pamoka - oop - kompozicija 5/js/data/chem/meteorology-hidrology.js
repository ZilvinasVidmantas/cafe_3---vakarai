import StudyProgram from '../../entities/study-program.js';
import StudyProgramSemester from '../../entities/study-program-semester.js';
import Module from '../../entities/module.js';
import { chemistryAndGeoSciencesFaculty } from '../faculties.js';

const meteorologyAndHidrology = new StudyProgram('Meteorologija ir hidrologija', chemistryAndGeoSciencesFaculty.id);

const meteorologySemester1 = new StudyProgramSemester();
const meteorologySemester1Module1 = new Module('Akademinė ir mokslinė anglų kalba C1 I/II d.', 5);
const meteorologySemester1Module2 = new Module('Hidrologijos pagrindai', 5);
const meteorologySemester1Module3 = new Module('Kartografijos pagrindai', 5);
const meteorologySemester1Module4 = new Module('Matematika', 5);
const meteorologySemester1Module5 = new Module('Meteorologijos pagrindai', 5);

meteorologySemester1.addModule(meteorologySemester1Module1.id);
meteorologySemester1.addModule(meteorologySemester1Module2.id);
meteorologySemester1.addModule(meteorologySemester1Module3.id);
meteorologySemester1.addModule(meteorologySemester1Module4.id);
meteorologySemester1.addModule(meteorologySemester1Module5.id);

const meteorologySemester2 = new StudyProgramSemester();
const meteorologySemester2Module1 = new Module('Akademinė ir mokslinė anglų kalba C1 II/II d.', 5);
const meteorologySemester2Module2 = new Module('Fizika', 5);
const meteorologySemester2Module3 = new Module('GIS pagrindai', 5);
const meteorologySemester2Module4 = new Module('Hidrochemija', 5);
const meteorologySemester2Module5 = new Module('Hidrometrija ir hidrologijos mokomoji praktika', 10);
const meteorologySemester2Module6 = new Module('Matematinės statistikos metodai gamtos moksluose', 5);

meteorologySemester2.addModule(meteorologySemester2Module1.id);
meteorologySemester2.addModule(meteorologySemester2Module2.id);
meteorologySemester2.addModule(meteorologySemester2Module3.id);
meteorologySemester2.addModule(meteorologySemester2Module4.id);
meteorologySemester2.addModule(meteorologySemester2Module5.id);
meteorologySemester2.addModule(meteorologySemester2Module6.id);

const meteorologySemester3 = new StudyProgramSemester();
const meteorologySemester3Module1 = new Module('Atmosferos chemija', 5);
const meteorologySemester3Module2 = new Module('Bendroji geologija', 5);
const meteorologySemester3Module3 = new Module('Lietuvos vandenų geografija', 5);
const meteorologySemester3Module4 = new Module('Programavimo ir duomenų analizės įvadas', 5);

meteorologySemester3.addModule(meteorologySemester3Module1.id);
meteorologySemester3.addModule(meteorologySemester3Module2.id);
meteorologySemester3.addModule(meteorologySemester3Module3.id);
meteorologySemester3.addModule(meteorologySemester3Module4.id);

const meteorologySemester4 = new StudyProgramSemester();
const meteorologySemester4Module1 = new Module('Hidrologinio prognozavimo metodai', 5);
const meteorologySemester4Module2 = new Module('Meteometrija ir meteorologijos mokomoji praktika', 10);
const meteorologySemester4Module3 = new Module('Sinoptinės meteorologijos pagrindai', 10);

meteorologySemester4.addModule(meteorologySemester4Module1.id);
meteorologySemester4.addModule(meteorologySemester4Module2.id);
meteorologySemester4.addModule(meteorologySemester4Module3.id);

const meteorologySemester5 = new StudyProgramSemester();
const meteorologySemester5Module1 = new Module('Aplinkos modeliavimo pagrindai', 5);
const meteorologySemester5Module2 = new Module('Dinaminės meteorologijos pagrindai ir orų prognozavimas', 5);
const meteorologySemester5Module3 = new Module('Distanciniai metodai hidrometeorologijoje', 5);
const meteorologySemester5Module4 = new Module('Specializuota meteorologinė informacija', 5);

meteorologySemester5.addModule(meteorologySemester5Module1.id);
meteorologySemester5.addModule(meteorologySemester5Module2.id);
meteorologySemester5.addModule(meteorologySemester5Module3.id);
meteorologySemester5.addModule(meteorologySemester5Module4.id);

const meteorologySemester6 = new StudyProgramSemester();
const meteorologySemester6Module1 = new Module('Klimatologija', 10);
const meteorologySemester6Module2 = new Module('Okeanografija I/II d.', 5);
const meteorologySemester6Module3 = new Module('Taikomieji Žemės stebėjimai iš kosmoso', 5);

meteorologySemester6.addModule(meteorologySemester6Module1.id);
meteorologySemester6.addModule(meteorologySemester6Module2.id);
meteorologySemester6.addModule(meteorologySemester6Module3.id);

const meteorologySemester7 = new StudyProgramSemester();
const meteorologySemester7Module1 = new Module('Lietuvos klimatas', 5);
const meteorologySemester7Module2 = new Module('Okeanografija II/II d.', 5);
const meteorologySemester7Module3 = new Module('Profesinė praktika', 5);
const meteorologySemester7Module4 = new Module('Taikomoji hidrologija', 5);
const meteorologySemester7Module5 = new Module('Taikomoji meteorologija', 5);
const meteorologySemester7Module6 = new Module('Urbanizuotų teritorijų klimatas', 5);

meteorologySemester7.addModule(meteorologySemester7Module1.id);
meteorologySemester7.addModule(meteorologySemester7Module2.id);
meteorologySemester7.addModule(meteorologySemester7Module3.id);
meteorologySemester7.addModule(meteorologySemester7Module4.id);
meteorologySemester7.addModule(meteorologySemester7Module5.id);
meteorologySemester7.addModule(meteorologySemester7Module6.id);

const meteorologySemester8 = new StudyProgramSemester();
const meteorologySemester8Module1 = new Module('Bakalauro baigiamasis darbas (kryptis: gamtinė geografija)', 10);
const meteorologySemester8Module2 = new Module('Bakalauro darbo projektas', 5);
const meteorologySemester8Module3 = new Module('Ežerotyra', 5);
const meteorologySemester8Module4 = new Module('Geografinė komunikacija', 5);
const meteorologySemester8Module5 = new Module('Klimato kaitos valdymas', 5);

meteorologySemester8.addModule(meteorologySemester8Module1.id);
meteorologySemester8.addModule(meteorologySemester8Module2.id);
meteorologySemester8.addModule(meteorologySemester8Module3.id);
meteorologySemester8.addModule(meteorologySemester8Module4.id);
meteorologySemester8.addModule(meteorologySemester8Module5.id);

meteorologyAndHidrology.addSemester(1, meteorologySemester1);
meteorologyAndHidrology.addSemester(2, meteorologySemester2);
meteorologyAndHidrology.addSemester(3, meteorologySemester3);
meteorologyAndHidrology.addSemester(4, meteorologySemester4);
meteorologyAndHidrology.addSemester(5, meteorologySemester5);
meteorologyAndHidrology.addSemester(6, meteorologySemester6);
meteorologyAndHidrology.addSemester(7, meteorologySemester7);
meteorologyAndHidrology.addSemester(8, meteorologySemester8);

export const meteorologyAndHidrologyModules = [
    meteorologySemester1Module1,
    meteorologySemester1Module2,
    meteorologySemester1Module3,
    meteorologySemester1Module4,
    meteorologySemester1Module5,
    meteorologySemester2Module1,
    meteorologySemester2Module2,
    meteorologySemester2Module3,
    meteorologySemester2Module4,
    meteorologySemester2Module5,
    meteorologySemester2Module6,
    meteorologySemester3Module1,
    meteorologySemester3Module2,
    meteorologySemester3Module3,
    meteorologySemester3Module4,
    meteorologySemester4Module1,
    meteorologySemester4Module2,
    meteorologySemester4Module3,
    meteorologySemester5Module1,
    meteorologySemester5Module2,
    meteorologySemester5Module3,
    meteorologySemester5Module4,
    meteorologySemester6Module1,
    meteorologySemester6Module2,
    meteorologySemester6Module3,
    meteorologySemester7Module1,
    meteorologySemester7Module2,
    meteorologySemester7Module3,
    meteorologySemester7Module4,
    meteorologySemester7Module5,
    meteorologySemester7Module6,
    meteorologySemester8Module1,
    meteorologySemester8Module2,
    meteorologySemester8Module3,
    meteorologySemester8Module4,
    meteorologySemester8Module5,
];

export default meteorologyAndHidrology;
