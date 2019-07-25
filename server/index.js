const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');


const app = express();
const PORT = 1337;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/:carousel_id', express.static(`${__dirname}/../public`));

app.listen(PORT, () => { console.log(`listening on port ${PORT}`); });

app.post('/api/nearby/', (req, res) => {
  const newCarousel = req.body;
  db.addCarousel(newCarousel)
    .then((result) => {
      console.log(result);
    })
    .catch(err => res.status(400).json(err));
});

app.get('/api/nearby/:carousel_id', (req, res) => {
  db.findCarousel(req.params.carousel_id)
    .then((data) => {
      if (data[0].carousel.length === 0) {
        throw Error('Carousel not found');
      } else {
        res.status(200).send(data[0].carousel);
      }
    })
    .catch(err => res.status(400).json(err));
});

app.put('/api/nearby/:carousel_id', (req, res) => {
  db.addFavorite(req.params.carousel_id, req.query.restaurantId, req.query.increment)
    .then(updated => res.status(202).send(updated.carousel))
    .catch(err => res.status(400).json(err));
});

app.put('/api/nearby/:carousel_id', (req, res) => {

});

app.delete('/api/nearby/:carousel_id', (req, res) => {

});