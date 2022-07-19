import * as React from 'react';
import { Grid } from '@mui/material';
import { CupCard } from './components';

const CupShelfPage = () => {
  const [mugs, setMugs] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:8000/mugs')
      .then((res) => res.json())
      .then((fetchedMugs) => setMugs(fetchedMugs));
  }, []);

  return (
    <Grid container spacing={2} sx={{ py: 3, px: 2 }}>
      {mugs.map(({
        id,
        title,
        description,
        img,
        category,
      }) => (
        <Grid key={id} item xs={12} sm={6} md={4} lg={3} xl={2}>
          <CupCard
            id={id}
            title={title}
            description={description}
            img={img}
            category={category}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default CupShelfPage;
