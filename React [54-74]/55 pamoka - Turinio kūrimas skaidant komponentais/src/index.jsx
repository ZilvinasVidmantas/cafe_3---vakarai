import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import './styles/main.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  /* 
    Kviečia aplikaciją 2 kartus, 1 pateikdamas jums, kitą pasilikdamas savo vidinei logikai.
    Tuomet, kiekvieno aplikacijos ciklo metu, lygina jūsų aplikacijos su menama aplikacija versijas
    ieškodamas nekorektiškų ir prie kladų vedančių atvejų. Suradęs tokius atvejus, praneša apie
    klaidas konsolėje, arba grubių klaidų atveju nutraukią jūsų aplikaciją.
   */
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
