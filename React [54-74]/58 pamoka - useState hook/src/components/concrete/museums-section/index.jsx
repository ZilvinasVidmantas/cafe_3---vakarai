import React, { useState, useEffect } from 'react';

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
  const [museums, setMuseums] = useState([]);

  useEffect(() => fetchMuseums(setMuseums), []);

  return (
    <section>
      <pre>
        {JSON.stringify(museums, null, 4)}
      </pre>

    </section>
  )
}

export default MuseumsSection;
