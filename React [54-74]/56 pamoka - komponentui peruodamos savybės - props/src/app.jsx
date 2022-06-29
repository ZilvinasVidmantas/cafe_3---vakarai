import React from 'react';
import CatsSection from './components/concrete/cats-section';
import PersonSection from './components/concrete/person-section';

function App() {

  return (
    <>
      <PersonSection />
      <CatsSection />
    </>
  );
}

export default App;


/*
  Sudėti visus komponenetus į atskirus aplankus pagal komponento pavadinimą,
    * pagrindinį komponento failą pavadinti index.jsx
    * pagrindinį stiliaus failą pavadinti index.module.scss

  NEPAMIRŠTI:
    * Pakeisti stiliaus failo kelio keičiamam komponente
    * Patikrinti ar po restrūkturizavimo yra teisingi keliai iki komponento kituose failuose
*/