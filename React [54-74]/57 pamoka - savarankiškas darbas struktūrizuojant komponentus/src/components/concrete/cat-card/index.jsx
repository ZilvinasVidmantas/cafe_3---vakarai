import React from 'react';
import Img from '../../abstracts/img';
import Card from '../../abstracts/card';
import classes from './index.module.scss';

const CatCard = ({ tags, imgSrc }) => {
  return (
    <Card>
      <div className={classes.imgContainer}>
        <Img
          src={imgSrc}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        />
      </div>
      <div className={classes.tagContainer}>
        {tags.map((tag) => <div key={tag} className={classes.chip}>{tag}</div>)}
      </div>
    </Card>
  )
}

export default CatCard;