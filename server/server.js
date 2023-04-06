import express from 'express';
import dataController from './dataController';

const path = require('path');
const cors = require('cors');

const app = express();

const PORT = 3000;

app.use(cors);

/**
 * handle parsing request body
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * handle requests for static files
 */

app.use(express.static(path.resolve(__dirname, '../client')));

app.get('/', dataController.getConcerts, (req, res) => {
  res.status(200).json(res.locals.concerts);
});

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
  console.log(`Server listening on port: ${PORT}...`);
});
