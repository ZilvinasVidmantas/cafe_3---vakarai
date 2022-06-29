import React, { useState, useEffect } from 'react';
import CatCard from '../cat-card';
import classes from './index.module.scss';

const CatsSection = () => {
  const [cats, setCats] = useState([]);

  // Vyks tik pirmo užkrovimo metu
  useEffect(() => {
    fetch('https://cataas.com/api/cats?tags=cute&limit=12')
      .then(response => response.json())
      .then(catData => {
        const formattedCats = catData.map(({ id, tags }) => ({
          id,
          tags,
          imgSrc: `https://cataas.com/cat/${id}`
        }));

        setCats(formattedCats);
      });
  }, []);

  return (
    <section className={classes.container}>
      {cats.map(({ id, tags, imgSrc }) => <CatCard key={id} tags={tags} imgSrc={imgSrc} />)}
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