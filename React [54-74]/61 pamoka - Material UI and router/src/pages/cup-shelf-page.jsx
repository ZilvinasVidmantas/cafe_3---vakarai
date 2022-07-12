import React, { useState, useEffect } from 'react';
import MugCard from '../components/card';
import { Grid } from '@mui/material';

const CupShelfPage = () => {
  const [mugs, setMugs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/mugs')
      .then(res => res.json())
      .then(fetchedMugs => setMugs(fetchedMugs))
  }, []);

  return (
    <>
      <Grid container spacing={2} sx={{ py: 3, px: 2 }}>
        {mugs.map(mug => (
          <Grid key={mug.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
            <MugCard {...mug} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default CupShelfPage;
