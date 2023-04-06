import React from 'react';

const Piece = ({composer, title}) => {
  return (
    <>
      <h4>{composer}</h4>
      <p>{title}</p>
    </>
  )
}

export default Piece;