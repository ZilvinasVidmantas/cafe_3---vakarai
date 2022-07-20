import * as React from 'react';
import {
  Box, Drawer, Grid, Typography, Divider, Button, useMediaQuery,
} from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';
import { CupCard } from './components';

const drawerWidth = 280;

const CupShelfPage = () => {
  const [mugs, setMugs] = React.useState([]);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const isExtraLarge = useMediaQuery((theme) => theme.breakpoints.up('xxl'));

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
      <Button
        size="large"
        color="primary"
        variant="contained"
        sx={{
          position: 'fixed',
          bottom: 15,
          right: 15,
          zIndex: 5000,
          height: 64,
          width: 64,
          borderRadius: '50%',
          display: { xxl: 'none' },
        }}
        onClick={() => setDrawerOpen(!drawerOpen)}
      >
        <TuneIcon sx={{ color: 'common.white', fontSize: '2rem' }} />
      </Button>
      <Drawer
        anchor="left"
        variant={isExtraLarge ? 'persistent' : 'temporary'}
        open={isExtraLarge || drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box sx={(theme) => ({ width: drawerWidth, p: 2, ...theme.mixins.toolbarOffset })}>
          <Typography variant="h4">Filtrai</Typography>
          <Divider />
        </Box>
      </Drawer>
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

// 19:10
