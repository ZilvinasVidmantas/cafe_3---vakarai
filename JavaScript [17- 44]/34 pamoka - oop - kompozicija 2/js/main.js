import softwareSystems from './data/info/software-systems.js';
import modules from './data/modules.js'
import Student from './entities/student.js';

const studentsInfoSoftwareSystems = [
  new Student('Apsas', 'Rekvestenis', softwareSystems.id),
  new Student('Skaitiklis', 'Pliusauskas', softwareSystems.id),
  new Student('Bekas', 'Serversaidas', softwareSystems.id),
  new Student('Frontas', 'Klijentauskas', softwareSystems.id),
  new Student('Kompiuterė', 'Komplailerytė', softwareSystems.id),
];

/*
  aplanke 'data/' sukurkite failą 'modules.js'
    * šiame faile importuokite <softwareSystemsModules> iš failo 'data/info/software-systems.js'
    * sukurkite masyvą <modules>
    * į masyvą <modules> įdėkite <softwareSystemsModules>
    * eksportuokite masyvą <modules>
    
  'main.js' (šiame) faile
    * importuokite <modules> iš failo 'modules.js'
    * atspausdinkite naudodami <console.table>
*/

console.table(modules);

