import softwareSystems from './data/info/software-systems.js';
import Student from './entities/student.js';

const studentsInfoSoftwareSystems = [
  new Student('Apsas', 'Rekvestenis', softwareSystems.id),
  new Student('Skaitiklis', 'Pliusauskas', softwareSystems.id),
  new Student('Bekas', 'Serversaidas', softwareSystems.id),
  new Student('Frontas', 'Klijentauskas', softwareSystems.id),
  new Student('Kompiuterė', 'Komplailerytė', softwareSystems.id),
];

/*
  1. Sukurkite 5 studentus priskiriant jiems studijų programą

  2. Student klasėje aprašykite metodą <assingStudyProgram>, kad:
    * studento savybėje Student.semesters atsirastų visi semestrai išvardinti studijų programoje, perdarant kiekvieną semestro StudyProgramSemester.modules savybę kaip StudentModule klasės objektą. Kiekvienam kuriamam StudentModule objektui perduokite atitinkamą modulio ID raktą 

  Atlike darbus, atspausdinkite rezultatus taip, kad matytūsi teisingai atlikta užduotis.
*/

console.log(studentsInfoSoftwareSystems);
