import { Box, styled } from '@mui/material';

export { default as ImageLink } from './img-link';

export const Background = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
  zIndex: 1,
  objectFit: 'cover',
});

export const ContentContainer = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
  zIndex: 2,
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
});

export const Content = styled(Box)(({ theme }) => ({
  margin: theme.spacing(8, 8, 6, 0),
  height: '80%',
  width: 650,
  color: theme.palette.common.white,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(6),
}));
