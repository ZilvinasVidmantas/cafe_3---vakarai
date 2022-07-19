import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import { Image } from '../../../components';

const ImageLink = ({ to, src, children }) => (
  <Link to={to} style={{ textDecoration: 'none' }}>
    <Typography
      variant="h4"
      sx={(theme) => ({ textAlign: 'center', color: theme.palette.primary.main })}
    >
      {children}
    </Typography>
    <Image src={src} />
  </Link>
);

export default ImageLink;
