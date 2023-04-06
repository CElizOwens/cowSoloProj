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
    async function getData() {
      try {
      const res = await fetch('http://localhost:3000/getConcerts', {
        method: 'GET',
        headers: {
          accept: 'application/json',
        },
        // mode: "no-cors"
      });
      // console.log(res);
      const data = await res.json();
      console.log(data);
      setConcerts(data);
      } catch(err) {
        console.log(`Error after fetch: ${err}`);
      }
      // fetch('/getConcerts', {
      // headers : {
      //   'Content-Type' : 'application/json'
      // },
      // method : "GET"
      // })
      // .then(res => console.log(res))
      // // .then(res => res.json())
      // // .then(data => console.log('--> data: ', data))
      // // .then(concertsData => setConcerts(concertsData))
      // .catch(err => console.log('App.jsx: Error while fetching concerts.'));
    }
    getData();
    
  }
  , []);

  // const makelist = (concerts) => {
  //   return concerts.map(concert => <Concert concert={concert} />)
  // }

  return (
    <div>
      <h1>Concert Planner</h1>
      {concerts}
      {/* {makelist(concerts)} */}
      {/* <Concert concerts={concerts}/> */}
    </div>
  )
}

export default App;