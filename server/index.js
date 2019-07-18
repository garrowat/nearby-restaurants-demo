const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');


const app = express();
const PORT = 1337;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/:carousel_id', express.static(`${__dirname}/../public`));

app.listen(PORT, () => { console.log(`listening on port ${PORT}`); });

app.get('/api/nearby/:carousel_id', (req, res) => {
  db.findCarousel(req.params.carousel_id)
    .then(carousel => res.status(200).send(carousel))
    .catch(err => res.status(400, err));
});

app.put('/api/nearby/:carousel_id', (req, res) => {
  db.addFavorite(req.params.carousel_id, req.body.restaurantId, req.body.increment)
    .then(updated => res.status(202).send(updated.carousel))
    .catch(err => res.status(400, err));
});
