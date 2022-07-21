import * as React from 'react';
import { Box, Grid } from '@mui/material';
import { CupCard, Filters } from './components';

const drawerWidth = 280;

const CupShelfPage = () => {
  const [mugs, setMugs] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:8000/mugs')
      .then((res) => res.json())
      .then((fetchedMugs) => setMugs(fetchedMugs));
  }, []);

  return (
    <Box sx={{
      display: 'flex', gap: { xs: 4, xxl: 0 }, pt: 11, px: 2,
    }}
    >
      <Filters drawerWidth={drawerWidth} />
      <Grid container spacing={2} sx={{ pl: { xxl: `${drawerWidth}px` } }}>
        {mugs.map(({
          id,
          title,
          description,
          img,
          category,
        }) => (
          <Grid key={id} item xs={12} sm={6} md={4} lg={3} xl={2.4}>
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
    </Box>
  );
};

export default CupShelfPage;
