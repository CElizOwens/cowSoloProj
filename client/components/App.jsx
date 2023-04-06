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

  const list = [];
  const cache = {};

  console.log('concerts: ', concerts.length)

  for (let i = 0; i < concerts.length; i++) {
    const concert = concerts[i];
    console.log("concert name: ", concert.name)
    const piece = {composer: concert.composer, title: concert.title}; 
    if (cache[concert.name]) cache[concert.name].pieces.push(piece);
    else {
      cache[concert.name] = {name: concert.name, event_date: concert.event_date, pieces: [piece]};
    };
  }

  Object.keys(cache).forEach((concert, i) => {
    console.log('--> cache[concert]: ', cache[concert]);
    const event = cache[concert];
    list.push(<Concert name={event.name} date={event.event_date} pieces={event.pieces} id={i} key={i} />)
  })

  
  
  return (
    <div>
      <h1>Concert Planner</h1>
      <div>{list}</div>
      {/* {makelist(concerts)} */}
      {/* <Concert concerts={concerts}/> */}
    </div>
  )
}

export default App;