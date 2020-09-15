require('dotenv').config()
const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT
});

pool.connect((err, client, release) => {
  if(err) console.log('could not connect to postgres: ', err)
  else console.log(':) connected to postgres')
});

  const getInfo = ((id, callback) => {
    const query = {
      text: `SELECT * FROM open_table WHERE listingId = ($1)`,
      values: [id]
    }
    pool.query(query)
      .then((res) => callback(null, res))
      .catch((err) => callback(err))
    })


module.exports = {
  pool,
  getInfo
}
