import React from 'react'
import classes from './index.module.scss';

const Card = (props) => {
  return (
    <div className={classes.card}>{props.children}</div>
  )
}

export default Card