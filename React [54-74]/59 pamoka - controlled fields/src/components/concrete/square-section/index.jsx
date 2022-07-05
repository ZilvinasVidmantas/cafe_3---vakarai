import React, { useState } from 'react'
import Button from '../../abstracts/button';

const SquareSection = () => {
  const [width, setWidth] = useState(50);

  // 43 pamoks - perdarymas su react
  // https://reactjs.org/docs/thinking-in-react.html
  return (
    <div>
      <h2>Keičiamas kvadratas</h2>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '50px 100px'
      }}>
        <Button onClick={() => setWidth(width + 10)}>Padidinti plotį</Button>
        <div style={{
          display: 'inline-block',
          backgroundColor: 'grey',
          width: width,
          height: 50,
        }}></div>
      </div>

    </div>
  )
}

export default SquareSection