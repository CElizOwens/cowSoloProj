const { Pool } = require('pg');

const PG_URI =
  'postgres://xnldeump:8xvsy9hWqPwBjTW5m9P4x5Yydua518YT@heffalump.db.elephantsql.com/xnldeump';

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
