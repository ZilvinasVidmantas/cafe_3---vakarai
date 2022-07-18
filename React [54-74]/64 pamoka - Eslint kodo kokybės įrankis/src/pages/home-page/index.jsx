import * as React from 'react';
import { Box, Typography } from '@mui/material';
import * as Home from './components';

const HomePage = () => (
  <Box sx={{ height: '100vh', position: 'relative' }}>
    <Home.Background component="img" src="/home-cover.jpg" />

    <Home.ContentContainer>
      <Home.Content component="main">
        <Typography
          component="h1"
          variant="h2"
          sx={(theme) => ({ letterSpacing: '0.08em', color: theme.palette.primary.main })}
        >
          Tetos puodeliai
        </Typography>

        <Typography variant="h6" sx={{ textAlign: 'center' }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum tempora explicabo nostrum accusantium dolor dolores illo minus suscipit aliquam, inventore voluptate consectetur omnis labore, laboriosam accusamus! Deserunt mollitia doloribus laboriosam enim ut, numquam cumque quisquam tenetur maiores officiis autem necessitatibus magnam voluptate ipsa eveniet sequi neque in porro rem facere!
        </Typography>

        <Box sx={{ display: 'flex', gap: 3, height: 400 }}>
          <Home.ImageLink to="/pottery" src="/pottery-aunt.jpg">Žiedimas</Home.ImageLink>
          <Home.ImageLink to="/cup-shelf" src="/cup.jpg">Puodelių lentyna</Home.ImageLink>
        </Box>
      </Home.Content>
    </Home.ContentContainer>
  </Box>
);

export default HomePage;