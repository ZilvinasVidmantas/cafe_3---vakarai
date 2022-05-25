import StudyProgram from '../../entities/study-program.js';
import StudyProgramSemester from '../../entities/study-program-semester.js';
import Module from '../../entities/module.js';
import { medicineFaculty } from '../faculties.js';

const occupationalTherapy = new StudyProgram('Ergoterapija', medicineFaculty.id);

const occupationalTherapySemester1 = new StudyProgramSemester();
const occupationalTherapySemester1module1 = new Module('Dalykinė anglų kalba C1', 5);
const occupationalTherapySemester1module2 = new Module('Ergoterapijos istorija ir filosofija', 5);
const occupationalTherapySemester1module3 = new Module('Funkcinė anatomija I/II d.', 10);
const occupationalTherapySemester1module4 = new Module('Psichologijos pagrindai', 5);
const occupationalTherapySemester1module5 = new Module('Žmogus, veikla ir aplinka', 5);
occupationalTherapySemester1.addModule(occupationalTherapySemester1module1.id);
occupationalTherapySemester1.addModule(occupationalTherapySemester1module2.id);
occupationalTherapySemester1.addModule(occupationalTherapySemester1module3.id);
occupationalTherapySemester1.addModule(occupationalTherapySemester1module4.id);
occupationalTherapySemester1.addModule(occupationalTherapySemester1module5.id);

const occupationalTherapySemester2 = new StudyProgramSemester();
const occupationalTherapySemester2module1 = new Module('Ergoterapijos teorijos ir modeliai', 5);
const occupationalTherapySemester2module2 = new Module('Funkcinė anatomija II/II d.', 5);
const occupationalTherapySemester2module3 = new Module('Psichosocialinė prieiga ir medicinos etika', 5);
const occupationalTherapySemester2module4 = new Module('Reabilitacijos priemonės', 5);
const occupationalTherapySemester2module5 = new Module('Žmogaus fiziologija', 5);
occupationalTherapySemester2.addModule(occupationalTherapySemester2module1.id);
occupationalTherapySemester2.addModule(occupationalTherapySemester2module2.id);
occupationalTherapySemester2.addModule(occupationalTherapySemester2module3.id);
occupationalTherapySemester2.addModule(occupationalTherapySemester2module4.id);
occupationalTherapySemester2.addModule(occupationalTherapySemester2module5.id);

const occupationalTherapySemester3 = new StudyProgramSemester();
const occupationalTherapySemester3module1 = new Module('Ištyrimo principai ergoterapijoje I/II d.', 5);
const occupationalTherapySemester3module2 = new Module('Motorinės kontrolės raida', 5);
const occupationalTherapySemester3module3 = new Module('Patologinės būklės, diagnostika ir gydymas', 5);
const occupationalTherapySemester3module4 = new Module('Pirmoji medicininė pagalba ir slaugos pagrindai', 5);
const occupationalTherapySemester3module5 = new Module('Profesinė praktika I/VI d.', 5);
occupationalTherapySemester3.addModule(occupationalTherapySemester3module1.id);
occupationalTherapySemester3.addModule(occupationalTherapySemester3module2.id);
occupationalTherapySemester3.addModule(occupationalTherapySemester3module3.id);
occupationalTherapySemester3.addModule(occupationalTherapySemester3module4.id);
occupationalTherapySemester3.addModule(occupationalTherapySemester3module5.id);

const occupationalTherapySemester4 = new StudyProgramSemester();
const occupationalTherapySemester4module1 = new Module('Ergonomika', 5);
const occupationalTherapySemester4module2 = new Module('Ergoterapija vaikams ir paaugliams', 5);
const occupationalTherapySemester4module3 = new Module('Ištyrimo principai ergoterapijoje II/II d.', 5);
const occupationalTherapySemester4module4 = new Module('Kompensacinės priemonės ir universali aplinka', 5);
const occupationalTherapySemester4module5 = new Module('Profesinė praktika II/VI d.', 5);
occupationalTherapySemester4.addModule(occupationalTherapySemester4module1.id);
occupationalTherapySemester4.addModule(occupationalTherapySemester4module2.id);
occupationalTherapySemester4.addModule(occupationalTherapySemester4module3.id);
occupationalTherapySemester4.addModule(occupationalTherapySemester4module4.id);
occupationalTherapySemester4.addModule(occupationalTherapySemester4module5.id);

