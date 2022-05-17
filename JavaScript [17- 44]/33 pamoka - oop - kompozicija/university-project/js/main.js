import { studyPrograms, modules } from './data.js';

/*
  Pagal entities/student.js failą, išekportuokite klases visuose 'entities/' aplanko failuose

  Faile 'data.js':
    * Sukurti fakultetus 2
    * Sukurti po 1 studijų programą kiekvienam fakultetui
    * Sukurti semestrus naudojant sukurtus modulius
    * Priskirti semestrus studijų programoms
  
  Faile 'main.js':
    * Sukurti po 3 studentus kiekvienai Studijų programai
      * Sukuriant studentą, suformuokite semestrus pagal studijų programą, bet
        semestrų moduliams panaudokite ActiveModule klasę

  Visus modulius 

  Informatikos ir Matematikos fakultetas:
    Agnė Manaikaitė - https://www.vu.lt/studijos/stojantiesiems/bakalauro-studiju-sarasas/bioinformatika
    Amanda Pakalniškytė - https://www.vu.lt/studijos/stojantiesiems/bakalauro-studiju-sarasas/duomenu-mokslas
    Andrius Mikalauskas - https://www.vu.lt/studijos/stojantiesiems/bakalauro-studiju-sarasas/informacines-technologijos
    Artūras Gečas - https://www.vu.lt/studijos/stojantiesiems/bakalauro-studiju-sarasas/informaciniu-sistemu-inzinerija
    Danielius Zavackas - https://www.vu.lt/studijos/stojantiesiems/bakalauro-studiju-sarasas/informatika
    Dovilė Brazinskė - https://www.vu.lt/studijos/stojantiesiems/bakalauro-studiju-sarasas/matematika-ir-matematikos-taikymai

  Medicinos fakultetas:
    Gytis Paulauskas - https://www.vu.lt/studijos/stojantiesiems/bakalauro-studiju-sarasas/ergoterapija
    Ivona Skliutaitė - https://www.vu.lt/studijos/stojantiesiems/bakalauro-studiju-sarasas/farmacija
    Juozas Snieška - https://www.vu.lt/studijos/stojantiesiems/bakalauro-studiju-sarasas/medicina
    Karolis Jonaitis - https://www.vu.lt/studijos/stojantiesiems/bakalauro-studiju-sarasas/odontologija
    Karolis Makselis - https://www.vu.lt/studijos/stojantiesiems/bakalauro-studiju-sarasas/slauga

  Chemijos ir geomokslų fakultetas:
    Kristina Žalandauskaitė - https://www.vu.lt/studijos/stojantiesiems/bakalauro-studiju-sarasas/biochemija
    Laura Vidmantaitė - https://www.vu.lt/studijos/stojantiesiems/bakalauro-studiju-sarasas/chemija
    Mažvydas Vaicekauskas - https://www.vu.lt/studijos/stojantiesiems/bakalauro-studiju-sarasas/meteorologija-ir-hidrologija#studiju-programos-planas
    Radoslav Kunski - https://www.vu.lt/studijos/stojantiesiems/bakalauro-studiju-sarasas/nanomedziagu-chemija

  Ekonomikos ir verslo administravimo fakultetas:
    Tatjana Sibik - https://www.vu.lt/studijos/stojantiesiems/bakalauro-studiju-sarasas/vadyba-anglu-k#studiju-programos-planas
    Titas Klikūnas - https://www.vu.lt/studijos/stojantiesiems/bakalauro-studiju-sarasas/ekonomika-ir-finansai
    Vytautas Palubinskas - https://www.vu.lt/studijos/stojantiesiems/bakalauro-studiju-sarasas/verslas-ir-teise

  Filosofijos fakultetas:
    Žilvinas Dvareckas - https://www.vu.lt/studijos/stojantiesiems/bakalauro-studiju-sarasas/filosofija
    Ema Alševskaja - https://www.vu.lt/studijos/stojantiesiems/bakalauro-studiju-sarasas/psichologija

  

*/

console.log(modules);
