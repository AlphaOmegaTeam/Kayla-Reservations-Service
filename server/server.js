require('dotenv').config()
require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const db = require('../db/db.js');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/:id', (req, res) => {
  if (!req.params.id) {
    res.status(400);
    res.end();
  } else {
    res.sendFile('index.html', { root: path.resolve(__dirname, '../public') });
  }
});

app.get('/reservations/:id', (req, res) => {
  const resID = Number(req.params.id);
  db.getInfo(resID, (err, results) => {
    if(err) {
      res.status(500).send(err);
    } else {
      console.log(results.rows[0]);
      res.send(results.rows[0])
    }
  })
});

const port = 3020;

app.listen(port, () => console.log(`listening on port ${port}`));

