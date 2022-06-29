import React from 'react';

import Card from '../abstracts/card';
import Button from '../abstracts/button';
import Img from '../abstracts/img';
import PersonCardDetailItem from './person-card-detail-item';

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
          <PersonCardDetailItem name="Paštas" value={email} />
          <PersonCardDetailItem name="Mob. telefonas" value={number} />
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
