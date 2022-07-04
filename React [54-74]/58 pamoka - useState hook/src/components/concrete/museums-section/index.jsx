import React, { useState, useEffect } from 'react';
import Img from '../../abstracts/img';
import classes from './index.module.scss';

const fetchMuseums = (callback) => {
  fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects')
    .then(response => response.json())
    .then(data => {
      const objectIds = data.objectIDs.slice(0, 10);
      Promise.all(
        objectIds.map(id => fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`))
      )
        .then((responses) => Promise.all(responses.map(res => res.json())))
        .then(callback)
    });
}

const MuseumsSection = () => {
  const [museums, setMuseums] = useState([]); // museums -> [] PIRMO KOMPONENTO VYKDYMO METU
  const [loading, setLoading] = useState(false);  // false -> [] PIRMO KOMPONENTO VYKDYMO METU

  console.group('Persikrove MuseumsSection komponenetas');
  console.log({
    museums,
    loading,
  });
  console.groupEnd();

  useEffect(() => {
    // Šis siuntimas nebūtinai bus daromas, todėl <loading> reikšmė į true nustatoma tik prieš pat siuntimo pradėjimą.
    setLoading(true);
    fetchMuseums((fetchedMuseums) => {
      setMuseums(fetchedMuseums);
      setLoading(false);
    });
  }, []);

  return (
    <section>
      {loading ? (
        <div className={classes.loadingContainer}>
          <Img src="/loading.gif" />
        </div>
      ) : (
        <pre>
          {JSON.stringify(museums, null, 4)}
        </pre>
      )}
    </section>
  )
}

export default MuseumsSection;

// 20:40
// 20:50
// Klausimai