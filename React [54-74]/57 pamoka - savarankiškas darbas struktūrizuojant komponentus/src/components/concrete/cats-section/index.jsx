import React, { useState, useEffect } from 'react';
import CatCard from '../cat-card';
import classes from './index.module.scss';

const CatsSection = () => {
  //     cats - reikšmė naudojimui
  //           setCats - funkcija pakeisti reikšmei "cats", ko pasekoje persikrauna komponenetas
  const [cats, setCats] = useState([]);

  // Pirmu argumentu perduota anoniminė lambda išraiška, kuri vykdysis priklausomai nuo antro argumento stebimų reikšmių
  useEffect(() => {
    // Parsiunčiami duomenys darant GET užklausą nurodytu adresu
    fetch('https://cataas.com/api/cats?tags=cute&limit=12')
      // sulaukus parsiuntimo atsiųsti duomenys traktuojami kaip JSON ir verčiami į JS duomenis
      .then(response => response.json())
      // Pavykus duomenų "JSON -> JS" konversijai formuojame duomenis ir nustatome naują "cats" būsenos(state) kintamojo reikšmę
      .then(catData => {
        const formattedCats = catData.map(({ id, tags }) => ({
          id,
          tags,
          imgSrc: `https://cataas.com/cat/${id}`
        }));

        setCats(formattedCats);
      });
    // antras useEffect argumentas yra tuščias masyvas - reiškia pirmu argumentu perduota funkcija vykdysis vieną-pirmajį kartą,
  }, []);

  return (
    <section className={classes.container}>
      {cats.map(({ id, tags, imgSrc }) => <CatCard key={id} tags={tags} imgSrc={imgSrc} />)}
      {/* {cats.map(({ id, ...props}) => <CatCard key={id} {...props} />)} */}
    </section>
  )
}

export default CatsSection

/*
  Duoti kačių duomenys, sukurkite kačių grid'ą kuriame būtų atvaizduotos kačių nuotraukos, su tag'ais.

  Grid'ą pritaikykite visiems ekrano dydžiams
    xs  | 0-576px | 1 katė eilutėje
    sm  | 576px+  | 1 katė eilutėje
    md  | 768px+  | 2 katės eilutėje
    lg  | 992px+  | 3 katės eilutėje
    xl  | 1200+   | 4 katės eilutėje
    xxl | 1440+   | 6 katės eilutėje
*/