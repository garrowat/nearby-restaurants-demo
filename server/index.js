const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');


const app = express();
const PORT = 1337;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(`${__dirname}/../public`));

app.listen(PORT, () => { console.log(`listening on port ${PORT}`); });

app.get('/api/nearby', (req, res) => {
  db.findNearby(req.query.category)
    .then(nearbies => res.status(200).send(nearbies))
    .catch(err => res.status(400, err));
});
