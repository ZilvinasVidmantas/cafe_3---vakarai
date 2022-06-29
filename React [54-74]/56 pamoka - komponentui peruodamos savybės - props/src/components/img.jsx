import React from 'react';
import classes from './img.module.scss';

const Img = ({ src, alt, style }) => {
  return (
    <img
      className={classes.img}
      style={style}
      src={src}
      alt={alt ?? ''}
    />
  )
}

export default Img