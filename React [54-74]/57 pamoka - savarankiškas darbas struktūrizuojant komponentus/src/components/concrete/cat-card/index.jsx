import React from 'react'

const CatCard = ({ tags, imgSrc }) => {
  return (
    <div>
      <div>{tags.join(', ')}</div>
      <div>{imgSrc}</div>
    </div>
  )
}

export default CatCard