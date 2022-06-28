import React from 'react';
import Card from './card';
import Button from './button';
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
        <img src={imgSrc} className={classes.img} alt="" />
        <div>
          <Button>Tekstas viduje mygtuko</Button>
          <Button>Click</Button>
        </div>
      </div>
    </Card>
  )
}

export default PersonCard;

/*
  Panaudoti:
    * description
    * email
    * number

  Iškelti į atskirą komponentą nuotrauką - <Img />
*/