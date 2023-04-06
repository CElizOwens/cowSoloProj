import React, { useState, useEffect } from 'react';
import '../styles/reset.css';
import '../styles/App.css';
import Concert from './Concert.jsx';

const App = () => {
  const [concerts, setConcerts] = useState('');

  // const list = concerts.map(concert => {
  //   return <Concert concert={concert} />
  // })

  // last step in completing the full connection between frontend, server and database
  useEffect (() => {
    fetch('/')
    .then(res => res.json())
    .then(data => console.log('--> data: ', data))
    .then(concertsData => setConcerts(concertsData))
    .catch(err => console.log('App.jsx: Error while fetching concerts.'));
  }, [concerts]);

  // const makelist = (concerts) => {
  //   return concerts.map(concert => <Concert concert={concert} />)
  // }

  return (
    <div>
      <h1>Concert Planner</h1>
      {/* {makelist(concerts)} */}
      {/* <Concert concerts={concerts}/> */}
    </div>
  )
}

export default App;