import * as React from 'react';
import {
  Box,
  styled,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

const Background = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
  order: 1,
  objectFit: 'cover'
});

const ContentContainer = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
  order: 2,
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
});

const Content = styled(Box)(({ theme }) => ({
  margin: theme.spacing(8, 8, 6, 0),
  height: '80%',
  width: 650,
  color: theme.palette.common.white,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(6)
}));

const Image = styled('img')({
  objectFit: 'cover',
  objectPosition: 'center',
  height: '100%',
  width: '100%',
});

const HomePage = () => (
  <Box sx={{ height: '100vh', position: 'relative' }}>
    <Background component="img" src="/home-cover.jpg" />
    <ContentContainer>
      <Content component="main">
        <Typography
          variant="h2"
          component="h1"
          sx={{ letterSpacing: '0.08em', color: '#d99f2b' }}
        >Tetos puodeliai</Typography>
        <Typography variant="h6" sx={{ textAlign: 'center' }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum tempora explicabo nostrum accusantium dolor dolores illo minus suscipit aliquam, inventore voluptate consectetur omnis labore, laboriosam accusamus! Deserunt mollitia doloribus laboriosam enim ut, numquam cumque quisquam tenetur maiores officiis autem necessitatibus magnam voluptate ipsa eveniet sequi neque in porro rem facere!
        </Typography>
        <Box sx={{ display: 'flex', gap: 3, height: 400 }}>
          <Link to="/pottery" style={{ textDecoration: 'none' }}>
            <Typography
              className="title"
              variant="h4"
              sx={{ color: '#d99f2b', textAlign: 'center' }}
            >Žiedimas</Typography>
            <Image className="image" src="/pottery-aunt.jpg" />
          </Link>
          <Link to="/cup-shelf" style={{ textDecoration: 'none' }}>
            <Typography
              className="title"
              variant="h4"
              sx={{ color: '#d99f2b', textAlign: 'center' }}
            >Puodelių lentyna</Typography>
            <Image className="image" src="/cup.jpg" />
          </Link>
        </Box>
      </Content>
    </ContentContainer>
  </Box>
);

export default HomePage;