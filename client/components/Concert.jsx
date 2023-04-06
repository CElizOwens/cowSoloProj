import React from 'react';

import Piece from './Piece.jsx';

const Concert = ({name, date, pieces, id}) => {
  // console.log('Concert props: ', props)
  console.log('name, date, pieces: ', name, date, pieces);
  const piecesJSX = [];
  for (let i = 0; i < pieces.length; i++) {
    piecesJSX.push(<p><Piece className='piece' composer={pieces[i].composer} title={pieces[i].title} key={id * 1000} /></p>)
  }

  const splitDate = date.split("T")[0];

  return (
    <div className="concert">
      <h2>Concert: {name}</h2>
      <p>Proposed date: {splitDate}</p>
      <h3>Pieces</h3>
      {piecesJSX}
    </div>
  );
}

export default Concert;