const occupationalTherapySemester5 = new StudyProgramSemester();
const occupationalTherapySemester5module1 = new Module('Ergoterapija darbingo amžiaus žmonėms I/II d.', 5);
const occupationalTherapySemester5module2 = new Module('Ergoterapija senyvo amžiaus žmonėms', 5);
const occupationalTherapySemester5module3 = new Module('Neįgaliųjų integracija', 5);
const occupationalTherapySemester5module4 = new Module('Profesinė praktika III/VI d.', 10);
occupationalTherapySemester5.addModule(occupationalTherapySemester5module1.id);
occupationalTherapySemester5.addModule(occupationalTherapySemester5module2.id);
occupationalTherapySemester5.addModule(occupationalTherapySemester5module3.id);
occupationalTherapySemester5.addModule(occupationalTherapySemester5module4.id);

const occupationalTherapySemester6 = new StudyProgramSemester();
const occupationalTherapySemester6module1 = new Module('Ergoterapija darbingo amžiaus žmonėms II/II d.', 5);
const occupationalTherapySemester6module2 = new Module('Fizinis aktyvumas, rekreacija ir ergoterapija bendruomenėje', 5);
const occupationalTherapySemester6module3 = new Module('Profesinė praktika IV/VI d.', 10);
const occupationalTherapySemester6module4 = new Module('Psichikos sutrikimai ir ergoterapijos veiklos', 5);
occupationalTherapySemester6.addModule(occupationalTherapySemester6module1.id);
occupationalTherapySemester6.addModule(occupationalTherapySemester6module2.id);
occupationalTherapySemester6.addModule(occupationalTherapySemester6module3.id);
occupationalTherapySemester6.addModule(occupationalTherapySemester6module4.id);

const occupationalTherapySemester7 = new StudyProgramSemester();
const occupationalTherapySemester7module1 = new Module('Biostatistika', 5);
const occupationalTherapySemester7module2 = new Module('Mokslinių tyrimų pagrindai', 5);
const occupationalTherapySemester7module3 = new Module('Profesinė praktika V/VI d.', 15);
const occupationalTherapySemester7module4 = new Module('Ugdymo teorijos ir metodai reabilitacijoje', 5);
occupationalTherapySemester7.addModule(occupationalTherapySemester7module1.id);
occupationalTherapySemester7.addModule(occupationalTherapySemester7module2.id);
occupationalTherapySemester7.addModule(occupationalTherapySemester7module3.id);
occupationalTherapySemester7.addModule(occupationalTherapySemester7module4.id);

const occupationalTherapySemester8 = new StudyProgramSemester();
const occupationalTherapySemester8module1 = new Module('Bakalauro baigiamasis darbas (kryptis: reabilitacija)', 15);
const occupationalTherapySemester8module2 = new Module('Profesinė praktika VI/VI d.', 15);
occupationalTherapySemester8.addModule(occupationalTherapySemester8module1.id);
occupationalTherapySemester8.addModule(occupationalTherapySemester8module2.id);

occupationalTherapy.addSemester(1, occupationalTherapySemester1);
occupationalTherapy.addSemester(2, occupationalTherapySemester2);
occupationalTherapy.addSemester(3, occupationalTherapySemester3);
occupationalTherapy.addSemester(4, occupationalTherapySemester4);
occupationalTherapy.addSemester(5, occupationalTherapySemester5);
occupationalTherapy.addSemester(6, occupationalTherapySemester6);
occupationalTherapy.addSemester(7, occupationalTherapySemester7);
occupationalTherapy.addSemester(8, occupationalTherapySemester8);

export const occupationalTherapyModules = [
    occupationalTherapySemester1module1,
    occupationalTherapySemester1module2,
    occupationalTherapySemester1module3,
    occupationalTherapySemester1module4,
    occupationalTherapySemester1module5,

    occupationalTherapySemester2module1,
    occupationalTherapySemester2module2,
    occupationalTherapySemester2module3,
    occupationalTherapySemester2module4,
    occupationalTherapySemester2module5,

    occupationalTherapySemester3module1,
    occupationalTherapySemester3module2,
    occupationalTherapySemester3module3,
    occupationalTherapySemester3module4,
    occupationalTherapySemester3module5,

    occupationalTherapySemester4module1,
    occupationalTherapySemester4module2,
    occupationalTherapySemester4module3,
    occupationalTherapySemester4module4,
    occupationalTherapySemester4module5,

    occupationalTherapySemester5module1,
    occupationalTherapySemester5module2,
    occupationalTherapySemester5module3,
    occupationalTherapySemester5module4,

    occupationalTherapySemester6module1,
    occupationalTherapySemester6module2,
    occupationalTherapySemester6module3,
    occupationalTherapySemester6module4,

    occupationalTherapySemester7module1,
    occupationalTherapySemester7module2,
    occupationalTherapySemester7module3,
    occupationalTherapySemester7module4,

    occupationalTherapySemester8module1,
    occupationalTherapySemester8module2,
];

export default occupationalTherapy;
