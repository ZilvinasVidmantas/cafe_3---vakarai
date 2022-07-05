import React from 'react';
import classes from './index.module.scss';

const PersonCardDetailItem = ({ name, value }) => {
  return (
    <li className={classes.item}>
      <span>{name}</span>
      <span>{value}</span>
    </li>
  )
}

export default PersonCardDetailItem;
