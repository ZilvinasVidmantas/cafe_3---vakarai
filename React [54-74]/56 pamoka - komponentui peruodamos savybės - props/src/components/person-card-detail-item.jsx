import React from 'react';
import classes from './person-card-detail-item.module.scss';

const PersonCardDetailItem = ({ name, value }) => {
  return (
    <li className={classes.container}>
      <span>{name}</span>
      <span>{value}</span>
    </li>
  )
}

export default PersonCardDetailItem