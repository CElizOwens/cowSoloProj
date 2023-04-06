const db = require('./dataModel');

const dataController = {};

const baseError = {
  status: 500,
  message: { err: 'An error occurred' },
};

dataController.getConcerts = (req, res, next) => {
  console.log('--> Inside dataController.getConcerts...');
  const sql = `
    SELECT
      c.name, c.event_date, p.composer, p.title
    FROM
      concert c
    JOIN
      concert_piece cp ON (c.concert_id = cp.concert_id)
    JOIN
      piece p ON (cp.piece_id = p.piece_id);`;

  db.query(sql)
    .then((result) => {
      res.locals.concerts = result.rows;
      res.status(200).json(res.locals.concerts);
    })
    .catch((err) => {
      baseError.log = `dataController.js: ${err}`;
      baseError.message.err = 'Could not retrieve concerts.';
      return next(baseError);
    });
};

module.exports = dataController;
