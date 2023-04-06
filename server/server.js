const express = require('express');
const path = require('path');
// const cors = require('cors');

const dataController = require('./dataController');

const app = express();

const PORT = 3000;

// app.use(cors);
// const corsOptionDelegate = function (req, callback) => {
//   const corsOptions = {
//     origin: false,
//   };
//   callback(null, corsOptions);
// }

/**
 * handle parsing request body
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
/**
 * handle requests for static files
 */

// app.use(express.static(path.resolve(__dirname, 'client')));

app.get(
  '/getConcerts',
  (req, res, next) => {
    console.log(`\n${req.url}\n`);
    next();
  },
  dataController.getConcerts
);

app.get('/', (req, res) => res.status(200).json("It's working!!"));

// handle requests for non-existent routes
app.use((req, res) => res.status(404).send('Page not found.'));

// express error handling
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// start server
app.listen(PORT, () => {
  console.log(`BeepBoop, Server listening on port: ${PORT}...`);
});
