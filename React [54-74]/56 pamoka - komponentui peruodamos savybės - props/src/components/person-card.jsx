import React from 'react';
import Card from './card';
import Button from './button';
import Img from './img';
import classes from './person-card.module.scss';

const PersonCard = ({
  fullname,
  imgSrc,
  description,
  email,
  number
}) => {
  return (
    <Card>
      <div className={classes.card}>
        <h2 className={classes.title}>{fullname}</h2>
        <Img
          src={imgSrc}
          style={{
            width: '100%',
            height: 240,
            objectPosition: 'top'
          }}
        />
        <p className={classes.description}>{description}</p>
        <ul className={classes.details}>
          <li>
            <span>Paštas</span>
            <span>{email}</span>
          </li>
          <li>
            <span>Mob. telefonas</span>
            <span>{number}</span>
          </li>
        </ul>
        <div className={classes.btnContainer}>
          <Button>Paskambink man</Button>
          <Button color="secondary">Kai bus liūdna</Button>
        </div>
      </div>
    </Card>
  )
}

export default PersonCard;
