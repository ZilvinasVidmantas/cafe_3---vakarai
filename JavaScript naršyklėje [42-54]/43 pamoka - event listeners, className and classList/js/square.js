const square = document.querySelector('.js-square');
const btnChangeToRed = document.querySelector('.js-btn-change-to-red');

const changeSquareColorToRed = () => {
  square.classList.add('bg-red');
};

btnChangeToRed.addEventListener('click', changeSquareColorToRed);

/*
  Sukurkite logiką, kad paspaudus mygtuką:
    <button class="btn btn-primary">Keisti foną į mėlyną</button>
  Kvadratėlio spalva taptų mėlyna:
    * Mygtukui uždėti klasę, kurią naudosime mygtuko suradimui, ji turi prasidėti 'js-*'
    * square.js faile surasti šį mygtuką, pasitikrinti konsolėje
    * Sukurti funkciją kuri pakeis kvadratėlio spalvą į mėlyną, kuri tik spausintų tektą į konsolę
    * Uždėti ant mėlyno mygtuko kintamojo EventListener'į, ant paspaudimo ('click')
    * Implementuoji funkcijos logiką, kuri keičia kvadratėlio spalvą
    * Pa'like'int chat'e 'atlikau' žinutę
*/